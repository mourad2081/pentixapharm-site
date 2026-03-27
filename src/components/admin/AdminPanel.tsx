"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PlusCircle, FileText, Trash2, Eye, LogOut, Terminal,
  Save, AlertCircle, CheckCircle2, Lock, ChevronRight
} from "lucide-react";

// Password is validated server-side via /api/admin-auth — never exposed in client bundle

type Post = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  date: string;
};

const CATEGORIES = ["Retirement", "Health Insurance", "Expat Tips", "Tax & Insurance", "Life Insurance"];

const defaultPost: Post = {
  title: "",
  slug: "",
  category: "Retirement",
  excerpt: "",
  content: `# Your Article Title

Write your article content here using **Markdown**.

## Section 1
Your content...

## Section 2
More content...
`,
  date: new Date().toISOString().split("T")[0],
};

export function AdminPanel() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(false);
  const [view, setView] = useState<"dashboard" | "new" | "terminal">("dashboard");
  const [post, setPost] = useState<Post>({ ...defaultPost });
  const [savedPosts, setSavedPosts] = useState<Post[]>([]);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<{ cmd: string; output: string }[]>([
    { cmd: "", output: "Next Gen Capital Admin Terminal v1.0.0\nType 'help' for available commands.\n" },
  ]);

  useEffect(() => {
    const stored = localStorage.getItem("Next Gen Capital_blog_posts");
    if (stored) setSavedPosts(JSON.parse(stored));
    const auth = sessionStorage.getItem("Next Gen Capital_admin_auth");
    if (auth === "true") setAuthed(true);
  }, []);

  const handleLogin = async () => {
    try {
      const res = await fetch("/api/admin-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        setAuthed(true);
        sessionStorage.setItem("Next Gen Capital_admin_auth", "true");
      } else {
        setAuthError(true);
        setTimeout(() => setAuthError(false), 2000);
      }
    } catch {
      setAuthError(true);
      setTimeout(() => setAuthError(false), 2000);
    }
  };

  const handleLogout = () => {
    setAuthed(false);
    sessionStorage.removeItem("Next Gen Capital_admin_auth");
  };

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const handleSave = async () => {
    if (!post.title || !post.content) return;
    setSaveStatus("saving");
    await new Promise((r) => setTimeout(r, 800));
    const newPost = { ...post, slug: post.slug || generateSlug(post.title) };
    const updated = [...savedPosts.filter((p) => p.slug !== newPost.slug), newPost];
    setSavedPosts(updated);
    localStorage.setItem("Next Gen Capital_blog_posts", JSON.stringify(updated));
    setSaveStatus("saved");
    setTimeout(() => setSaveStatus("idle"), 3000);
  };

  const handleDelete = (slug: string) => {
    const updated = savedPosts.filter((p) => p.slug !== slug);
    setSavedPosts(updated);
    localStorage.setItem("Next Gen Capital_blog_posts", JSON.stringify(updated));
  };

  const runTerminalCommand = (cmd: string) => {
    const parts = cmd.trim().split(" ");
    const command = parts[0].toLowerCase();
    let output = "";

    if (command === "help") {
      output = `Available commands:
  posts list          — List all saved blog post titles
  posts count         — Number of posts saved
  posts delete <slug> — Delete a post by slug
  new post            — Open the new post editor
  clear               — Clear terminal history
  logout              — Log out of admin panel
  date                — Show current date/time`;
    } else if (command === "clear") {
      setTerminalHistory([{ cmd: "", output: "Terminal cleared.\n" }]);
      return;
    } else if (command === "logout") {
      output = "Logging out...";
      setTimeout(() => handleLogout(), 800);
    } else if (command === "date") {
      output = new Date().toLocaleString("en-GB", { timeZone: "Europe/Germany" }) + " (Germany)";
    } else if (command === "posts") {
      if (parts[1] === "list") {
        output = savedPosts.length === 0
          ? "No posts saved yet."
          : savedPosts.map((p, i) => `${i + 1}. [${p.slug}] ${p.title}`).join("\n");
      } else if (parts[1] === "count") {
        output = `Total posts: ${savedPosts.length}`;
      } else if (parts[1] === "delete" && parts[2]) {
        const exists = savedPosts.find((p) => p.slug === parts[2]);
        if (exists) {
          handleDelete(parts[2]);
          output = `Deleted post: "${exists.title}"`;
        } else {
          output = `Error: No post found with slug "${parts[2]}"`;
        }
      } else {
        output = "Usage: posts [list|count|delete <slug>]";
      }
    } else if (command === "new") {
      output = "Opening post editor...";
      setTimeout(() => setView("new"), 500);
    } else {
      output = `Command not found: "${command}". Type 'help' for available commands.`;
    }

    setTerminalHistory((prev) => [...prev, { cmd, output }]);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;
    runTerminalCommand(terminalInput);
    setTerminalInput("");
  };

  // --- LOGIN SCREEN ---
  if (!authed) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,160,0.08)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md"
        >
          <div className="flex flex-col items-center text-center mb-8">
            <div className="p-4 rounded-2xl bg-navy mb-5">
              <Lock className="w-8 h-8 text-teal" />
            </div>
            <h1 className="text-3xl font-heading font-black text-navy mb-2">Admin Login</h1>
            <p className="text-muted-foreground text-sm">Next Gen Capital Advisor — Blog Management</p>
          </div>

          <div className="space-y-4">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className={`w-full h-14 px-5 rounded-2xl border-2 text-base font-medium focus:outline-none transition-colors ${
                authError ? "border-red-400 bg-red-50" : "border-border focus:border-teal"
              }`}
            />
            <AnimatePresence>
              {authError && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="text-red-500 text-sm font-medium flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4" /> Incorrect password. Try again.
                </motion.p>
              )}
            </AnimatePresence>
            <button
              onClick={handleLogin}
              className="w-full h-14 bg-navy hover:bg-navy/90 text-white font-bold rounded-2xl text-base transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Sign In →
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // --- MAIN ADMIN PANEL ---
  return (
    <div className="min-h-screen bg-[#FAF9F6] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-navy text-white flex flex-col fixed top-0 left-0 h-screen z-40">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-teal/20"><FileText className="w-5 h-5 text-teal" /></div>
            <div>
              <p className="font-bold text-sm">Admin Panel</p>
              <p className="text-slate-400 text-xs">Blog Manager</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {[
            { id: "dashboard", icon: FileText, label: "All Posts" },
            { id: "new", icon: PlusCircle, label: "New Article" },
            { id: "terminal", icon: Terminal, label: "Terminal" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => { setView(item.id as typeof view); setPost({ ...defaultPost }); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                view === item.id ? "bg-teal text-white shadow-lg" : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
              {view === item.id && <ChevronRight className="w-4 h-4 ml-auto" />}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="bg-white/5 rounded-xl p-3 mb-3 text-center">
            <p className="text-xs text-slate-400 font-medium">{savedPosts.length} article{savedPosts.length !== 1 ? "s" : ""} published</p>
          </div>
          <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 text-slate-400 hover:text-red-400 text-sm font-medium py-2 transition-colors">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        <AnimatePresence mode="wait">

          {/* DASHBOARD */}
          {view === "dashboard" && (
            <motion.div key="dashboard" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h1 className="text-3xl font-heading font-black text-navy">All Articles</h1>
                  <p className="text-muted-foreground mt-1">{savedPosts.length} total posts</p>
                </div>
                <button
                  onClick={() => setView("new")}
                  className="flex items-center gap-2 bg-navy text-white px-6 h-12 rounded-2xl font-bold text-sm hover:-translate-y-0.5 transition-all shadow-lg"
                >
                  <PlusCircle className="w-4 h-4" /> Write New Article
                </button>
              </div>

              {savedPosts.length === 0 ? (
                <div className="text-center py-32 bg-white rounded-3xl border border-border">
                  <FileText className="w-16 h-16 text-slate-200 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-navy mb-3">No articles yet</h3>
                  <p className="text-muted-foreground mb-8">Create your first article to get started.</p>
                  <button onClick={() => setView("new")} className="bg-teal text-white px-8 h-12 rounded-2xl font-bold">
                    Write First Article
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {savedPosts.map((p, i) => (
                    <motion.div key={p.slug} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                      className="bg-white rounded-2xl border border-border/60 p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow group"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="bg-teal/10 text-teal text-xs font-bold px-3 py-1 rounded-full">{p.category}</span>
                          <span className="text-xs text-muted-foreground">{p.date}</span>
                        </div>
                        <h3 className="font-bold text-navy text-lg group-hover:text-teal transition-colors">{p.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{p.excerpt}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-6">
                        <button onClick={() => { setPost(p); setView("new"); }} className="p-2.5 rounded-xl hover:bg-teal/10 text-teal transition-colors" title="Edit">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(p.slug)} className="p-2.5 rounded-xl hover:bg-red-50 text-red-400 transition-colors" title="Delete">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* NEW POST EDITOR */}
          {view === "new" && (
            <motion.div key="new" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-heading font-black text-navy">{post.slug ? "Edit Article" : "New Article"}</h1>
                  <p className="text-muted-foreground mt-1">Write in Markdown. All changes are saved locally.</p>
                </div>
                <button
                  onClick={handleSave}
                  disabled={!post.title || !post.content || saveStatus === "saving"}
                  className={`flex items-center gap-2 px-7 h-12 rounded-2xl font-bold text-sm transition-all shadow-lg ${
                    saveStatus === "saved"
                      ? "bg-green-500 text-white"
                      : saveStatus === "saving"
                      ? "bg-slate-300 text-white cursor-wait"
                      : "bg-teal text-white hover:-translate-y-0.5"
                  }`}
                >
                  {saveStatus === "saved" ? (
                    <><CheckCircle2 className="w-4 h-4" /> Saved!</>
                  ) : saveStatus === "saving" ? (
                    "Saving..."
                  ) : (
                    <><Save className="w-4 h-4" /> Save Article</>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Meta fields */}
                <div className="space-y-5 bg-white rounded-3xl border border-border/60 p-7 shadow-sm self-start">
                  <h3 className="font-bold text-navy text-sm uppercase tracking-wider mb-5">Article Details</h3>
                  <div>
                    <label className="text-xs font-bold text-navy uppercase tracking-wider block mb-2">Title</label>
                    <input
                      value={post.title}
                      onChange={(e) => setPost({ ...post, title: e.target.value, slug: post.slug || generateSlug(e.target.value) })}
                      className="w-full h-11 px-4 rounded-xl border border-border text-sm font-medium focus:outline-none focus:border-teal transition-colors"
                      placeholder="Article title..."
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-navy uppercase tracking-wider block mb-2">URL Slug</label>
                    <input
                      value={post.slug}
                      onChange={(e) => setPost({ ...post, slug: generateSlug(e.target.value) })}
                      className="w-full h-11 px-4 rounded-xl border border-border text-sm font-mono text-muted-foreground focus:outline-none focus:border-teal transition-colors"
                      placeholder="auto-generated-from-title"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-navy uppercase tracking-wider block mb-2">Category</label>
                    <select
                      value={post.category}
                      onChange={(e) => setPost({ ...post, category: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl border border-border text-sm font-medium focus:outline-none focus:border-teal transition-colors bg-white"
                    >
                      {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-navy uppercase tracking-wider block mb-2">Publish Date</label>
                    <input
                      type="date"
                      value={post.date}
                      onChange={(e) => setPost({ ...post, date: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl border border-border text-sm font-medium focus:outline-none focus:border-teal transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-navy uppercase tracking-wider block mb-2">Excerpt (1-2 sentences)</label>
                    <textarea
                      value={post.excerpt}
                      onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-border text-sm font-medium focus:outline-none focus:border-teal transition-colors resize-none"
                      placeholder="Short summary shown in the blog listing..."
                    />
                  </div>
                </div>

                {/* Right: Markdown Editor */}
                <div className="lg:col-span-2 bg-white rounded-3xl border border-border/60 p-7 shadow-sm">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="ml-auto text-xs font-mono text-muted-foreground">Markdown Editor</span>
                  </div>
                  <textarea
                    value={post.content}
                    onChange={(e) => setPost({ ...post, content: e.target.value })}
                    className="w-full h-[600px] px-5 py-4 rounded-2xl border border-border/60 text-sm font-mono leading-relaxed focus:outline-none focus:border-teal transition-colors resize-none bg-slate-50"
                    placeholder="# Write your article in Markdown..."
                  />
                  <p className="text-xs text-muted-foreground mt-3 text-right">
                    {post.content.split(/\s+/).filter(Boolean).length} words · {post.content.length} characters
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* TERMINAL */}
          {view === "terminal" && (
            <motion.div key="terminal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="mb-8">
                <h1 className="text-3xl font-heading font-black text-navy">Admin Terminal</h1>
                <p className="text-muted-foreground mt-1">Run commands to manage blog content programmatically.</p>
              </div>
              <div className="bg-navy rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                {/* Terminal top bar */}
                <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10 bg-black/20">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-xs font-mono text-slate-400">Next Gen Capital-admin@blog-terminal</span>
                </div>
                {/* Output */}
                <div className="p-6 h-[480px] overflow-y-auto font-mono text-sm space-y-3">
                  {terminalHistory.map((entry, i) => (
                    <div key={i}>
                      {entry.cmd && (
                        <div className="flex items-center gap-2">
                          <span className="text-teal font-bold">$</span>
                          <span className="text-white">{entry.cmd}</span>
                        </div>
                      )}
                      <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed pl-4 mt-1">{entry.output}</pre>
                    </div>
                  ))}
                </div>
                {/* Input */}
                <form onSubmit={handleTerminalSubmit} className="flex items-center gap-3 px-6 py-5 border-t border-white/10 bg-black/20">
                  <span className="text-teal font-bold font-mono">$</span>
                  <input
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    className="flex-1 bg-transparent text-white font-mono text-sm focus:outline-none placeholder:text-slate-600"
                    placeholder="Type a command… (try 'help')"
                    autoFocus
                    autoComplete="off"
                    spellCheck={false}
                  />
                  <button type="submit" className="text-xs font-mono text-slate-500 hover:text-teal transition-colors">
                    ↵ Enter
                  </button>
                </form>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
}

