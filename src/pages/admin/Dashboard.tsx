import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  PenSquare, Trash2, Plus, LogOut, Eye, EyeOff,
  Star, StarOff, FileText, Users, LayoutDashboard
} from "lucide-react";
import logoImg from "@/assets/Raulji_Group_Logo.png";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string | null;
  published: boolean | null;
  featured: boolean | null;
  created_at: string;
}

const AdminDashboard = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [postsLoading, setPostsLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) navigate("/admin/login");
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) fetchPosts();
  }, [user]);

  const fetchPosts = async () => {
    const { data } = await supabase
      .from("blog_posts")
      .select("id, title, slug, category, published, featured, created_at")
      .order("created_at", { ascending: false });
    if (data) setPosts(data);
    setPostsLoading(false);
  };

  const togglePublished = async (id: string, current: boolean | null) => {
    await supabase.from("blog_posts").update({ published: !current }).eq("id", id);
    setPosts(posts.map(p => p.id === id ? { ...p, published: !current } : p));
  };

  const toggleFeatured = async (id: string, current: boolean | null) => {
    await supabase.from("blog_posts").update({ featured: !current }).eq("id", id);
    setPosts(posts.map(p => p.id === id ? { ...p, featured: !current } : p));
  };

  const deletePost = async (id: string) => {
    if (!confirm("Delete this post permanently?")) return;
    setDeleting(id);
    await supabase.from("blog_posts").delete().eq("id", id);
    setPosts(posts.filter(p => p.id !== id));
    setDeleting(null);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login");
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;
  if (!user) return null;

  const published = posts.filter(p => p.published).length;
  const drafts = posts.filter(p => !p.published).length;

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Raulji Group" className="h-8 w-auto" />
            <span className="font-semibold text-secondary hidden sm:block">Admin Panel</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:block">{user.email}</span>
            <Link to="/" target="_blank">
              <Button variant="outline" size="sm">View Site</Button>
            </Link>
            <Button variant="outline" size="sm" onClick={handleSignOut} className="gap-1">
              <LogOut className="w-4 h-4" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          <div className="glass-card rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 brand-gradient rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-muted-foreground text-sm">Total Posts</span>
            </div>
            <div className="text-3xl font-bold text-secondary">{posts.length}</div>
          </div>
          <div className="glass-card rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <span className="text-muted-foreground text-sm">Published</span>
            </div>
            <div className="text-3xl font-bold text-secondary">{published}</div>
          </div>
          <div className="glass-card rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-orange-400 rounded-xl flex items-center justify-center">
                <EyeOff className="w-5 h-5 text-white" />
              </div>
              <span className="text-muted-foreground text-sm">Drafts</span>
            </div>
            <div className="text-3xl font-bold text-secondary">{drafts}</div>
          </div>
        </div>

        {/* Blog Posts Table */}
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-xl font-bold text-secondary">Blog Posts</h2>
            <Link to="/admin/blog/new">
              <Button variant="hero" size="sm" className="gap-2">
                <Plus className="w-4 h-4" /> New Post
              </Button>
            </Link>
          </div>

          {postsLoading ? (
            <div className="p-12 text-center">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            </div>
          ) : posts.length === 0 ? (
            <div className="p-12 text-center">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">No blog posts yet.</p>
              <Link to="/admin/blog/new">
                <Button variant="hero">Create Your First Post</Button>
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">Title</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground hidden md:table-cell">Category</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground hidden sm:table-cell">Date</th>
                    <th className="text-center px-4 py-3 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-center px-4 py-3 text-sm font-medium text-muted-foreground">Featured</th>
                    <th className="text-right px-6 py-3 text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr key={post.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-medium text-secondary text-sm line-clamp-1">{post.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">/blog/{post.slug}</p>
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        <span className="inline-block px-2 py-1 bg-accent rounded-full text-xs">{post.category || "General"}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground hidden sm:table-cell">
                        {new Date(post.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button
                          onClick={() => togglePublished(post.id, post.published)}
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                            post.published ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                          }`}
                        >
                          {post.published ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                          {post.published ? "Live" : "Draft"}
                        </button>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button onClick={() => toggleFeatured(post.id, post.featured)}>
                          {post.featured
                            ? <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 mx-auto" />
                            : <StarOff className="w-5 h-5 text-muted-foreground mx-auto hover:text-yellow-500 transition-colors" />
                          }
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Link to={`/admin/blog/${post.id}`}>
                            <Button variant="outline" size="sm" className="gap-1">
                              <PenSquare className="w-3 h-3" /> Edit
                            </Button>
                          </Link>
                          <Button
                            variant="outline" size="sm"
                            onClick={() => deletePost(post.id)}
                            disabled={deleting === post.id}
                            className="gap-1 text-red-600 border-red-200 hover:bg-red-50"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
