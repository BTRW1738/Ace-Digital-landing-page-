/*
  # Fix consultation requests table permissions

  1. Permissions
    - Grant INSERT permission to anon role on consultation_requests table
    - This allows anonymous users to submit consultation requests through the public form

  2. Notes
    - This fixes the RLS policy violation error
    - The existing RLS policy will still control access, but now anon users have the base permission to insert
*/

-- Grant INSERT permission to anonymous users for consultation requests
GRANT INSERT ON consultation_requests TO anon;