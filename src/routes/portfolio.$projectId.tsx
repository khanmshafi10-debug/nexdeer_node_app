import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FinalCTA } from "@/components/site/sections";
import { ALL_PORTFOLIO_PROJECTS } from "@/components/site/sections";
import { ArrowLeft, CheckCircle2, Calendar, Target, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/portfolio/$projectId")({
  component: PortfolioDetail,
});

function PortfolioDetail() {
  const { projectId } = useParams({ from: "/portfolio/$projectId" });
  const project = ALL_PORTFOLIO_PROJECTS.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-white text-[var(--ink-deep)] flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center py-32 text-center">
          <h1 className="headline-lg">Project Not Found</h1>
          <p className="mt-4 text-[color:var(--muted-foreground)]">The project you are looking for does not exist.</p>
          <Link to="/portfolio" className="mt-8 btn-gold">
            Back to Portfolio
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[var(--ink-deep)]">
      <Header />
      <main>
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--ink-deep)] text-white">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--ink-deep)] via-[var(--ink-deep)]/95 to-[var(--ink-deep)]" />
          <img src={project.img} alt={project.title} className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20 blur-sm" />
          
          <div className="container-x">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-[var(--gold)] hover:text-white transition-colors mb-10 fade-up">
              <ArrowLeft size={16} /> Back to all projects
            </Link>
            
            <div className="max-w-4xl fade-up" style={{ animationDelay: '100ms' }}>
              <div className="inline-block rounded-full bg-[var(--gold)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--gold)] mb-6 border border-[var(--gold)]/20">
                {project.tag}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                {project.title}
              </h1>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 mt-12 fade-up" style={{ animationDelay: '200ms' }}>
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--gold)] mb-2">Timeline</p>
                <p className="font-semibold text-lg">{project.timeline}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--gold)] mb-2">Core Services</p>
                <p className="font-semibold text-lg">{project.services[0]} & {project.services[1]}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--gold)] mb-2">Platform</p>
                <p className="font-semibold text-lg">Web, Mobile</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--gold)] mb-2">Industry</p>
                <p className="font-semibold text-lg">{project.tag.split("·")[0].trim()}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="section-y bg-[var(--surface)]">
          <div className="container-x">
            <div className="grid lg:grid-cols-12 gap-16">
              {/* LEFT COLUMN: Main content */}
              <div className="lg:col-span-8">
                <div className="w-full aspect-video overflow-hidden rounded-3xl mb-16 shadow-2xl border border-[var(--border)] fade-up relative" style={{ animationDelay: '300ms' }}>
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover scale-[1.07]" />
                  {/* Gold Sparkle badge to cover Gemini watermark */}
                  <div className="absolute bottom-0 right-0 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-[#0a1128] border border-[var(--gold)]/30 shadow-lg">
                    <Sparkles size={20} className="fill-[var(--gold)] text-[var(--gold)]" />
                  </div>
                </div>
                
                <div className="space-y-16">
                  <div className="fade-up">
                    <h2 className="headline-md mb-6">The Challenge</h2>
                    <p className="text-lg leading-relaxed text-[color:var(--muted-foreground)]">
                      {project.challenge}
                      <br /><br />
                      The leadership team realized that continuing with the status quo would mean losing significant market share to more agile, digitally-native competitors. They needed a holistic transformation across their entire customer journey.
                    </p>
                  </div>
                  
                  <div className="fade-up">
                    <h2 className="headline-md mb-6">Our Solution</h2>
                    <p className="text-lg leading-relaxed text-[color:var(--muted-foreground)]">
                      {project.solution}
                      <br /><br />
                      We deployed a multi-disciplinary team of strategists, designers, and growth engineers. By breaking down silos between marketing, sales, and technology, we created a seamless pipeline designed exclusively for high-intent conversions.
                    </p>
                    
                    <ul className="mt-8 space-y-4">
                      {project.services.map((service, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-lg font-medium">
                          <CheckCircle2 className="text-[var(--gold)]" /> {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* RIGHT COLUMN: Results sidebar */}
              <div className="lg:col-span-4 fade-up" style={{ animationDelay: '500ms' }}>
                <div className="sticky top-32 rounded-3xl bg-[var(--ink-deep)] p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-8 text-[var(--gold)]">Key Results</h3>
                  
                  <div className="space-y-8">
                    {project.results.map((res, idx) => (
                      <div key={idx} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                        <div className="text-5xl font-bold text-white mb-2">{res.metric}</div>
                        <div className="text-sm uppercase tracking-widest text-white/70">{res.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {project.externalUrl && (
                    <div className="mt-8 pt-8 border-t border-white/10">
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold w-full flex justify-center py-3 bg-[var(--gold)] text-black hover:bg-white hover:text-black transition-colors"
                      >
                        <span className="flex items-center gap-2 font-semibold">Visit Live Website <ArrowUpRight size={16} /></span>
                      </a>
                    </div>
                  )}
                  
                  <div className="mt-10 pt-8 border-t border-white/10">
                    <p className="text-sm text-white/80 mb-6">Want to achieve similar growth for your business?</p>
                    <Link to="/contact" className="btn-gold w-full flex justify-center">
                      <span className="flex items-center gap-2">Book a Strategy Call <ArrowRight size={16} /></span>
                    </Link>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        
        {/* FINAL CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
