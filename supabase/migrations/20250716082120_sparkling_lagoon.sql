/*
  # Create consultation requests table

  1. New Tables
    - `consultation_requests`
      - `id` (uuid, primary key)
      - `name` (text, required) - Full name of the person requesting consultation
      - `email` (text, required) - Email address for contact
      - `business_name` (text, required) - Name of their business
      - `use_case` (text, required) - Their biggest challenge with lead generation
      - `created_at` (timestamp) - When the request was submitted
      - `status` (text, default 'pending') - Status of the consultation request

  2. Security
    - Enable RLS on `consultation_requests` table
    - Add policy for inserting consultation requests (public access for form submissions)
    - Add policy for reading consultation requests (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business_name text NOT NULL,
  use_case text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert consultation requests (for the public form)
CREATE POLICY "Anyone can submit consultation requests"
  ON consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read consultation requests (for admin access)
CREATE POLICY "Authenticated users can read consultation requests"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);