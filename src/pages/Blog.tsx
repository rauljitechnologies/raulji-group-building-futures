import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

const categories = [
  "All",
  "Business Growth",
  "Digital Transformation",
  "Insurance Awareness",
  "Property & Real Estate",
  "Legal & Compliance",
  "Technology Trends",
];

const blogPosts = [
  {
    id: 1,
    title: "Digital Transformation: A Roadmap for Indian SMEs",
    excerpt: "Discover how small and medium enterprises can leverage technology to compete in the digital age.",
    category: "Digital Transformation",
    author: "Raulji Technologies",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Understanding Property Insurance in Gujarat",
    excerpt: "A comprehensive guide to protecting your property investments with the right insurance coverage.",
    category: "Insurance Awareness",
    author: "Raulji Consulting",
    date: "Jan 12, 2026",
    readTime: "7 min read",
    featured: true,
  },
  {
    id: 3,
    title: "5 Business Structures Every Entrepreneur Should Know",
    excerpt: "Choosing the right business structure can save you money and protect your personal assets.",
    category: "Business Growth",
    author: "Raulji Consulting",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Cloud Computing Trends for 2026",
    excerpt: "Stay ahead of the curve with these emerging cloud technologies shaping the future of business.",
    category: "Technology Trends",
    author: "Raulji Technologies",
    date: "Jan 8, 2026",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 5,
    title: "GST Compliance: Common Mistakes to Avoid",
    excerpt: "Learn about the most common GST compliance errors and how to ensure your business stays compliant.",
    category: "Legal & Compliance",
    author: "Raulji Consulting",
    date: "Jan 5, 2026",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Real Estate Investment: Due Diligence Checklist",
    excerpt: "Essential steps to verify and validate your property investment before making the purchase.",
    category: "Property & Real Estate",
    author: "Raulji Group",
    date: "Jan 3, 2026",
    readTime: "6 min read",
    featured: false,
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-hero-gradient">
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
                Expert insights, industry trends, and practical guides to help 
                your business thrive in today's dynamic landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="container-wide">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "All"
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

        {/* Featured Posts */}
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-secondary mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {blogPosts
                .filter((post) => post.featured)
                .map((post, index) => (
                  <article
                    key={post.id}
                    className="glass-card rounded-3xl p-8 hover-lift animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-accent rounded-full text-xs font-medium text-accent-foreground">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-3 hover:text-primary transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </article>
                ))}
            </div>

            {/* All Posts */}
            <h2 className="text-2xl font-bold text-secondary mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts
                .filter((post) => !post.featured)
                .map((post, index) => (
                  <article
                    key={post.id}
                    className="glass-card rounded-2xl p-6 hover-lift animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-accent rounded-full text-xs font-medium text-accent-foreground">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-secondary mb-2 hover:text-primary transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </article>
                ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-secondary mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Subscribe to our newsletter for the latest insights, industry trends, 
                and expert advice delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="hero" size="lg">
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
