// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://zgbqdatstndkqiiezqkv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnYnFkYXRzdG5ka3FpaWV6cWt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3NzQ0MzYsImV4cCI6MjA1NzM1MDQzNn0.XfqfaEyiWnbLZrs1-lKUIf5LNLAIm6uQy2EEOCp6Qic";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);