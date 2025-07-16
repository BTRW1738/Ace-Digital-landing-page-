/*
  # Final RLS Policy Fix for Consultation Requests

  This migration completely resolves the RLS policy violation by:
  1. Disabling RLS temporarily to clean up
  2. Dropping all existing policies
  3. Granting proper permissions to anon role
  4. Creating a simple, working INSERT policy
  5. Re-enabling RLS with correct configuration

  This should definitively fix the "new row violates row-level security policy" error.
*/

-- Step 1: Temporarily disable RLS to clean up
ALTER TABLE consultation_requests DISABLE ROW LEVEL SECURITY;

-- Step 2: Drop all existing policies that might be conflicting
DROP POLICY IF EXISTS "Allow anonymous consultation submissions" ON consultation_requests;
DROP POLICY IF EXISTS "Allow authenticated users to read consultations" ON consultation_requests;
DROP POLICY IF EXISTS "Enable insert for anon users" ON consultation_requests;
DROP POLICY IF EXISTS "Users can read own data" ON consultation_requests;

-- Step 3: Grant INSERT permission to anon role explicitly
GRANT INSERT ON consultation_requests TO anon;
GRANT SELECT ON consultation_requests TO authenticated;

-- Step 4: Re-enable RLS
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Step 5: Create a simple, permissive INSERT policy for anonymous users
CREATE POLICY "allow_anon_insert" ON consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Step 6: Create a SELECT policy for authenticated users
CREATE POLICY "allow_auth_select" ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Step 7: Verify the setup
DO $$
BEGIN
  -- Check if policies exist
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'consultation_requests' 
    AND policyname = 'allow_anon_insert'
  ) THEN
    RAISE NOTICE 'SUCCESS: Anonymous INSERT policy created';
  ELSE
    RAISE EXCEPTION 'FAILED: Anonymous INSERT policy not found';
  END IF;

  -- Check if RLS is enabled
  IF EXISTS (
    SELECT 1 FROM pg_class 
    WHERE relname = 'consultation_requests' 
    AND relrowsecurity = true
  ) THEN
    RAISE NOTICE 'SUCCESS: RLS is enabled on consultation_requests';
  ELSE
    RAISE EXCEPTION 'FAILED: RLS is not enabled';
  END IF;
END $$;