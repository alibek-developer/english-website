# Supabase Authentication Setup Guide

This guide will help you set up Supabase authentication for your English learning website.

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Click "New Project"
3. Fill in your project details:
   - Name: `english-website-auth`
   - Database Password: Choose a strong password
   - Region: Select the closest region to your users

## 2. Get Your Supabase Credentials

1. In your Supabase dashboard, go to Settings → API
2. Copy the following values:
   - Project URL
   - Project API Key (anon/public)

## 3. Configure Environment Variables

Create a `.env.local` file in the `frontend` directory:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

Replace the placeholder values with your actual Supabase credentials.

## 4. Configure Supabase Authentication

1. In your Supabase dashboard, go to Authentication → Settings
2. Configure the following:
   - Site URL: `http://localhost:3000` (for development)
   - Redirect URLs: Add your production domain when deploying

## 5. Set Up Database Tables (Optional)

If you need user profiles or additional data, you can create tables in Supabase:

1. Go to the SQL Editor in your Supabase dashboard
2. Run this SQL to create a profiles table:

```sql
-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS (Row Level Security)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);
```

## 6. Test the Setup

1. Start your development server:
   ```bash
   cd frontend
   npm run dev
   ```

2. Try the authentication flow:
   - Go to `/login`
   - Sign up with a test email
   - Check your email for confirmation
   - Try logging in
   - Access the `/dashboard` (should require authentication)

## 7. Deploy to Production

When deploying to production:

1. Update the Site URL in Supabase Authentication settings to your production domain
2. Set the environment variables in your hosting platform (Vercel, Netlify, etc.)
3. Make sure to use the production Supabase URL and keys

## Troubleshooting

### Common Issues:

1. **"Invalid API key" error**
   - Double-check your `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Make sure you're using the `anon` key, not the `service_role` key

2. **"Invalid login credentials"**
   - Make sure you've confirmed your email after signing up
   - Check if email confirmation is required in Supabase settings

3. **Middleware not working**
   - Make sure your environment variables are set correctly
   - Check that the middleware is in the correct location (`app/middleware.ts`)

4. **Build errors**
   - Ensure all required dependencies are installed
   - Check that TypeScript types are correct

## Security Notes

- Never commit your `.env.local` file to version control
- Only use the `anon` key in client-side code
- The `service_role` key should only be used server-side for admin operations
- Always enable Row Level Security (RLS) on your database tables

## Next Steps

After authentication is working, you can:

1. Add user profile management
2. Implement role-based access control
3. Add social login providers (Google, GitHub, etc.)
4. Set up email templates in Supabase
5. Add user analytics and tracking

For more information, check the [Supabase Documentation](https://supabase.com/docs).

