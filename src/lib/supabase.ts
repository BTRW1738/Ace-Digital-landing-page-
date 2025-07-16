import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ConsultationRequest {
  id: string;
  name: string;
  email: string;
  business_name: string;
  use_case: string;
  selected_service: string;
  additional_info: string | null;
  status: string | null;
  created_at: string;
}