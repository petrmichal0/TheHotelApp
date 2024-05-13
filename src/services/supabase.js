import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ssvvatskxyaexqasxfig.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzdnZhdHNreHlhZXhxYXN4ZmlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3NzE3NjcsImV4cCI6MjAzMDM0Nzc2N30.Ga5ybpQIgcaafCrQt_68sAor-lrKjigJUNsjDvDINI4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
