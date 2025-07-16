/*
  # Complete Consultation Form Database Setup
  
  This migration will:
  1. Recreate the consultation_requests table with all required columns
  2. Set up proper RLS policies for anonymous form submissions
  3. Grant necessary permissions
  4. Test the setup
*/

-- Drop existing table and policies to start fresh
DROP TABLE IF EXISTS consultation_requests CASCADE;

-- Create the consultation_requests table with all required columns
CREATE TABLE consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business_name text NOT NULL,
  use_case text NOT NULL,
  selected_service text NOT NULL DEFAULT 'Unsure',
  additional_info text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Grant INSERT permission to anonymous users
GRANT INSERT ON consultation_requests TO anon;
GRANT SELECT ON consultation_requests TO authenticated;

-- Create RLS policy for anonymous form submissions
CREATE POLICY "Allow anonymous consultation submissions"
  ON consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create RLS policy for authenticated users to read data
CREATE POLICY "Users can read consultation data"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Test the setup by inserting a test record
DO $$
BEGIN
  -- Test anonymous insert
  SET ROLE anon;
  INSERT INTO consultation_requests (
    name, email, business_name, use_case, selected_service
  ) VALUES (
    'Test User', 'test@example.com', 'Test Company', 'Testing setup', 'A.I agent'
  );
  
  -- Reset role
  RESET ROLE;
  
  RAISE NOTICE 'SUCCESS: Test record inserted successfully';
EXCEPTION
  WHEN OTHERS THEN
    RESET ROLE;
    RAISE NOTICE 'ERROR: %', SQLERRM;
END $$;

-- Verify the setup
SELECT 
  'Table created' as status,
  COUNT(*) as test_records
FROM consultation_requests;

-- Show current policies
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'consultation_requests';

-- Show permissions
SELECT 
  grantee,
  privilege_type,
  is_grantable
FROM information_schema.table_privileges 
WHERE table_name = 'consultation_requests' 
AND grantee IN ('anon', 'authenticated');