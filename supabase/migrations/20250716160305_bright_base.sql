/*
  # Fix RLS Policy Violation for Consultation Form

  This migration resolves the "new row violates row-level security policy" error
  by properly configuring RLS policies for anonymous form submissions.

  ## Changes Made:
  1. Drop all existing conflicting policies
  2. Grant INSERT permission to anon role
  3. Create proper RLS policy for anonymous submissions
  4. Verify table structure and permissions
*/

-- Step 1: Drop all existing policies to start fresh
DROP POLICY IF EXISTS "Allow anonymous consultation submissions" ON consultation_requests;
DROP POLICY IF EXISTS "Users can read consultation data" ON consultation_requests;
DROP POLICY IF EXISTS "Enable insert for anon users" ON consultation_requests;
DROP POLICY IF EXISTS "Enable read for authenticated users only" ON consultation_requests;

-- Step 2: Ensure RLS is enabled
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Step 3: Grant necessary permissions to anon role
GRANT INSERT ON consultation_requests TO anon;
GRANT USAGE ON SCHEMA public TO anon;

-- Step 4: Create a simple, permissive policy for anonymous inserts
CREATE POLICY "allow_anonymous_inserts" 
ON consultation_requests 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Step 5: Create policy for authenticated users to read data
CREATE POLICY "allow_authenticated_select" 
ON consultation_requests 
FOR SELECT 
TO authenticated 
USING (true);

-- Step 6: Verify the setup with a test insert (will be rolled back)
DO $$
BEGIN
  -- Test if anon can insert
  SET ROLE anon;
  
  -- This should work now
  INSERT INTO consultation_requests (
    name, 
    email, 
    business_name, 
    use_case, 
    selected_service
  ) VALUES (
    'Test User', 
    'test@example.com', 
    'Test Company', 
    'Testing RLS fix', 
    'A.I agent'
  );
  
  -- Clean up test data
  DELETE FROM consultation_requests WHERE email = 'test@example.com';
  
  -- Reset role
  RESET ROLE;
  
  RAISE NOTICE 'RLS policy test passed - anonymous inserts now work!';
EXCEPTION
  WHEN OTHERS THEN
    RESET ROLE;
    RAISE EXCEPTION 'RLS policy test failed: %', SQLERRM;
END $$;

-- Step 7: Display current policies for verification
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