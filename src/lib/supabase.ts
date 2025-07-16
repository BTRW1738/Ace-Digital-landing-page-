import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Debug logging for environment variables
console.log('Supabase configuration check:');
console.log('URL exists:', !!supabaseUrl);
console.log('Anon key exists:', !!supabaseAnonKey);
console.log('URL format valid:', supabaseUrl?.includes('supabase.co'));

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables:');
  console.error('VITE_SUPABASE_URL:', !!supabaseUrl);
  console.error('VITE_SUPABASE_ANON_KEY:', !!supabaseAnonKey);
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false // Since we're using anon access for form submissions
  }
});

// Test connection on initialization
supabase.from('consultation_requests').select('count', { count: 'exact', head: true })
  .then(({ error, count }) => {
    if (error) {
      console.error('Supabase connection test failed:', error);
    } else {
      console.log('Supabase connection successful. Table has', count, 'records');
    }
  });

// Types for our consultation request
export interface ConsultationRequest {
  id?: string;
  name: string;
  email: string;
  business_name: string;
  use_case: string;
  selected_service: string;
  additional_info?: string;
  status?: string;
  created_at?: string;
}