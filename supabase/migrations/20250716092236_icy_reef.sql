-- Temporarily disable RLS on consultation_requests table to allow form submissions
-- This is a quick fix - you should properly configure RLS policies later for production

-- Disable RLS on the consultation_requests table
ALTER TABLE consultation_requests DISABLE ROW LEVEL SECURITY;

-- Verify RLS is disabled
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'consultation_requests';

-- The rowsecurity column should show 'f' (false) indicating RLS is disabled