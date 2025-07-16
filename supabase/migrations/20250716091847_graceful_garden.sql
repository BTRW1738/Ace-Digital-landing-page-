-- Debug and fix consultation form Supabase integration
-- This migration addresses RLS policy issues preventing form submissions

-- Step 1: Check current table structure and policies
SELECT 
    schemaname,
    tablename,
    rowsecurity 
FROM pg_tables 
WHERE tablename = 'consultation_requests';

-- Step 2: Check existing policies
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

-- Step 3: Drop all existing policies to start fresh
DROP POLICY IF EXISTS "Anyone can submit consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Authenticated users can read consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Authenticated users can submit consultation requests" ON consultation_requests;

-- Step 4: Ensure RLS is enabled
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Step 5: Grant necessary permissions to anon role
GRANT INSERT ON consultation_requests TO anon;
GRANT SELECT ON consultation_requests TO authenticated;

-- Step 6: Create comprehensive policies
-- Allow anonymous users to insert consultation requests
CREATE POLICY "Allow anonymous consultation submissions"
ON consultation_requests
FOR INSERT
TO anon
WITH CHECK (true);

-- Allow authenticated users to read all consultation requests
CREATE POLICY "Allow authenticated users to read consultations"
ON consultation_requests
FOR SELECT
TO authenticated
USING (true);

-- Step 7: Verify the setup
-- Check if policies are correctly applied
SELECT 
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'consultation_requests';

-- Check table permissions
SELECT 
    grantee,
    privilege_type
FROM information_schema.role_table_grants 
WHERE table_name = 'consultation_requests';