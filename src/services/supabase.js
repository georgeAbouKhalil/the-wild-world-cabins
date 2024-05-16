/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lnwxvsdoexgedwvurhxp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxud3h2c2RvZXhnZWR3dnVyaHhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwNjk2NDcsImV4cCI6MjAyOTY0NTY0N30.zGrIipcZ3nNl_qRblT5lGa8jduIsQ-WHSL6vvZfNoeI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
