import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { supabase, BlogPost } from '@/lib/supabase';
import SEO from '@/components/SEO';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Blog = () => {
  const { isRTL } = useLanguage();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = 'https://www.bhskforhealthservices.com';

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching blogs:', error);
        // If table doesn't exist yet, show empty state
        if (error.code === 'PGRST116' || error.message?.includes('does not exist')) {
          setBlogs([]);
          setLoading(false);
          return;
        }
        throw error;
      }
      console.log('Fetched blogs:', data); // Debug log
      console.log('Number of published blogs:', data?.length || 0); // Debug log
      setBlogs(data || []);
    } catch (error: any) {
      console.error('Error fetching blogs:', error);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "BHSK Health Services Blog",
    "description": "Healthcare insights, tips, and news from BHSK Health Services in Qatar",
    "url": `${baseUrl}/blog`,
    "publisher": {
      "@type": "Organization",
      "name": "BHSK Health Services",
      "url": baseUrl
    }
  };

  return (
    <>
      <SEO
        title="Blog - Healthcare Insights & News | BHSK Health Services Qatar"
        description="Read the latest healthcare insights, tips, and news from BHSK Health Services in Qatar. Expert advice on home nursing, elderly care, and more."
        keywords="healthcare blog Qatar, medical blog Qatar, nursing blog Qatar, health tips Qatar, healthcare news Qatar, BHSK blog"
        image="/hero-image.jpg"
        url={`${baseUrl}/blog`}
        canonical={`${baseUrl}/blog`}
        structuredData={structuredData}
      />
      <div className={`flex flex-col ${isRTL ? 'rtl' : 'ltr'}`}>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-primary-foreground animate-fade-in">
              <h1 className="mb-6">Our Blog</h1>
              <p className="text-xl text-primary-foreground/90">
                Healthcare insights, tips, and news from BHSK Health Services
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-muted-foreground">Loading blog posts...</p>
              </div>
            ) : blogs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No blog posts available yet. Check back soon!</p>
                <p className="text-sm text-muted-foreground">
                  Make sure your blog posts are marked as "Published" in the admin dashboard.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  (Check browser console for any errors)
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                  <Card key={blog.id} className="hover:shadow-card transition-all">
                    <CardContent className="p-0">
                      {blog.featured_image && (
                        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                          <img
                            src={blog.featured_image}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {blog.published_at
                                ? new Date(blog.published_at).toLocaleDateString()
                                : new Date(blog.created_at).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <h2 className="text-xl font-semibold mb-2 line-clamp-2">{blog.title}</h2>
                        <p className="text-muted-foreground mb-4 line-clamp-3">{blog.excerpt}</p>
                        {blog.tags && blog.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {blog.tags.slice(0, 3).map((tag, index) => (
                              <span
                                key={index}
                                className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <Link
                          to={`/blog/${blog.slug}`}
                          className="inline-flex items-center text-primary hover:underline font-medium"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;

