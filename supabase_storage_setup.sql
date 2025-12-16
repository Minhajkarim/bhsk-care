-- ============================================
-- Supabase Storage Setup for Blog Images
-- Complete SQL Script
-- ============================================
-- Run this script in your Supabase SQL Editor
-- ============================================

-- Step 1: Create the storage bucket (if it doesn't exist)
-- Note: You may need to create the bucket manually in the Supabase Dashboard first
-- Go to Storage → New Bucket → Name: "blog-images" → Public: Yes

-- Step 2: Drop existing policies if they exist (for clean re-runs)
DROP POLICY IF EXISTS "Authenticated users can upload images" ON storage.objects;
DROP POLICY IF EXISTS "Public can read images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete images" ON storage.objects;

-- Step 3: Create Storage Policies

-- Policy 1: Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'blog-images');

-- Policy 2: Allow public to read images (so images can be displayed on your website)
CREATE POLICY "Public can read images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'blog-images');

-- Policy 3: Allow authenticated users to update their own images
CREATE POLICY "Authenticated users can update images"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'blog-images')
WITH CHECK (bucket_id = 'blog-images');

-- Policy 4: Allow authenticated users to delete images
CREATE POLICY "Authenticated users can delete images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'blog-images');

-- ============================================
-- Verification Queries (Optional)
-- ============================================

-- Check if policies were created
-- SELECT * FROM pg_policies WHERE tablename = 'objects' AND policyname LIKE '%blog-images%';

-- Check bucket exists (if you have access to storage schema)
-- SELECT * FROM storage.buckets WHERE name = 'blog-images';

-- ============================================
-- Setup Complete!
-- ============================================
-- Next steps:
-- 1. Make sure the bucket "blog-images" exists in Storage
-- 2. Verify the bucket is set to "Public"
-- 3. Test image upload in your admin dashboard
-- ============================================

