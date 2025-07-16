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
      - `created_at` (timestamp with timezone)

  2. Security
    - Enable RLS on `consultation_requests` table
    - Add policy for anonymous users to insert consultation requests
    - Add policy for authenticated users to read consultation requests
*/

-- Create the consultation_requests table
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

-- Enable Row Level Security
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to insert consultation requests
CREATE POLICY "Allow anonymous consultation requests"
  ON consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow authenticated users to read consultation requests
CREATE POLICY "Authenticated users can read consultation requests"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_consultation_requests_created_at 
  ON consultation_requests(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_consultation_requests_status 
  ON consultation_requests(status);