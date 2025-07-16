import { createClient } from '@supabase/supabase-js';

// Fallback values to prevent app crash
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// Debug logging for environment variables (non-blocking)
console.log('Supabase configuration check:');
console.log('URL exists:', !!import.meta.env.VITE_SUPABASE_URL);
console.log('Anon key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);

// Create client with fallback values (won't crash the app)
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false
  }
});

// Only test connection if we have real credentials
if (import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY) {
  supabase.from('consultation_requests').select('count', { count: 'exact', head: true })
    .then(({ error, count }) => {
      if (error) {
        console.error('Supabase connection test failed:', error);
      } else {
        console.log('Supabase connection successful. Table has', count, 'records');
      }
    })
    .catch(err => {
      console.warn('Supabase connection test skipped:', err.message);
    });
} else {
  console.warn('Supabase credentials not found - form submissions will be disabled');
}

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