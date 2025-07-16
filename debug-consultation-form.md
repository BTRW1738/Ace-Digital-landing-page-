# Consultation Form Debug Guide

## Root Cause Analysis

The consultation form is failing due to **Row Level Security (RLS) policy violations** in Supabase. The specific issues identified:

1. **Missing or incorrect RLS policies** for anonymous users
2. **Insufficient permissions** for the `anon` role to INSERT data
3. **Conflicting policies** that may block legitimate submissions

## Complete Solution

### 1. Database Fix (Run this SQL in Supabase Dashboard)

```sql
-- Run the migration: debug_consultation_form_fix.sql
-- This will:
-- ✅ Drop conflicting policies
-- ✅ Grant INSERT permission to anon role
-- ✅ Create proper RLS policies
-- ✅ Verify the setup
```

### 2. Enhanced Error Handling & Debugging

The updated code includes:
- **Comprehensive console logging** for debugging
- **Better error messages** with full error details
- **Supabase connection testing** on initialization
- **Form validation feedback**

## Testing Instructions

### Step 1: Apply Database Fix
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Navigate to **SQL Editor**
4. Run the migration SQL from `debug_consultation_form_fix.sql`
5. Verify no errors in the SQL execution

### Step 2: Test Form Submission
1. Open your website: `http://localhost:5173`
2. Open browser **Developer Tools** (F12)
3. Go to **Console** tab
4. Fill out the consultation form with test data:
   - Name: "Test User"
   - Email: "test@example.com"
   - Business Name: "Test Company"
   - Selected Service: "A.I agent"
   - Challenge: "Need to automate lead generation"
   - Additional Info: "Looking for immediate implementation"

### Step 3: Monitor Debug Output
Watch the console for these debug messages:
```
✅ Supabase configuration check: URL exists, Anon key exists
✅ Supabase connection successful
✅ Form submission started
✅ Prepared consultation data: {...}
✅ Supabase response: {data: [...], error: null}
✅ Consultation request saved successfully
```

### Step 4: Verify in Supabase Dashboard
1. Go to **Table Editor** → **consultation_requests**
2. Check if your test submission appears in the table
3. Verify all fields are populated correctly

## Common Issues & Solutions

### Issue 1: "Missing Supabase environment variables"
**Solution:** Check your `.env` file contains:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### Issue 2: "new row violates row-level security policy"
**Solution:** Run the database migration to fix RLS policies

### Issue 3: Network errors or 401 responses
**Solution:** Verify your Supabase project is active and API keys are correct

### Issue 4: Form submits but no data in database
**Solution:** Check console logs for Supabase response errors

## Additional Debugging Techniques

### 1. Network Tab Analysis
1. Open **Developer Tools** → **Network** tab
2. Submit form and look for requests to `supabase.co`
3. Check request payload and response status

### 2. Supabase Logs
1. Go to Supabase Dashboard → **Logs**
2. Filter by **API** logs
3. Look for INSERT operations and any errors

### 3. Manual Database Test
Test the database directly in SQL Editor:
```sql
INSERT INTO consultation_requests (
  name, email, business_name, use_case, selected_service
) VALUES (
  'Manual Test', 'manual@test.com', 'Test Co', 'Testing', 'A.I agent'
);
```

## Success Indicators

✅ **Console shows:** "Consultation request saved successfully"  
✅ **Form displays:** Green checkmark with "Thank You!" message  
✅ **Database contains:** New row with submitted data  
✅ **No errors:** In console or network tab  

## Next Steps After Fix

1. **Remove debug logs** from production code
2. **Add form analytics** to track submission rates
3. **Set up email notifications** for new submissions
4. **Create admin dashboard** to manage consultation requests

---

**If issues persist:** Check the browser console for specific error messages and verify your Supabase project settings match the environment variables.