import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ShieldCheck, CalendarClock, ChevronLeft, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string; locale: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} | ERGO Ratgeber`,
    description: post.meta.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: { locale: string; slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-white">
      
      {/* Blog Detail Hero */}
      <section className="bg-[#FAF9F6] pt-32 pb-20 border-b border-border/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#D4A853_0%,_transparent_50%)] opacity-[0.05]" />
        
        <div className="container px-4 max-w-4xl mx-auto relative z-10 text-center">
          <Link href={`/${params.locale}/blog`} className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-navy transition-colors mb-12">
            <ChevronLeft className="w-4 h-4 mr-1" /> Zurück zur Übersicht
          </Link>
          
          <div>
            <span className="bg-teal/10 border border-teal/20 text-teal text-sm font-bold px-5 py-2 rounded-full mb-8 inline-block tracking-wide uppercase">{post.meta.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-navy mb-10 leading-[1.15] tracking-tight text-balance">{post.meta.title}</h1>
          
          <div className="flex items-center justify-center gap-6 text-muted-foreground font-medium text-sm">
            <div className="flex items-center gap-2"><CalendarClock className="w-4 h-4" /> {new Date(post.meta.date).toLocaleDateString("de-DE")}</div>
            <div className="w-1.5 h-1.5 bg-border rounded-full" />
            <div>{post.meta.readingTime}</div>
          </div>
        </div>
      </section>

      {/* Embedded Next-MDX-Remote Body */}
      <article className="container px-4 max-w-3xl mx-auto py-20 prose prose-lg prose-slate prose-headings:font-heading prose-headings:font-bold prose-headings:text-navy prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-12 prose-a:text-teal hover:prose-a:text-navy prose-img:rounded-3xl prose-img:shadow-lg prose-blockquote:border-l-4 prose-blockquote:border-gold prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-li:marker:text-teal">
        <MDXRemote source={post.content} />
      </article>

      {/* Author Card & CTA Bottom */}
      <section className="bg-background pt-10 pb-32">
        <div className="container px-4 max-w-3xl mx-auto">
          
          <div className="flex items-center gap-6 p-8 border border-border/60 rounded-[2rem] mb-12 bg-white shadow-sm">
            <div className="w-20 h-20 rounded-full bg-slate-200 border-2 border-border shrink-0" />
            <div>
              <h4 className="font-bold font-heading text-navy text-xl">Mourad Labadi</h4>
              <p className="text-sm text-muted-foreground mt-1">Unabhängiger ERGO Versicherungsberater in Berlin. Experte für Expat-Finanzen, Altersvorsorge und PKV.</p>
            </div>
          </div>

          <div className="bg-navy rounded-[2.5rem] p-12 text-center text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#0EA5A0_0%,_transparent_70%)] opacity-40 group-hover:opacity-60 transition-opacity duration-1000" />
            <ShieldCheck className="w-16 h-16 text-teal mx-auto mb-6 relative z-10" />
            <h3 className="text-3xl md:text-4xl font-heading font-black mb-6 relative z-10 text-balance">Klingt das nach Ihrer aktuellen Situation?</h3>
            <p className="text-lg text-slate-300 mb-10 relative z-10 max-w-xl mx-auto font-medium leading-relaxed">Lassen Sie uns Ihre individuelle Strategie in einem komplett kostenfreien und unverbindlichen Erstgespräch gemeinsam analysieren.</p>
            <Link href={`/${params.locale}/termin`} className="inline-flex items-center justify-center bg-teal text-white font-bold px-10 py-5 text-xl rounded-full shadow-[0_20px_40px_rgba(8,_112,_184,_0.5)] hover:bg-white hover:text-teal transition-all duration-300 hover:-translate-y-1 relative z-10">
              Jetzt Beratungstermin wählen <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
