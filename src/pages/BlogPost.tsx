import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOMeta } from "@/components/layout/SEOMeta";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from "lucide-react";

interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  category: string | null;
  author: string | null;
  featured: boolean | null;
  read_time: string | null;
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [related, setRelated] = useState<BlogPostData[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .single();

      if (error || !data) {
        setNotFound(true);
      } else {
        setPost(data);
        // Fetch related posts
        const { data: rel } = await supabase
          .from("blog_posts")
          .select("id, title, slug, excerpt, category, author, read_time, created_at, featured, meta_title, meta_description")
          .eq("published", true)
          .eq("category", data.category || "General")
          .neq("id", data.id)
          .limit(3);
        if (rel) setRelated(rel);
      }
      setLoading(false);
    };
    if (slug) fetchPost();
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (notFound || !post) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-secondary mb-4">Post Not Found</h1>
        <Link to="/blog"><Button variant="hero">Back to Blog</Button></Link>
      </div>
    </div>
  );

  const canonicalUrl = `https://www.raulji.com/blog/${post.slug}`;

  return (
    <div className="min-h-screen">
      <SEOMeta
        title={post.meta_title || `${post.title} | Raulji Group Blog`}
        description={post.meta_description || post.excerpt || `Read ${post.title} on Raulji Group blog.`}
        canonical={canonicalUrl}
      />
      {/* Article Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "url": canonicalUrl,
        "datePublished": post.created_at,
        "dateModified": post.created_at,
        "author": { "@type": "Person", "name": post.author || "Raulji Group" },
        "publisher": {
          "@type": "Organization",
          "name": "Raulji Group",
          "url": "https://www.raulji.com",
          "logo": { "@type": "ImageObject", "url": "https://www.raulji.com/favicon.webp" }
        },
        "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
        "articleSection": post.category || "General",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.raulji.com/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.raulji.com/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": canonicalUrl }
          ]
        }
      })}} />

      <Header />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-12 bg-hero-gradient">
          <div className="container-wide max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            {post.category && (
              <span className="inline-block px-3 py-1 bg-accent rounded-full text-xs font-medium text-accent-foreground mb-4">
                {post.category}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>
            )}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><User className="w-4 h-4" />{post.author || "Raulji Group"}</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />
                {new Date(post.created_at).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
              </span>
              {post.read_time && <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.read_time}</span>}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-4 gap-12">
              <article className="lg:col-span-3">
                {post.content ? (
                  <div
                    className="prose prose-lg max-w-none text-muted-foreground prose-headings:text-secondary prose-headings:font-bold prose-a:text-primary prose-strong:text-secondary"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                ) : (
                  <p className="text-muted-foreground text-lg">{post.excerpt}</p>
                )}

                {/* CTA */}
                <div className="mt-12 brand-gradient rounded-3xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-3">Need Expert Help?</h3>
                  <p className="text-primary-foreground/80 mb-6">Contact Raulji Group for a free consultation.</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link to="/contact"><Button variant="heroOutline">Get Free Consultation <ArrowRight className="w-4 h-4" /></Button></Link>
                    <a href="tel:+918511187689"><Button variant="heroOutline">Call +91 8511187689</Button></a>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1 space-y-6">
                <div className="glass-card rounded-2xl p-6 sticky top-24">
                  <h4 className="font-bold text-secondary mb-4">Quick Contact</h4>
                  <div className="space-y-3">
                    <a href="tel:+918511187689" className="block w-full text-center px-4 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors text-sm">
                      Call +91 8511187689
                    </a>
                    <a href="https://wa.me/918511187689" target="_blank" rel="noopener noreferrer"
                      className="block w-full text-center px-4 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors text-sm">
                      WhatsApp Us
                    </a>
                    <Link to="/contact" className="block w-full text-center px-4 py-3 border border-border rounded-xl text-secondary font-medium hover:bg-accent transition-colors text-sm">
                      Send Message
                    </Link>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border text-xs text-muted-foreground">
                    <p className="font-medium text-secondary mb-1">Raulji Group</p>
                    <p>Vadodara, Gujarat, India</p>
                    <p className="mt-1">Mon–Sat: 9AM–7PM</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="section-padding bg-muted/30">
            <div className="container-wide">
              <h2 className="text-2xl font-bold text-secondary mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map(r => (
                  <article key={r.id} className="glass-card rounded-2xl p-6 hover-lift">
                    <span className="inline-block px-2 py-1 bg-accent rounded-full text-xs mb-3">{r.category}</span>
                    <h3 className="font-bold text-secondary mb-2 hover:text-primary transition-colors">
                      <Link to={`/blog/${r.slug}`}>{r.title}</Link>
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{r.excerpt}</p>
                    <Link to={`/blog/${r.slug}`} className="text-sm text-primary font-medium hover:underline flex items-center gap-1">
                      Read More <ArrowRight className="w-3 h-3" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
