"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users, Eye, MousePointerClick, Clock, Globe2,
  TrendingUp, ArrowUp, ArrowDown, BarChart2,
  Lock, LogOut, RefreshCw, Monitor, Smartphone, Tablet
} from "lucide-react";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";

// ── data ────────────────────────────────────────────────────────────────────
function generateVisitorData() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return days.map((day) => ({
    day,
    visitors: Math.floor(Math.random() * 120 + 30),
    pageviews: Math.floor(Math.random() * 250 + 60),
    conversions: Math.floor(Math.random() * 12 + 1),
  }));
}

const topPages = [
  { page: "/de", title: "Home", views: 842, change: +12 },
  { page: "/de/rechner", title: "Pension Calculator", views: 534, change: +28 },
  { page: "/de/rechner/pkv", title: "PKV Calculator", views: 421, change: +18 },
  { page: "/de/ueber-mich", title: "About Me", views: 287, change: -4 },
  { page: "/de/termin", title: "Book Consultation", views: 263, change: +35 },
  { page: "/de/blog", title: "Blog", views: 198, change: +7 },
];

const sources = [
  { name: "Direct", value: 38, color: "#0A1628" },
  { name: "Google Search", value: 31, color: "#0EA5A0" },
  { name: "Referral", value: 16, color: "#D4A853" },
  { name: "Social Media", value: 11, color: "#64748b" },
  { name: "Other", value: 4, color: "#94a3b8" },
];

const countries = [
  { flag: "🇩🇪", name: "Germany", pct: 52 },
  { flag: "🇬🇧", name: "United Kingdom", pct: 18 },
  { flag: "🇫🇷", name: "France", pct: 11 },
  { flag: "🇸🇦", name: "Saudi Arabia", pct: 8 },
  { flag: "🇺🇸", name: "United States", pct: 6 },
  { flag: "🌍", name: "Other", pct: 5 },
];

const devices = [
  { icon: Monitor, label: "Desktop", pct: 58, color: "#0A1628" },
  { icon: Smartphone, label: "Mobile", pct: 34, color: "#0EA5A0" },
  { icon: Tablet, label: "Tablet", pct: 8, color: "#D4A853" },
];

// ── sub-components ───────────────────────────────────────────────────────────
function StatCard({ icon: Icon, label, value, change, color }: {
  icon: React.ElementType; label: string; value: string; change?: number; color: string;
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl border border-border/60 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${color}`}><Icon className="w-5 h-5" /></div>
        {change !== undefined && (
          <span className={`flex items-center gap-1 text-xs font-bold ${change >= 0 ? "text-emerald-600" : "text-red-500"}`}>
            {change >= 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
            {Math.abs(change)}%
          </span>
        )}
      </div>
      <p className="text-3xl font-black text-navy font-heading">{value}</p>
      <p className="text-sm text-muted-foreground font-medium mt-1">{label}</p>
    </motion.div>
  );
}

// ── main page ────────────────────────────────────────────────────────────────
export default function AnalyticsPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(false);
  const [data, setData] = useState(() => generateVisitorData());
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("Next Gen Capital_admin_auth") === "true") setAuthed(true);
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

  const handleRefresh = async () => {
    setRefreshing(true);
    await new Promise((r) => setTimeout(r, 800));
    setData(generateVisitorData());
    setLastRefresh(new Date());
    setRefreshing(false);
  };

  const totalVisitors = data.reduce((a, d) => a + d.visitors, 0);
  const totalViews = data.reduce((a, d) => a + d.pageviews, 0);
  const totalConversions = data.reduce((a, d) => a + d.conversions, 0);
  const convRate = ((totalConversions / totalVisitors) * 100).toFixed(1);

  // ── Login Screen ─────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,160,0.08)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="p-4 rounded-2xl bg-navy mb-5"><BarChart2 className="w-8 h-8 text-teal" /></div>
            <h1 className="text-3xl font-heading font-black text-navy mb-2">Analytics Login</h1>
            <p className="text-muted-foreground text-sm">Next Gen Capital Advisor — Visitor Statistics</p>
          </div>
          <div className="space-y-4">
            <input type="password" placeholder="Admin password" value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className={`w-full h-14 px-5 rounded-2xl border-2 text-base font-medium focus:outline-none transition-colors ${authError ? "border-red-400 bg-red-50" : "border-border focus:border-teal"}`}
            />
            <AnimatePresence>
              {authError && (
                <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="text-red-500 text-sm font-medium flex items-center gap-2">
                  <Lock className="w-4 h-4" /> Incorrect password.
                </motion.p>
              )}
            </AnimatePresence>
            <button onClick={handleLogin}
              className="w-full h-14 bg-navy hover:bg-navy/90 text-white font-bold rounded-2xl text-base transition-all hover:-translate-y-0.5 shadow-lg">
              View Analytics →
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ── Dashboard ─────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Topbar */}
      <div className="bg-navy text-white px-6 py-4 flex items-center justify-between sticky top-0 z-40 border-b border-white/10">
        <div className="flex items-center gap-3">
          <BarChart2 className="w-5 h-5 text-teal" />
          <span className="font-heading font-bold">Analytics Dashboard</span>
          <span className="bg-teal/20 text-teal text-xs font-bold px-3 py-1 rounded-full">Next Gen Capital Advisor</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-400 text-xs hidden sm:inline">Updated: {lastRefresh.toLocaleTimeString("en-GB")}</span>
          <button onClick={handleRefresh} disabled={refreshing}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors">
            <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin" : ""}`} /> Refresh
          </button>
          <button onClick={() => { setAuthed(false); sessionStorage.removeItem("Next Gen Capital_admin_auth"); }}
            className="flex items-center gap-2 text-slate-400 hover:text-red-400 text-xs font-medium transition-colors">
            <LogOut className="w-3.5 h-3.5" /> Sign out
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        {/* KPI cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <StatCard icon={Users} label="Unique Visitors (7d)" value={totalVisitors.toLocaleString()} change={+14} color="bg-navy/10 text-navy" />
          <StatCard icon={Eye} label="Total Pageviews (7d)" value={totalViews.toLocaleString()} change={+9} color="bg-teal/10 text-teal" />
          <StatCard icon={MousePointerClick} label="Consultation Bookings" value={totalConversions.toString()} change={+22} color="bg-yellow-100 text-yellow-700" />
          <StatCard icon={TrendingUp} label="Conversion Rate" value={`${convRate}%`} change={+3} color="bg-emerald-100 text-emerald-700" />
        </div>

        {/* Line chart + donut */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-border/60 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-heading font-black text-navy text-lg">Visitors &amp; Pageviews</h3>
                <p className="text-muted-foreground text-sm">Last 7 days</p>
              </div>
              <div className="flex items-center gap-4 text-xs font-bold">
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-navy inline-block" />Visitors</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-teal inline-block" />Pageviews</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
                <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }} />
                <Line type="monotone" dataKey="visitors" stroke="#0A1628" strokeWidth={3} dot={{ r: 4, fill: "#0A1628" }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="pageviews" stroke="#0EA5A0" strokeWidth={3} dot={{ r: 4, fill: "#0EA5A0" }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-2xl border border-border/60 p-6 shadow-sm">
            <h3 className="font-heading font-black text-navy text-lg mb-1">Traffic Sources</h3>
            <p className="text-muted-foreground text-sm mb-4">This week</p>
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie data={sources} dataKey="value" cx="50%" cy="50%" innerRadius={45} outerRadius={75} paddingAngle={3}>
                  {sources.map((s, i) => <Cell key={i} fill={s.color} />)}
                </Pie>
                <Tooltip formatter={(val) => [`${val}%`, ""]} contentStyle={{ borderRadius: "12px", border: "none" }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-3">
              {sources.map((s, i) => (
                <div key={i} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
                    <span className="text-navy font-medium">{s.name}</span>
                  </div>
                  <span className="font-bold text-navy">{s.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top pages + countries + devices */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-border/60 p-6 shadow-sm">
            <h3 className="font-heading font-black text-navy text-lg mb-5">Top Pages</h3>
            <div className="space-y-2">
              {topPages.map((p, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <span className="text-muted-foreground text-xs font-bold w-5 text-center">{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-navy text-sm truncate">{p.title}</p>
                    <p className="text-xs font-mono text-muted-foreground truncate">{p.page}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-slate-100 rounded-full h-1.5 hidden sm:block">
                      <div className="h-1.5 bg-teal rounded-full" style={{ width: `${(p.views / topPages[0].views) * 100}%` }} />
                    </div>
                    <span className="text-navy font-black text-sm w-12 text-right">{p.views.toLocaleString()}</span>
                    <span className={`flex items-center gap-0.5 text-xs font-bold w-12 justify-end ${p.change >= 0 ? "text-emerald-600" : "text-red-500"}`}>
                      {p.change >= 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                      {Math.abs(p.change)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-border/60 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <Globe2 className="w-4 h-4 text-teal" />
                <h3 className="font-heading font-black text-navy text-base">Countries</h3>
              </div>
              <div className="space-y-3">
                {countries.map((c, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-base">{c.flag}</span>
                    <div className="flex-1">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-navy">{c.name}</span>
                        <span className="font-bold text-navy">{c.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full">
                        <div className="h-1.5 bg-teal rounded-full" style={{ width: `${c.pct}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-border/60 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <Monitor className="w-4 h-4 text-teal" />
                <h3 className="font-heading font-black text-navy text-base">Devices</h3>
              </div>
              <div className="space-y-4">
                {devices.map((d, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-50">
                      <d.icon className="w-4 h-4" style={{ color: d.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-navy">{d.label}</span>
                        <span className="font-bold text-navy">{d.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full">
                        <div className="h-1.5 rounded-full" style={{ width: `${d.pct}%`, backgroundColor: d.color }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bar chart */}
        <div className="bg-white rounded-2xl border border-border/60 p-6 shadow-sm">
          <h3 className="font-heading font-black text-navy text-lg mb-1">Daily Consultation Bookings</h3>
          <p className="text-muted-foreground text-sm mb-6">Bookings per day this week</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
              <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }} />
              <Bar dataKey="conversions" fill="#0EA5A0" radius={[6, 6, 0, 0]} barSize={32} name="Bookings" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Info note */}
        <div className="bg-navy/5 border border-navy/10 rounded-2xl p-5 flex items-start gap-3">
          <Clock className="w-5 h-5 text-navy/40 shrink-0 mt-0.5" />
          <p className="text-sm text-navy/60 font-medium leading-relaxed">
            <strong className="text-navy">Note:</strong> This dashboard shows simulated data. Connect real tracking by integrating <strong>Plausible Analytics</strong> or <strong>PostHog</strong> — the Plausible script tag is already added to your HTML head.
          </p>
        </div>
      </div>
    </div>
  );
}

