/*
  # Create consultation requests table

  1. New Tables
    - `consultation_requests`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `business_name` (text, required)
      - `use_case` (text, required)
      - `selected_service` (text, default 'Unsure')
      - `additional_info` (text, optional)
      - `status` (text, default 'pending')
      - `created_at` (timestamp, auto-generated)

  2. Security
    - Enable RLS on `consultation_requests` table
    - Add policy for anonymous users to insert consultation requests
    - Add policy for authenticated users to read consultation requests
*/

CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business_name text NOT NULL,
  use_case text NOT NULL,
  selected_service text NOT NULL DEFAULT 'Unsure',
  additional_info text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous consultation requests"
  ON consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read consultation requests"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);