/*
  # Fix Anonymous User INSERT Permission

  ## Problem
  The `anon` role lacks basic INSERT permission on the consultation_requests table.
  Even with RLS policies in place, the role needs underlying table permissions.

  ## Solution
  1. Grant INSERT permission to anon role
  2. Verify the permission is granted
  3. Test with a sample insert

  ## Expected Result
  Anonymous users will be able to submit consultation forms successfully.
*/

-- Grant INSERT permission to anon role
GRANT INSERT ON consultation_requests TO anon;

-- Verify the permission was granted
SELECT 
  grantee,
  privilege_type,
  is_grantable
FROM information_schema.role_table_grants 
WHERE table_name = 'consultation_requests' 
AND grantee = 'anon';

-- Test insert as anon user (this should work now)
SET ROLE anon;
INSERT INTO consultation_requests (
  name, 
  email, 
  business_name, 
  use_case, 
  selected_service
) VALUES (
  'Test User', 
  'test@example.com', 
  'Test Company', 
  'Testing form submission', 
  'A.I agent'
);

-- Reset role
RESET ROLE;

-- Verify the test record was inserted
SELECT COUNT(*) as total_records FROM consultation_requests;

-- Clean up test record (optional)
DELETE FROM consultation_requests WHERE email = 'test@example.com';

SELECT 'SUCCESS: Anonymous INSERT permission granted and tested!' as result;