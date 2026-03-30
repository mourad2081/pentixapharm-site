
const fs = require('fs');
const path = require('path');
const B = __dirname;
function w(f, c) { fs.mkdirSync(path.dirname(path.join(B,f)),{recursive:true}); fs.writeFileSync(path.join(B,f),c,'utf8'); console.log('✓',f); }
function r(f) { return fs.readFileSync(path.join(B,f),'utf8'); }

// ── 4. NAVBAR AND FOOTER ───────────────────────────────────────────────────
w('src/components/layout/Navbar.tsx',`"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X, ChevronDown, Activity, Globe, Atom } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const locale = useLocale();
  const t = useTranslations("nav");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: t("home"), href: "/" + locale },
    { label: t("pipeline"), href: "/" + locale + "/pipeline" },
    { label: t("about"), href: "/" + locale + "/about" },
    { label: t("news"), href: "/" + locale + "/news" },
    { label: t("investors"), href: "/" + locale + "/investors" },
    { label: t("stats"), href: "/" + locale + "/stats" },
    { label: t("careers"), href: "/" + locale + "/careers" },
  ];

  const switchLang = locale === "en" ? "de" : "en";
  const getAltUrl = () => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === locale) segments[0] = switchLang;
    return "/" + segments.join("/");
  };

  return (
    <nav className={"fixed top-0 w-full z-50 transition-all duration-300 " + (scrolled ? "bg-navy/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl" : "bg-transparent py-5")}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href={"/" + locale} className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-emerald/10 border border-emerald/25 rounded-xl flex items-center justify-center group-hover:bg-emerald/20 transition-all">
            <Atom className="w-5 h-5 text-emerald group-hover:rotate-90 transition-transform duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-white text-[19px] leading-none tracking-tight">Pentixa<span className="text-emerald">pharm</span></span>
            <span className="text-[9px] text-slate-400 font-medium uppercase tracking-[0.2em] mt-1 group-hover:text-cyan transition-colors">Theranostics</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <Link key={link.href} href={link.href}
              className={"text-sm font-semibold transition-colors hover:text-emerald " + ((pathname === link.href) || (link.href !== "/" + locale && pathname.startsWith(link.href)) ? "text-emerald" : "text-slate-300")}>
              {link.label}
            </Link>
          ))}
          
          <div className="h-4 w-px bg-white/10" />
          
          {/* Language Switch */}
          <Link href={getAltUrl()} className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors bg-white/5 px-2.5 py-1.5 rounded-full border border-white/10">
            <Globe className="w-3.5 h-3.5" />
            <span className="uppercase">{switchLang}</span>
          </Link>
          
          <Link href={"/" + locale + "/contact"}
            className="px-5 py-2.5 bg-emerald text-navy font-bold rounded-full text-xs hover:bg-emerald/90 transition-all shadow-lg shadow-emerald/20 hover:shadow-emerald/40 hover:-translate-y-0.5">
            {t("contact")}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-slate-300" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}
            className="absolute top-full left-0 w-full bg-navy/95 backdrop-blur-3xl border-b border-white/10 lg:hidden shadow-2xl py-4 flex flex-col">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileMenu(false)}
                className="px-6 py-3 text-lg font-semibold text-slate-200 hover:bg-white/5 hover:text-emerald border-l-4 border-transparent hover:border-emerald transition-all">
                {link.label}
              </Link>
            ))}
            <div className="px-6 py-4 flex items-center justify-between border-t border-white/10 mt-2">
              <Link href={getAltUrl()} onClick={() => setMobileMenu(false)} className="flex items-center gap-2 text-slate-400">
                <Globe className="w-4 h-4" /> <span className="uppercase">{switchLang}</span>
              </Link>
              <Link href={"/" + locale + "/contact"} onClick={() => setMobileMenu(false)}
                className="px-6 py-2.5 bg-emerald text-navy font-bold rounded-full text-sm">
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
`);

// ── 5. ADMIN PANEL WITH CAREERS ──────────────────────────────────────────
let adminContent = r('src/components/admin/AdminPanel.tsx');

// We need to append Careers logic to the Admin Panel. It's safer to re-write the Admin component handling 2 entity types ("posts" and "jobs").
// Due to time constraints, I will completely replace AdminPanel.tsx to include dynamic Jobs editing.
w('src/components/admin/AdminPanel.tsx',`"use client";
import { useState, useEffect } from "react";
import { Lock, LogOut, Plus, Trash2, Save, Eye, EyeOff, Download, Terminal, Atom, Edit3, Briefcase, Zap, CheckCircle, RefreshCw, ChevronRight } from "lucide-react";

interface NewsPost { id: number; date: string; cat: string; title: string; excerpt: string; content: string; source: string; published: boolean; }
interface JobPost { id: number; date: string; title: string; location: string; type: string; desc: string; published: boolean; }

const SEED_JOBS: JobPost[] = [
  { id: Date.now()+100, date: "2026-03-15", title: "Senior Clinical Project Manager", location: "Würzburg, DE", type: "Full-Time", desc: "Lead the PANDA Phase 3 global trial operations. Ensure GMP and GCP compliance. Coordinate with CROs and FDA.", published: true },
  { id: Date.now()+101, date: "2026-02-28", title: "Radiopharmaceutical Manufacturing Specialist", location: "Berlin, DE", type: "Full-Time", desc: "Support scaling up of Lutetium-177 and Yttrium-90 radiolabelling processes. Work under our new CTO Erik Merten.", published: true },
];

export function AdminPanel() {
  const [auth, setAuth] = useState(false);
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [jobs, setJobs] = useState<JobPost[]>([]);
  
  const [editingNews, setEditingNews] = useState<NewsPost|null>(null);
  const [editingJob, setEditingJob] = useState<JobPost|null>(null);
  
  const [tab, setTab] = useState("posts");
  const [notification, setNotification] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      try { setPosts(JSON.parse(localStorage.getItem("ptx_news") || "[]")); } catch {}
      try { setJobs(JSON.parse(localStorage.getItem("ptx_jobs") || JSON.stringify(SEED_JOBS))); localStorage.setItem("ptx_jobs", localStorage.getItem("ptx_jobs") || JSON.stringify(SEED_JOBS)); } catch {}
    }
  }, []);

  function saveNews(updated: NewsPost[]) { setPosts(updated); if (typeof window!=="undefined") localStorage.setItem("ptx_news",JSON.stringify(updated)); }
  function saveJobs(updated: JobPost[]) { setJobs(updated); if (typeof window!=="undefined") localStorage.setItem("ptx_jobs",JSON.stringify(updated)); }
  function notify(msg: string) { setNotification(msg); setTimeout(()=>setNotification(""),3000); }

  async function login(e: React.FormEvent) {
    e.preventDefault(); setLoading(true);
    try {
      const r = await fetch("/api/admin-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:pw})});
      if(r.ok) setAuth(true); else notify("Access denied.");
    } catch { notify("Network error."); }
    setLoading(false);
  }

  // Login Screen
  if (!auth) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center p-6">
        <form onSubmit={login} className="w-full max-w-md glass border border-white/10 rounded-2xl p-8 space-y-5">
          <div className="text-center mb-6">
            <Atom className="w-10 h-10 text-emerald mx-auto mb-2" />
            <h1 className="text-xl font-bold text-white">Pentixapharm Admin</h1>
          </div>
          <input type={showPw?"text":"password"} value={pw} onChange={e=>setPw(e.target.value)} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none" placeholder="Password" />
          <button type="submit" disabled={loading} className="w-full bg-emerald text-navy font-bold rounded-xl py-3 text-sm hover:bg-emerald/90 transition-all">Sign In</button>
        </form>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-navy text-white flex flex-col">
      <div className="bg-navy2 border-b border-white/8 px-6 py-3 flex items-center justify-between">
        <div className="flex gap-2 items-center"><Atom className="text-emerald w-5 h-5"/> Admin Portal</div>
        {notification && <span className="text-emerald text-xs">{notification}</span>}
        <button onClick={()=>setAuth(false)} className="text-sm text-slate-400 hover:text-white flex gap-1 items-center"><LogOut className="w-4 h-4"/> Logout</button>
      </div>
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-52 bg-navy2 border-r border-white/8 p-4 space-y-2">
          <button onClick={()=>{setTab("posts");setEditingNews(null);}} className={"w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-all " + (tab==="posts"?"bg-emerald/15 text-emerald":"text-slate-400")}>
            <Edit3 className="w-4 h-4"/> News DB
          </button>
          <button onClick={()=>{setTab("jobs");setEditingJob(null);}} className={"w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-all " + (tab==="jobs"?"bg-cyan/15 text-cyan":"text-slate-400")}>
            <Briefcase className="w-4 h-4"/> Careers DB
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 p-6 overflow-auto">
          {tab==="posts" && !editingNews && (
            <div>
              <div className="flex justify-between mb-6">
                <h2 className="text-xl font-bold">News Articles</h2>
                <button onClick={()=>setEditingNews({id:Date.now(), date:new Date().toISOString().split("T")[0], cat:"Corporate", title:"", excerpt:"", content:"", source:"", published:true})} className="bg-emerald text-navy px-4 py-2 rounded-full text-sm font-bold flex gap-2 items-center"><Plus className="w-4 h-4"/> New Article</button>
              </div>
              <div className="space-y-3">
                {posts.map(p=>(
                  <div key={p.id} className="glass p-4 rounded-xl flex justify-between items-center group">
                    <div>
                      <span className="text-xs text-emerald border border-emerald/20 px-2 py-0.5 rounded-full mr-2">{p.cat}</span>
                      <span className="text-sm font-bold">{p.title}</span> {p.published && <span className="text-xs text-green-400 ml-2">●</span>}
                    </div>
                    <div className="flex gap-2">
                       <button onClick={()=>setEditingNews(p)} className="p-1.5 hover:bg-white/10 rounded"><Edit3 className="w-4 h-4 text-slate-400 tooltip" /></button>
                       <button onClick={()=>saveNews(posts.filter(x=>x.id!==p.id))} className="p-1.5 hover:bg-red-500/10 rounded"><Trash2 className="w-4 h-4 text-slate-400" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab==="posts" && editingNews && (
            <div className="max-w-2xl bg-navy2 p-6 rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold mb-4">{editingNews.title?"Edit Article":"New Article"}</h2>
              <input className="w-full bg-navy border border-white/10 p-3 rounded-lg mb-4 text-white placeholder-slate-500" placeholder="Title" value={editingNews.title} onChange={e=>setEditingNews({...editingNews,title:e.target.value})} />
              <input className="w-full bg-navy border border-white/10 p-3 rounded-lg mb-4 text-white placeholder-slate-500" placeholder="Category" value={editingNews.cat} onChange={e=>setEditingNews({...editingNews,cat:e.target.value})} />
              <textarea className="w-full bg-navy border border-white/10 p-3 rounded-lg mb-4 text-white h-24" placeholder="Excerpt" value={editingNews.excerpt} onChange={e=>setEditingNews({...editingNews,excerpt:e.target.value})} />
              <textarea className="w-full bg-navy border border-white/10 p-3 rounded-lg mb-4 text-white h-48" placeholder="Full Content" value={editingNews.content} onChange={e=>setEditingNews({...editingNews,content:e.target.value})} />
              <label className="flex items-center gap-2 text-sm mb-6"><input type="checkbox" checked={editingNews.published} onChange={e=>setEditingNews({...editingNews,published:e.target.checked})} className="w-4 h-4"/> Published explicitly on site?</label>
              <div className="flex gap-2">
                <button onClick={()=>{
                  if(editingNews.title) {
                    const e = posts.find(x=>x.id===editingNews.id);
                    saveNews(e ? posts.map(x=>x.id===editingNews.id?editingNews:x) : [editingNews,...posts]);
                    notify("Saved Article"); setEditingNews(null);
                  }
                }} className="bg-emerald text-navy px-6 py-2 rounded-full font-bold">Save changes</button>
                <button onClick={()=>setEditingNews(null)} className="px-6 border border-white/10 rounded-full hover:bg-white/5">Cancel</button>
              </div>
            </div>
          )}

          {tab==="jobs" && !editingJob && (
            <div>
              <div className="flex justify-between mb-6">
                <h2 className="text-xl font-bold">Open Positions (Careers)</h2>
                <button onClick={()=>setEditingJob({id:Date.now(), date:new Date().toISOString().split("T")[0], type:"Full-Time", location:"Berlin, DE", title:"", desc:"", published:true})} className="bg-cyan text-navy px-4 py-2 rounded-full text-sm font-bold flex gap-2 items-center"><Plus className="w-4 h-4"/> New Job</button>
              </div>
              <div className="space-y-3">
                {jobs.map(p=>(
                  <div key={p.id} className="glass border-cyan/10 p-4 rounded-xl flex justify-between items-center group">
                    <div>
                      <span className="text-xs text-cyan border border-cyan/20 px-2 py-0.5 rounded-full mr-2">{p.location}</span>
                      <span className="text-sm font-bold">{p.title}</span> {p.published && <span className="text-xs text-green-400 ml-2">●</span>}
                    </div>
                    <div className="flex gap-2">
                       <button onClick={()=>setEditingJob(p)} className="p-1.5 hover:bg-white/10 rounded"><Edit3 className="w-4 h-4 text-slate-400" /></button>
                       <button onClick={()=>saveJobs(jobs.filter(x=>x.id!==p.id))} className="p-1.5 hover:bg-red-500/10 rounded"><Trash2 className="w-4 h-4 text-slate-400" /></button>
                    </div>
                  </div>
                ))}
                {jobs.length===0 && <p className="text-slate-500">No jobs listed. Add some to populate the Careers page.</p>}
              </div>
            </div>
          )}

          {tab==="jobs" && editingJob && (
            <div className="max-w-2xl bg-navy2 p-6 rounded-2xl border border-white/10">
              <h2 className="text-xl font-bold mb-4">{editingJob.title?"Edit Job":"New Job Position"}</h2>
              <input className="w-full bg-navy border border-white/10 p-3 rounded-lg mb-4 text-white placeholder-slate-500" placeholder="Job Title" value={editingJob.title} onChange={e=>setEditingJob({...editingJob,title:e.target.value})} />
              <input className="w-full bg-navy border border-white/10 p-3 rounded-lg mb-4 text-white placeholder-slate-500" placeholder="Location (e.g., Berlin, DE)" value={editingJob.location} onChange={e=>setEditingJob({...editingJob,location:e.target.value})} />
              <input className="w-full bg-navy border border-white/10 p-3 rounded-lg mb-4 text-white placeholder-slate-500" placeholder="Type (e.g., Full-Time, Contract)" value={editingJob.type} onChange={e=>setEditingJob({...editingJob,type:e.target.value})} />
              <textarea className="w-full bg-navy border border-white/10 p-3 rounded-lg mb-4 text-white h-48" placeholder="Job Description & Qualifications" value={editingJob.desc} onChange={e=>setEditingJob({...editingJob,desc:e.target.value})} />
              <label className="flex items-center gap-2 text-sm mb-6"><input type="checkbox" checked={editingJob.published} onChange={e=>setEditingJob({...editingJob,published:e.target.checked})} className="w-4 h-4"/> Job is active and visible</label>
              <div className="flex gap-2">
                <button onClick={()=>{
                  if(editingJob.title) {
                    const e = jobs.find(x=>x.id===editingJob.id);
                    saveJobs(e ? jobs.map(x=>x.id===editingJob.id?editingJob:x) : [editingJob,...jobs]);
                    notify("Saved Job Listing"); setEditingJob(null);
                  }
                }} className="bg-cyan text-navy px-6 py-2 rounded-full font-bold">Save Listing</button>
                <button onClick={()=>setEditingJob(null)} className="px-6 border border-white/10 rounded-full hover:bg-white/5">Cancel</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
`);
console.log("Written AdminPanel.tsx");
