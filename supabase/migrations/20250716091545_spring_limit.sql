/*
  # Fix RLS policy for anonymous consultation requests

  1. Security Changes
    - Grant INSERT permission to anonymous (anon) role
    - Ensure RLS policy allows anonymous users to insert consultation requests
    - Maintain security while allowing public form submissions

  2. Changes
    - Grant INSERT privilege to anon role on consultation_requests table
    - Update or create RLS policy to explicitly allow anonymous inserts
*/

-- Grant INSERT permission to anonymous users
GRANT INSERT ON consultation_requests TO anon;

-- Ensure the RLS policy allows anonymous users to insert
DROP POLICY IF EXISTS "Anyone can submit consultation requests" ON consultation_requests;

CREATE POLICY "Anyone can submit consultation requests"
  ON consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Also ensure authenticated users can still insert
CREATE POLICY "Authenticated users can submit consultation requests"
  ON consultation_requests
  FOR INSERT
  TO authenticated
  WITH CHECK (true);