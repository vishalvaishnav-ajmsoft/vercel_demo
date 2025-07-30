import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://oexoyfwhqlkckwaazkyy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9leG95ZndocWxrY2t3YWF6a3l5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwOTc2NzIsImV4cCI6MjA2ODY3MzY3Mn0.8JPgygUP-4JJQZsM1AEJa9U1bqIc8klGhuJKqxuDcDY"
);
