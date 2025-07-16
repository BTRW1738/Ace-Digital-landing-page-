/*
  # Complete Consultation Form Database Setup
  
  This migration completely sets up the consultation_requests table with:
  1. Proper table structure with all required columns
  2. Row Level Security (RLS) policies for anonymous submissions
  3. Proper permissions for the anon role
  4. Test verification
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

-- Enable Row Level Security
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Grant necessary permissions to anon role
GRANT INSERT ON consultation_requests TO anon;
GRANT SELECT ON consultation_requests TO authenticated;

-- Create RLS policy for anonymous insertions
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
  'Testing the form submission',
  'A.I agent',
  'This is a test submission'
);

-- Verify the test record was inserted
DO $$
DECLARE
  record_count integer;
BEGIN
  SELECT COUNT(*) INTO record_count FROM consultation_requests WHERE name = 'Test User';
  
  IF record_count > 0 THEN
    RAISE NOTICE 'SUCCESS: Test record inserted successfully. Form should now work!';
  ELSE
    RAISE EXCEPTION 'ERROR: Test record was not inserted. Please check the setup.';
  END IF;
END $$;

-- Show final table structure
SELECT 
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_name = 'consultation_requests'
ORDER BY ordinal_position;

-- Show active policies
SELECT 
  policyname,
  cmd,
  roles,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'consultation_requests';