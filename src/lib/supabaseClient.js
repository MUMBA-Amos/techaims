import { createClient } from '@supabase/supabase-js';

// Reads from .env (REACT_APP_ vars are required for Create React App).
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Only create a client if both values are present, so the app still runs
// (and the form falls back to email) when env vars aren't configured.
export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
