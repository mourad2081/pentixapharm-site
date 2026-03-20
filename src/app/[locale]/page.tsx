import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, Star, Globe2, TrendingUp, Calendar } from 'lucide-react';

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('HomePage');
  // Note: Using a very simple, safe layout to restore functionality
  return (
    <main className="min-h-screen bg-navy flex flex-col items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center max-w-4xl py-20 animate-in fade-in duration-1000">
        
        {/* Simple Hero Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 text-teal border border-teal/20 text-sm font-bold uppercase tracking-widest mb-8">
            <ShieldCheck className="w-4 h-4" />
            <span>Mourad Labadi - Ergo Advisor</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 leading-tight">
            Independent Insurance <br />
            <span className="text-teal text-shadow-glow">Expert Advice</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Personalized insurance solutions for expats and locals in Germany. We are currently rebuilding our home page to provide a better experience. All services are fully functional.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/${locale}/termin`}>
              <button className="h-16 px-10 rounded-full bg-teal text-white text-lg font-bold shadow-xl shadow-teal/20 hover:bg-teal/90 transition-all active:scale-95">
                Book FREE Consultation
              </button>
            </Link>
            <Link href={`/${locale}/ueber-mich`}>
              <button className="h-16 px-10 rounded-full bg-white/5 border border-white/10 text-white text-lg font-bold hover:bg-white/10 transition-all">
                About Me
              </button>
            </Link>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { title: "Products & Services", desc: "Private Health, Pension & Legal", icon: ShieldCheck, href: `/${locale}/produkte/private-krankenversicherung` },
            { title: "Client Resources", desc: "Free guides & infographics", icon: Globe2, href: `/${locale}/ressourcen` },
            { title: "Seminars & Events", desc: "Join our upcoming sessions", icon: TrendingUp, href: `/${locale}/seminare` }
          ].map((item, idx) => (
            <Link key={idx} href={item.href} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
              <div className="p-3 rounded-2xl bg-teal/20 text-teal w-fit mb-6 group-hover:bg-teal group-hover:text-white transition-all">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">{item.desc}</p>
              <div className="flex items-center gap-2 text-teal font-bold text-sm">
                Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
