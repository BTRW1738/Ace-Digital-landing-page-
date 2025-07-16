/*
  # Add Missing Columns to consultation_requests Table

  1. Problem Identified
    - Table exists but missing required columns: name, email, business_name, selected_service, additional_info
    - Form cannot insert data because columns don't exist

  2. Solution
    - Add all missing columns with proper types and constraints
    - Ensure RLS policies work with new structure
*/

-- Add missing columns to consultation_requests table
ALTER TABLE consultation_requests 
ADD COLUMN IF NOT EXISTS name text NOT NULL DEFAULT '',
ADD COLUMN IF NOT EXISTS email text NOT NULL DEFAULT '',
ADD COLUMN IF NOT EXISTS business_name text NOT NULL DEFAULT '',
ADD COLUMN IF NOT EXISTS selected_service text NOT NULL DEFAULT 'Unsure',
ADD COLUMN IF NOT EXISTS additional_info text;

-- Update the existing RLS policy to ensure it works with new columns
DROP POLICY IF EXISTS "Allow anonymous consultation submissions" ON consultation_requests;

CREATE POLICY "Allow anonymous consultation submissions"
ON consultation_requests
FOR INSERT
TO anon
WITH CHECK (true);

-- Verify the table structure
SELECT column_name, data_type, is_nullable, column_default 
FROM information_schema.columns 
WHERE table_name = 'consultation_requests' 
ORDER BY ordinal_position;