
const fs = require('fs');
const path = require('path');
const B = __dirname;
const w = (f, c) => { fs.mkdirSync(path.dirname(path.join(B,f)),{recursive:true}); fs.writeFileSync(path.join(B,f),c,'utf8'); console.log('✓',f); };

// ── ADMIN PANEL ───────────────────────────────────────────────────────────────
w('src/components/admin/AdminPanel.tsx',`"use client";
import { useState, useEffect } from "react";
import { Lock, LogOut, Plus, Trash2, Save, Eye, EyeOff, Download, Terminal, Atom, Edit3, Tag, AlertTriangle, CheckCircle, RefreshCw, ChevronRight } from "lucide-react";

interface NewsPost {
  id: number;
  date: string;
  cat: string;
  title: string;
  excerpt: string;
  content: string;
  source: string;
  published: boolean;
}

const SEED_IMPORT: NewsPost[] = [
  { id:Date.now()+1, date:"2026-03-31", cat:"Corporate", title:"Erik Merten Appointed to Executive Board as Chief Technology Officer", excerpt:"Pentixapharm Holding AG strengthens its Executive Board with the appointment of Erik Merten as Chief Technology Officer (CTO).", content:"Pentixapharm Holding AG today announced the appointment of Erik Merten as Chief Technology Officer (CTO), effective immediately. Mr. Merten brings deep expertise in radiopharmaceutical manufacturing, GMP operations and scale-up processes that will be critical as Pentixapharm prepares for commercial readiness. His appointment follows the clearance of the FDA's 30-day review of both the PentixaFor and PentixaTher INDs in January-February 2026 and the ongoing preparations for the Phase 3 PANDA study in primary aldosteronism.", source:"Press Release", published:true },
  { id:Date.now()+2, date:"2026-02-25", cat:"Regulatory", title:'FDA Issues "Study May Proceed" for Dual Theranostic INDs in CXCR4 Hemato-Oncology', excerpt:"The U.S. FDA completed its 30-day safety review and issued 'Study May Proceed' for both PentixaFor and PentixaTher INDs in AML and Multiple Myeloma.", content:"Pentixapharm Holding AG announces that the U.S. Food and Drug Administration (FDA) has completed its mandatory 30-day safety review for both Investigational New Drug (IND) applications. The FDA issued 'Study May Proceed' notifications for: (1) [68Ga]Ga-PentixaFor in Acute Myeloid Leukemia (AML) and Multiple Myeloma as a diagnostic companion; (2) [177Lu]Lu-PentixaTher in AML and Multiple Myeloma as a targeted radioligand therapy. These clearances enable the first U.S. use of the Pentixapharm theranostic pair in haematological malignancies.", source:"Press Release", published:true },
  { id:Date.now()+3, date:"2026-02-05", cat:"Clinical", title:"Phase 2 Data Confirm PentixaFor as Superior Non-invasive Diagnostic for Primary Aldosteronism", excerpt:"Prospective Phase 2 data confirm [68Ga]Ga-PentixaFor PET/CT is superior to adrenal vein sampling (AVS) in lateralising primary aldosteronism.", content:"Pentixapharm today reports results from the prospective Phase 2 clinical study evaluating [68Ga]Ga-PentixaFor PET/CT imaging in patients with biochemically confirmed primary aldosteronism. Key results: 28 of 29 patients (97%) preferred PET/CT over adrenal vein sampling. PentixaFor correctly lateralised in 93% of cases vs 89% for AVS. Zero serious adverse events related to the investigational imaging agent. These findings strongly support the utility of PentixaFor as a first-line, non-invasive tool for subtype classification of primary aldosteronism — a condition affecting an estimated 5-10% of all hypertensive patients and a leading cause of treatment-resistant hypertension.", source:"Clinical Data Release", published:true },
  { id:Date.now()+4, date:"2025-09-26", cat:"Clinical", title:"PentixaTher Advances to 4th of 5 Dose Levels in PENTILULA AML Trial", excerpt:"The PENTILULA Phase 1/2 trial has progressed to dose level 4 of 5, with no new safety signals identified at doses 1-3.", content:"Pentixapharm announces that the independent Data Safety Monitoring Board (DSMB) for the PENTILULA clinical trial has approved escalation to the 4th of 5 planned dose levels. The PENTILULA study evaluates [177Lu]Lu-PentixaTher as a CXCR4-targeted bone marrow conditioning agent in patients with AML or high-risk myelodysplastic syndrome (MDS) undergoing allogeneic stem cell transplantation. At doses 1 through 3, the DSMB identified a favourable safety profile with no dose-limiting toxicities. Engraftment rates and early treatment outcomes are in line with historical benchmarks.", source:"Clinical Update", published:true },
  { id:Date.now()+5, date:"2025-06-19", cat:"Clinical", title:"GT-008 Anti-CD24 Antibody Preclinical Data Presented at AACR Annual Meeting 2025", excerpt:"First preclinical data for GT-008, a glycan-dependent anti-CD24 mAb labelled with Lu-177, show complete tumour responses in breast cancer mouse models.", content:"Pentixapharm today presented the first preclinical efficacy and mechanism-of-action data for GT-008 at the AACR Annual Meeting 2025. GT-008 is a first-in-class monoclonal antibody directed against a tumour-associated O-glycoform of CD24, distinguishing it from existing anti-CD24 approaches by its glycan-dependent binding selectivity. Key preclinical findings: Single-dose complete tumour regression in 3 of 4 breast cancer mouse models. High tumour-to-background ratios when radiolabelled with Lutetium-177. No binding observed to normal human tissues at therapeutic concentrations.", source:"Conference Presentation", published:true },
];

const CATS = ["All","Clinical","Corporate","Financial","Regulatory"];

export function AdminPanel() {
  const [auth, setAuth] = useState(false);
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [authErr, setAuthErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [editing, setEditing] = useState<NewsPost|null>(null);
  const [tab, setTab] = useState("posts");
  const [log, setLog] = useState<string[]>(["Pentixapharm Admin Terminal v1.0 — type 'help' for commands"]);
  const [cmd, setCmd] = useState("");
  const [imported, setImported] = useState(false);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      try { setPosts(JSON.parse(localStorage.getItem("ptx_news") || "[]")); } catch {}
    }
  }, []);

  function save(updated: NewsPost[]) {
    setPosts(updated);
    if (typeof window !== "undefined") localStorage.setItem("ptx_news",JSON.stringify(updated));
  }

  function notify(msg: string) {
    setNotification(msg);
    setTimeout(()=>setNotification(""),3000);
  }

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setAuthErr("");
    try {
      const r = await fetch("/api/admin-auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:pw})});
      if (r.ok) { setAuth(true); } else { setAuthErr("Invalid password. Access denied."); }
    } catch { setAuthErr("Network error. Please try again."); }
    setLoading(false);
  }

  function newPost() {
    const blank: NewsPost = { id:Date.now(), date:new Date().toISOString().split("T")[0], cat:"Clinical", title:"", excerpt:"", content:"", source:"Press Release", published:false };
    setEditing(blank);
    setTab("editor");
  }

  function savePost() {
    if (!editing) return;
    const exists = posts.find(p=>p.id===editing.id);
    const updated = exists ? posts.map(p=>p.id===editing.id?editing:p) : [editing,...posts];
    save(updated);
    setEditing(null);
    setTab("posts");
    notify("Article saved successfully.");
  }

  function deletePost(id: number) {
    save(posts.filter(p=>p.id!==id));
    notify("Article deleted.");
  }

  function importSeed() {
    const existing = new Set(posts.map(p=>p.title));
    const toAdd = SEED_IMPORT.filter(s=>!existing.has(s.title)).map((s,i)=>({...s,id:Date.now()+i}));
    if (toAdd.length===0) { notify("All seed articles already imported."); return; }
    save([...toAdd,...posts]);
    setImported(true);
    notify(\`Imported \${toAdd.length} articles from Pentixapharm.com archive.\`);
  }

  function runCmd() {
    const c = cmd.trim().toLowerCase();
    setCmd("");
    setLog(prev=>[...prev, "> " + cmd]);
    if (c==="help") setLog(prev=>[...prev,"Commands: list | clear | import | stats | logout"]);
    else if (c==="list") setLog(prev=>[...prev,...posts.map(p=>\`[\${p.id}] \${p.title.slice(0,50)}...\`)]);
    else if (c==="clear") setLog(["Terminal cleared."]);
    else if (c==="import") { importSeed(); setLog(prev=>[...prev,"Import initiated."]); }
    else if (c==="stats") setLog(prev=>[...prev,\`Total articles: \${posts.length} | Published: \${posts.filter(p=>p.published).length}\`]);
    else if (c==="logout") { setAuth(false); setLog(["Logged out."]); }
    else setLog(prev=>[...prev,"Unknown command. Type 'help'."]);
  }

  // ── Login Screen ─────────────────────────────────────────────────────────
  if (!auth) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald/15 border border-emerald/25 rounded-2xl mb-4">
              <Atom className="w-7 h-7 text-emerald" />
            </div>
            <h1 className="text-2xl font-heading font-bold text-white">Pentixapharm Admin</h1>
            <p className="text-slate-500 text-sm mt-1">Secure content management portal</p>
          </div>

          <form onSubmit={login} className="glass border border-white/10 rounded-2xl p-8 space-y-5">
            <div>
              <label className="block text-xs text-slate-400 mb-2">Admin Password</label>
              <div className="relative">
                <input type={showPw?"text":"password"} value={pw} onChange={e=>setPw(e.target.value)} required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-11 text-white text-sm outline-none focus:border-emerald/50 transition-all"
                  placeholder="Enter secure password" />
                <button type="button" onClick={()=>setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors p-1">
                  {showPw?<EyeOff className="w-4 h-4"/>:<Eye className="w-4 h-4"/>}
                </button>
              </div>
            </div>

            {authErr && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                <AlertTriangle className="w-4 h-4 shrink-0" /> {authErr}
              </div>
            )}

            <button type="submit" disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-emerald text-navy font-bold rounded-xl hover:bg-emerald/90 transition-all disabled:opacity-60 shadow-lg shadow-emerald/20">
              {loading ? <><RefreshCw className="w-4 h-4 animate-spin"/>Authenticating…</> : <><Lock className="w-4 h-4"/>Sign In Securely</>}
            </button>
          </form>

          <p className="text-center text-slate-600 text-xs mt-6">Pentixapharm Holding AG · Admin Portal · Protected</p>
        </div>
      </div>
    );
  }

  // ── Admin Dashboard ───────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Top bar */}
      <div className="bg-navy2 border-b border-white/8 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-emerald/15 border border-emerald/25 rounded-lg flex items-center justify-center">
            <Atom className="w-4 h-4 text-emerald" />
          </div>
          <span className="font-heading font-bold text-white text-sm">Pentixapharm <span className="text-emerald">Admin</span></span>
          <span className="text-xs text-emerald bg-emerald/10 border border-emerald/20 px-2 py-0.5 rounded-full">Authenticated</span>
        </div>
        {notification && (
          <span className="flex items-center gap-1.5 text-xs text-emerald bg-emerald/10 border border-emerald/20 px-3 py-1.5 rounded-full">
            <CheckCircle className="w-3 h-3" /> {notification}
          </span>
        )}
        <button onClick={()=>setAuth(false)} className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors">
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </div>

      <div className="flex" style={{minHeight:"calc(100vh - 52px)"}}>
        {/* Sidebar */}
        <div className="w-52 shrink-0 bg-navy2 border-r border-white/8 p-4 space-y-1">
          {[
            { id:"posts", label:"News Articles", icon:Edit3 },
            { id:"editor", label:"New Article", icon:Plus },
            { id:"import", label:"Import Tool", icon:Download },
            { id:"terminal", label:"Terminal", icon:Terminal },
          ].map(t => (
            <button key={t.id} onClick={() => { setTab(t.id); if(t.id==="editor") newPost(); }}
              className={"w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm transition-all " +
                (tab===t.id || (t.id==="editor"&&tab==="editor") ? "bg-emerald/15 text-emerald border border-emerald/20" : "text-slate-400 hover:text-white hover:bg-white/5")}>
              <t.icon className="w-4 h-4 shrink-0" />
              {t.label}
            </button>
          ))}
          <div className="pt-4 mt-4 border-t border-white/8">
            <div className="text-xs text-slate-600 px-3 mb-2">Stats</div>
            <div className="px-3 space-y-2">
              <div className="flex justify-between text-xs"><span className="text-slate-500">Total</span><span className="text-white font-medium">{posts.length}</span></div>
              <div className="flex justify-between text-xs"><span className="text-slate-500">Published</span><span className="text-emerald font-medium">{posts.filter(p=>p.published).length}</span></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* POSTS TAB */}
          {tab==="posts" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-heading font-bold text-white">News Articles</h2>
                <button onClick={()=>{newPost();setTab("editor");}}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald text-navy font-bold text-sm rounded-full hover:bg-emerald/90 transition-all">
                  <Plus className="w-4 h-4" /> New Article
                </button>
              </div>
              {posts.length===0 ? (
                <div className="text-center py-20 text-slate-500">
                  <Edit3 className="w-8 h-8 mx-auto mb-3 opacity-30" />
                  <p>No articles yet. Create one or import from archive.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {posts.map(p => (
                    <div key={p.id} className="glass border border-white/8 rounded-xl p-4 flex items-start gap-4 group hover:border-white/15 transition-all">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={"text-xs font-semibold px-2 py-0.5 rounded-full border " +
                            (p.cat==="Clinical"?"text-emerald bg-emerald/10 border-emerald/20":p.cat==="Corporate"?"text-cyan bg-cyan/10 border-cyan/20":p.cat==="Financial"?"text-gold bg-gold/10 border-gold/20":"text-purple-400 bg-purple-400/10 border-purple-400/20")}>{p.cat}</span>
                          <span className="text-xs text-slate-600">{p.date}</span>
                          {p.published && <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" title="Published" />}
                        </div>
                        <p className="text-white text-sm font-medium truncate">{p.title}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button onClick={()=>{setEditing(p);setTab("editor");}} className="p-1.5 text-slate-500 hover:text-white hover:bg-white/8 rounded-lg transition-all">
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button onClick={()=>deletePost(p.id)} className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* EDITOR TAB */}
          {tab==="editor" && editing && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-heading font-bold text-white">{editing.id && posts.find(p=>p.id===editing.id) ? "Edit Article" : "New Article"}</h2>
                <div className="flex gap-2">
                  <button onClick={()=>{setEditing(null);setTab("posts");}} className="px-4 py-2 glass border border-white/10 text-slate-400 text-sm rounded-full hover:text-white transition-all">Cancel</button>
                  <button onClick={savePost} className="flex items-center gap-2 px-4 py-2 bg-emerald text-navy font-bold text-sm rounded-full hover:bg-emerald/90 transition-all">
                    <Save className="w-3.5 h-3.5" /> Save
                  </button>
                </div>
              </div>
              <div className="space-y-4 max-w-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">Category</label>
                    <select value={editing.cat} onChange={e=>setEditing({...editing,cat:e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white text-sm outline-none focus:border-emerald/50 transition-all">
                      {["Clinical","Corporate","Financial","Regulatory"].map(c=><option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">Date</label>
                    <input type="date" value={editing.date} onChange={e=>setEditing({...editing,date:e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white text-sm outline-none focus:border-emerald/50 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Title *</label>
                  <input value={editing.title} onChange={e=>setEditing({...editing,title:e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-emerald/50 transition-all"
                    placeholder="Article headline" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Excerpt</label>
                  <textarea value={editing.excerpt} onChange={e=>setEditing({...editing,excerpt:e.target.value})} rows={2}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-emerald/50 transition-all resize-none"
                    placeholder="Short summary for listing view" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Full Content</label>
                  <textarea value={editing.content} onChange={e=>setEditing({...editing,content:e.target.value})} rows={10}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-emerald/50 transition-all resize-none font-mono"
                    placeholder="Full article text (markdown supported)" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">Source / Type</label>
                    <input value={editing.source} onChange={e=>setEditing({...editing,source:e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-emerald/50 transition-all"
                      placeholder="Press Release" />
                  </div>
                  <div className="flex items-end">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <div onClick={()=>setEditing({...editing,published:!editing.published})}
                        className={"w-10 h-5.5 rounded-full transition-all relative " + (editing.published?"bg-emerald":"bg-white/15")}>
                        <div className={"absolute top-0.5 w-4.5 h-4.5 bg-white rounded-full shadow transition-all " + (editing.published?"left-5":"left-0.5")} />
                      </div>
                      <span className="text-sm text-slate-300">Published</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* IMPORT TAB */}
          {tab==="import" && (
            <div className="max-w-2xl">
              <h2 className="text-xl font-heading font-bold text-white mb-2">Import News Archive</h2>
              <p className="text-slate-400 text-sm mb-6">Load historical press releases from the Pentixapharm.com archive into the news system.</p>
              <div className="glass border border-white/8 rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-emerald/12 rounded-lg flex items-center justify-center">
                    <Download className="w-4 h-4 text-emerald" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Pentixapharm.com Archive</p>
                    <p className="text-slate-500 text-xs">{SEED_IMPORT.length} articles available for import</p>
                  </div>
                </div>
                <div className="space-y-2 mb-5 max-h-48 overflow-y-auto">
                  {SEED_IMPORT.map((s,i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <ChevronRight className="w-3 h-3 text-emerald shrink-0 mt-0.5" />
                      <span>[{s.cat}] {s.title.slice(0,70)}…</span>
                    </div>
                  ))}
                </div>
                <button onClick={importSeed}
                  className={"flex items-center gap-2 px-5 py-2.5 font-bold text-sm rounded-full transition-all " + (imported?"bg-white/10 text-slate-400 cursor-default":"bg-emerald text-navy hover:bg-emerald/90 shadow-lg shadow-emerald/20")}>
                  {imported ? <><CheckCircle className="w-4 h-4 text-emerald" /> Archive Imported</> : <><Download className="w-4 h-4" /> Import All Articles</>}
                </button>
              </div>
              <div className="text-xs text-slate-600 space-y-1">
                <p>• Imported articles are stored locally and displayed on the public news page.</p>
                <p>• Duplicate articles (same title) are automatically skipped.</p>
                <p>• All imported articles are marked as published by default.</p>
              </div>
            </div>
          )}

          {/* TERMINAL TAB */}
          {tab==="terminal" && (
            <div>
              <h2 className="text-xl font-heading font-bold text-white mb-4">Admin Terminal</h2>
              <div className="bg-black/40 border border-white/10 rounded-2xl p-5 font-mono text-xs h-72 overflow-y-auto mb-3">
                {log.map((l,i) => (
                  <div key={i} className={"mb-1 " + (l.startsWith(">")?"text-gold":"text-emerald/80")}>{l}</div>
                ))}
              </div>
              <div className="flex gap-2">
                <div className="flex items-center gap-2 flex-1 bg-black/30 border border-white/10 rounded-xl px-3 py-2">
                  <span className="text-emerald font-mono text-xs">$</span>
                  <input value={cmd} onChange={e=>setCmd(e.target.value)}
                    onKeyDown={e=>{if(e.key==="Enter")runCmd();}}
                    className="flex-1 bg-transparent text-white font-mono text-xs outline-none"
                    placeholder="Type a command…" />
                </div>
                <button onClick={runCmd} className="px-4 py-2 bg-emerald/15 border border-emerald/25 text-emerald text-xs rounded-xl hover:bg-emerald/25 transition-all">Run</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
`);

console.log('\n✅ Phase 6 done — Admin Panel\n');
