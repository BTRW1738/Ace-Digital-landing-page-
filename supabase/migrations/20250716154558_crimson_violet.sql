/*
  # Fix consultation form RLS policies

  1. Security Changes
    - Drop existing restrictive policies
    - Create policy allowing anonymous users to INSERT
    - Keep RLS enabled for security
    
  2. Verification
    - Test anonymous INSERT permissions
    - Ensure form submissions work
*/

-- Drop any existing policies that might block anonymous inserts
DROP POLICY IF EXISTS "allow_anon_insert" ON consultation_requests;
DROP POLICY IF EXISTS "allow_auth_select" ON consultation_requests;

-- Ensure RLS is enabled
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous users to insert consultation requests
CREATE POLICY "Enable insert for anonymous users" ON consultation_requests
    FOR INSERT 
    TO anon 
    WITH CHECK (true);

-- Create policy to allow authenticated users to read all requests (for admin)
CREATE POLICY "Enable read for authenticated users" ON consultation_requests
    FOR SELECT 
    TO authenticated 
    USING (true);

-- Grant necessary permissions to anon role
GRANT INSERT ON consultation_requests TO anon;
GRANT USAGE ON SCHEMA public TO anon;