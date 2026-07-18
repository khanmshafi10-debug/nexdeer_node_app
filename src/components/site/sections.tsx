import { useState, useEffect, useRef, useCallback } from "react";
import { INDUSTRIES } from "@/data/industries";
import { Link, useNavigate } from "@tanstack/react-router";
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

/* ---------- Scroll Reveal System ---------- */
function useRevealObserver() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Find all [data-reveal] children + self
    const targets = el.querySelectorAll("[data-reveal]");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return ref;
}

/** Wrapper that auto-observes all [data-reveal] descendants */
export function RevealSection({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const ref = useRevealObserver();
  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
}

/* ---------- Helpers ---------- */
const IMG = {
  hero: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
  team: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
  meeting: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80",
  analytics: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1400&q=80",
  marketing: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  website: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1400&q=80",
  seo: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1400&q=80",
  ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
  exec: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
  city: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=80",
  portfolio1: "/projects/real estate website.webp",
  portfolio2: "/projects/Healthcare Clinics.webp",
  portfolio3: "/projects/branding.webp",
  portfolio4: "/projects/collage.webp",
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
    <section id="top" className="relative isolate overflow-hidden grid-noise bg-[var(--ink-deep)] text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=70"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink-deep)]/95 via-[var(--ink-deep)]/85 to-[var(--ink-deep)]" />
      </div>

      <div className="container-x pt-20 pb-16 md:pt-32 md:pb-32">
        <div className="mx-auto max-w-4xl text-center px-2">
          <span className="eyebrow mx-auto border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/10 px-4 py-1.5 rounded-full text-[var(--gold)]"><Sparkles size={14} className="animate-heartbeat" /> Full-Stack Digital Growth Agency</span>
          <h1 className="text-[clamp(1.8rem,5vw+0.5rem,4.25rem)] font-bold leading-[1.08] tracking-tight mt-5 text-white hero-animate">
            Stop Wasting Money on <span className="text-white">Marketing</span> That <span className="text-[var(--gold)]">Doesn't Generate Revenue</span>
          </h1>
          <p className="mt-7 mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-slate-100/85 hero-animate" style={{ animationDelay: '150ms' } as React.CSSProperties}>
            NEXDEER helps businesses scale faster through performance marketing, high-converting
            websites, SEO, local search optimization, and AI-powered automation — bringing your
            marketing, sales, and growth systems together under one roof.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 hero-animate" style={{ animationDelay: '300ms' } as React.CSSProperties}>
            <a href="https://wa.me/447537171506" target="_blank" rel="noopener noreferrer" className="btn-gold">
              Get Your Custom Growth Plan
            </a>
            <Link to="/our-work" className="btn-ghost text-white group">
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
  const [displayValue, setDisplayValue] = useState(value);
  const nodeRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return;
    
    const target = parseInt(match[1], 10);
    const suffix = match[2];
    
    // Set initial animate state to 0 on mount
    setDisplayValue("0" + suffix);
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp: number | null = null;
          const duration = 1600;
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 4); // Quartic ease out
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
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
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
    <RevealSection>
    <section id="about" className="section-y bg-[var(--surface)]">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5" data-reveal="left">
          <div className="relative group/img cursor-default">
            <div className="overflow-hidden rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-700 group-hover/img:shadow-[0_25px_50px_rgba(232,181,4,0.15)] group-hover/img:-translate-y-2">
              <img src="/process.webp" alt="Growth Process: Plan, Analyze, Execute, Review, Optimize" loading="lazy" decoding="async" className="aspect-[4/5] object-cover w-full transition-transform duration-[2s] ease-out group-hover/img:scale-105" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block max-w-[220px] md:max-w-[260px] rounded-2xl bg-[var(--ink-deep)] p-4 md:p-5 text-white shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(232,181,4,0.3)] z-10 float" style={{ animation: 'nx-float 6s ease-in-out infinite, nx-glow-breathe 4s ease-in-out infinite' }}>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none" />
              <div className="text-3xl font-bold transition-colors duration-300 group-hover/img:text-[var(--gold)]"><AnimatedNumber value="98%" /></div>
              <div className="text-xs uppercase tracking-wider text-white/65 mt-1">Client retention across multi-year engagements</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="eyebrow" data-reveal="up">Trusted by growing businesses</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-4 text-[var(--ink-deep)] leading-[1.1] tracking-tight" data-reveal="up" style={{ '--reveal-delay': '100' } as React.CSSProperties}>
            Built to Help Businesses Grow Smarter and Scale Faster
          </h2>
          <div className="mt-6 space-y-5 text-[15.5px] leading-relaxed text-[color:var(--muted-foreground)]" data-reveal="up" style={{ '--reveal-delay': '200' } as React.CSSProperties}>
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

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              ["170+", "Clients"],
              ["250+", "Projects"],
              ["15+", "Experts"],
            ].map(([n, l], idx) => (
              <div 
                key={l} 
                className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-white px-4 py-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(232,181,4,0.12)] hover:border-[var(--gold)]/50 group cursor-default"
                data-reveal="scale" style={{ '--reveal-delay': `${300 + (idx * 120)}` } as React.CSSProperties}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="text-2xl font-bold text-[var(--ink-deep)] transition-all duration-500 group-hover:text-[var(--gold)] group-hover:scale-110 origin-left inline-block relative z-10"><AnimatedNumber value={n} /></div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-black/40 mt-1.5 transition-colors duration-500 group-hover:text-black/60 relative z-10">{l}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-10">
            <a href="https://wa.me/447537171506" target="_blank" rel="noopener noreferrer" className="btn-gold">
              Let's Grow Together
            </a>
          </div>
        </div>
      </div>
    </section>
    </RevealSection>
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
    <RevealSection>
    <section className="section-y bg-[var(--ink-deep)] text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
      <div className="container-x grid gap-14 lg:grid-cols-12 relative z-10">
        <div className="lg:col-span-5">
          <span className="eyebrow" data-reveal="up">The challenge</span>
          <h2 className="headline-lg mt-4 text-white" data-reveal="up" style={{ '--reveal-delay': '100' } as React.CSSProperties}>
            The Problem Isn't Traffic. The Problem Is What Happens After.
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed max-w-md" data-reveal="up" style={{ '--reveal-delay': '200' } as React.CSSProperties}>
            Many businesses invest in websites, social media, SEO, or advertising without a clear
            growth strategy. Without a connected growth system, businesses often spend more while
            achieving less.
          </p>
          <div className="mt-10 relative group overflow-hidden rounded-2xl" data-reveal="scale" style={{ '--reveal-delay': '300' } as React.CSSProperties}>
            <div className="absolute inset-0 bg-[var(--gold)]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img src={IMG.analytics} alt="Analytics dashboard" loading="lazy" decoding="async" className="border border-white/10 aspect-[16/10] object-cover w-full transition-transform duration-700 group-hover:scale-110" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid sm:grid-cols-2 gap-4">
            {items.map((t, i) => (
              <li
                key={t}
                className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-[var(--gold)]/50 hover:bg-[var(--gold)]/[0.03] hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(232,181,4,0.08)] cursor-default"
                data-reveal={i % 2 === 0 ? 'left' : 'right'} style={{ '--reveal-delay': `${i * 80}` } as React.CSSProperties}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] font-bold text-sm transition-all duration-300 group-hover:bg-[var(--gold)] group-hover:text-black group-hover:rotate-6 group-hover:scale-110 shadow-lg">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-relaxed text-white/80 transition-colors duration-300 group-hover:text-white mt-0.5">{t}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-[var(--gold)]/40 bg-[var(--gold)]/[0.05] p-7 relative overflow-hidden group hover:border-[var(--gold)]/60 transition-colors duration-300" data-reveal="scale" style={{ '--reveal-delay': '500' } as React.CSSProperties}>
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
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
    </RevealSection>
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
    <RevealSection>
    <section id="services" className="section-y bg-[var(--surface)]">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow" data-reveal="up">The NEXDEER growth system</span>
            <h2 className="headline-lg mt-4 text-[var(--ink-deep)]" data-reveal="up" style={{ '--reveal-delay': '100' } as React.CSSProperties}>
              One Partner. One Strategy. One Scalable Growth System.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15.5px] leading-relaxed text-[color:var(--muted-foreground)]" data-reveal="up" style={{ '--reveal-delay': '200' } as React.CSSProperties}>
            Instead of managing multiple vendors, freelancers, and disconnected tools, work with a
            team that handles every critical component of your digital growth — combining
            performance marketing, websites, SEO, and AI automation into systems that consistently
            generate leads, customers, and revenue.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {displayServices.map(({ icon: Icon, title, image, items }, idx) => (
            <Link
              to="/services"
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_-25px_rgba(2,0,42,0.35)] block"
              data-reveal="up" style={{ '--reveal-delay': `${idx * 80}` } as React.CSSProperties}
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
            <a href="https://wa.me/447537171506" target="_blank" rel="noopener noreferrer" className="btn-gold">
              Let's Fix Your Challenges
            </a>
          </div>
        )}
      </div>
    </section>
    </RevealSection>
  );
}

const PROJECT_IMAGES = [
  "/projects/real estate website.webp",
  "/projects/travel website.webp",
  "/projects/branding.webp",
  "/projects/collage.webp",
  "/projects/Automotive Dealerships.webp",
  "/projects/Beauty Salons.webp",
  "/projects/Cafés.webp",
  "/projects/Car Rental Companies.webp",
  "/projects/Cleaning Companies.webp",
  "/projects/Clothing Stores.webp",
  "/projects/Coaching Centers.webp",
  "/projects/Construction Companies.webp",
  "/projects/Consulting Firms.webp",
  "/projects/Cosmetic Brands organic.webp",
  "/projects/Cosmetic Brands.webp",
  "/projects/Courier Services.webp",
  "/projects/Dental Clinics.webp",
  "/projects/Digital Agencies.webp",
  "/projects/E-commerce Stores.webp",
  "/projects/e-commerce website.webp",
  "/projects/Education Institutes.webp",
  "/projects/Event Management Companies.webp",
  "/projects/Export Businesses.webp",
  "/projects/Fashion Brands.webp",
  "/projects/Financial Services.webp",
  "/projects/Food & Beverage Brands.webp",
  "/projects/Gyms & Fitness Centers.webp",
  "/projects/Healthcare Clinics.webp",
  "/projects/Home Services.webp",
  "/projects/Hotels & Resorts.webp",
  "/projects/Insurance Companies.webp",
  "/projects/Interior Design Studios.webp",
  "/projects/IT Service Providers.webp",
  "/projects/Jewelry Brands.webp",
  "/projects/Law Firms.webp",
  "/projects/Local Service Businesses.webp",
  "/projects/Logistics Companies.webp",
  "/projects/Manufacturing Companies.webp",
  "/projects/Mortgage Brokers.webp",
  "/projects/Online Course Businesses.webp",
  "/projects/Photography Studios.webp",
  "/projects/Professional Services.webp",
  "/projects/Property Management Companies.webp",
  "/projects/Recruitment Agencies.webp",
  "/projects/Restaurants.webp",
  "/projects/SaaS Businesses.webp",
  "/projects/Security Companies.webp",
  "/projects/shopify store.webp",
  "/projects/Skincare Brands.webp",
  "/projects/Skincare Brands2.webp",
  "/projects/Software Companies.webp",
  "/projects/Solar Companies.webp",
  "/projects/Spas & Wellness Centers.webp",
  "/projects/Wedding Planners.webp",
];

const REAL_PROJECT_DATA = [
  { title: "Aurora Realty", tag: "Local SEO · Case Study", externalUrl: "" },
  { title: "Travel Agency Website", tag: "Travel · Web Design", externalUrl: "https://www.assetvantage.com/?utm_source=chatgpt.com" },
  { title: "Sandstone Co.", tag: "Local SEO · Case Study", externalUrl: "" },
  { title: "Social Media Creatives", tag: "Performance Marketing", externalUrl: "https://www.prisa.com" },
  { title: "Automotive Dealerships", tag: "B2B · Automation", externalUrl: "https://www.iacgroup.com" },
  { title: "Beauty Salons", tag: "E-Commerce · CRO", externalUrl: "https://www.boohoo.com" },
  { title: "Cafés", tag: "E-Commerce · CRO", externalUrl: "https://latashaskitchen.com" },
  { title: "Car Rental Companies", tag: "B2B · Automation", externalUrl: "https://www.iacgroup.com" },
  { title: "Cleaning Companies", tag: "B2B · Automation", externalUrl: "https://www.iacgroup.com" },
  { title: "Clothing Stores", tag: "E-Commerce · CRO", externalUrl: "https://www.boohoo.com" },
  { title: "Coaching Centers", tag: "Education · Web Design", externalUrl: "https://www.havergal.on.ca" },
  { title: "Construction Companies", tag: "B2B · Automation", externalUrl: "https://www.iacgroup.com" },
  { title: "Consulting Firms", tag: "Consulting · Ads", externalUrl: "https://grantcardone.com" },
  { title: "Cosmetic Brands Organic", tag: "E-Commerce · CRO", externalUrl: "https://www.boohoo.com" },
  { title: "Cosmetic Brands", tag: "E-Commerce · CRO", externalUrl: "https://www.boohoo.com" },
  { title: "Courier Services", tag: "B2B · Automation", externalUrl: "https://www.iacgroup.com" },
  { title: "Dental Clinics", tag: "Healthcare · Branding", externalUrl: "https://www.vivahealth.com" },
  { title: "Digital Agencies", tag: "B2B · Automation", externalUrl: "https://www.iacgroup.com" },
  { title: "E Commerce Stores", tag: "E-Commerce · CRO", externalUrl: "https://www.boohoo.com" },
  { title: "E Commerce Website", tag: "E-Commerce · CRO", externalUrl: "https://www.boohoo.com" },
  { title: "Education Institutes", tag: "Education · Web Design", externalUrl: "https://www.havergal.on.ca" },
  { title: "Event Management Companies", tag: "Creative · Web Design", externalUrl: "https://www.prisa.com" },
  { title: "Export Businesses", tag: "B2B · Automation", externalUrl: "https://www.iacgroup.com" },
  { title: "Fashion Brands", tag: "E-Commerce · CRO", externalUrl: "https://www.boohoo.com" },
  { title: "Financial Services", tag: "B2B · Automation", externalUrl: "https://www.iacgroup.com" },
  { title: "Food & Beverage Brands", tag: "B2B · Automation", externalUrl: "https://www.iacgroup.com" },
  { title: "Gyms & Fitness Centers", tag: "Healthcare · Branding", externalUrl: "https://www.vivahealth.com" },
  { title: "Healthcare Clinics", tag: "Healthcare · Branding", externalUrl: "https://www.vivahealth.com" },
  { title: "Home Services", tag: "B2B · Automation", externalUrl: "https://www.iacgroup.com" },
  { title: "Hotels & Resorts", tag: "Travel · Tourism", externalUrl: "https://www.agriturismo.it" },
  { title: "Insurance Companies", tag: "Finance · SEO", externalUrl: "https://www.assetvantage.com" },
  { title: "Interior Design Studios", tag: "Creative · Web Design", externalUrl: "https://www.prisa.com" },
  { title: "It Service Providers", tag: "B2B · Automation", externalUrl: "https://www.iacgroup.com" },
  { title: "Jewelry Brands", tag: "E-Commerce · CRO", externalUrl: "https://www.boohoo.com" },
  { title: "Law Firms", tag: "Consulting · Ads", externalUrl: "https://grantcardone.com" },
  { title: "Local Service Businesses", tag: "B2B · Automation", externalUrl: "https://www.iacgroup.com" },
  { title: "Logistics Companies", tag: "B2B · Automation", externalUrl: "https://www.iacgroup.com" },
  { title: "Manufacturing Companies", tag: "B2B · Automation", externalUrl: "https://www.iacgroup.com" },
  { title: "Mortgage Brokers", tag: "Finance · SEO", externalUrl: "https://www.assetvantage.com" },
  { title: "Online Course Businesses", tag: "Education · Web Design", externalUrl: "https://www.havergal.on.ca" },
  { title: "Photography Studios", tag: "Creative · Web Design", externalUrl: "https://www.prisa.com" },
  { title: "Professional Services", tag: "B2B · Automation", externalUrl: "https://www.iacgroup.com" },
  { title: "Property Management Companies", tag: "B2B · Automation", externalUrl: "https://www.iacgroup.com" },
  { title: "Recruitment Agencies", tag: "B2B · Automation", externalUrl: "https://www.iacgroup.com" },
  { title: "Restaurants", tag: "E-Commerce · CRO", externalUrl: "https://latashaskitchen.com" },
  { title: "Saas Businesses", tag: "B2B · Automation", externalUrl: "https://www.iacgroup.com" },
  { title: "Security Companies", tag: "B2B · Automation", externalUrl: "https://www.iacgroup.com" },
  { title: "Shopify Store", tag: "E-Commerce · CRO", externalUrl: "https://www.boohoo.com" },
  { title: "Skincare Brands", tag: "E-Commerce · CRO", externalUrl: "https://www.boohoo.com" },
  { title: "Skincare Brands2", tag: "E-Commerce · CRO", externalUrl: "https://www.boohoo.com" },
  { title: "Software Companies", tag: "B2B · Automation", externalUrl: "https://www.iacgroup.com" },
  { title: "Solar Companies", tag: "B2B · Automation", externalUrl: "https://www.iacgroup.com" },
  { title: "Spas & Wellness Centers", tag: "Healthcare · Branding", externalUrl: "https://www.vivahealth.com" },
  { title: "Wedding Planners", tag: "Creative · Web Design", externalUrl: "https://www.prisa.com" },
];

export const ALL_PORTFOLIO_PROJECTS = REAL_PROJECT_DATA.map((data, i) => {
  // Keep exact original IDs for first 4 to preserve link integrity, generate clean unique IDs for others
  const id = i < 4 
    ? ["home-improvement", "meridian-care", "local-seo", "bluepeak-tech"][i]
    : data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") + `-${i}`;
    
  if (id === "home-improvement") {
    return {
      id,
      title: "Home Improvement",
      tag: "Local SEO · Case Study",
      img: "/projects/image-1.jpeg",
      externalUrl: "",
      challenge: `local SEO case study.
Site age: 3 months.
Domain: Fresh domain, .ca 🇨🇦
Niche: Home Improvement.
Location: Canada, Alberta 🇨🇦`,
      solution: `Everything was handled by AI:
- Website built with AI
- Hosted on Cloudflare Workers
- Content researched & written with Claude
- Topics sourced from Reddit, competitors, and AI research
- Structured for topical authority, E-E-A-T, NLP, and proper internal linking

Off-page was simple:
Relevant backlinks
Local citations
Entity building

No aged domain. No huge team. Just a solid strategy and consistent execution.`,
      results: [
        { metric: "10 Days", label: "First Qualified Lead" },
        { metric: "18.4K", label: "Impressions" },
        { metric: "95", label: "Organic Clicks" }
      ],
      timeline: "3 Months",
      services: ["Local SEO", "AI Content", "Cloudflare Workers", "Web Design"]
    };
  }

  if (id === "local-seo") {
    return {
      id,
      title: "Local SEO",
      tag: "Local SEO · Case Study",
      img: "/projects/image-5.jpeg",
      externalUrl: "",
      challenge: `The client approached us with poor visibility on Google Maps. Their Google Business Profile (GMB) had limited optimization, weak service coverage, and lacked strong local SEO foundations. As a result, the business was barely showing in the top 10 search results outside its immediate area.`,
      solution: `To transform the client’s local search presence, we implemented a comprehensive local SEO strategy including Google Business Profile optimization, website SEO enhancements, and local schema markup.`,
      results: [
        { metric: "13.40 → 8.20", label: "Average Rank Improvement" },
        { metric: "1% → 31%", label: "Top 3 Map Pack Rankings" },
        { metric: "26% → 4%", label: "Out of Map Pack Reduction" }
      ],
      timeline: "3 Weeks",
      services: ["GMB Optimization", "Local SEO", "Schema Markup", "Content Strategy"]
    };
  }

  return {
    id,
    title: data.title,
    tag: data.tag,
    img: PROJECT_IMAGES[i % PROJECT_IMAGES.length],
    externalUrl: data.externalUrl,
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

export function Portfolio({ limit, hideHeader, darkTheme }: { limit?: number; hideHeader?: boolean; darkTheme?: boolean }) {
  const navigate = useNavigate();
  const filteredProjects = ALL_PORTFOLIO_PROJECTS.filter(
    p => p.title !== "Aurora Realty" && p.title !== "Sandstone Co." && p.title !== "Social Media Creatives"
  );
  const displayCards = limit ? filteredProjects.slice(0, limit) : filteredProjects;
  return (
    <RevealSection>
    <section id="portfolio" className={`section-y relative overflow-hidden ${darkTheme ? 'bg-[var(--ink-deep)] text-white' : 'bg-slate-50 text-[var(--ink-deep)]'}`}>
      {darkTheme && (
        <div className="absolute inset-0 -z-10 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
      )}
      <div className="container-x relative z-10">
        {!hideHeader && (
          <div className="mb-14">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="text-left">
                <span className="eyebrow" data-reveal="up">Our work</span>
                <h2 className={`headline-lg mt-4 ${darkTheme ? 'text-white' : 'text-[var(--ink-deep)]'}`} data-reveal="up" style={{ '--reveal-delay': '100' } as React.CSSProperties}>
                  Done for Real Businesses
                </h2>
              </div>
              {limit && (
                <div className="flex-shrink-0 mb-1" data-reveal="up" style={{ '--reveal-delay': '300' } as React.CSSProperties}>
                  <Link to="/our-work" className={`btn-ghost ${darkTheme ? 'text-white' : 'text-[var(--ink-deep)]'} group`}>
                    <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:gap-4">View Portfolio <ArrowRight size={16} /></span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        <div className={`mt-14 grid gap-6 ${limit ? 'md:grid-cols-2 lg:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {displayCards.map((c, i) => {
            return (
              <Link
                to="/portfolio/$projectId"
                params={{ projectId: c.id }}
                key={c.id}
                className={`group relative overflow-hidden rounded-3xl border ${darkTheme ? 'border-white/10' : 'border-[var(--border)]'} shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(232,181,4,0.15)] hover:border-[var(--gold)]/30 transition-all duration-700 block`}
                data-reveal="scale"
                style={{ '--reveal-delay': `${(i % 3) * 100}` } as React.CSSProperties}
              >
                <div className="relative overflow-hidden aspect-[4/3] w-full">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  {/* Default state gradient overlay - clean, covers bottom portion for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-deep)]/95 via-[var(--ink-deep)]/65 to-[var(--ink-deep)]/10 opacity-85 group-hover:opacity-0 transition-opacity duration-500" />
                  {/* Hover state gradient overlay - expands higher to completely cover the heading in a rich dark blue gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-deep)]/98 via-[var(--ink-deep)]/92 to-[var(--ink-deep)]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="flex items-end justify-between gap-4">
                    <div className="flex-1 min-w-0 text-left">
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gold/90 group-hover:text-gold transition-colors duration-300 block mb-1">
                        {c.tag}
                      </span>
                      <h3 className="text-lg md:text-[22px] font-bold tracking-tight text-white leading-snug group-hover:text-white transition-colors duration-300">
                        {c.title}
                      </h3>
                    </div>
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:text-ink-deep group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(232,181,4,0.3)] shrink-0">
                      <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
    </RevealSection>
  );
}

/* ---------- INDUSTRIES ---------- */
/* ---------- INDUSTRIES ---------- */

export function Industries() {
  const displayIndustries = INDUSTRIES.slice(0, 12);
  return (
    <RevealSection>
    <section id="industries" className="section-y bg-[var(--surface)]">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="eyebrow" data-reveal="up">Industries</span>
            <h2 className="headline-lg mt-4 text-[var(--ink-deep)]" data-reveal="up" style={{ '--reveal-delay': '100' } as React.CSSProperties}>Industries We Help Scale</h2>
            <p className="mt-5 text-[color:var(--muted-foreground)] leading-relaxed" data-reveal="up" style={{ '--reveal-delay': '200' } as React.CSSProperties}>
              Our strategies are customized to the unique challenges, customer behavior, and growth
              opportunities within each industry.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {displayIndustries.map(({ icon: Icon, label }, idx) => (
            <div
              key={label}
              className="group flex flex-col items-center text-center justify-center gap-4 rounded-2xl border border-[var(--border)] bg-white p-6 transition-all duration-300 hover:border-[var(--gold)]/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] cursor-default overflow-hidden relative"
              data-reveal="scale"
              style={{ '--reveal-delay': `${(idx % 6) * 70}` } as React.CSSProperties}
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
    </RevealSection>
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
    <RevealSection>
    <section className="section-y relative overflow-hidden bg-[var(--ink-deep)] text-white">
      <img src={IMG.city} loading="lazy" decoding="async" alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.12]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--ink-deep)] via-[var(--ink-deep)]/95 to-[var(--ink-deep)]" />

      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5 flex flex-col h-full">
          <div>
            <span className="eyebrow" data-reveal="up">Why choose NEXDEER</span>
            <h2 className="headline-lg mt-4 text-white" data-reveal="up" style={{ '--reveal-delay': '100' } as React.CSSProperties}>More Than a Marketing Agency</h2>
            <p className="mt-6 text-white/75 leading-relaxed max-w-md" data-reveal="up" style={{ '--reveal-delay': '200' } as React.CSSProperties}>
              Most agencies focus on one part of your growth journey. We focus on the entire system —
              from first impression to closed customer to retained client.
            </p>
          </div>
          
          <div className="flex-grow mt-10 relative rounded-3xl overflow-hidden border border-white/10" data-reveal="scale" style={{ '--reveal-delay': '300' } as React.CSSProperties}>
            <img src={IMG.exec} alt="Strategy session" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-5">
            {diff.map((d, i) => (
              <div key={d.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-[var(--gold)]/50" data-reveal="scale" style={{ '--reveal-delay': `${i * 100}` } as React.CSSProperties}>
                <div className="text-xs font-mono text-[var(--gold)]">0{i + 1}</div>
                <h3 className="mt-3 text-xl font-semibold text-white">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{d.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 hidden lg:flex flex-wrap items-center justify-between w-full gap-8">
            <div>
              <div className="text-5xl font-bold text-white">250<span className="text-[var(--gold)]">+</span></div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">Projects Completed</div>
            </div>
            <div className="h-16 w-px bg-white/10" />
            <div>
              <div className="text-5xl font-bold text-white">6<span className="text-[var(--gold)]">+</span></div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">Years Driving Growth</div>
            </div>
            <div className="h-16 w-px bg-white/10" />
            <div>
              <div className="text-5xl font-bold text-white">15<span className="text-[var(--gold)]">+</span></div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </RevealSection>
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
    <RevealSection>
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-white">
      <div className="container-x">
        <div>
          <span className="eyebrow" data-reveal="up">How we work</span>
          <h2 className="headline-lg mt-4 text-[var(--ink-deep)]" data-reveal="up" style={{ '--reveal-delay': '100' } as React.CSSProperties}>A Proven Process Designed for Growth</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.n}
                className="relative rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 group transition-all duration-300 hover:border-[var(--gold)]/50 hover:-translate-y-2 hover:shadow-xl"
                data-reveal="up"
                style={{ '--reveal-delay': `${i * 100}` } as React.CSSProperties}
              >
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
      </div>
    </section>
    </RevealSection>
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
  }, [idx]);

  const t = TESTIMONIALS[idx];
  return (
    <RevealSection>
    <section className="section-y bg-[var(--surface)]">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow" data-reveal="up">Client voices</span>
            <h2 className="headline-lg mt-4 text-[var(--ink-deep)]" data-reveal="up" style={{ '--reveal-delay': '100' } as React.CSSProperties}>What Our Clients Say</h2>
          </div>
          <p className="lg:col-span-5 text-[color:var(--muted-foreground)] leading-relaxed" data-reveal="up" style={{ '--reveal-delay': '200' } as React.CSSProperties}>
            Businesses partner with NEXDEER because they need more than individual services — they
            need a team committed to helping them grow.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-8 rounded-3xl bg-[var(--ink-deep)] p-8 md:p-12 text-white relative overflow-hidden" data-reveal="left">
            <div className="absolute right-8 top-6 text-[10rem] leading-none font-serif text-[var(--gold)]/15 select-none">"</div>
            <div key={idx} className="animate-slide-left">
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
          </div>

          <div className="lg:col-span-4 grid gap-3" data-reveal="right">
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
    </RevealSection>
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
  const [open, setOpen] = useState<number | null>(null);
  return (
    <RevealSection>
      <section className="section-y faq-blue-section text-white relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 -z-10 grid-noise opacity-30" />
        <div className="container-x grid gap-14 lg:grid-cols-12 relative z-10">
          <div className="lg:col-span-5">
            <span className="eyebrow" data-reveal="up">FAQ</span>
            <h2 className="headline-lg mt-4 text-white" data-reveal="up" style={{ '--reveal-delay': '100' } as React.CSSProperties}>Frequently Asked Questions</h2>
            <p className="mt-5 text-white/70 leading-relaxed max-w-sm" data-reveal="up" style={{ '--reveal-delay': '200' } as React.CSSProperties}>
              Everything you need to know before partnering with NEXDEER. Still curious? Reach out
              anytime — we respond fast.
            </p>
          </div>
          <div className="lg:col-span-7" data-reveal="right" style={{ '--reveal-delay': '150' } as React.CSSProperties}>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left faq-item-button text-white"
                    >
                      <span className="text-lg font-semibold">{f.q}</span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-white/70 transition ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden text-white/70 leading-relaxed">
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
    </RevealSection>
  );
}

/* ---------- FINAL CTA ---------- */
export function FinalCTA() {
  return (
    <RevealSection>
    <section id="contact" className="relative overflow-hidden bg-[var(--ink-deep)] text-white">
      <div className="absolute inset-0 -z-10 grid-noise opacity-90" />
      <div className="container-x section-y text-center">
        <span className="eyebrow justify-center" data-reveal="up">Let's build your growth system</span>
        <h2 className="headline-xl mt-5 text-white max-w-4xl mx-auto" data-reveal="up" style={{ '--reveal-delay': '100' } as React.CSSProperties}>
          Ready to <span className="text-[var(--gold)]">Scale Faster?</span>
        </h2>
        <p className="mt-7 mx-auto max-w-2xl text-white/75 text-lg leading-relaxed" data-reveal="up" style={{ '--reveal-delay': '200' } as React.CSSProperties}>
          Whether you need more leads, a better website, stronger visibility, or smarter automation,
          NEXDEER can help you build a growth system designed for long-term success.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3" data-reveal="up" style={{ '--reveal-delay': '300' } as React.CSSProperties}>
          <a href="https://wa.me/923186662360" target="_blank" rel="noreferrer" className="btn-gold">
            <MessageCircle size={17} /> WhatsApp NEXDEER
          </a>
          <Link to="/contact" className="btn-ghost text-white group">
            <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:gap-4">Get Your Custom Growth Plan <ArrowRight size={16} /></span>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto" data-reveal="scale" style={{ '--reveal-delay': '400' } as React.CSSProperties}>
          {[
            ["Pakistan", "Multan"],
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
    </RevealSection>
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
    <RevealSection>
    <section className="section-y bg-white">
      <div className="container-x">
        <div>
          <span className="eyebrow" data-reveal="up">Sound familiar?</span>
          <h2 className="headline-lg mt-4 text-[var(--ink-deep)]" data-reveal="up" style={{ '--reveal-delay': '100' } as React.CSSProperties}>
            The Friction Points Slowing Your Growth
          </h2>
          <p className="mt-5 text-[color:var(--muted-foreground)] leading-relaxed" data-reveal="up" style={{ '--reveal-delay': '200' } as React.CSSProperties}>
            These are the silent revenue killers we eliminate inside the NEXDEER Growth System.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PAIN.map(({ icon: Icon, title, desc }, idx) => (
            <div
              key={title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition hover:border-[var(--ink-deep)] hover:-translate-y-1"
              data-reveal="up"
              style={{ '--reveal-delay': `${(idx % 3) * 100}` } as React.CSSProperties}
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--ink-deep)] text-[var(--gold)]"><Icon size={18} /></div>
              <h3 className="mt-5 text-lg font-semibold text-[var(--ink-deep)]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">{desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-14 text-center" data-reveal="up" style={{ '--reveal-delay': '300' } as React.CSSProperties}>
          <a href="https://wa.me/447537171506" target="_blank" rel="noopener noreferrer" className="btn-gold">
            Let's Fix Your Challenges
          </a>
        </div>
      </div>
    </section>
    </RevealSection>
  );
}

/* ---------- SOLUTION INTRO ---------- */
export function SolutionIntro() {
  return (
    <RevealSection>
    <section className="section-y bg-[var(--ink)] text-white relative overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[var(--gold)]/20 blur-3xl" />
      <div className="container-x relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow justify-center" data-reveal="up">Introducing</span>
          <h2 className="headline-xl mt-5 text-white" data-reveal="up" style={{ '--reveal-delay': '100' } as React.CSSProperties}>
            The NEXDEER <span className="text-[var(--gold)]">Growth System</span>
          </h2>
          <p className="mt-7 text-lg text-white/75 leading-relaxed" data-reveal="up" style={{ '--reveal-delay': '200' } as React.CSSProperties}>
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
            <div 
              key={k} 
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--gold)]/50 hover:bg-white/[0.08] hover:shadow-[0_15px_30px_rgba(232,181,4,0.1)] group cursor-default"
              data-reveal="up"
              style={{ '--reveal-delay': `${300 + (i * 100)}` } as React.CSSProperties}
            >
              <div className="text-xs font-mono text-[var(--gold)] transition-transform duration-300 group-hover:scale-110 origin-left inline-block">0{i + 1}</div>
              <h3 className="mt-3 text-xl font-semibold transition-colors duration-300 group-hover:text-[var(--gold)]">{k}</h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed group-hover:text-white transition-colors duration-300">{v}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-14 text-center" data-reveal="up" style={{ '--reveal-delay': '400' } as React.CSSProperties}>
          <a href="https://wa.me/447537171506" target="_blank" rel="noopener noreferrer" className="btn-gold">
            Build Your Custom Growth Plan
          </a>
        </div>
      </div>
    </section>
    </RevealSection>
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
    <RevealSection>
    <section className={`section-y ${bg ?? "bg-white"}`}>
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:items-center">
        <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
          <div className="relative group overflow-hidden rounded-3xl" data-reveal={reverse ? "left" : "right"}>
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[var(--gold)]/20 to-transparent blur-2xl group-hover:from-[var(--gold)]/40 transition-colors duration-700" />
            <img src={image} alt={title} loading="lazy" decoding="async" className="rounded-3xl border border-[var(--border)] aspect-[4/3] object-cover w-full transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[var(--gold)]/30 transition-colors duration-700 pointer-events-none" />
          </div>
        </div>
        <div className="lg:col-span-6">
          <span className="eyebrow" data-reveal="up">{eyebrow}</span>
          <h2 className="headline-lg mt-4 text-[var(--ink-deep)]" data-reveal="up" style={{ '--reveal-delay': '100' } as React.CSSProperties}>{title}</h2>
          <p className="mt-5 text-[color:var(--muted-foreground)] leading-relaxed" data-reveal="up" style={{ '--reveal-delay': '200' } as React.CSSProperties}>{desc}</p>
          <ul className="mt-7 grid sm:grid-cols-2 gap-4">
            {items.map((i, idx) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[var(--ink-deep)] font-medium group cursor-default transition-transform duration-300 hover:translate-x-1" data-reveal="up" style={{ '--reveal-delay': `${300 + (idx * 50)}` } as React.CSSProperties}>
                <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] transition-all duration-300 group-hover:bg-[var(--gold)] group-hover:text-black group-hover:rotate-12 mt-0.5">
                  <CheckCircle2 size={12} className="stroke-[3]" />
                </div>
                <span className="transition-colors duration-300 group-hover:text-[var(--gold)]">{i}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10" data-reveal="up" style={{ '--reveal-delay': '450' } as React.CSSProperties}>
            {slug ? (
              <Link to="/services/$serviceId" params={{ serviceId: slug }} className="btn-ghost text-[var(--ink-deep)] group">
                <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:gap-4">Learn More <ArrowRight size={16} /></span>
              </Link>
            ) : (
              <Link to="/contact" className="btn-ghost text-[var(--ink-deep)] group">
                <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:gap-4">Learn More <ArrowRight size={16} /></span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
    </RevealSection>
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
export const CASES = [
  { id: "home-improvement", brand: "Home Improvement", metric: "10 Days", label: "To First Qualified Lead", desc: "Local SEO case study on a fresh .ca domain: ranking in AI Overviews, 18.4K impressions, and phone calls coming in." },
  { id: "local-seo", brand: "Local SEO", metric: "31%", label: "In Top 3 Rankings (Map Pack)", desc: "From ranking struggles to dominating the Map Pack: average rank improved from 13.40 to 8.20 in just 3 weeks." },
  { id: "bluepeak-tech", brand: "BluePeak Tech", metric: "-47%", label: "Cost per acquisition", desc: "CRO + new landing system + AI lead qualification reduced wasted spend." },
];

export function CaseStudies() {
  return (
    <RevealSection>
    <section id="portfolio" className="section-y bg-[var(--ink-deep)] text-white relative overflow-hidden">
      {/* Unified grid noise matching the branding */}
      <div className="absolute inset-0 -z-10 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
      
      <div className="container-x relative z-10">
        {/* HEADING AND BUTTON ALIGNED */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="text-left">
            <span className="eyebrow text-[var(--gold)]" data-reveal="up">Our Work</span>
            <h2 className="headline-lg mt-4 text-white" data-reveal="up" style={{ '--reveal-delay': '100' } as React.CSSProperties}>
              Real Numbers. Real Growth.
            </h2>
          </div>
          <div className="flex-shrink-0" data-reveal="up" style={{ '--reveal-delay': '300' } as React.CSSProperties}>
            <Link to="/our-work" className="btn-gold group">
              <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:gap-4">
                View Portfolio <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>

        {/* THREE CASE STUDY CARDS WELL-DESIGNED WITHOUT BACKGROUND IMAGES */}
        <div className="grid gap-6 md:grid-cols-3">
          {CASES.map((c, i) => {
            return (
              <Link 
                to="/portfolio/$projectId" 
                params={{ projectId: c.id }} 
                key={c.brand} 
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8 lg:p-10 transition-all duration-500 hover:border-[var(--gold)]/40 hover:bg-white/[0.05] hover:shadow-[0_0_50px_rgba(212,175,55,0.05)] flex flex-col justify-between min-h-[320px] md:min-h-[380px] cursor-pointer"
              >
                {/* Decorative gold glow on hover */}
                <div className="absolute -right-16 -top-16 -z-10 h-32 w-32 rounded-full bg-[var(--gold)]/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Top Section */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">{c.brand}</span>
                    <div className="rounded-full bg-white/[0.04] p-2 text-white/40 group-hover:text-[var(--gold)] group-hover:bg-[var(--gold)]/10 transition-all duration-300">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  
                  {/* Metric & Label */}
                  <div className="mt-8">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight group-hover:text-[var(--gold)] transition-colors duration-300">
                      {c.metric}
                    </div>
                    <div className="mt-2.5 text-xs text-white/50 font-bold uppercase tracking-wider">
                      {c.label}
                    </div>
                  </div>
                </div>

                {/* Divider, Description & Action */}
                <div className="mt-10 pt-6 border-t border-white/5 flex-1 flex flex-col justify-between">
                  <p className="text-[15px] leading-relaxed text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {c.desc}
                  </p>
                  
                  <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--gold)] transition-all duration-300 group-hover:translate-x-1">
                    <span>Read case study</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* TWO STATIC IMAGES SHOWN BELOW THE THREE CARDS */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 aspect-[16/10] bg-slate-900 shadow-xl" data-reveal="up" style={{ '--reveal-delay': '100' } as React.CSSProperties}>
            <img 
              src="/projects/real estate website.webp" 
              alt="Real Estate Website Project" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 aspect-[16/10] bg-slate-900 shadow-xl" data-reveal="up" style={{ '--reveal-delay': '200' } as React.CSSProperties}>
            <img 
              src="/projects/branding.webp" 
              alt="Branding Project" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
    </RevealSection>
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
    <section className="section-y bg-gray-50 overflow-hidden">
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
      </div>

      <div className="relative flex flex-col gap-6 overflow-hidden py-4">
        {/* Row 1: Moves Left */}
        <div className="group flex w-max animate-marquee-left gap-6 px-4">
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
        <div className="group flex w-max animate-marquee-right gap-6 px-4">
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
        <div className="group flex w-max animate-marquee-left gap-6 px-4">
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
        
        {/* Gradients on edges to blend with bg-gray-50 background */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent" />
      </div>
    </section>
  );
}

/* ---------- CEO MESSAGE ---------- */
export function CeoMessage() {
  return (
    <RevealSection>
    <section className="section-y relative overflow-hidden bg-[var(--surface)]">
      <div className="container-x relative z-10">
        <div data-reveal="up">
          
          <div className="rounded-2xl bg-gray-100 p-8 md:p-16 lg:p-20 text-[var(--ink-deep)] relative overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(9,4,41,0.3)]">
            <div className="absolute right-12 top-16 text-[15rem] leading-none font-serif text-[var(--gold)]/10 select-none pointer-events-none hidden md:block">"</div>
            <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="md:col-span-3 lg:col-span-3" data-reveal="scale" style={{ '--reveal-delay': '100' } as React.CSSProperties}>
                <img 
                  src="/ceo image.webp" 
                  alt="Shahzad Rando" 
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/5] rounded-2xl object-cover object-top"
                />
              </div>
              
              <div className="md:col-span-9 lg:col-span-9 flex flex-col justify-center" data-reveal="right" style={{ '--reveal-delay': '200' } as React.CSSProperties}>
                <span className="eyebrow text-[var(--ink-deep)]/70 mb-3">A MESSAGE FROM THE FOUNDER</span>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[var(--ink-deep)] mb-4">
                  We Built The Agency
                </h2>
                
                <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-5 font-normal">
                  "For years, I watched businesses burn capital on disconnected marketing efforts. They would hire an SEO agency, a web developer, and a media buyer—only to realize that nobody was looking at the bigger picture: <span className="text-gray-800 font-semibold">Predictable Revenue</span>."
                </p>
                
                <div className="flex flex-col">
                  <div className="text-gray-400 tracking-wide select-none" style={{ fontFamily: "'Qwitcher Grypen', cursive", fontSize: "3rem", lineHeight: "1" }}>
                    Shahzad Rando
                  </div>
                  <div className="text-[color:var(--muted-foreground)] text-xs font-sans tracking-wide mt-1">
                    Founder & CEO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </RevealSection>
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
    <RevealSection>
    <section className="section-y bg-[var(--surface)]">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow" data-reveal="up">The team</span>
            <h2 className="headline-lg mt-4 text-[var(--ink-deep)]" data-reveal="up" style={{ '--reveal-delay': '100' } as React.CSSProperties}>
              Senior Specialists. Zero Account Managers.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[color:var(--muted-foreground)] leading-relaxed" data-reveal="up" style={{ '--reveal-delay': '200' } as React.CSSProperties}>
            You work directly with the strategists, designers, developers, and AI engineers building
            your growth system — no middle layers, no handoffs.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, idx) => (
            <div key={m.name} className="group overflow-hidden rounded-3xl bg-white border border-[var(--border)]" data-reveal="up" style={{ '--reveal-delay': `${idx * 100}` } as React.CSSProperties}>
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
    </RevealSection>
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
          { icon: Mail, label: "Email us", value: <a href="mailto:hello@nexdeer.com" className="hover:text-[var(--gold)] transition-colors">hello@nexdeer.com</a> },
          { icon: Phone, label: "Call us", value: <><span className="block">+44 7537 171506</span><span className="block mt-0.5">+92 318 6662360</span></> },
          { icon: MapPin, label: "Our Office", value: "Bosan road Multan" },
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

/* ---------- SERVICES CTA STRIP ---------- */
export function ServicesCTAStrip() {
  return (
    <section className="bg-[var(--ink-deep)] text-white py-12 relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 -z-10 grid-noise opacity-30" />
      <div className="container-x flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl md:text-2xl font-bold">Ready to see our growth systems in action?</h3>
          <p className="text-sm text-white/70 mt-1">Explore our latest case studies and real-world results.</p>
        </div>
        <div>
          <a href="https://wa.me/923186662360" target="_blank" rel="noreferrer" className="btn-gold inline-flex items-center gap-2">
            Book a Strategy Call <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

import { Cloud } from "lucide-react";

/* ---------- LOGO SVG COMPONENTS ---------- */

const FbrLogo = () => (
  <svg viewBox="0 0 120 120" className="w-24 h-24 transition-all duration-500 affiliation-logo" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fbrGreenArch" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1B7337" />
        <stop offset="50%" stopColor="#8DC63F" />
        <stop offset="100%" stopColor="#1B7337" />
      </linearGradient>
      <radialGradient id="fbrGoldStar" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFF3A1" />
        <stop offset="25%" stopColor="#F9DF16" />
        <stop offset="100%" stopColor="#D97706" />
      </radialGradient>
      <linearGradient id="fbrBlueText" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00B4F2" />
        <stop offset="35%" stopColor="#0066EB" />
        <stop offset="100%" stopColor="#002A7F" />
      </linearGradient>
    </defs>
    <path d="M 5,65 Q 60,35 115,65 Q 60,43 5,65 Z" fill="url(#fbrGreenArch)" />
    <g transform="translate(60, 50)">
      <path d="M 0,-32 L 2.2,-8 L 0,0 L -2.2,-8 Z" fill="url(#fbrGoldStar)" />
      <path d="M 0,32 L 2.2,8 L 0,0 L -2.2,8 Z" fill="url(#fbrGoldStar)" />
      <path d="M -24,0 L -6,-2.2 L 0,0 L -6,2.2 Z" fill="url(#fbrGoldStar)" />
      <path d="M 24,0 L 6,-2.2 L 0,0 L 6,2.2 Z" fill="url(#fbrGoldStar)" />
      <path d="M -11,-11 L -4,-3 L 0,0 L -3,-4 Z" fill="url(#fbrGoldStar)" />
      <path d="M 11,-11 L 4,-3 L 0,0 L 3,-4 Z" fill="url(#fbrGoldStar)" />
      <path d="M -11,11 L -4,3 L 0,0 L -3,4 Z" fill="url(#fbrGoldStar)" />
      <path d="M 11,11 L 4,3 L 0,0 L 3,4 Z" fill="url(#fbrGoldStar)" />
      <circle cx="0" cy="0" r="3.2" fill="#FFE066" />
    </g>
    <text x="60" y="85" textAnchor="middle" fill="url(#fbrBlueText)" className="font-extrabold text-[32px] tracking-wide" style={{ fontFamily: "'Outfit', 'Inter', system-ui, sans-serif", fontWeight: 900 }}>FBR</text>
    <text x="60" y="99" textAnchor="middle" fill="#003E7E" className="font-bold text-[8.5px] tracking-[0.16em]" style={{ fontFamily: "'Outfit', 'Inter', system-ui, sans-serif", fontWeight: 700 }}>PAKISTAN</text>
  </svg>
);

/*
//
    // Outer Green Ring with Gold Border
    <circle cx="60" cy="60" r="54" fill="#006633" stroke="#E9B804" strokeWidth="2.5" />
    
    // Inner White Ring with Gold Border
    <circle cx="60" cy="60" r="40" fill="#FFFFFF" stroke="#E9B804" strokeWidth="1.5" />

    // Text Path Definitions
    <defs>
      // Top half arc
      <path id="fbrTopTextArc" d="M 18,60 A 42,42 0 0,1 102,60" fill="none" />
      // Bottom half arc
      <path id="fbrBottomTextArc" d="M 102,60 A 42,42 0 0,1 18,60" fill="none" />
    </defs>

    // Outer Text Elements in Gold
    <text className="font-black fill-[#E9B804]" textAnchor="middle" style={{ fontSize: "6.2px", fontFamily: "system-ui, sans-serif", fontWeight: 900, letterSpacing: "0.08em" }}>
      <textPath href="#fbrTopTextArc" startOffset="50%">FEDERAL BOARD OF REVENUE</textPath>
    </text>
    <text className="font-black fill-[#E9B804]" textAnchor="middle" style={{ fontSize: "6.2px", fontFamily: "system-ui, sans-serif", fontWeight: 900, letterSpacing: "0.08em" }}>
      <textPath href="#fbrBottomTextArc" startOffset="50%">GOVERNMENT OF PAKISTAN</textPath>
    </text>

    // Inner Circle Details (Emblem Elements in Green)
    // Wreath wrapping around the sides
    <g stroke="#006633" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(0, 3)">
      // Left branch
      <path d="M 32,60 C 32,74 44,83 60,83" />
      <path d="M 32,70 C 29,69 28,71 29,74 C 30,77 32,75 32,70" fill="#006633" />
      <path d="M 34,76 C 31,75 30,77 31,80 C 32,83 34,81 34,76" fill="#006633" />
      <path d="M 38,81 C 36,80 35,82 36,85 C 37,87 39,85 38,81" fill="#006633" />
      
      // Right branch
      <path d="M 88,60 C 88,74 76,83 60,83" />
      <path d="M 88,70 C 91,69 92,71 91,74 C 90,77 88,75 88,70" fill="#006633" />
      <path d="M 86,76 C 89,75 90,77 89,80 C 88,83 86,81 86,76" fill="#006633" />
      <path d="M 82,81 C 84,80 85,82 84,85 C 83,87 81,85 82,81" fill="#006633" />
    </g>

    // Star and Crescent at the top inside
    <g transform="translate(60, 36)" fill="#006633">
      <path d="M -4,-2.5 A 5.5,5.5 0 1,0 5.5,6 A 4.6,4.6 0 0,1 -4,-2.5 Z" />
      <polygon points="5,-3.5 5.5,-1 7.5,-1 6,-0.2 6.5,2.3 5,1.1 3.5,2.3 4,-0.2 2.5,-1 4.5,-1" />
    </g>

    // Scales of Justice in the center
    <g transform="translate(60, 60)" stroke="#006633" strokeWidth="1.2" strokeLinecap="round" fill="none">
      // Pillar
      <line x1="0" y1="-8" x2="0" y2="8" />
      // Balance beam
      <line x1="-12" y1="-5" x2="12" y2="-5" />
      <circle cx="0" cy="-8" r="1" fill="#006633" />
      // Left Pan
      <path d="M -12,-5 L -15,2 L -9,2 Z" fill="#006633" strokeWidth="0.8" />
      // Right Pan
      <path d="M 12,-5 L 15,2 L 9,2 Z" fill="#006633" strokeWidth="0.8" />
      // Base
      <rect x="-6" y="8" width="12" height="1.6" rx="0.5" fill="#006633" stroke="none" />
    </g>

    // FBR label at the bottom of the inner circle
    <rect x="42" y="74" width="36" height="10" rx="3.5" fill="#006633" />
    <text x="60" y="82" textAnchor="middle" fill="#FFFFFF" style={{ fontFamily: "system-ui, sans-serif", fontWeight: 900, fontSize: "7.5px", letterSpacing: "0.08em" }}>FBR</text>
//
*/











const SecpLogo = () => (
  <svg viewBox="0 0 120 120" className="w-20 h-20 transition-all duration-500 affiliation-logo" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* Left quadrant: Green */}
      <path d="M 60,60 L 37.37,37.37 A 32,32 0 0,0 37.37,82.63 Z" fill="#599E34" />
      {/* Bottom quadrant: Deep Blue */}
      <path d="M 60,60 L 37.37,82.63 A 32,32 0 0,0 82.63,82.63 Z" fill="#0B6FA9" />
      {/* Right quadrant: Light Blue */}
      <path d="M 60,60 L 82.63,82.63 A 32,32 0 0,0 82.63,37.37 Z" fill="#2E9DB9" />
      {/* Top quadrant: Teal */}
      <path d="M 60,60 L 82.63,37.37 A 32,32 0 0,0 37.37,37.37 Z" fill="#067A6B" />

      {/* White border ring */}
      <circle cx="60" cy="60" r="32" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />

      {/* Top: Crescent and Star */}
      <g transform="translate(60, 44)">
        <path d="M-3,-6 A6,6 0 1,0 3,6 A5,5 0 0,1 -3,-6 Z" fill="#FFFFFF" />
        <polygon points="7,-2 8.2,1.2 11.6,1.2 8.9,3.2 9.9,6.4 7,4.4 4.1,6.4 5.1,3.2 2.4,1.2 5.8,1.2" fill="#FFFFFF" />
      </g>

      {/* Right: Trendline and Coins */}
      <g transform="translate(75, 60)">
        <path d="M-8,-4 L-3,1 L2,-4 L9,3" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <polygon points="9,3 4,3 9,-2" fill="#FFFFFF" />
        <ellipse cx="-3" cy="8" rx="5" ry="1.6" fill="#FFFFFF" />
        <ellipse cx="2" cy="6" rx="5" ry="1.6" fill="#FFFFFF" />
        <ellipse cx="0" cy="10.5" rx="5" ry="1.6" fill="#FFFFFF" />
      </g>

      {/* Bottom: Scales of justice */}
      <g transform="translate(60, 78)">
        <line x1="0" y1="-8" x2="0" y2="6" stroke="#FFFFFF" strokeWidth="1.4" />
        <line x1="-10" y1="-5" x2="10" y2="-5" stroke="#FFFFFF" strokeWidth="1.4" />
        <circle cx="0" cy="-8" r="1.3" fill="#FFFFFF" />
        <path d="M-10,-5 L-13,1 L-7,1 Z" fill="#FFFFFF" />
        <path d="M10,-5 L13,1 L7,1 Z" fill="#FFFFFF" />
        <rect x="-5" y="6" width="10" height="1.6" rx="0.5" fill="#FFFFFF" />
      </g>

      {/* Left: Open book */}
      <g transform="translate(45, 60)">
        <path d="M-9,-4 Q0,-1.5 9,-4 L9,5 Q0,7.5 -9,5 Z" fill="#FFFFFF" />
        <path d="M-9,-4 Q0,-1.5 9,-4 M-9,0.5 Q0,3 9,0.5 M-9,5 Q0,7.5 9,5" stroke="#599E34" strokeWidth="0.9" fill="none" />
        <line x1="0" y1="-3" x2="0" y2="6.3" stroke="#599E34" strokeWidth="1.1" />
      </g>
    </g>

    {/* Silver wreath */}
    <g stroke="#A0AEC0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M 60,98 C 42,98 24,84 24,60 C 24,46 30,36 36,30" />
      <path d="M 24,84 C 20,82 18,84 20,88 C 22,92 24,90 24,84" fill="#A0AEC0" />
      <path d="M 24,72 C 18,70 16,72 18,78 C 20,82 24,78 24,72" fill="#A0AEC0" />
      <path d="M 25,60 C 19,56 18,58 20,64 C 22,68 25,64 25,60" fill="#A0AEC0" />
      <path d="M 28,48 C 22,44 22,46 24,52 C 26,56 28,52 28,48" fill="#A0AEC0" />
      <path d="M 33,38 C 28,34 28,36 30,42 C 32,46 33,42 33,38" fill="#A0AEC0" />

      <path d="M 60,98 C 78,98 96,84 96,60 C 96,46 90,36 84,30" />
      <path d="M 96,84 C 100,82 102,84 100,88 C 98,92 96,90 96,84" fill="#A0AEC0" />
      <path d="M 96,72 C 102,70 104,72 102,78 C 100,82 96,78 96,72" fill="#A0AEC0" />
      <path d="M 95,60 C 101,56 102,58 100,64 C 98,68 95,64 95,60" fill="#A0AEC0" />
      <path d="M 92,48 C 98,44 98,46 96,52 C 94,56 92,52 92,48" fill="#A0AEC0" />
      <path d="M 87,38 C 92,34 92,36 90,42 C 88,46 87,42 87,38" fill="#A0AEC0" />

      <path d="M 52,98 Q 60,104 68,98" strokeWidth="1.5" />
      <path d="M 55,98 Q 50,105 46,103 M 65,98 Q 70,105 74,103" />
    </g>

    {/* Curved Urdu text */}
    <path id="urduPath" d="M 26,36 A 34,34 0 0,1 94,36" fill="none" />
    <text textAnchor="middle" style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "4.8px", fill: "#718096" }}>
      <textPath href="#urduPath" startOffset="50%">سیکیورٹیز اینڈ ایکسچینج کمیشن آف پاکستان</textPath>
    </text>

    {/* SECP wordmark */}
    <text x="60" y="112" textAnchor="middle" style={{ fontFamily: "system-ui, sans-serif", fontWeight: 900, fontSize: "11px", letterSpacing: "0.25em", fill: "#718096" }}>SECP</text>
  </svg>
);

const PsebLogo = () => (
  <svg viewBox="0 0 120 48" className="w-28 h-12 transition-all duration-500 affiliation-logo" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Horizontal separator lines */}
    <line x1="4" y1="6" x2="116" y2="6" stroke="#1E293B" strokeWidth="0.8" />
    <line x1="4" y1="12" x2="116" y2="12" stroke="#1E293B" strokeWidth="0.8" />
    <line x1="4" y1="36" x2="116" y2="36" stroke="#1E293B" strokeWidth="0.8" />
    <line x1="4" y1="42" x2="116" y2="42" stroke="#1E293B" strokeWidth="0.8" />
    
    {/* Top Text: PAKISTAN */}
    <text x="60" y="10.5" textAnchor="middle" fill="#1E293B" className="font-bold text-[6px] tracking-[0.55em]" style={{ fontFamily: "system-ui, sans-serif" }}>PAKISTAN</text>
    
    {/* Main Text: PSEB */}
    <g transform="translate(6, 12)">
      {/* Letters P, E, B */}
      <text x="12" y="21" fill="#1F2937" className="font-black text-[22px]" style={{ fontFamily: "system-ui, sans-serif" }}>P</text>
      <text x="58" y="21" fill="#1F2937" className="font-black text-[22px] tracking-[0.1em]" style={{ fontFamily: "system-ui, sans-serif" }}>EB</text>
      
      {/* The Purple S-Curve representing S */}
      <path d="M40,3 C44,3 48,7 44,12 C38,17 46,22 49,21" stroke="#5B21B6" strokeWidth="4.5" strokeLinecap="round" fill="none" />
    </g>
    
    {/* Bottom Text: SOFTWARE EXPORT BOARD */}
    <text x="60" y="40.5" textAnchor="middle" fill="#475569" className="font-semibold text-[5.2px] tracking-[0.18em]" style={{ fontFamily: "system-ui, sans-serif" }}>SOFTWARE EXPORT BOARD</text>
  </svg>
);

const PaflaLogo = () => (
  <svg viewBox="0 0 120 48" className="w-28 h-12 transition-all duration-500 affiliation-logo" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(36, 1) scale(0.95)">
      {/* Hexagonal Shield Border */}
      <polygon points="25,2 47,10 47,34 25,44 3,34 3,10" stroke="#00B574" strokeWidth="1" fill="none" />
      <polygon points="25,4 45,11 45,33 25,42 5,33 5,11" stroke="#00B574" strokeWidth="0.6" fill="none" />
      
      {/* Top Bird Wings icon */}
      <path d="M15,9 Q20,12 25,10 Q30,12 35,9 Q29,6 25,8 Q21,6 15,9 Z" fill="#00B574" />
      <path d="M25,8 L25,12 L24,10 Z" fill="#00B574" />
      
      {/* Two small stars */}
      <polygon points="12,12 12.8,12.8 14,12.8 13.2,13.6 13.5,14.8 12.5,14 11.5,14.8 11.8,13.6 11,12.8 12.2,12.8" fill="#00B574" />
      <polygon points="38,12 38.8,12.8 40,12.8 39.2,13.6 39.5,14.8 38.5,14 37.5,14.8 37.8,13.6 37,12.8 38.2,12.8" fill="#00B574" />
      
      {/* Middle Ribbon Banner */}
      <rect x="7" y="16" width="36" height="6" fill="#00B574" rx="1" />
      <text x="25" y="21" textAnchor="middle" fill="#FFFFFF" className="font-bold text-[4.5px] tracking-[0.15em]" style={{ fontFamily: "system-ui, sans-serif" }}>PAKISTAN</text>
      
      {/* FREELANCERS text */}
      <text x="25" y="29" textAnchor="middle" fill="#00B574" className="font-black text-[5.8px] tracking-[0.05em]" style={{ fontFamily: "system-ui, sans-serif" }}>FREELANCERS</text>
      
      {/* ASSOCIATION text */}
      <text x="25" y="35" textAnchor="middle" fill="#00B574" className="font-bold text-[4.2px] tracking-[0.15em]" style={{ fontFamily: "system-ui, sans-serif" }}>ASSOCIATION</text>
      
      {/* Bottom Star */}
      <polygon points="25,38 25.8,38.8 27,38.8 26.2,39.6 26.5,40.8 25.5,40 24.5,40.8 24.8,39.6 24,38.8 25.2,38.8" fill="#00B574" />
    </g>
    
    {/* Left and Right Chevron badges */}
    <path d="M30,20 L27,24 L30,28 M25,20 L22,24 L25,28" stroke="#00B574" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M90,20 L93,24 L90,28 M95,20 L98,24 L95,28" stroke="#00B574" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GoogleCertifiedLogo = () => (
  <svg viewBox="0 0 120 48" className="w-28 h-12 transition-all duration-500 affiliation-logo" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(8, 12)">
      <path d="M22.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h5.9c-.3 1.3-1 2.4-2.1 3.2v2.6h3.4c2-1.9 3.3-4.7 3.3-7.9z" fill="#4285F4"/>
      <path d="M12 23c3 0 5.5-1 7.3-2.7l-3.4-2.6c-1 .6-2.2 1-3.9 1-3 0-5.5-2-6.4-4.8H2v2.7C3.9 20 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.6 13.9c-.2-.6-.4-1.3-.4-2s.2-1.4.4-2V7.2H2v2.7C1.2 11.6 1.2 14.4 2 16.1l3.6-2.2z" fill="#FBBC05"/>
      <path d="M12 5.8c1.6 0 3.1.6 4.2 1.7l3.2-3.2C17.4 2.4 14.8 1.5 12 1.5 7.7 1.5 3.9 4.5 2 8.7l3.6 2.7c.9-2.7 3.4-4.7 6.4-4.7z" fill="#EA4335"/>
    </g>
    <g transform="translate(38, 14)">
      <text x="0" y="11" fill="#1E293B" className="font-extrabold text-[15px] tracking-tight" style={{ fontFamily: "system-ui, sans-serif" }}>Google</text>
      <text x="0" y="21" fill="#4285F4" className="font-bold text-[7px] tracking-[0.2em]" style={{ fontFamily: "system-ui, sans-serif" }}>CERTIFIED</text>
    </g>
  </svg>
);

const MetaCertifiedLogo = () => (
  <svg viewBox="0 0 120 48" className="w-28 h-12 transition-all duration-500 affiliation-logo" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(6, 12)">
      <path d="M12 6.2c-2.6 0-4.8 1.9-6 4.1-1.2 2.2-1.9 4.9-1.9 7.4 0 2.5.7 5.2 1.9 7.4 1.2 2.2 3.4 4.1 6 4.1 2.2 0 4-1.3 5.5-3.2 1.5-1.9 2.8-4.6 4.1-7.4 1.3 2.8 2.7 5.5 4.1 7.4 1.5 1.9 3.3 3.2 5.5 3.2 2.6 0 4.8-1.9 6-4.1 1.2-2.2 1.9-4.9 1.9-7.4 0-2.5-.7-5.2-1.9-7.4-1.2-2.2-3.4-4.1-6-4.1-2.2 0-4 1.3-5.5 3.2-1.5 1.9-2.8 4.6-4.1 7.4-1.3-2.8-2.7-5.5-4.1-7.4-1.5-1.9-3.3-3.2-5.5-3.2z" stroke="#0064E0" strokeWidth="2.5" fill="none" />
    </g>
    <g transform="translate(56, 14)">
      <text x="0" y="11" fill="#1E293B" className="font-extrabold text-[15px] tracking-tight" style={{ fontFamily: "system-ui, sans-serif" }}>Meta</text>
      <text x="0" y="21" fill="#0064E0" className="font-bold text-[7px] tracking-[0.2em]" style={{ fontFamily: "system-ui, sans-serif" }}>CERTIFIED</text>
    </g>
  </svg>
);

const ShopifyPartnerLogo = () => (
  <svg viewBox="0 0 120 48" className="w-28 h-12 transition-all duration-500 affiliation-logo" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(8, 8)">
      <path d="M19.5 5.25h-3c0-2.9-2.35-5.25-5.25-5.25S6 2.35 6 5.25H3c-.83 0-1.5.67-1.5 1.5l1.5 15c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5l1.5-15c0-.83-.67-1.5-1.5-1.5zM11.25 1.5c2.07 0 3.75 1.68 3.75 3.75h-7.5c0-2.07 1.68-3.75 3.75-3.75zM19.5 21.75H3l-1.35-13.5h19.2L19.5 21.75z" fill="#96BF48" />
      <path d="M10.2 9.6c-.6 0-1.1.2-1.5.5s-.6.8-.6 1.4c0 .5.2.9.6 1.2s1.1.5 2.1.8c1.3.4 2.2.9 2.8 1.5.6.6.9 1.4.9 2.3 0 1.1-.4 2-1.3 2.7-.9.7-2.1 1-3.6 1-1.3 0-2.4-.3-3.2-.8s-1.3-1.3-1.5-2.2l2.4-.6c.1.6.4 1 .8 1.3.4.3.9.4 1.5.4.7 0 1.2-.2 1.6-.5.4-.3.6-.7.6-1.2 0-.4-.2-.8-.6-1.1-.4-.3-1-.5-1.9-.8-1.4-.4-2.3-.9-2.9-1.5S7.2 12 7.2 11c0-1 .4-1.9 1.2-2.5.8-.6 1.9-.9 3.2-.9 1.1 0 2.1.3 2.9.8s1.2 1.1 1.4 1.9l-2.3.6c-.1-.5-.3-.9-.6-1.1-.4-.1-.8-.2-.2-.2z" fill="#96BF48" />
    </g>
    <g transform="translate(36, 14)">
      <text x="0" y="11" fill="#1E293B" className="font-extrabold text-[15px] tracking-tight" style={{ fontFamily: "system-ui, sans-serif" }}>Shopify</text>
      <text x="0" y="21" fill="#96BF48" className="font-bold text-[7px] tracking-[0.2em]" style={{ fontFamily: "system-ui, sans-serif" }}>PARTNER</text>
    </g>
  </svg>
);

const TiktokPartnerLogo = () => (
  <svg viewBox="0 0 120 48" className="w-28 h-12 transition-all duration-500 affiliation-logo" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* TikTok Glitch Note */}
    <g transform="translate(6, 11) scale(1.05)">
      {/* Cyan layer (top-left) */}
      <path d="M17.1 0h-3.4v13.5c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5 2-4.5 4.5-4.5c.3 0 .6 0 .9.1V5.7c-.3 0-.6-.1-.9-.1-4.7 0-8.5 3.8-8.5 8.5S4.1 22.6 8.8 22.6c4.5 0 8.1-3.5 8.3-8V6.8c1.9 1.4 4.2 2.2 6.7 2.3V5.7c-2.8-.1-5.3-1.6-6.7-3.7V0z" fill="#25F4EE" transform="translate(-0.8, -0.6)" />
      {/* Magenta layer (bottom-right) */}
      <path d="M17.1 0h-3.4v13.5c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5 2-4.5 4.5-4.5c.3 0 .6 0 .9.1V5.7c-.3 0-.6-.1-.9-.1-4.7 0-8.5 3.8-8.5 8.5S4.1 22.6 8.8 22.6c4.5 0 8.1-3.5 8.3-8V6.8c1.9 1.4 4.2 2.2 6.7 2.3V5.7c-2.8-.1-5.3-1.6-6.7-3.7V0z" fill="#FE0979" transform="translate(0.8, 0.6)" />
      {/* Black layer */}
      <path d="M17.1 0h-3.4v13.5c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5 2-4.5 4.5-4.5c.3 0 .6 0 .9.1V5.7c-.3 0-.6-.1-.9-.1-4.7 0-8.5 3.8-8.5 8.5S4.1 22.6 8.8 22.6c4.5 0 8.1-3.5 8.3-8V6.8c1.9 1.4 4.2 2.2 6.7 2.3V5.7c-2.8-.1-5.3-1.6-6.7-3.7V0z" fill="#161D26" />
    </g>
    {/* Wordmark and Partner text */}
    <g transform="translate(36, 12)">
      <text x="0" y="14" fill="#161D26" className="font-extrabold text-[19px] tracking-tight" style={{ fontFamily: "Inter, system-ui, sans-serif", fontWeight: 900, letterSpacing: "-0.04em" }}>TikTok</text>
      <text x="0" y="24" fill="#FE0979" className="font-bold text-[7px] tracking-[0.2em]" style={{ fontFamily: "system-ui, sans-serif" }}>PARTNER</text>
    </g>
  </svg>
);

const GithubCertifiedLogo = () => (
  <svg viewBox="0 0 120 48" className="w-28 h-12 transition-all duration-500 affiliation-logo" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(8, 8)">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" fill="#24292F" />
    </g>
    <g transform="translate(38, 14)">
      <text x="0" y="11" fill="#1E293B" className="font-extrabold text-[15px] tracking-tight" style={{ fontFamily: "system-ui, sans-serif" }}>GitHub</text>
      <text x="0" y="21" fill="#24292F" className="font-bold text-[7px] tracking-[0.2em]" style={{ fontFamily: "system-ui, sans-serif" }}>CERTIFIED</text>
    </g>
  </svg>
);

const AwsCertifiedLogo = () => (
  <div className="w-28 h-12 flex items-center justify-center transition-all duration-500 affiliation-logo">
    <img 
      src="/aws_certified.png" 
      alt="AWS Certified" 
      className="max-w-full max-h-full object-contain" 
    />
  </div>
);

const MicrosoftCertifiedLogo = () => (
  <svg viewBox="0 0 120 48" className="w-28 h-12 transition-all duration-500 affiliation-logo" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(6, 9)">
      <rect x="0" y="0" width="9" height="9" fill="#F25022" />
      <rect x="11" y="0" width="9" height="9" fill="#7FBA00" />
      <rect x="0" y="11" width="9" height="9" fill="#00A4EF" />
      <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
    </g>
    <g transform="translate(36, 14)">
      <text x="0" y="11" fill="#1E293B" className="font-extrabold text-[15px] tracking-tight" style={{ fontFamily: "system-ui, sans-serif" }}>Microsoft</text>
      <text x="0" y="21" fill="#00A4EF" className="font-bold text-[7px] tracking-[0.2em]" style={{ fontFamily: "system-ui, sans-serif" }}>CERTIFIED</text>
    </g>
  </svg>
);

const CiscoCertifiedLogo = () => (
  <svg viewBox="0 0 120 48" className="w-28 h-12 transition-all duration-500 affiliation-logo" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(6, 10)">
      <line x1="1" y1="12" x2="1" y2="16" strokeWidth="2" strokeLinecap="round" stroke="#11A9E2" />
      <line x1="4" y1="8" x2="4" y2="16" strokeWidth="2" strokeLinecap="round" stroke="#11A9E2" />
      <line x1="7" y1="9" x2="7" y2="16" strokeWidth="2" strokeLinecap="round" stroke="#11A9E2" />
      <line x1="10" y1="3" x2="10" y2="16" strokeWidth="2" strokeLinecap="round" stroke="#11A9E2" />
      <line x1="13" y1="3" x2="13" y2="16" strokeWidth="2" strokeLinecap="round" stroke="#11A9E2" />
      <line x1="16" y1="9" x2="16" y2="16" strokeWidth="2" strokeLinecap="round" stroke="#11A9E2" />
      <line x1="19" y1="8" x2="19" y2="16" strokeWidth="2" strokeLinecap="round" stroke="#11A9E2" />
      <line x1="22" y1="12" x2="22" y2="16" strokeWidth="2" strokeLinecap="round" stroke="#11A9E2" />
    </g>
    <g transform="translate(36, 14)">
      <text x="0" y="11" fill="#1E293B" className="font-extrabold text-[15px] tracking-tight" style={{ fontFamily: "system-ui, sans-serif" }}>Cisco</text>
      <text x="0" y="21" fill="#11A9E2" className="font-bold text-[7px] tracking-[0.2em]" style={{ fontFamily: "system-ui, sans-serif" }}>CERTIFIED</text>
    </g>
  </svg>
);

/* ---------- AFFILIATIONS & CERTIFICATIONS ---------- */
const SecpImageLogo = () => (
  <img
    src="/affiliations/secp.png"
    alt="SECP logo"
    className="affiliation-logo affiliation-image-logo secp-logo-image"
    loading="lazy"
    decoding="async"
  />
);

const PsebImageLogo = () => (
  <img
    src="/affiliations/pseb.png"
    alt="PSEB logo"
    className="affiliation-logo affiliation-image-logo pseb-logo-image"
    loading="lazy"
    decoding="async"
  />
);

const PaflaImageLogo = () => (
  <img
    src="/affiliations/pafla.png"
    alt="PAFLA logo"
    className="affiliation-logo affiliation-image-logo pafla-logo-image"
    loading="lazy"
    decoding="async"
  />
);

const ShopifyImageLogo = () => (
  <img
    src="/affiliations/shopify-icon.png"
    alt="Shopify logo"
    className="affiliation-logo affiliation-image-logo shopify-icon-image"
    loading="lazy"
    decoding="async"
  />
);

const GoogleIconLogo = () => (
  <img
    src="/affiliations/google.png"
    alt="Google logo"
    className="affiliation-logo affiliation-image-logo google-logo-image"
    loading="lazy"
    decoding="async"
  />
);

const MetaIconLogo = () => (
  <img
    src="/affiliations/meta.png"
    alt="Meta logo"
    className="affiliation-logo affiliation-image-logo meta-logo-image"
    loading="lazy"
    decoding="async"
  />
);

const TiktokIconLogo = () => (
  <svg viewBox="0 0 26 26" className="affiliation-logo brand-icon-logo tiktok-icon-logo" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="TikTok logo">
    <path d="M17.1 0h-3.4v13.5c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5 2-4.5 4.5-4.5c.3 0 .6 0 .9.1V5.7c-.3 0-.6-.1-.9-.1-4.7 0-8.5 3.8-8.5 8.5S4.1 22.6 8.8 22.6c4.5 0 8.1-3.5 8.3-8V6.8c1.9 1.4 4.2 2.2 6.7 2.3V5.7c-2.8-.1-5.3-1.6-6.7-3.7V0z" fill="#25F4EE" transform="translate(-0.8, -0.6)" />
    <path d="M17.1 0h-3.4v13.5c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5 2-4.5 4.5-4.5c.3 0 .6 0 .9.1V5.7c-.3 0-.6-.1-.9-.1-4.7 0-8.5 3.8-8.5 8.5S4.1 22.6 8.8 22.6c4.5 0 8.1-3.5 8.3-8V6.8c1.9 1.4 4.2 2.2 6.7 2.3V5.7c-2.8-.1-5.3-1.6-6.7-3.7V0z" fill="#FE0979" transform="translate(0.8, 0.6)" />
    <path d="M17.1 0h-3.4v13.5c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5 2-4.5 4.5-4.5c.3 0 .6 0 .9.1V5.7c-.3 0-.6-.1-.9-.1-4.7 0-8.5 3.8-8.5 8.5S4.1 22.6 8.8 22.6c4.5 0 8.1-3.5 8.3-8V6.8c1.9 1.4 4.2 2.2 6.7 2.3V5.7c-2.8-.1-5.3-1.6-6.7-3.7V0z" fill="#161D26" />
  </svg>
);

const GithubIconLogo = () => (
  <svg viewBox="0 0 24 24" className="affiliation-logo brand-icon-logo github-icon-logo" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="GitHub logo">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" fill="#24292F" />
  </svg>
);

const AwsIconLogo = () => (
  <svg viewBox="0 0 92 54" className="affiliation-logo brand-icon-logo aws-icon-logo" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="AWS logo">
    <text x="8" y="30" fill="#161D26" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 800, fontSize: "27px", letterSpacing: "-0.08em" }}>aws</text>
    <path d="M12 38c12.5 7.2 33.2 10.5 54.5-1.2" stroke="#FF9900" strokeWidth="4" strokeLinecap="round" />
    <path d="M61.5 34.8c5.3-.9 10.1-.5 13.7 1.6-1.1 3.2-3.5 6.8-7.1 10.4" stroke="#FF9900" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MicrosoftIconLogo = () => (
  <svg viewBox="0 0 24 24" className="affiliation-logo brand-icon-logo microsoft-icon-logo" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Microsoft logo">
    <rect x="2" y="2" width="9" height="9" fill="#F25022" />
    <rect x="13" y="2" width="9" height="9" fill="#7FBA00" />
    <rect x="2" y="13" width="9" height="9" fill="#00A4EF" />
    <rect x="13" y="13" width="9" height="9" fill="#FFB900" />
  </svg>
);

const CiscoIconLogo = () => (
  <svg viewBox="0 0 60 38" className="affiliation-logo brand-icon-logo cisco-icon-logo" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Cisco logo">
    <line x1="8" y1="19" x2="8" y2="27" strokeWidth="4" strokeLinecap="round" stroke="#11A9E2" />
    <line x1="14" y1="12" x2="14" y2="27" strokeWidth="4" strokeLinecap="round" stroke="#11A9E2" />
    <line x1="20" y1="14" x2="20" y2="27" strokeWidth="4" strokeLinecap="round" stroke="#11A9E2" />
    <line x1="26" y1="4" x2="26" y2="27" strokeWidth="4" strokeLinecap="round" stroke="#11A9E2" />
    <line x1="34" y1="4" x2="34" y2="27" strokeWidth="4" strokeLinecap="round" stroke="#11A9E2" />
    <line x1="40" y1="14" x2="40" y2="27" strokeWidth="4" strokeLinecap="round" stroke="#11A9E2" />
    <line x1="46" y1="12" x2="46" y2="27" strokeWidth="4" strokeLinecap="round" stroke="#11A9E2" />
    <line x1="52" y1="19" x2="52" y2="27" strokeWidth="4" strokeLinecap="round" stroke="#11A9E2" />
  </svg>
);

export function Affiliations() {
  const officialItems = [
    { name: "SECP", logo: SecpImageLogo, cardClass: "secp-card" },
    { name: "FBR", logo: FbrLogo, cardClass: "fbr-card" },
    { name: "PSEB", logo: PsebImageLogo, cardClass: "pseb-card" },
    { name: "PAFLA", logo: PaflaImageLogo, cardClass: "pafla-card" },
  ];

  const brandItems = [
    { name: "Google", logo: GoogleIconLogo, cardClass: "google-card" },
    { name: "Meta", logo: MetaIconLogo, cardClass: "meta-card" },
    { name: "Shopify", logo: ShopifyImageLogo, cardClass: "shopify-card" },
    { name: "TikTok", logo: TiktokIconLogo, cardClass: "tiktok-card" },
    { name: "GitHub", logo: GithubIconLogo, cardClass: "github-card" },
    { name: "AWS", logo: AwsIconLogo, cardClass: "aws-card" },
    { name: "Microsoft", logo: MicrosoftIconLogo, cardClass: "microsoft-card" },
    { name: "Cisco", logo: CiscoIconLogo, cardClass: "cisco-card" },
  ];

  const renderCard = (item: typeof officialItems[number] | typeof brandItems[number], idx: number) => {
    const Logo = item.logo;
    return (
      <div
        key={item.name}
        className={`relative overflow-hidden rounded-lg border flex aspect-square items-center justify-center text-center cursor-pointer affiliation-card ${item.cardClass}`}
        data-reveal="up"
        style={{ 
          '--reveal-delay': `${(idx % 4) * 80}`
        } as React.CSSProperties}
      >
        <div className="glow-dot" />
        <Logo />
      </div>
    );
  };

  return (
    <RevealSection>
      <section className="section-y bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
        <div className="absolute inset-0 -z-10 grid-noise opacity-5" />
        
        <div className="container-x relative z-10">
          <div className="text-center mb-12">
            <span className="eyebrow justify-center" data-reveal="up">Authorized & Certified Partner</span>
            <h2 className="headline-lg mt-4 text-slate-900" data-reveal="up" style={{ '--reveal-delay': '100' } as React.CSSProperties}>
              Compliance <span className="text-[var(--gold)]">You Can Trust</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base" data-reveal="up" style={{ '--reveal-delay': '150' } as React.CSSProperties}>
              We are officially registered, certified, and partnered with national regulators and global tech giants to deliver verified, high-performance solutions.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-4 grid-cols-2 md:grid-cols-4">
            {officialItems.map(renderCard)}
          </div>

          <div className="mx-auto mt-4 grid max-w-4xl gap-4 grid-cols-2 md:grid-cols-4">
            {brandItems.map(renderCard)}
          </div>
        </div>
      </section>
    </RevealSection>
  );
}
