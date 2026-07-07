import { useState, useEffect, useRef } from "react";
import { INDUSTRIES } from "@/data/industries";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Building2,
  CheckCircle2,
  ChevronDown,
  Code2,
  Cpu,
  Database,
  Figma,
  Globe2,
  GraduationCap,
  HeartPulse,
  Home as HomeIcon,
  Hotel,
  Layers,
  LineChart,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  Palette,
  Phone,
  FileText,
  Users,
  Rocket,
  Search,
  Send,
  ShoppingBag,
  Sparkles,
  Star,
  Stethoscope,
  Target,
  TrendingUp,
  Wrench,
  Zap,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Play
} from "lucide-react";

/* ---------- Helpers ---------- */
const IMG = {
  hero: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
  team: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
  meeting: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80",
  analytics: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1400&q=80",
  marketing: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  website: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1400&q=80",
  seo: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1400&q=80",
  ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
  exec: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
  city: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=80",
  portfolio1: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
  portfolio2: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=1200&q=80",
  portfolio3: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
  portfolio4: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=1200&q=80",
};

const GoogleIcon = ({ size, className }: any) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} fill="currentColor">
    <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
  </svg>
);

const TiktokIcon = ({ size, className }: any) => (
  <svg width={size} height={size} viewBox="0 0 448 512" className={className} fill="currentColor">
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
  </svg>
);

const MARQUEE_LOGOS = [
  { name: "Facebook Ads", icon: Facebook },
  { name: "Instagram Ads", icon: Instagram },
  { name: "Google Ads", icon: GoogleIcon },
  { name: "TikTok Ads", icon: TiktokIcon },
  { name: "LinkedIn Ads", icon: Linkedin },
  { name: "YouTube Ads", icon: Youtube },
];

function MarqueeLogo({ name, icon: Icon }: { name: string; icon: any }) {
  return (
    <div className="flex items-center gap-3.5 group cursor-pointer px-4">
      <Icon
        size={28}
        className="text-[var(--gold)] transition-transform duration-300 group-hover:scale-110"
      />
      <span className="text-white font-extrabold tracking-wider uppercase text-lg transition-colors duration-300 group-hover:text-white/80">
        {name}
      </span>
    </div>
  );
}

const AVATARS = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1531123897727-8f129e1bfa82?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
];

/* ---------- HERO ---------- */
export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden grid-noise text-white">
      {/* Background - gradient and noise only */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink-deep)]/80 via-[var(--ink-deep)]/90 to-[var(--ink-deep)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="container-x pt-24 pb-24 md:pt-32 md:pb-32">
        <div className="mx-auto max-w-4xl text-center fade-up">
          <span className="eyebrow mx-auto"><Sparkles size={14} /> Full-Stack Digital Growth Agency</span>
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight mt-5 text-white">
            Stop Wasting Money on <span className="text-white">Marketing</span> That <span className="text-[var(--gold)]">Doesn't Generate Revenue</span>
          </h1>
          <p className="mt-7 mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-white/75">
            NEXDEER helps businesses scale faster through performance marketing, high-converting
            websites, SEO, local search optimization, and AI-powered automation — bringing your
            marketing, sales, and growth systems together under one roof.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="https://wa.me/447537171506" target="_blank" rel="noopener noreferrer" className="btn-gold">
              Get Your Custom Growth Plan
            </a>
            <Link to="/portfolio" className="btn-ghost text-white group">
              View Our Work <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Logo marquee section */}
      <div className="border-t border-white/5 py-5">
        <div className="container-x">
          <div 
            className="relative overflow-hidden flex"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
            }}
          >
            <div className="flex animate-marquee-left shrink-0 items-center gap-16 pr-16">
              {Array.from({ length: 4 }).flatMap((_, k) =>
                ["Aurora Realty", "MeridianCare", "Sandstone Co.", "BluePeak Tech", "Northwind", "Vertex Studio", "Helio Group", "Kingsbridge"].map((name, i) => (
                  <span key={`a-${k}-${i}`} className="text-white/40 font-bold uppercase tracking-[0.2em] text-xs whitespace-nowrap hover:text-white/70 transition-colors duration-300">
                    {name}
                  </span>
                ))
              )}
            </div>
            <div className="flex animate-marquee-left shrink-0 items-center gap-16 pr-16" aria-hidden="true">
              {Array.from({ length: 4 }).flatMap((_, k) =>
                ["Aurora Realty", "MeridianCare", "Sandstone Co.", "BluePeak Tech", "Northwind", "Vertex Studio", "Helio Group", "Kingsbridge"].map((name, i) => (
                  <span key={`b-${k}-${i}`} className="text-white/40 font-bold uppercase tracking-[0.2em] text-xs whitespace-nowrap hover:text-white/70 transition-colors duration-300">
                    {name}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState("0");
  const nodeRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }
    const target = parseInt(match[1], 10);
    const suffix = match[2];
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp: number;
          const duration = 2000;
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOut * target);
            setDisplayValue(current + suffix);
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    
    return () => observer.disconnect();
  }, [value]);

  return <span ref={nodeRef}>{displayValue}</span>;
}

/* ---------- TRUSTED ---------- */
export function Trusted() {
  return (
    <section id="about" className="section-y bg-[var(--surface)]">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5 fade-up">
          <div className="relative group/img cursor-default">
            <div className="overflow-hidden rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-700 group-hover/img:shadow-[0_25px_50px_rgba(232,181,4,0.15)] group-hover/img:-translate-y-2">
              <img src="/process.png" alt="Growth Process: Plan, Analyze, Execute, Review, Optimize" loading="lazy" decoding="async" className="aspect-[4/5] object-cover w-full transition-transform duration-[2s] ease-out group-hover/img:scale-105" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block max-w-[260px] rounded-2xl bg-[var(--ink-deep)] p-5 text-white shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(232,181,4,0.3)] z-10 float">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none" />
              <div className="text-3xl font-bold transition-colors duration-300 group-hover/img:text-[var(--gold)]"><AnimatedNumber value="98%" /></div>
              <div className="text-xs uppercase tracking-wider text-white/65 mt-1">Client retention across multi-year engagements</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="eyebrow fade-up" style={{ animationDelay: '100ms' }}>Trusted by growing businesses</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-4 text-[var(--ink-deep)] fade-up leading-[1.1] tracking-tight" style={{ animationDelay: '200ms' }}>
            Built to Help Businesses Grow Smarter and Scale Faster
          </h2>
          <div className="mt-6 space-y-5 text-[15.5px] leading-relaxed text-[color:var(--muted-foreground)] fade-up" style={{ animationDelay: '300ms' }}>
            <p>
              Businesses today face more competition, rising customer acquisition costs, and rapidly
              changing technology. Many struggle because their marketing, website, SEO, and
              operations work in isolation.
            </p>
            <p>
              NEXDEER brings everything together into one integrated growth system designed to
              attract qualified leads, convert visitors into customers, and create scalable business
              growth.
            </p>
            <p>
              Whether you're a local business, professional service firm, real estate company,
              startup, or growing enterprise, we help you build a stronger digital presence and a
              more predictable growth engine.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[
              ["170+", "Clients"],
              ["250+", "Projects"],
              ["4", "Markets"],
              ["15+", "Experts"],
            ].map(([n, l], idx) => (
              <div 
                key={l} 
                className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-white px-4 py-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(232,181,4,0.12)] hover:border-[var(--gold)]/50 group cursor-default fade-up"
                style={{ animationDelay: `${400 + (idx * 150)}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="text-2xl font-bold text-[var(--ink-deep)] transition-all duration-500 group-hover:text-[var(--gold)] group-hover:scale-110 origin-left inline-block relative z-10"><AnimatedNumber value={n} /></div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-black/40 mt-1.5 transition-colors duration-500 group-hover:text-black/60 relative z-10">{l}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-10">
            <a href="https://wa.me/447537171506" target="_blank" rel="noopener noreferrer" className="btn-gold">
              Discuss Your Project on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROBLEM ---------- */
export function Problem() {
  const items = [
    "Marketing generates clicks but not customers",
    "Websites attract visitors but fail to convert",
    "Leads go cold due to poor follow-up",
    "SEO efforts don't generate meaningful business results",
    "Teams waste time on repetitive manual tasks",
    "Growth becomes unpredictable and difficult to scale",
  ];
  return (
    <section className="section-y bg-[var(--ink-deep)] text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
      <div className="container-x grid gap-14 lg:grid-cols-12 relative z-10">
        <div className="lg:col-span-5">
          <span className="eyebrow fade-up">The challenge</span>
          <h2 className="headline-lg mt-4 text-white fade-up" style={{ animationDelay: '100ms' }}>
            The Problem Isn't Traffic. The Problem Is What Happens After.
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed max-w-md fade-up" style={{ animationDelay: '200ms' }}>
            Many businesses invest in websites, social media, SEO, or advertising without a clear
            growth strategy. Without a connected growth system, businesses often spend more while
            achieving less.
          </p>
          <div className="mt-10 fade-up relative group overflow-hidden rounded-2xl" style={{ animationDelay: '300ms' }}>
            <div className="absolute inset-0 bg-[var(--gold)]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img src={IMG.analytics} alt="Analytics dashboard" loading="lazy" decoding="async" className="border border-white/10 aspect-[16/10] object-cover w-full transition-transform duration-700 group-hover:scale-110" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid sm:grid-cols-2 gap-4">
            {items.map((t, i) => (
              <li
                key={t}
                className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-[var(--gold)]/50 hover:bg-[var(--gold)]/[0.03] hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(232,181,4,0.08)] cursor-default fade-up"
                style={{ animationDelay: `${400 + (i * 100)}ms` }}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] font-bold text-sm transition-all duration-300 group-hover:bg-[var(--gold)] group-hover:text-black group-hover:rotate-6 group-hover:scale-110 shadow-lg">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-relaxed text-white/80 transition-colors duration-300 group-hover:text-white mt-0.5">{t}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-[var(--gold)]/40 bg-[var(--gold)]/[0.05] p-7 fade-up relative overflow-hidden group hover:border-[var(--gold)]/60 transition-colors duration-300" style={{ animationDelay: '1000ms' }}>
            <div className="absolute -inset-2 bg-gradient-to-r from-[var(--gold)]/0 via-[var(--gold)]/10 to-[var(--gold)]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            <p className="text-white text-xl font-semibold leading-relaxed relative z-10 italic">
              "You don't need more tools. You need one connected system that turns attention into revenue."
            </p>
            <p className="mt-4 text-[13px] font-bold tracking-widest uppercase text-[var(--gold)] relative z-10">— NEXDEER Growth Principle</p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 fade-up backdrop-blur-sm" style={{ animationDelay: '1050ms' }}>
              <div className="flex gap-1.5 items-end h-4 shrink-0">
                <div className="w-1.5 h-3 bg-[var(--gold)] rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-full bg-[var(--gold)] rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
                <div className="w-1.5 h-2.5 bg-[var(--gold)] rounded-full animate-pulse" style={{ animationDelay: '400ms' }} />
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-[var(--gold)] uppercase tracking-[0.15em] truncate">Compounding</div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 fade-up backdrop-blur-sm" style={{ animationDelay: '1100ms' }}>
              <div className="relative h-4 w-4 shrink-0">
                <div className="absolute inset-0 border-[3px] border-t-[var(--gold)] border-white/20 rounded-full animate-spin" />
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-[var(--gold)] uppercase tracking-[0.15em] truncate">Data Synced</div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 fade-up backdrop-blur-sm" style={{ animationDelay: '1150ms' }}>
              <div className="flex gap-1.5 h-4 items-center shrink-0">
                <div className="w-1.5 h-1.5 bg-[var(--gold)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 bg-[var(--gold)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 bg-[var(--gold)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-[var(--gold)] uppercase tracking-[0.15em] truncate">AI Active</div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 fade-up backdrop-blur-sm" style={{ animationDelay: '1200ms' }}>
               <div className="relative h-4 w-4 shrink-0 flex items-center justify-center">
                 <div className="absolute inset-0 bg-[var(--gold)] rounded-full animate-ping opacity-75" />
                 <div className="relative w-2 h-2 bg-[var(--gold)] rounded-full" />
               </div>
              <div className="text-[11px] sm:text-xs font-semibold text-[var(--gold)] uppercase tracking-[0.15em] truncate">Live Traffic</div>
            </div>
          </div>

          <div className="mt-8 fade-up" style={{ animationDelay: '1300ms' }}>
            <a href="https://wa.me/447537171506" target="_blank" rel="noopener noreferrer" className="btn-gold">
              Get Your Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SYSTEM (Services) ---------- */
const SERVICES = [
  {
    icon: BarChart3,
    title: "Performance Marketing",
    image: IMG.marketing,
    items: ["Meta Ads", "Google Ads", "Lead Generation", "Conversion Optimization", "Funnel Strategy"],
  },
  {
    icon: Globe2,
    title: "Website Design & Development",
    image: IMG.website,
    items: ["Corporate Websites", "Business Websites", "Landing Pages", "E-Commerce Stores", "Website Optimization"],
  },
  {
    icon: Search,
    title: "SEO & Search Growth",
    image: IMG.seo,
    items: ["SEO", "Local SEO", "Technical SEO", "GEO", "AEO", "GBP Optimization"],
  },
  {
    icon: Bot,
    title: "AI Automation",
    image: IMG.ai,
    items: ["AI Agents", "CRM Automation", "WhatsApp Automation", "Workflow Automation", "Lead Nurturing Systems"],
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    items: ["Content Creation", "Community Management", "Social Strategy", "Influencer Marketing", "Analytics & Reporting"],
  },
  {
    icon: FileText,
    title: "Content Marketing",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    items: ["Blog Articles", "Video Scripts", "Copywriting", "Whitepapers", "Email Newsletters"],
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    items: ["Logo Design", "Brand Guidelines", "Visual Identity", "Rebranding", "Brand Strategy"],
  },
  {
    icon: Users,
    title: "CRM Setup & Management",
    image: "https://images.unsplash.com/photo-1552581234-26160822f37f?auto=format&fit=crop&w=800&q=80",
    items: ["HubSpot Setup", "Salesforce Integration", "Pipeline Management", "Lead Scoring", "Sales Automation"],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    image: "https://images.unsplash.com/photo-1577563908411-50cb98976cfe?auto=format&fit=crop&w=800&q=80",
    items: ["Newsletter Campaigns", "Drip Sequences", "List Segmentation", "A/B Testing", "Performance Tracking"],
  },
  {
    icon: LineChart,
    title: "Analytics & Data Strategy",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    items: ["Google Analytics 4", "Custom Dashboards", "Conversion Tracking", "Data Visualization", "Growth Consulting"],
  },
];

export function GrowthSystem({ limit }: { limit?: number }) {
  const displayServices = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <section id="services" className="section-y bg-[var(--surface)]">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">The NEXDEER growth system</span>
            <h2 className="headline-lg mt-4 text-[var(--ink-deep)]">
              One Partner. One Strategy. One Scalable Growth System.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15.5px] leading-relaxed text-[color:var(--muted-foreground)]">
            Instead of managing multiple vendors, freelancers, and disconnected tools, work with a
            team that handles every critical component of your digital growth — combining
            performance marketing, websites, SEO, and AI automation into systems that consistently
            generate leads, customers, and revenue.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {displayServices.map(({ icon: Icon, title, image, items }) => (
            <Link
              to="/services"
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_-25px_rgba(2,0,42,0.35)] block"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={image} alt={title} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-deep)]/85 via-[var(--ink-deep)]/20 to-transparent" />
                <div className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-xl bg-[var(--gold)] text-[var(--ink-deep)]">
                  <Icon size={20} />
                </div>
              </div>
              <div className="p-7">
                <h3 className="headline-md text-[var(--ink-deep)]">{title}</h3>
                <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
                  {items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-[color:var(--muted-foreground)]">
                      <CheckCircle2 size={15} className="mt-[3px] text-[var(--gold)] shrink-0" /> {i}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--ink-deep)]">
                  Explore service <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {limit && (
          <div className="mt-14 text-center">
            <Link to="/services" className="btn-ghost text-[var(--ink-deep)] group">
              <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:gap-4">View All 10 Services <ArrowRight size={16} /></span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export const ALL_PORTFOLIO_PROJECTS = Array.from({ length: 100 }).map((_, i) => {
  const templates = [
    { name: "Realty", tag: "Real Estate · Lead Gen", img: IMG.portfolio1 },
    { name: "Care", tag: "Healthcare · Branding", img: IMG.portfolio2 },
    { name: "Co.", tag: "E-Commerce · CRO", img: IMG.portfolio3 },
    { name: "Tech", tag: "SaaS · Performance", img: IMG.portfolio4 },
    { name: "Solutions", tag: "B2B · Automation", img: IMG.portfolio1 },
    { name: "Group", tag: "Finance · SEO", img: IMG.portfolio2 },
    { name: "Studios", tag: "Creative · Web Design", img: IMG.portfolio3 },
    { name: "Partners", tag: "Consulting · Ads", img: IMG.portfolio4 },
  ];
  const template = templates[i % templates.length];
  const prefixes = ["Aurora", "Meridian", "Sandstone", "BluePeak", "Vertex", "Lumen", "Orbit", "Nexus", "Helio", "Nova", "Zenith", "Apex", "Quantum", "Pulse", "Vanguard", "Stratos", "Horizon", "Ascend", "Crest", "Pinnacle"];
  const prefix = prefixes[i % prefixes.length];
  const id = i < 4 
    ? ["aurora-realty", "meridian-care", "sandstone-co", "bluepeak-tech"][i]
    : `${prefix.toLowerCase()}-${template.name.toLowerCase().replace(/[^a-z0-9]/g, '')}-${i}`;

  const title = i < 4 
    ? ["Aurora Realty", "MeridianCare", "Sandstone Co.", "BluePeak Tech"][i]
    : `${prefix} ${template.name}`;

  return {
    id,
    title,
    tag: template.tag,
    img: template.img,
    challenge: `The client was struggling with legacy systems and poor conversion rates. Despite high traffic, their cost per acquisition was unsustainable, leading to stagnant growth.`,
    solution: `We implemented a full-stack growth system including a new high-converting funnel, targeted paid campaigns, and CRM automation to qualify leads instantly.`,
    results: [
      { metric: "+312%", label: "Qualified Leads" },
      { metric: "-47%", label: "Cost Per Acquisition" },
      { metric: "4.2x", label: "ROI in 90 Days" }
    ],
    timeline: "3 Months",
    services: ["Strategy", "Web Design", "Paid Ads", "Automation"]
  };
});

export function Portfolio({ limit }: { limit?: number }) {
  const displayCards = limit ? ALL_PORTFOLIO_PROJECTS.slice(0, limit) : ALL_PORTFOLIO_PROJECTS;
  return (
    <section id="portfolio" className="section-y bg-white">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between fade-up">
          <div className="max-w-2xl">
            <span className="eyebrow fade-up" style={{ animationDelay: '100ms' }}>Our work</span>
            <h2 className="headline-lg mt-4 text-[var(--ink-deep)] fade-up" style={{ animationDelay: '200ms' }}>
              Growth-Focused Solutions Built for Real Businesses
            </h2>
            <p className="mt-5 text-[color:var(--muted-foreground)] leading-relaxed fade-up" style={{ animationDelay: '300ms' }}>
              Every business is different, which is why every solution we build is tailored to
              specific goals, audiences, and growth objectives — across websites, branding,
              campaigns, SEO, social, automation, and lead generation.
            </p>
          </div>
          {limit && (
            <Link to="/portfolio" className="btn-ghost text-[var(--ink-deep)] self-start md:self-auto fade-up group" style={{ animationDelay: '400ms' }}>
              <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:gap-4">View Portfolio <ArrowRight size={16} /></span>
            </Link>
          )}
        </div>

        <div className={`mt-14 grid gap-6 ${limit ? 'md:grid-cols-2 lg:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {displayCards.map((c, i) => (
            <Link
              to={`/portfolio/${c.id}`}
              key={c.id}
              className="group relative overflow-hidden rounded-3xl fade-up border border-[var(--border)] shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(232,181,4,0.15)] hover:border-[var(--gold)]/30 transition-all duration-700"
              style={{ animationDelay: limit ? `${500 + (i * 100)}ms` : '0ms' }}
            >
              <img
                src={c.img}
                alt={c.title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-deep)] via-[var(--ink-deep)]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <div className="text-xs uppercase tracking-[0.18em] text-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">{c.tag}</div>
                <div className="mt-2 flex items-center justify-between gap-4">
                  <h3 className="text-xl md:text-3xl font-bold">{c.title}</h3>
                  <ArrowUpRight className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 scale-125" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {limit && (
          <div className="mt-14 text-center">
            <Link to="/portfolio" className="btn-ghost text-[var(--ink-deep)] group">
              <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:gap-4">View All 100 Projects <ArrowRight size={16} /></span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- INDUSTRIES ---------- */
/* ---------- INDUSTRIES ---------- */

export function Industries() {
  const displayIndustries = INDUSTRIES.slice(0, 12);
  return (
    <section id="industries" className="section-y bg-[var(--surface)]">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 fade-up">
          <div className="max-w-2xl">
            <span className="eyebrow fade-up" style={{ animationDelay: '100ms' }}>Industries</span>
            <h2 className="headline-lg mt-4 text-[var(--ink-deep)] fade-up" style={{ animationDelay: '200ms' }}>Industries We Help Scale</h2>
            <p className="mt-5 text-[color:var(--muted-foreground)] leading-relaxed fade-up" style={{ animationDelay: '300ms' }}>
              Our strategies are customized to the unique challenges, customer behavior, and growth
              opportunities within each industry.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {displayIndustries.map(({ icon: Icon, label }, idx) => (
            <div
              key={label}
              className="group flex flex-col items-center text-center justify-center gap-4 rounded-2xl border border-[var(--border)] bg-white p-6 transition-all duration-300 hover:border-[var(--gold)]/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] cursor-default fade-up overflow-hidden relative"
              style={{ animationDelay: `${400 + (idx * 100)}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--ink-deep)] text-[var(--gold)] transition-all duration-500 group-hover:bg-[var(--gold)] group-hover:text-black group-hover:rotate-12 group-hover:scale-110 relative z-10 shadow-md">
                <Icon size={20} />
              </div>
              <div className="text-sm font-bold text-[var(--ink-deep)] transition-colors duration-300 group-hover:text-[var(--gold)] relative z-10">{label}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-14 text-center">
          <Link to="/industries" className="btn-gold">
            View All Industries
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY NEXDEER ---------- */
export function WhyNexdeer() {
  const diff = [
    { title: "Full-Stack Expertise", desc: "Marketing, design, dev, SEO, and AI under one roof — strategy that ships." },
    { title: "Growth-Focused Strategy", desc: "Every tactic ladders up to revenue, retention, and ROI you can measure." },
    { title: "Long-Term Partnership", desc: "We operate as an extension of your team — accountable to your goals, not vanity metrics." },
    { title: "Technology-Driven Execution", desc: "Modern stacks, AI workflows, and CRO systems built to scale with you." },
  ];

  return (
    <section className="section-y relative overflow-hidden bg-[var(--ink-deep)] text-white">
      <img src={IMG.city} loading="lazy" decoding="async" alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.12]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--ink-deep)] via-[var(--ink-deep)]/95 to-[var(--ink-deep)]" />

      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5 flex flex-col h-full">
          <div>
            <span className="eyebrow">Why choose NEXDEER</span>
            <h2 className="headline-lg mt-4 text-white">More Than a Marketing Agency</h2>
            <p className="mt-6 text-white/75 leading-relaxed max-w-md">
              Most agencies focus on one part of your growth journey. We focus on the entire system —
              from first impression to closed customer to retained client.
            </p>
          </div>
          
          <div className="flex-grow mt-10 relative rounded-3xl overflow-hidden border border-white/10">
            <img src={IMG.exec} alt="Strategy session" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-5">
            {diff.map((d, i) => (
              <div key={d.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-[var(--gold)]/50 fade-up" style={{ animationDelay: `${200 + (i * 100)}ms` }}>
                <div className="text-xs font-mono text-[var(--gold)]">0{i + 1}</div>
                <h3 className="mt-3 text-xl font-semibold text-white">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{d.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 hidden lg:block fade-up" style={{ animationDelay: '800ms' }}>
            <div className="relative w-full rounded-2xl border border-white/10 bg-white/[0.02] p-8 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--gold)]/10 to-transparent -translate-x-full group-hover:animate-[nx-marquee_3s_linear_infinite]" />
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <div className="text-5xl font-bold text-white">98<span className="text-[var(--gold)]">%</span></div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">Client Retention</div>
                </div>
                <div className="h-16 w-px bg-white/10" />
                <div>
                  <div className="text-5xl font-bold text-white">$50<span className="text-[var(--gold)]">M+</span></div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">Revenue Gen</div>
                </div>
                <div className="h-16 w-px bg-white/10" />
                <div>
                  <div className="text-5xl font-bold text-white">100<span className="text-[var(--gold)]">%</span></div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">In-House Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
const STEPS = [
  { n: "01", title: "Discover", desc: "We audit your business, market, funnel, and current systems to identify the highest-leverage growth opportunities.", icon: Search },
  { n: "02", title: "Strategize", desc: "We design a connected growth roadmap across marketing, web, SEO, and automation aligned to your revenue targets.", icon: Target },
  { n: "03", title: "Execute", desc: "Our specialists ship campaigns, websites, content, and automations with weekly velocity and clear accountability.", icon: Zap },
  { n: "04", title: "Optimize", desc: "We measure everything, double down on what works, and compound results month over month.", icon: TrendingUp },
];

export function Process() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-white">
      <div className="container-x">
        <div className="max-w-2xl fade-up">
          <span className="eyebrow">How we work</span>
          <h2 className="headline-lg mt-4 text-[var(--ink-deep)]">A Proven Process Designed for Growth</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="relative rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 group transition-all duration-300 hover:border-[var(--gold)]/50 hover:-translate-y-2 hover:shadow-xl fade-up" style={{ animationDelay: `${200 + (i * 100)}ms` }}>
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-bold text-[var(--ink-deep)]/10 transition-colors duration-300 group-hover:text-[var(--gold)]/20">{s.n}</span>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-sm text-[var(--ink-deep)] transition-all duration-300 group-hover:bg-[var(--ink-deep)] group-hover:text-[var(--gold)] group-hover:rotate-12 group-hover:scale-110 border border-[var(--border)]">
                    <Icon size={22} />
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[var(--ink-deep)]">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">{s.desc}</p>
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[var(--gold)]/30 transition-colors duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
        
        <div className="mt-10 text-center fade-up" style={{ animationDelay: '800ms' }}>
          <Link to="/services" className="btn-ghost text-[var(--ink-deep)] group">
            <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:gap-4">View All Services <ArrowRight size={16} /></span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const TESTIMONIALS = [
  {
    quote:
      "NEXDEER rebuilt our funnel, website, and ad strategy in 60 days. Lead volume tripled and our cost per qualified lead dropped by 47%.",
    name: "Sara Khan",
    role: "Founder, Aurora Realty",
    avatar: AVATARS[0],
  },
  {
    quote:
      "Working with NEXDEER feels like having an in-house growth team. Strategy, design, ads, automation — every piece compounds.",
    name: "Omar Al-Mansoori",
    role: "Director, Sandstone Co.",
    avatar: AVATARS[1],
  },
  {
    quote:
      "They don't just ship deliverables — they own outcomes. Our SEO traffic is up 4.2x and conversion rate doubled in two quarters.",
    name: "Hina Raza",
    role: "Marketing Lead, MeridianCare",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote:
      "The AI automation NEXDEER built handles 80% of our lead qualification. The team finally focuses on closing — not chasing.",
    name: "Daniel Park",
    role: "CEO, BluePeak Tech",
    avatar: AVATARS[3],
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((curr) => (curr + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = TESTIMONIALS[idx];
  return (
    <section className="section-y bg-[var(--surface)]">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">Client voices</span>
            <h2 className="headline-lg mt-4 text-[var(--ink-deep)]">What Our Clients Say</h2>
          </div>
          <p className="lg:col-span-5 text-[color:var(--muted-foreground)] leading-relaxed">
            Businesses partner with NEXDEER because they need more than individual services — they
            need a team committed to helping them grow.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-8 rounded-3xl bg-[var(--ink-deep)] p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute right-8 top-6 text-[10rem] leading-none font-serif text-[var(--gold)]/15 select-none">"</div>
            <div className="flex gap-1 text-[var(--gold)]">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="mt-6 text-xl md:text-2xl leading-relaxed font-medium">"{t.quote}"</p>
            <div className="mt-8 flex items-center gap-4">
              <img src={t.avatar} alt={t.name} loading="lazy" decoding="async" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-white/65">{t.role}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 grid gap-3">
            {TESTIMONIALS.map((tt, i) => (
              <button
                key={tt.name}
                onClick={() => setIdx(i)}
                onMouseEnter={() => setIdx(i)}
                className={`text-left rounded-2xl border p-4 transition ${
                  i === idx
                    ? "border-[var(--ink-deep)] bg-white shadow-sm"
                    : "border-[var(--border)] bg-white/60 hover:bg-white"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img src={tt.avatar} alt={tt.name} loading="lazy" decoding="async" className="h-10 w-10 shrink-0 rounded-full object-cover" />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-[var(--ink-deep)] truncate">{tt.name}</div>
                    <div className="text-xs text-[color:var(--muted-foreground)] truncate">{tt.role}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  {
    q: "What industries do you work with?",
    a: "We work with local businesses, real estate, healthcare, education, professional services, e-commerce, construction & engineering, hospitality, startups, and corporate organizations across Pakistan, UAE, KSA, and globally.",
  },
  {
    q: "Do you provide both marketing and website services?",
    a: "Yes. NEXDEER is a full-stack growth partner — performance marketing, website design & development, SEO, branding, and AI automation are all delivered by one accountable team.",
  },
  {
    q: "Do you work with businesses outside Pakistan?",
    a: "Absolutely. We serve clients across the UAE, Saudi Arabia, and globally, with localized strategies tailored to each market's customer behavior and search landscape.",
  },
  {
    q: "How do I get started?",
    a: "Book a strategy call or message us on WhatsApp. We'll audit your current growth system, identify the highest-leverage opportunities, and design a custom roadmap aligned to your revenue goals.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-y bg-white">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">FAQ</span>
          <h2 className="headline-lg mt-4 text-[var(--ink-deep)]">Frequently Asked Questions</h2>
          <p className="mt-5 text-[color:var(--muted-foreground)] leading-relaxed max-w-sm">
            Everything you need to know before partnering with NEXDEER. Still curious? Reach out
            anytime — we respond fast.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-lg font-semibold text-[var(--ink-deep)]">{f.q}</span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[var(--ink-deep)] transition ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden text-[color:var(--muted-foreground)] leading-relaxed">
                      {f.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--ink-deep)] text-white">
      <div className="absolute inset-0 -z-10 grid-noise opacity-90" />
      <div className="container-x section-y text-center">
        <span className="eyebrow justify-center">Let's build your growth system</span>
        <h2 className="headline-xl mt-5 text-white max-w-4xl mx-auto">
          Ready to <span className="text-[var(--gold)]">Scale Faster?</span>
        </h2>
        <p className="mt-7 mx-auto max-w-2xl text-white/75 text-lg leading-relaxed">
          Whether you need more leads, a better website, stronger visibility, or smarter automation,
          NEXDEER can help you build a growth system designed for long-term success.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="https://wa.me/" target="_blank" rel="noreferrer" className="btn-gold">
            <MessageCircle size={17} /> WhatsApp NEXDEER
          </a>
          <Link to="/contact" className="btn-ghost text-white group">
            <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:gap-4">Get Your Custom Growth Plan <ArrowRight size={16} /></span>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            ["Pakistan", "Lahore HQ"],
            ["UAE", "Dubai"],
            ["Saudi Arabia", "Riyadh"],
            ["Global", "Remote teams"],
          ].map(([k, v]) => (
            <div key={k} className="text-center">
              <div className="text-sm uppercase tracking-[0.18em] text-[var(--gold)]">{k}</div>
              <div className="mt-1 text-white/75 text-sm">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PAIN POINTS GRID ---------- */
const PAIN = [
  { icon: TrendingUp, title: "Stagnant Revenue", desc: "Marketing spend climbs every quarter but pipeline and revenue stay flat." },
  { icon: Target, title: "Unqualified Leads", desc: "Sales teams chase low-intent contacts that never convert into customers." },
  { icon: Globe2, title: "Underperforming Website", desc: "Beautiful design but slow load times and weak conversion architecture." },
  { icon: Search, title: "Invisible in Search", desc: "Competitors dominate Google, Maps, and AI answers in your category." },
  { icon: Bot, title: "Manual Operations", desc: "Teams drown in repetitive tasks that should run on automation." },
  { icon: Layers, title: "Disconnected Tools", desc: "Ten platforms, zero clarity on what actually moves the needle." },
];

export function PainPoints() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Sound familiar?</span>
          <h2 className="headline-lg mt-4 text-[var(--ink-deep)]">
            The Friction Points Slowing Your Growth
          </h2>
          <p className="mt-5 text-[color:var(--muted-foreground)] leading-relaxed">
            These are the silent revenue killers we eliminate inside the NEXDEER Growth System.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PAIN.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition hover:border-[var(--ink-deep)] hover:-translate-y-1">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--ink-deep)] text-[var(--gold)]"><Icon size={18} /></div>
              <h3 className="mt-5 text-lg font-semibold text-[var(--ink-deep)]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">{desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-14 text-center">
          <a href="https://wa.me/447537171506" target="_blank" rel="noopener noreferrer" className="btn-gold">
            Discuss Your Challenges on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- SOLUTION INTRO ---------- */
export function SolutionIntro() {
  return (
    <section className="section-y bg-[var(--ink)] text-white relative overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[var(--gold)]/20 blur-3xl" />
      <div className="container-x relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow justify-center">Introducing</span>
          <h2 className="headline-xl mt-5 text-white">
            The NEXDEER <span className="text-[var(--gold)]">Growth System</span>
          </h2>
          <p className="mt-7 text-lg text-white/75 leading-relaxed">
            A single operating system that unifies your marketing, website, search visibility, and
            AI automation into one accountable engine — built to compound revenue, not just deliver
            tactics.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {[
            ["Attract", "High-intent traffic from paid, organic, and AI search."],
            ["Convert", "Websites and funnels engineered for measurable outcomes."],
            ["Nurture", "AI + CRM automation that follows up while you sleep."],
            ["Scale", "Compound optimization across every channel, every month."],
          ].map(([k, v], i) => (
            <div key={k} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="text-xs font-mono text-[var(--gold)]">0{i + 1}</div>
              <h3 className="mt-3 text-xl font-semibold">{k}</h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-14 text-center">
          <a href="https://wa.me/447537171506" target="_blank" rel="noopener noreferrer" className="btn-gold">
            Build Your Custom Growth Plan
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- DETAILED SERVICE BLOCKS ---------- */
function ServiceDetail({
  eyebrow,
  title,
  desc,
  items,
  image,
  reverse,
  bg,
  slug,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  items: string[];
  image: string;
  reverse?: boolean;
  bg?: string;
  slug?: string;
}) {
  return (
    <section className={`section-y ${bg ?? "bg-white"}`}>
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:items-center">
        <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
          <div className="relative group overflow-hidden rounded-3xl fade-up" style={{ animationDelay: '100ms' }}>
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[var(--gold)]/20 to-transparent blur-2xl group-hover:from-[var(--gold)]/40 transition-colors duration-700" />
            <img src={image} alt={title} loading="lazy" decoding="async" className="rounded-3xl border border-[var(--border)] aspect-[4/3] object-cover w-full transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[var(--gold)]/30 transition-colors duration-700 pointer-events-none" />
          </div>
        </div>
        <div className="lg:col-span-6">
          <span className="eyebrow fade-up" style={{ animationDelay: '200ms' }}>{eyebrow}</span>
          <h2 className="headline-lg mt-4 text-[var(--ink-deep)] fade-up" style={{ animationDelay: '300ms' }}>{title}</h2>
          <p className="mt-5 text-[color:var(--muted-foreground)] leading-relaxed fade-up" style={{ animationDelay: '400ms' }}>{desc}</p>
          <ul className="mt-7 grid sm:grid-cols-2 gap-4">
            {items.map((i, idx) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[var(--ink-deep)] font-medium group cursor-default fade-up transition-transform duration-300 hover:translate-x-1" style={{ animationDelay: `${500 + (idx * 100)}ms` }}>
                <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] transition-all duration-300 group-hover:bg-[var(--gold)] group-hover:text-black group-hover:rotate-12 mt-0.5">
                  <CheckCircle2 size={12} className="stroke-[3]" />
                </div>
                <span className="transition-colors duration-300 group-hover:text-[var(--gold)]">{i}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 fade-up" style={{ animationDelay: '600ms' }}>
            <Link to={slug ? `/services/${slug}` : "/contact"} className="btn-ghost text-[var(--ink-deep)] group">
              <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:gap-4">Learn More <ArrowRight size={16} /></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export const ServicePerformance = () => (
  <ServiceDetail
    eyebrow="Performance marketing"
    title="Paid Campaigns That Pay for Themselves"
    desc="Full-funnel campaigns on Meta, Google, TikTok, and LinkedIn — engineered around revenue, ROAS, and cost-per-qualified-lead instead of vanity metrics."
    items={["Meta & Google Ads", "Lead generation funnels", "Landing page CRO", "Creative production", "Attribution & analytics", "Retargeting systems"]}
    image={IMG.marketing}
    slug="performance-marketing"
  />
);

export const ServiceWebsite = () => (
  <ServiceDetail
    eyebrow="Website design & development"
    title="High-Converting Websites Built for Growth"
    desc="Custom corporate sites, e-commerce stores, and landing pages built on modern stacks — fast, accessible, SEO-ready, and obsessed with conversion."
    items={["Corporate websites", "E-commerce stores", "Landing pages", "Web apps & portals", "Core Web Vitals optimization", "CMS & headless builds"]}
    image={IMG.website}
    reverse
    bg="bg-[var(--surface)]"
    slug="website-design-development"
  />
);

export const ServiceSEO = () => (
  <ServiceDetail
    eyebrow="SEO · Local SEO · GEO · AEO"
    title="Get Found Where Your Customers Search"
    desc="Modern search isn't just Google — it's Maps, ChatGPT, Perplexity, and Gemini. We make your brand the answer across every search surface that matters."
    items={["Technical SEO audits", "Local SEO & GBP", "GEO & AEO optimization", "Content & topical authority", "Link acquisition", "Schema & entity SEO"]}
    image={IMG.seo}
    slug="seo-local-seo"
  />
);

export const ServiceAI = () => (
  <ServiceDetail
    eyebrow="AI & CRM automation"
    title="Automate the Work That Slows You Down"
    desc="Custom AI agents, WhatsApp bots, and CRM workflows that qualify leads, book meetings, send proposals, and keep pipeline moving — 24/7."
    items={["AI sales agents", "WhatsApp automation", "CRM workflows", "Lead scoring & routing", "Automated reporting", "Internal AI tools"]}
    image={IMG.ai}
    reverse
    bg="bg-[var(--surface)]"
    slug="ai-crm-automation"
  />
);

export const ServiceSocialMedia = () => (
  <ServiceDetail
    eyebrow="Social media management"
    title="Build Community, Drive Conversions"
    desc="Turn followers into customers with strategic content, community management, and influencer partnerships that amplify your brand's voice."
    items={["Content Creation", "Community Management", "Social Strategy", "Influencer Marketing", "Analytics & Reporting"]}
    image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
  />
);

export const ServiceContent = () => (
  <ServiceDetail
    eyebrow="Content marketing"
    title="Words That Sell and Stories That Connect"
    desc="High-quality content tailored for your audience, designed to build authority, educate prospects, and drive organic inbound leads."
    items={["Blog Articles", "Video Scripts", "Copywriting", "Whitepapers", "Email Newsletters"]}
    image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
    reverse
    bg="bg-[var(--surface)]"
  />
);

export const ServiceBranding = () => (
  <ServiceDetail
    eyebrow="Branding & identity"
    title="A Brand That Demands Attention"
    desc="Stand out in crowded markets with a strong visual identity, cohesive brand guidelines, and a compelling narrative that resonates."
    items={["Logo Design", "Brand Guidelines", "Visual Identity", "Rebranding", "Brand Strategy"]}
    image="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
    slug="branding"
  />
);

export const ServiceCRM = () => (
  <ServiceDetail
    eyebrow="CRM setup & management"
    title="Turn Chaos Into a Predictable Pipeline"
    desc="Organize your leads, automate your sales process, and never lose another opportunity with custom CRM implementations."
    items={["HubSpot Setup", "Salesforce Integration", "Pipeline Management", "Lead Scoring", "Sales Automation"]}
    image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    reverse
    bg="bg-[var(--surface)]"
  />
);

export const ServiceEmail = () => (
  <ServiceDetail
    eyebrow="Email marketing"
    title="Unlock Revenue from Your Existing List"
    desc="Segmented campaigns and automated drip sequences that nurture leads and drive repeat purchases on autopilot."
    items={["Newsletter Campaigns", "Drip Sequences", "List Segmentation", "A/B Testing", "Performance Tracking"]}
    image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
  />
);

export const ServiceAnalytics = () => (
  <ServiceDetail
    eyebrow="Analytics & data strategy"
    title="Decisions Based on Data, Not Guesswork"
    desc="Custom dashboards and deep tracking setups so you know exactly which campaigns are driving revenue and where your leaks are."
    items={["Google Analytics 4", "Custom Dashboards", "Conversion Tracking", "Data Visualization", "Growth Consulting"]}
    image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    reverse
    bg="bg-[var(--surface)]"
  />
);

/* ---------- CASE STUDIES ---------- */
const CASES = [
  { brand: "Aurora Realty", metric: "+312%", label: "Qualified leads in 90 days", desc: "Rebuilt funnel, paid strategy, and CRM automation across UAE & KSA." },
  { brand: "Sandstone Co.", metric: "4.2x", label: "Organic traffic growth", desc: "Technical SEO + content engine + Local SEO across 18 service areas." },
  { brand: "BluePeak Tech", metric: "-47%", label: "Cost per acquisition", desc: "CRO + new landing system + AI lead qualification reduced wasted spend." },
];

export function CaseStudies() {
  return (
    <section className="section-y bg-[var(--ink-deep)] text-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Case studies</span>
          <h2 className="headline-lg mt-4 text-white">Real Numbers. Real Growth.</h2>
          <p className="mt-5 text-white/70 leading-relaxed">
            A few of the outcomes we've delivered across real estate, e-commerce, healthcare, and SaaS.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CASES.map((c) => (
            <article key={c.brand} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-[var(--gold)]/40">
              <div className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">{c.brand}</div>
              <div className="mt-5 text-5xl font-bold text-white">{c.metric}</div>
              <div className="mt-2 text-sm text-white/65">{c.label}</div>
              <p className="mt-6 text-[15px] leading-relaxed text-white/80">{c.desc}</p>
              <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)]">
                Read case study <ArrowUpRight size={15} />
              </div>
            </article>
          ))}
        </div>
        

      </div>
    </section>
  );
}

/* ---------- TECH STACK ---------- */
const TECH_LOGOS = [
  "ActiveCampaign_logo.svg.webp", "Adobe-Illustrator-logo.png", "Amazon_Web_Services_2025.svg.webp", "Bc-logo-dark.svg.webp", "Claude_AI_logo.svg.webp", "Docker_Logo.svg.webp", "GA4.png", "Go_Logo_Blue.svg.webp", "Google-Cloud-Logo.png", "Google_2026_logo.svg.webp", "Google_Gemini_logo_2025.svg.webp", "Google_Search_Console_logo.svg.webp", "HubSpot_Logo.svg.webp", "Looker.svg.webp", "Magento_Logo.svg.webp", "Mailchimp_logo.svg.webp", "Meta_Platforms_Inc._logo.svg.webp", "Mixpanel_Purple_-_2023.png", "Moz.png", "Next.js_wordmark.svg.webp", "Node.js_logo.svg.webp", "OpenAI_logo_2025_(wordmark).svg.webp", "Pipedrive_logo.svg.webp", "React_Logo_SVG.svg.webp", "Salesforce.com_logo.svg.webp", "Semrush_logo_2026.png", "SendGrid_2016_Logo.png", "Shopify_logo_2018.svg.webp", "Tableau_logo.svg.webp", "Tailwind_CSS_logo_with_dark_text.svg.webp", "TikTok_logo.svg.webp", "Vercel_logo_2025.svg.webp", "Webflow_logo_2023.svg.webp", "WooCommerce2025_logo.svg.webp", "ZOHO_logo_2023.svg.webp", "adobephotoshop.png", "ahrefs.png", "figmalogo.png", "ghighlevel.png", "klavyo.png", "makelogo.png", "n8n.png", "pythonlogo.png", "supabaselogo.png", "typescriptlogo.png", "whatsapplogo.png", "wordpresslogo.png", "zapierlogo.png"
];

const filteredLogos = TECH_LOGOS;
const third = Math.ceil(filteredLogos.length / 3);
const row1 = filteredLogos.slice(0, third);
const row2 = filteredLogos.slice(third, third * 2);
const row3 = filteredLogos.slice(third * 2);

export function TechStack() {
  return (
    <section className="section-y bg-white overflow-hidden">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end mb-16">
          <div className="lg:col-span-7">
            <span className="eyebrow">Technology stack</span>
            <h2 className="headline-lg mt-4 text-[var(--ink-deep)]">
              Modern Tools. Battle-Tested Stack.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[color:var(--muted-foreground)] leading-relaxed">
            We standardize on the platforms trusted by the fastest-growing companies in the world —
            and integrate them into one accountable system.
          </p>
        </div>

        <div className="relative flex flex-col gap-6 group overflow-hidden py-4">
          {/* Row 1: Moves Left */}
          <div className="flex w-max animate-marquee-left gap-6 px-4">
            {[...row1, ...row1].map((filename, idx) => {
              const isWhiteLogo = ['ahrefs.png', 'supabaselogo.png', 'whatsapplogo.png', 'typescriptlogo.png'].includes(filename);
              const isLargeLogo = ['supabaselogo.png', 'wordpresslogo.png', 'pythonlogo.png', 'typescriptlogo.png'].includes(filename);
              return (
              <div key={`r1-${idx}`} className="flex-shrink-0 flex items-center justify-center p-4 w-52 h-32 transition-transform duration-300 hover:scale-110">
                <img 
                  src={`/toolslogos/${filename}`} 
                  alt="Tool logo" 
                  className={`object-contain transition-all duration-300 ${isLargeLogo ? 'max-w-[180px] max-h-[110px] scale-125' : 'max-w-[150px] max-h-[90px]'} ${
                    isWhiteLogo 
                      ? 'filter invert hue-rotate-180 opacity-60 hover:opacity-100' 
                      : 'filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
                  }`} 
                  loading="lazy"
                />
              </div>
            )})}
          </div>

          {/* Row 2: Moves Right */}
          <div className="flex w-max animate-marquee-right gap-6 px-4">
            {[...row2, ...row2].map((filename, idx) => {
              const isWhiteLogo = ['ahrefs.png', 'supabaselogo.png', 'whatsapplogo.png', 'typescriptlogo.png'].includes(filename);
              const isLargeLogo = ['supabaselogo.png', 'wordpresslogo.png', 'pythonlogo.png', 'typescriptlogo.png'].includes(filename);
              return (
              <div key={`r2-${idx}`} className="flex-shrink-0 flex items-center justify-center p-4 w-52 h-32 transition-transform duration-300 hover:scale-110">
                <img 
                  src={`/toolslogos/${filename}`} 
                  alt="Tool logo" 
                  className={`object-contain transition-all duration-300 ${isLargeLogo ? 'max-w-[180px] max-h-[110px] scale-125' : 'max-w-[150px] max-h-[90px]'} ${
                    isWhiteLogo 
                      ? 'filter invert hue-rotate-180 opacity-60 hover:opacity-100' 
                      : 'filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
                  }`} 
                  loading="lazy"
                />
              </div>
            )})}
          </div>

          {/* Row 3: Moves Left */}
          <div className="flex w-max animate-marquee-left gap-6 px-4">
            {[...row3, ...row3].map((filename, idx) => {
              const isWhiteLogo = ['ahrefs.png', 'supabaselogo.png', 'whatsapplogo.png', 'typescriptlogo.png'].includes(filename);
              const isLargeLogo = ['supabaselogo.png', 'wordpresslogo.png', 'pythonlogo.png', 'typescriptlogo.png'].includes(filename);
              return (
              <div key={`r3-${idx}`} className="flex-shrink-0 flex items-center justify-center p-4 w-52 h-32 transition-transform duration-300 hover:scale-110">
                <img 
                  src={`/toolslogos/${filename}`} 
                  alt="Tool logo" 
                  className={`object-contain transition-all duration-300 ${isLargeLogo ? 'max-w-[180px] max-h-[110px] scale-125' : 'max-w-[150px] max-h-[90px]'} ${
                    isWhiteLogo 
                      ? 'filter invert hue-rotate-180 opacity-60 hover:opacity-100' 
                      : 'filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
                  }`} 
                  loading="lazy"
                />
              </div>
            )})}
          </div>
          
          {/* Gradients on edges to blend with white background */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* ---------- CEO MESSAGE ---------- */
export function CeoMessage() {
  return (
    <section className="section-y bg-[#090429] relative overflow-hidden">
      <div className="container-x">
        <div className="fade-up" style={{ animationDelay: '100ms' }}>
          <div className="text-center mb-8">
            <span className="eyebrow mx-auto justify-center text-white/80">A MESSAGE FROM THE FOUNDER</span>
          </div>
          
          <div className="rounded-[2.5rem] bg-gray-100 p-8 md:p-16 lg:p-20 text-[var(--ink-deep)] relative overflow-hidden shadow-2xl">
            <div className="absolute right-12 top-16 text-[20rem] leading-none font-serif text-[var(--gold)]/15 select-none pointer-events-none hidden md:block">"</div>
            <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-[var(--gold)]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="md:col-span-3 lg:col-span-3">
                <img 
                  src="/ceo image.jpg" 
                  alt="M. Shahzad" 
                  className="w-full aspect-[4/5] rounded-2xl object-cover border-4 border-[var(--gold)] shadow-xl"
                />
              </div>
              
              <div className="md:col-span-9 lg:col-span-9 flex flex-col justify-center">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[var(--ink-deep)] mb-6">
                  We Built The Agency
                </h2>
                
                <p className="text-gray-600 text-lg md:text-2xl leading-relaxed font-medium mb-10">
                  "For years, I watched businesses burn capital on disconnected marketing efforts. They would hire an SEO agency, a web developer, and a media buyer—only to realize that nobody was looking at the bigger picture: <strong className="text-gray-800 font-bold">Predictable Revenue</strong>."
                </p>
                
                <div className="flex flex-col">
                  <div className="text-gray-400 tracking-wide select-none" style={{ fontFamily: "'Qwitcher Grypen', cursive", fontSize: "4.5rem", lineHeight: "1" }}>
                    Shahzad Rando
                  </div>
                  <div className="text-[color:var(--muted-foreground)] text-sm font-sans tracking-wide mt-2">
                    Founder & CEO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TEAM ---------- */
const TEAM = [
  { name: "Ayesha Tariq", role: "Growth Strategist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" },
  { name: "Bilal Ahmed", role: "Performance Lead", img: AVATARS[0] },
  { name: "Hassan Raza", role: "Design Director", img: AVATARS[1] },
  { name: "Noor Hassan", role: "AI Engineer", img: AVATARS[3] },
];

export function Team() {
  return (
    <section className="section-y bg-[var(--surface)]">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">The team</span>
            <h2 className="headline-lg mt-4 text-[var(--ink-deep)]">
              Senior Specialists. Zero Account Managers.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[color:var(--muted-foreground)] leading-relaxed">
            You work directly with the strategists, designers, developers, and AI engineers building
            your growth system — no middle layers, no handoffs.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <div key={m.name} className="group overflow-hidden rounded-3xl bg-white border border-[var(--border)]">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={m.img} alt={m.name} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="text-base font-semibold text-[var(--ink-deep)]">{m.name}</div>
                <div className="text-sm text-[color:var(--muted-foreground)]">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SOCIAL PROOF LOGOS ---------- */
export function SocialProof() {
  const logos = ["Aurora Realty", "MeridianCare", "Sandstone Co.", "BluePeak Tech", "Northwind", "Vertex Studio", "Helio Group", "Kingsbridge", "Lumen Labs", "Orbit Group"];
  return (
    <section className="bg-white py-16 border-y border-[var(--border)]">
      <div className="container-x">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-[color:var(--muted-foreground)]">
          Trusted by 170+ brands across Pakistan, UAE, KSA & globally
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-10 gap-y-6 items-center">
          {logos.map((l) => (
            <div key={l} className="text-center text-[15px] font-semibold tracking-wide text-[var(--ink-deep)]/45 hover:text-[var(--ink-deep)] transition">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT STRIP ---------- */
export function ContactStrip() {
  return (
    <section className="bg-[var(--ink)] text-white">
      <div className="container-x py-14 grid gap-8 md:grid-cols-3 md:items-center">
        {[
          { icon: Mail, label: "Email us", value: "hello@nexdeer.com" },
          { icon: Phone, label: "Call us", value: <><span className="block">+44 7537 171506</span><span className="block mt-0.5">+92 318 6662360</span></> },
          { icon: MapPin, label: "Visit us", value: "Multan, Pakistan" },
        ].map(({ icon: Icon, label, value }, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--gold)] text-[var(--ink-deep)]"><Icon size={18} /></span>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">{label}</div>
              <div className="mt-1 text-base font-semibold">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
