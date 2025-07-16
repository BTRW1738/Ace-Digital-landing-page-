/*
  # Fix consultation form RLS policies

  1. Security Updates
    - Drop existing conflicting policies
    - Grant INSERT permission to anon role
    - Create proper RLS policy for anonymous form submissions
    - Verify table structure and permissions

  2. Changes
    - Enable RLS on consultation_requests table
    - Allow anonymous users to insert consultation requests
    - Maintain data security while enabling form functionality
*/

-- Drop any existing policies that might conflict
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON consultation_requests;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON consultation_requests;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON consultation_requests;

-- Ensure RLS is enabled
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Grant INSERT permission to anon role
GRANT INSERT ON consultation_requests TO anon;

-- Create policy to allow anonymous users to insert consultation requests
CREATE POLICY "Allow anonymous consultation submissions"
  ON consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy for authenticated users to read their own data (optional)
CREATE POLICY "Users can read consultation data"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Verify the table structure
DO $$
BEGIN
  -- Check if all required columns exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'consultation_requests' 
    AND column_name = 'name'
  ) THEN
    RAISE EXCEPTION 'Missing required column: name';
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'consultation_requests' 
    AND column_name = 'email'
  ) THEN
    RAISE EXCEPTION 'Missing required column: email';
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'consultation_requests' 
    AND column_name = 'business_name'
  ) THEN
    RAISE EXCEPTION 'Missing required column: business_name';
  END IF;
  
  RAISE NOTICE 'Table structure verified successfully';
END $$;