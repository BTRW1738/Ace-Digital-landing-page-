import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false
  }
});

// Test connection
supabase.from('consultation_requests').select('count', { count: 'exact', head: true })
  .then(({ error, count }) => {
    if (error) {
      console.error('Supabase connection test failed:', error);
    } else {
      console.log('✅ Supabase connected successfully. Records:', count);
    }
  });

// Types for consultation request
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