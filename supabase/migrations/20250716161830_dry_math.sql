/*
# Fix Anonymous Form Submissions

This migration fixes the RLS policy violation by properly configuring permissions
for anonymous users to submit consultation requests.

## Changes:
1. Drop existing policies that may be blocking anonymous access
2. Grant proper INSERT permissions to anon role
3. Create correct RLS policies for anonymous submissions
4. Test the configuration
*/

-- First, drop all existing policies for consultation_requests
DROP POLICY IF EXISTS "Allow anonymous consultation submissions" ON consultation_requests;
DROP POLICY IF EXISTS "Users can read consultation data" ON consultation_requests;

-- Ensure the anon role has the necessary permissions
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON consultation_requests TO anon;
GRANT SELECT ON consultation_requests TO authenticated;

-- Create a simple, permissive policy for anonymous insertions
CREATE POLICY "Enable anonymous inserts for consultation_requests"
  ON consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy for authenticated users to read data
CREATE POLICY "Enable read access for authenticated users"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Verify the table has RLS enabled
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Test the setup by attempting an insert as anon
DO $$
DECLARE
  test_id uuid;
BEGIN
  -- Set role to anon to test the policy
  SET LOCAL role = anon;
  
  -- Attempt to insert a test record
  INSERT INTO consultation_requests (
    name, 
    email, 
    business_name, 
    use_case, 
    selected_service,
    additional_info
  ) VALUES (
    'Test User',
    'test@example.com',
    'Test Company',
    'Testing RLS policies',
    'A.I agent',
    'This is a test submission'
  ) RETURNING id INTO test_id;
  
  RAISE NOTICE 'SUCCESS: Anonymous insert worked! Record ID: %', test_id;
  
  -- Clean up the test record
  RESET role;
  DELETE FROM consultation_requests WHERE id = test_id;
  
EXCEPTION WHEN OTHERS THEN
  RESET role;
  RAISE NOTICE 'ERROR: Anonymous insert failed: %', SQLERRM;
END $$;

-- Show current policies for verification
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd
FROM pg_policies 
WHERE tablename = 'consultation_requests'
ORDER BY cmd, policyname;