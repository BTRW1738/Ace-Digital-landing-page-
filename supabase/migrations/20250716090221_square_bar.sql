/*
  # Add service selection and additional information fields

  1. Table Updates
    - Add `selected_service` column to consultation_requests table
    - Add `additional_info` column to consultation_requests table

  2. Notes
    - selected_service is required (NOT NULL with default)
    - additional_info is optional (can be NULL)
    - Both fields are text type to accommodate the dropdown values and text area content
*/

-- Add selected_service column (required field)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'consultation_requests' AND column_name = 'selected_service'
  ) THEN
    ALTER TABLE consultation_requests ADD COLUMN selected_service text NOT NULL DEFAULT 'Unsure';
  END IF;
END $$;

-- Add additional_info column (optional field)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'consultation_requests' AND column_name = 'additional_info'
  ) THEN
    ALTER TABLE consultation_requests ADD COLUMN additional_info text;
  END IF;
END $$;