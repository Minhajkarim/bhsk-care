-- ============================================
-- BHSK Health Services - Blog Posts Setup
-- Complete SQL Script for Supabase
-- ============================================
-- Run this script in your Supabase SQL Editor
-- ============================================

-- Step 1: Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  featured_image TEXT,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE,
  tags TEXT[] DEFAULT '{}',
  views INTEGER DEFAULT 0
);

-- Step 2: Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC NULLS LAST);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_author_id ON blog_posts(author_id);

-- Step 3: Enable Row Level Security (RLS)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Step 4: Drop existing policies if they exist (for clean re-runs)
DROP POLICY IF EXISTS "Anyone can read published posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can read all posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can insert posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can update posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can delete posts" ON blog_posts;

-- Step 5: Create RLS Policies

-- Policy 1: Anyone (including anonymous users) can read published posts
CREATE POLICY "Anyone can read published posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

-- Policy 2: Authenticated users can read all posts (for admin dashboard)
CREATE POLICY "Authenticated users can read all posts"
  ON blog_posts
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy 3: Authenticated users can insert new posts
CREATE POLICY "Authenticated users can insert posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy 4: Authenticated users can update any post
CREATE POLICY "Authenticated users can update posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy 5: Authenticated users can delete any post
CREATE POLICY "Authenticated users can delete posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (true);

-- Step 6: Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Step 7: Create trigger to automatically update updated_at on row updates
DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Step 8: Create function to automatically set published_at when post is published
CREATE OR REPLACE FUNCTION set_published_at()
RETURNS TRIGGER AS $$
BEGIN
  -- If post is being published and published_at is NULL, set it to now
  IF NEW.published = true AND OLD.published = false AND NEW.published_at IS NULL THEN
    NEW.published_at = NOW();
  END IF;
  -- If post is being unpublished, clear published_at
  IF NEW.published = false THEN
    NEW.published_at = NULL;
  END IF;
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Step 9: Create trigger for published_at
DROP TRIGGER IF EXISTS set_blog_posts_published_at ON blog_posts;
CREATE TRIGGER set_blog_posts_published_at
  BEFORE UPDATE OF published ON blog_posts
  FOR EACH ROW
  WHEN (OLD.published IS DISTINCT FROM NEW.published)
  EXECUTE FUNCTION set_published_at();

-- Step 10: Create function to increment view count
CREATE OR REPLACE FUNCTION increment_blog_views(blog_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE blog_posts
  SET views = COALESCE(views, 0) + 1
  WHERE id = blog_id;
END;
$$ language 'plpgsql' SECURITY DEFINER;

-- Step 11: Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON blog_posts TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON blog_posts TO authenticated;
GRANT EXECUTE ON FUNCTION increment_blog_views(UUID) TO anon, authenticated;

-- ============================================
-- Verification Queries (Optional - run these to verify setup)
-- ============================================

-- Check if table exists
-- SELECT EXISTS (
--   SELECT FROM information_schema.tables 
--   WHERE table_schema = 'public' 
--   AND table_name = 'blog_posts'
-- );

-- Check RLS is enabled
-- SELECT tablename, rowsecurity 
-- FROM pg_tables 
-- WHERE schemaname = 'public' 
-- AND tablename = 'blog_posts';

-- Check policies
-- SELECT * FROM pg_policies WHERE tablename = 'blog_posts';

-- ============================================
-- Sample Data (Optional - for testing)
-- ============================================
-- Uncomment and modify the following to insert a test blog post
-- Make sure you have an authenticated user first

/*
INSERT INTO blog_posts (
  title,
  slug,
  content,
  excerpt,
  featured_image,
  author_id,
  published,
  tags
) VALUES (
  'Welcome to BHSK Health Services Blog',
  'welcome-to-bhsk-health-services-blog',
  'This is your first blog post. You can edit or delete this post from the admin dashboard.',
  'Welcome to our blog! Here you will find healthcare insights, tips, and news.',
  NULL,
  (SELECT id FROM auth.users LIMIT 1), -- Replace with your user ID
  true,
  ARRAY['welcome', 'healthcare', 'qatar']
);
*/

-- ============================================
-- Setup Complete!
-- ============================================
-- Your blog_posts table is now ready to use.
-- Next steps:
-- 1. Create an admin user in Authentication > Users
-- 2. Update VITE_ADMIN_EMAIL in your .env file
-- 3. Test the admin dashboard at /admin/login
-- ============================================


