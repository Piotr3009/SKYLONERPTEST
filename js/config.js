// Konfiguracja Supabase - TEST DATABASE
// UWAGA: Ten plik NIE powinien być commitowany do repozytorium!
// Jest w .gitignore

// ⚠️ TEST DATABASE CREDENTIALS - DO NOT USE IN PRODUCTION!
const SUPABASE_URL = 'https://bmuglbougfhjdnequpxi.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtdWdsYm91Z2ZoamRuZXF1cHhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1ODYwMjgsImV4cCI6MjA3NTE2MjAyOH0.yw5kZwetVzLw8wuzcNjZadrqfgOnuHcPq1kCdvuh2kE';

// Inicjalizacja Supabase
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
console.log('✅ Supabase TEST database connected:', supabaseClient);
console.log('📍 Connected to:', SUPABASE_URL);