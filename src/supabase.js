import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xzssxjvsialubytyudzh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6c3N4anZzaWFsdWJ5dHl1ZHpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM2NDc5NDgsImV4cCI6MTk4OTIyMzk0OH0.-wtmlNvnfugwc1zm4bKvF0nhg_oMzk3eITMLq86IKqo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
