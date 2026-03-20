"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, PenSquare } from "lucide-react";
import { useState } from "react";

const categories = ["All Posts", "Retirement", "Health Insurance", "Expat Tips", "Tax & Insurance"];

type Post = {
  slug: string;
  meta: { title: string; category: string; excerpt: string; readingTime: string; date?: string };
};

export function BlogListingClient({ posts, locale }: { posts: Post[]; locale: string }) {
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const filtered = activeCategory === "All Posts"
    ? posts
    : posts.filter((p) => p.meta.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-20">
      {/* Hero */}
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,160,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="container px-4 max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-teal/20 text-teal text-sm font-bold px-5 py-2 rounded-full mb-8 border border-teal/30">
              <PenSquare className="w-4 h-4" /> Expert Insights &amp; Guides
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 tracking-tight">
              Blog &amp; Insights
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
              Expert knowledge on pensions, health insurance, tax advantages, and navigating Germany as an expat.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container px-4 max-w-6xl mx-auto py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-navy text-white shadow-md shadow-navy/20"
                  : "bg-white border border-border/60 text-navy hover:border-teal/40 hover:text-teal shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <Link href={`/${locale}/blog/${post.slug}`} className="block h-full">
                  <div className="bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/60 h-full overflow-hidden flex flex-col group">
                    <div className="h-52 bg-gradient-to-br from-navy to-navy/80 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,160,0.3)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="text-6xl opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">
                        {index % 3 === 0 ? "📊" : index % 3 === 1 ? "🏥" : "🌍"}
                      </div>
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-teal/10 text-teal text-xs font-bold px-3 py-1.5 rounded-full">{post.meta.category}</span>
                        <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                          <Clock className="w-3 h-3" /> {post.meta.readingTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold font-heading text-navy mb-3 group-hover:text-teal transition-colors leading-tight">
                        {post.meta.title}
                      </h2>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                        {post.meta.excerpt}
                      </p>
                      <div className="text-sm font-bold text-teal mt-auto inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-border">
            <p className="text-4xl mb-4">📝</p>
            <h3 className="text-2xl font-bold text-navy mb-2">No articles yet in this category</h3>
            <p className="text-muted-foreground">Check back soon — new content is being written.</p>
            <button onClick={() => setActiveCategory("All Posts")} className="mt-6 bg-navy text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-teal transition-colors">
              View All Posts
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
