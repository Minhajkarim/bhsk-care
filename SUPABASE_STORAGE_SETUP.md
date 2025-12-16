# Supabase Storage Setup for Image Uploads

This guide will help you set up Supabase Storage to enable image uploads for blog posts.

## Step 1: Create Storage Bucket

1. Go to your **Supabase Dashboard**
2. Navigate to **Storage** in the left sidebar
3. Click **"New bucket"**
4. Configure the bucket:
   - **Name**: `blog-images`
   - **Public bucket**: ✅ **Enable this** (so images can be accessed publicly)
   - **File size limit**: 5 MB (or your preferred limit)
   - **Allowed MIME types**: `image/*` (or specific types like `image/jpeg,image/png,image/webp`)
5. Click **"Create bucket"**

## Step 2: Set Up Storage Policies

1. After creating the bucket, click on **"blog-images"** bucket
2. Go to **"Policies"** tab
3. Click **"New Policy"**

### Policy 1: Allow Authenticated Users to Upload

1. Click **"New Policy"**
2. Select **"For full customization"**
3. Policy name: `Authenticated users can upload images`
4. Allowed operation: `INSERT`
5. Policy definition:
```sql
(bucket_id = 'blog-images'::text) AND (auth.role() = 'authenticated'::text)
```
6. Click **"Review"** then **"Save policy"**

### Policy 2: Allow Public to Read Images

1. Click **"New Policy"** again
2. Select **"For full customization"**
3. Policy name: `Public can read images`
4. Allowed operation: `SELECT`
5. Policy definition:
```sql
bucket_id = 'blog-images'::text
```
6. Click **"Review"** then **"Save policy"**

### Policy 3: Allow Authenticated Users to Delete

1. Click **"New Policy"**
2. Select **"For full customization"**
3. Policy name: `Authenticated users can delete images`
4. Allowed operation: `DELETE`
5. Policy definition:
```sql
(bucket_id = 'blog-images'::text) AND (auth.role() = 'authenticated'::text)
```
6. Click **"Review"** then **"Save policy"**

## Step 3: Verify Setup

1. Go to **Storage** → **blog-images**
2. You should see the bucket is **Public**
3. Check that all three policies are active

## Step 4: Test Image Upload

1. Go to your admin dashboard: `/admin/blogs/new`
2. Click **"Upload Image"**
3. Select an image file
4. The image should upload and display a preview
5. Save the blog post

## Troubleshooting

### Error: "Bucket not found"
- Make sure the bucket name is exactly `blog-images`
- Check that the bucket exists in your Supabase Storage

### Error: "New row violates row-level security policy"
- Verify that the Storage policies are set up correctly
- Make sure you're logged in as an authenticated user

### Images not displaying
- Check that the bucket is set to **Public**
- Verify the public URL is being generated correctly
- Check browser console for any CORS errors

### Upload fails silently
- Check browser console for error messages
- Verify file size is under the limit (5MB default)
- Ensure file type is an image (jpg, png, webp, etc.)

## Alternative: Using SQL to Create Policies

If you prefer using SQL, run this in your Supabase SQL Editor:

```sql
-- Create storage policies for blog-images bucket
-- Note: Replace 'blog-images' with your actual bucket name if different

-- Policy: Allow authenticated users to upload
CREATE POLICY "Authenticated users can upload images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'blog-images');

-- Policy: Allow public to read images
CREATE POLICY "Public can read images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'blog-images');

-- Policy: Allow authenticated users to delete
CREATE POLICY "Authenticated users can delete images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'blog-images');
```

## Next Steps

- Images will be stored in: `blog-images/{timestamp}-{random}.{ext}`
- Public URLs will be automatically generated
- You can manage uploaded images in Supabase Dashboard → Storage → blog-images

---

**Note**: Make sure your bucket name matches `blog-images` in the ImageUpload component, or update the component if you use a different name.

