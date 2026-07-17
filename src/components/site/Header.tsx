import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const SERVICES_MENU = [
  { label: "Performance Marketing", href: "/services/performance-marketing" },
  { label: "Website Design & Development", href: "/services/website-design-development" },
  { label: "SEO & Local SEO", href: "/services/seo-local-seo" },
  { label: "GEO & AEO", href: "/services/geo-aeo" },
  { label: "Branding", href: "/services/branding" },
  { label: "AI & CRM Automation", href: "/services/ai-crm-automation" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[color-mix(in_oklab,var(--ink-deep)_75%,transparent)] border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between py-4 text-white">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="NEXDEER Logo" className="h-6 md:h-8 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {NAV.map((n) => (
            n.label === "Services" ? (
              <div key={n.label} className="relative group">
                <Link
                  to={n.href}
                  activeProps={{ className: "text-[var(--gold)] font-semibold" }}
                  inactiveProps={{ className: "text-white/80 hover:text-white" }}
                  className="transition-colors py-4"
                >
                  {n.label}
                </Link>
                <div className="absolute left-0 top-full mt-0 w-72 rounded-xl bg-[var(--ink-deep)] border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 overflow-hidden">
                  <div className="py-2">
                    {SERVICES_MENU.map((s) => (
                      <Link
                        key={s.label}
                        to={s.href}
                        activeProps={{ className: "text-[var(--gold)] bg-white/5 font-semibold" }}
                        inactiveProps={{ className: "text-white/70 hover:text-white hover:bg-white/5" }}
                        className="block px-6 py-3 transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={n.label}
                to={n.href}
                activeProps={{ className: "text-[var(--gold)] font-semibold" }}
                inactiveProps={{ className: "text-white/80 hover:text-white" }}
                className="transition-colors py-4"
              >
                {n.label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="https://wa.me/923186662360" target="_blank" rel="noreferrer" className="btn-gold !py-2.5 !px-5 text-sm">
            Book Strategy Call
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="lg:hidden grid h-11 w-11 place-items-center rounded-full border border-white/15 active:scale-95 transition-transform"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="lg:hidden border-t border-white/10 bg-[var(--ink-deep)]/95 backdrop-blur-xl">
          <div className="container-x py-6 flex flex-col gap-1 text-white">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.href}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-[var(--gold)] font-semibold" }}
                inactiveProps={{ className: "text-white/85 hover:text-white" }}
                className="min-h-11 flex items-center text-base font-medium transition-colors"
              >
                {n.label}
              </Link>
            ))}
             <a href="https://wa.me/923186662360" target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="btn-gold mt-3">
               Book Strategy Call
             </a>
          </div>
        </div>
      )}
    </header>
  );
}
