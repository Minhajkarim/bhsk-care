# Supabase Setup Guide

This guide will help you set up Supabase for the admin dashboard and blog functionality.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in your project details:
   - Name: BHSK Health Services
   - Database Password: (choose a strong password)
   - Region: Choose the closest region to Qatar
5. Click "Create new project"

## Step 2: Get Your Supabase Credentials

1. Once your project is created, go to **Settings** → **API**
2. Copy the following:
   - **Project URL** (this is your `VITE_SUPABASE_URL`)
   - **anon/public key** (this is your `VITE_SUPABASE_ANON_KEY`)

## Step 3: Create the Database Table

1. Go to **SQL Editor** in your Supabase dashboard
2. **Option A (Recommended)**: Copy and run the complete SQL script from `supabase_setup.sql` file
   - This file contains all the necessary SQL commands in the correct order
   - Simply copy the entire contents and paste into the SQL Editor, then click "Run"

**OR**

**Option B**: Run the SQL commands below manually:

```sql
-- Create blog_posts table
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  featured_image TEXT,
  author_id UUID REFERENCES auth.users(id),
  author_name TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE,
  tags TEXT[],
  views INTEGER DEFAULT 0
);

-- Create index on slug for faster lookups
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(published);
CREATE INDEX idx_blog_posts_published_at ON blog_posts(published_at DESC);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow anyone to read published posts
CREATE POLICY "Anyone can read published posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

-- Allow authenticated users to read all posts (for admin)
CREATE POLICY "Authenticated users can read all posts"
  ON blog_posts
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to insert posts
CREATE POLICY "Authenticated users can insert posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update posts
CREATE POLICY "Authenticated users can update posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to delete posts
CREATE POLICY "Authenticated users can delete posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

## Step 4: Set Up Authentication

1. Go to **Authentication** → **Users** in your Supabase dashboard
2. Click **Add User** → **Create new user**
3. Enter your admin email and password
4. Make sure to verify the email (or disable email verification in Auth settings)

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root of your project (copy from `.env.example`)
2. Add your Supabase credentials:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
VITE_ADMIN_EMAIL=your-admin-email@example.com
```

3. For Vercel deployment:
   - Go to your Vercel project settings
   - Navigate to **Environment Variables**
   - Add the same variables:
     - `VITE_SUPABASE_URL`
     - `VITE_SUPABASE_ANON_KEY`
     - `VITE_ADMIN_EMAIL`

## Step 6: Test the Setup

1. Start your development server: `npm run dev`
2. Navigate to `/admin/login`
3. Log in with your admin credentials
4. You should be able to access the dashboard and create blog posts

## Security Notes

- The RLS (Row Level Security) policies ensure that:
  - Anyone can read published blog posts
  - Only authenticated users (admins) can create, update, or delete posts
  - Admins can see both published and draft posts

## Troubleshooting

### Issue: "Invalid API key"
- Make sure you're using the `anon` key, not the `service_role` key
- Check that your environment variables are set correctly

### Issue: "Row Level Security policy violation"
- Make sure you've run all the SQL commands above
- Check that your user is authenticated

### Issue: Can't access admin dashboard
- Verify that `VITE_ADMIN_EMAIL` matches your Supabase user email
- Make sure you're logged in with the correct credentials

## Next Steps

- Customize the blog post fields if needed
- Add image upload functionality (consider using Supabase Storage)
- Add categories or additional metadata
- Set up email notifications for new posts

