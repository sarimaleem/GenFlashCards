import { Client } from 'pg'

const uri = process.env.DB_URI;

if (!uri) {
  throw new Error('Missing Supabase environment variables');
}

export const client = new Client({
  connectionString: uri
});

client.connect()
