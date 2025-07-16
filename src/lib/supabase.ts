import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a mock client if environment variables are missing (for development)
let supabase;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables not found. Using mock client.');
  // Create a mock client that prevents crashes
  supabase = {
    from: () => ({
      insert: () => ({
        select: () => Promise.resolve({ 
          data: null, 
          error: new Error('Supabase not configured. Please set up your environment variables.') 
        })
      })
    })
  };
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };

// Types for our consultation request
export interface ConsultationRequest {
  id?: string;
  name: string;
  email: string;
  business_name: string;
  use_case: string;
  status?: string;
  created_at?: string;
}