import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase, BlogPost } from '@/lib/supabase';
import SEO from '@/components/SEO';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isRTL } = useLanguage();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const baseUrl = 'https://www.bhskforhealthservices.com';

  useEffect(() => {
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  useEffect(() => {
    if (blog) {
      // Increment view count
      supabase
        .from('blog_posts')
        .update({ views: (blog.views || 0) + 1 })
        .eq('id', blog.id)
        .then(() => {
          // Update local state
          setBlog({ ...blog, views: (blog.views || 0) + 1 });
        });
    }
  }, [blog?.id]);

  const fetchBlog = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();

      if (error) throw error;
      setBlog(data);
    } catch (error: any) {
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "image": blog.featured_image || `${baseUrl}/hero-image.jpg`,
    "datePublished": blog.published_at || blog.created_at,
    "dateModified": blog.updated_at,
    "author": {
      "@type": "Organization",
      "name": "BHSK Health Services",
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "BHSK Health Services",
      "url": baseUrl
    }
  };

  return (
    <>
      <SEO
        title={`${blog.title} | BHSK Health Services Blog`}
        description={blog.excerpt}
        keywords={blog.tags ? blog.tags.join(', ') : 'healthcare blog Qatar'}
        image={blog.featured_image || '/hero-image.jpg'}
        url={`${baseUrl}/blog/${blog.slug}`}
        canonical={`${baseUrl}/blog/${blog.slug}`}
        structuredData={structuredData}
      />
      <div className={`flex flex-col ${isRTL ? 'rtl' : 'ltr'}`}>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-primary-foreground animate-fade-in">
              <Button variant="ghost" className="mb-6 text-primary-foreground hover:bg-white/10" asChild>
                <Link to="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
              <h1 className="mb-6">{blog.title}</h1>
              <div className="flex items-center gap-4 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {blog.published_at
                      ? new Date(blog.published_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })
                      : new Date(blog.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                  </span>
                </div>
                {blog.views && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{blog.views} views</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <article className="max-w-4xl mx-auto">
              {blog.featured_image && (
                <div className="mb-8 rounded-xl overflow-hidden">
                  <img
                    src={blog.featured_image}
                    alt={blog.title}
                    className="w-full h-auto"
                  />
                </div>
              )}

              {blog.tags && blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                  {blog.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <Button variant="outline" asChild>
                  <Link to="/blog">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to All Posts
                  </Link>
                </Button>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogDetail;

