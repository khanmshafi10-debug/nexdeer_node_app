import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

const SERVICES = [
  "Performance Marketing",
  "Website Design & Development",
  "SEO & Local SEO",
  "GEO & AEO",
  "Branding",
  "AI & CRM Automation",
];

const INDUSTRIES = [
  "Local Businesses",
  "Real Estate",
  "Healthcare",
  "Education",
  "E-Commerce",
  "Corporate",
];

const QUICK = ["Home", "About", "Services", "Our Work", "Industries", "Contact"];

export function Footer() {
  return (
    <footer className="bg-[var(--ink-deep)] text-white/80">
      <div className="container-x py-14 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="NEXDEER Logo" className="h-10 w-auto" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              A full-stack digital growth agency helping businesses scale through performance
              marketing, websites, SEO, and AI-powered automation across Pakistan, UAE, KSA, and
              globally.
            </p>
          </div>

          <FooterCol title="Quick Links" items={QUICK} />
          <FooterCol title="Services" items={SERVICES} />
          <FooterCol title="Industries" items={INDUSTRIES} />

          <div className="lg:col-span-3">
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-white">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@nexdeer.com" className="group flex items-center gap-3 text-base text-white/80 transition-colors hover:text-[var(--gold)]">
                  <Mail size={20} className="text-white/60 transition-colors group-hover:text-[var(--gold)]" strokeWidth={1.5} />
                  hello@nexdeer.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/447537171506" className="group flex items-center gap-3 text-base text-white/80 transition-colors hover:text-[var(--gold)]">
                  <MessageCircle size={20} className="text-white/60 transition-colors group-hover:text-[var(--gold)]" strokeWidth={1.5} />
                  +44 7537 171506
                </a>
              </li>
              <li>
                <a href="tel:+923186662360" className="group flex items-center gap-3 text-base text-white/80 transition-colors hover:text-[var(--gold)]">
                  <Phone size={20} className="text-white/60 transition-colors group-hover:text-[var(--gold)]" strokeWidth={1.5} />
                  +92 318 6662360
                </a>
              </li>
              <li>
                <a href="tel:+923062999700" className="group flex items-center gap-3 text-base text-white/80 transition-colors hover:text-[var(--gold)]">
                  <Phone size={20} className="text-white/60 transition-colors group-hover:text-[var(--gold)]" strokeWidth={1.5} />
                  +92 306 2999700 (HR)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} NEXDEER. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[
              { Icon: Linkedin, href: "https://www.linkedin.com/company/nexdeer/", label: "LinkedIn Profile" },
              { Icon: Instagram, href: "https://www.instagram.com/nexdeer?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram Profile" },
              { Icon: Facebook, href: "https://www.facebook.com/nexdeer/", label: "Facebook Page" },
              { Icon: Twitter, href: "https://x.com/nexdeer", label: "Twitter Profile" }
            ].map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/75 hover:border-[var(--gold)] hover:text-[var(--gold)] transition"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  const getPath = (item: string) => {
    if (title === "Quick Links") {
      return item === "Home" ? "/" : `/${slugify(item)}`;
    }
    if (title === "Services") {
      return `/services/${slugify(item)}`;
    }
    if (title === "Industries") {
      return `/industries/${slugify(item)}`;
    }
    return "#";
  };

  return (
    <div className="lg:col-span-2 min-w-0">
      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm text-white/70">
        {items.map((i) => (
          <li key={i}>
            {title === "Industries" ? (
              <span className="block py-1">{i}</span>
            ) : (
              <Link to={getPath(i)} className="hover:text-[var(--gold)] transition-colors block py-1">{i}</Link>
            )}
          </li>
        ))}
      </ul>
      {title === "Industries" && (
        <div className="mt-5">
          <Link to="/industries" className="text-[var(--gold)] hover:underline font-semibold text-sm">
            View All Industries &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}
