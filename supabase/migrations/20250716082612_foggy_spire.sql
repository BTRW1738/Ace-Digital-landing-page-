/*
  # Fix RLS policy for consultation requests

  1. Security Updates
    - Update RLS policy to allow anonymous users to insert consultation requests
    - Maintain read restrictions for authenticated users only
    - Ensure proper permissions for form submissions

  This fixes the "new row violates row-level security policy" error by allowing
  anonymous users to submit consultation requests through the contact form.
*/

-- Drop the existing restrictive policy
DROP POLICY IF EXISTS "Anyone can submit consultation requests" ON consultation_requests;

-- Create a new policy that explicitly allows anonymous users to insert
CREATE POLICY "Allow anonymous consultation submissions"
  ON consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Ensure authenticated users can still read the data
CREATE POLICY IF NOT EXISTS "Authenticated users can read consultation requests"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);