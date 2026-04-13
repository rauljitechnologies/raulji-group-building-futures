import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CATEGORIES = [
  "Business Growth", "Digital Transformation", "Insurance Awareness",
  "Property & Real Estate", "Legal & Compliance", "Technology Trends", "General",
];

const slugify = (text: string) =>
  text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");

const BlogEditor = () => {
  const { id } = useParams();
  const isNew = id === "new";
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    title: "", slug: "", excerpt: "", content: "", category: "General",
    author: "Raulji Group", read_time: "5 min read",
    meta_title: "", meta_description: "",
    published: false, featured: false,
  });

  useEffect(() => {
    if (!loading && !user) navigate("/admin/login");
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!isNew && id && user) {
      supabase.from("blog_posts").select("*").eq("id", id).single().then(({ data }) => {
        if (data) setForm({
          title: data.title || "",
          slug: data.slug || "",
          excerpt: data.excerpt || "",
          content: data.content || "",
          category: data.category || "General",
          author: data.author || "Raulji Group",
          read_time: data.read_time || "5 min read",
          meta_title: data.meta_title || "",
          meta_description: data.meta_description || "",
          published: data.published || false,
          featured: data.featured || false,
        });
      });
    }
  }, [id, isNew, user]);

  const update = (field: string, value: string | boolean) => {
    setForm(prev => {
      const next = { ...prev, [field]: value };
      if (field === "title" && isNew) next.slug = slugify(value as string);
      if (field === "title" && !prev.meta_title) next.meta_title = value as string;
      return next;
    });
  };

  const handleSave = async (publish?: boolean) => {
    if (!form.title.trim() || !form.slug.trim()) {
      toast({ title: "Title and slug are required", variant: "destructive" });
      return;
    }
    setSaving(true);
    const payload = { ...form, published: publish !== undefined ? publish : form.published };

    let error;
    if (isNew) {
      const res = await supabase.from("blog_posts").insert(payload).select().single();
      error = res.error;
      if (!error && res.data) navigate(`/admin/blog/${res.data.id}`, { replace: true });
    } else {
      const res = await supabase.from("blog_posts").update(payload).eq("id", id!);
      error = res.error;
    }

    if (error) {
      toast({ title: "Save failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: publish ? "Published!" : "Draft saved!", description: `"${form.title}" has been saved.` });
      if (publish !== undefined) setForm(f => ({ ...f, published: publish }));
    }
    setSaving(false);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;
  if (!user) return null;

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link to="/admin">
              <Button variant="outline" size="sm" className="gap-1"><ArrowLeft className="w-4 h-4" /> Back</Button>
            </Link>
            <h1 className="font-semibold text-secondary hidden sm:block">
              {isNew ? "New Blog Post" : "Edit Post"}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => handleSave(false)} disabled={saving} className="gap-1">
              <EyeOff className="w-4 h-4" /> Save Draft
            </Button>
            <Button variant="hero" size="sm" onClick={() => handleSave(true)} disabled={saving} className="gap-1">
              <Eye className="w-4 h-4" /> {form.published ? "Update & Publish" : "Publish"}
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div className="glass-card rounded-2xl p-6">
              <label className="block text-sm font-medium text-secondary mb-2">Post Title *</label>
              <input
                type="text" value={form.title}
                onChange={e => update("title", e.target.value)}
                placeholder="Write a compelling title..."
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-lg font-medium"
              />
              <div className="mt-3">
                <label className="block text-xs text-muted-foreground mb-1">URL Slug *</label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">/blog/</span>
                  <input
                    type="text" value={form.slug}
                    onChange={e => update("slug", slugify(e.target.value))}
                    className="flex-1 px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Excerpt */}
            <div className="glass-card rounded-2xl p-6">
              <label className="block text-sm font-medium text-secondary mb-2">Excerpt (shown on blog list)</label>
              <textarea
                value={form.excerpt} onChange={e => update("excerpt", e.target.value)}
                rows={3} placeholder="A brief 1-2 sentence summary of the post..."
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm"
              />
            </div>

            {/* Content */}
            <div className="glass-card rounded-2xl p-6">
              <label className="block text-sm font-medium text-secondary mb-2">Full Content</label>
              <p className="text-xs text-muted-foreground mb-3">You can use HTML tags for formatting: &lt;h2&gt;, &lt;p&gt;, &lt;strong&gt;, &lt;ul&gt;&lt;li&gt;, &lt;a href=""&gt;, &lt;br&gt;</p>
              <textarea
                value={form.content} onChange={e => update("content", e.target.value)}
                rows={20} placeholder="Write your full blog post content here...&#10;&#10;You can use HTML for formatting:&#10;&lt;h2&gt;Section Title&lt;/h2&gt;&#10;&lt;p&gt;Your paragraph here.&lt;/p&gt;&#10;&lt;ul&gt;&#10;  &lt;li&gt;Point 1&lt;/li&gt;&#10;  &lt;li&gt;Point 2&lt;/li&gt;&#10;&lt;/ul&gt;"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-y text-sm font-mono"
              />
            </div>

            {/* SEO */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-secondary mb-4">SEO Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">SEO Title</label>
                  <input type="text" value={form.meta_title} onChange={e => update("meta_title", e.target.value)}
                    placeholder="SEO optimized title (50-60 chars)"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                  <p className="text-xs text-muted-foreground mt-1">{form.meta_title.length}/60 characters</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Meta Description</label>
                  <textarea value={form.meta_description} onChange={e => update("meta_description", e.target.value)}
                    rows={3} placeholder="Brief description for Google search results (150-160 chars)"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm"
                  />
                  <p className="text-xs text-muted-foreground mt-1">{form.meta_description.length}/160 characters</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish Controls */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-secondary mb-4">Publish Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary">Status</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${form.published ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
                    {form.published ? "Published" : "Draft"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="featured" className="text-sm text-secondary">Featured Post</label>
                  <input id="featured" type="checkbox" checked={form.featured}
                    onChange={e => update("featured", e.target.checked)}
                    className="w-4 h-4 accent-primary cursor-pointer"
                  />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border space-y-2">
                <Button className="w-full" variant="hero" onClick={() => handleSave(true)} disabled={saving}>
                  <Eye className="w-4 h-4 mr-2" /> Publish
                </Button>
                <Button className="w-full" variant="outline" onClick={() => handleSave(false)} disabled={saving}>
                  <Save className="w-4 h-4 mr-2" /> Save Draft
                </Button>
              </div>
            </div>

            {/* Category & Details */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-secondary mb-4">Post Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Category</label>
                  <select value={form.category} onChange={e => update("category", e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Author</label>
                  <input type="text" value={form.author} onChange={e => update("author", e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Read Time</label>
                  <input type="text" value={form.read_time} onChange={e => update("read_time", e.target.value)}
                    placeholder="5 min read"
                    className="w-full px-3 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Preview Link */}
            {!isNew && form.slug && (
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-semibold text-secondary mb-3">Preview</h3>
                <Link to={`/blog/${form.slug}`} target="_blank">
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Eye className="w-4 h-4" /> View Post
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;
