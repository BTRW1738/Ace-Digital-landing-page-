/*
  # Fix RLS policy for consultation_requests table

  1. Security Changes
    - Drop existing policies that may be conflicting
    - Grant proper permissions to anon role
    - Create new comprehensive INSERT policy for anonymous users
    - Ensure RLS is properly enabled

  2. Permissions
    - Grant INSERT permission to anon role
    - Allow anonymous users to submit consultation requests
*/

-- Grant INSERT permission to anonymous users
GRANT INSERT ON consultation_requests TO anon;

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Anyone can submit consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Authenticated users can submit consultation requests" ON consultation_requests;

-- Ensure RLS is enabled
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Create a comprehensive INSERT policy for anonymous users
CREATE POLICY "Allow anonymous consultation requests"
  ON consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Keep the existing SELECT policy for authenticated users
-- (This should already exist but we'll ensure it's there)
CREATE POLICY "Authenticated users can read consultation requests" 
  ON consultation_requests 
  FOR SELECT 
  TO authenticated 
  USING (true);