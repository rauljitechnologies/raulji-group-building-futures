import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  category: string | null;
  author: string | null;
  featured: boolean | null;
  read_time: string | null;
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
}

const categories = [
  "All",
  "Business Growth",
  "Digital Transformation",
  "Insurance Awareness",
  "Property & Real Estate",
  "Legal & Compliance",
  "Technology Trends",
];

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, category, author, featured, read_time, meta_title, meta_description, created_at")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (!error && data) setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const filtered = activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory);
  const featuredPosts = filtered.filter(p => p.featured);
  const regularPosts = filtered.filter(p => !p.featured);

  return (
    <div className="min-h-screen">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Blog",
          "name": "Raulji Group Blog - Business, Technology & Insurance Insights",
          "description": "Expert insights on business consulting, IT, insurance, finance, and legal topics by Raulji Group.",
          "publisher": { "@type": "Organization", "name": "Raulji Group" },
          "url": "https://raulji.lovable.app/blog"
        })
      }} />
      <main>
        <section className="pt-40 pb-20 bg-hero-gradient">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6 animate-fade-up">
                Insights & Resources
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 animate-fade-up delay-100">
                Knowledge That{" "}
                <span className="text-gradient">Empowers Growth</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-up delay-200">
                Expert insights, industry trends, and practical guides from the Raulji Group team
                to help your business thrive.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 border-b border-border">
          <div className="container-wide">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === activeCategory
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            {loading ? (
              <div className="text-center py-12">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-muted-foreground">Loading articles...</p>
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">No articles yet. Check back soon!</p>
              </div>
            ) : (
              <>
                {featuredPosts.length > 0 && (
                  <>
                    <h2 className="text-2xl font-bold text-secondary mb-8">Featured Articles</h2>
                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                      {featuredPosts.map((post, index) => (
                        <article key={post.id} className="glass-card rounded-3xl p-8 hover-lift animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                          <div className="mb-4">
                            <span className="inline-block px-3 py-1 bg-accent rounded-full text-xs font-medium text-accent-foreground">
                              {post.category}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-secondary mb-3 hover:text-primary transition-colors">
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                          </h3>
                          <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
                              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{new Date(post.created_at).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                            </div>
                            <span className="flex items-center gap-1 text-sm text-muted-foreground"><Clock className="w-4 h-4" />{post.read_time}</span>
                          </div>
                        </article>
                      ))}
                    </div>
                  </>
                )}

                {regularPosts.length > 0 && (
                  <>
                    <h2 className="text-2xl font-bold text-secondary mb-8">Latest Articles</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {regularPosts.map((post, index) => (
                        <article key={post.id} className="glass-card rounded-2xl p-6 hover-lift animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                          <div className="mb-3">
                            <span className="inline-block px-3 py-1 bg-accent rounded-full text-xs font-medium text-accent-foreground">
                              {post.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-secondary mb-2 hover:text-primary transition-colors">
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>{new Date(post.created_at).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                            <span>{post.read_time}</span>
                          </div>
                        </article>
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-secondary mb-4">Need Expert Advice?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact Raulji Group for personalized business, IT, insurance, or legal consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact"><Button variant="hero" size="lg">Get Free Consultation <ArrowRight className="w-4 h-4" /></Button></Link>
                <a href="tel:+918511187689"><Button variant="outline" size="lg">Call +91 8511187689</Button></a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
