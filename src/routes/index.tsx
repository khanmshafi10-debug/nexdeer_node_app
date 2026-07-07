import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  Hero,
  Trusted,
  Problem,
  PainPoints,
  SolutionIntro,
  GrowthSystem,
  ServicePerformance,
  ServiceWebsite,
  ServiceSEO,
  ServiceAI,
  Portfolio,
  CaseStudies,
  Industries,
  WhyNexdeer,
  Process,
  TechStack,
  CeoMessage,
  Testimonials,
  SocialProof,
  FAQ,
  FinalCTA,
  ContactStrip,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEXDEER | Full-Stack Digital Growth Agency | Marketing, Websites, SEO & AI Automation" },
      {
        name: "description",
        content:
          "NEXDEER helps businesses scale faster through performance marketing, website design & development, SEO, Local SEO, GEO, AEO, branding, and AI-powered automation. Serving clients globally with a focus on Pakistan, UAE, and Saudi Arabia.",
      },
      { property: "og:title", content: "NEXDEER | Full-Stack Digital Growth Agency" },
      { property: "og:description", content: "Performance marketing, websites, SEO, and AI automation — built into one scalable growth system." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "preload",
        as: "image",
        href: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=70",
        imagesrcset: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&q=70 640w",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1024&q=70 1024w",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=70 1600w",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=70 2000w",
        ].join(", "),
        imagesizes: "100vw",
        fetchpriority: "high",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white text-[var(--ink-deep)]">
      <Header />
      <main>
        <Hero />
        <Trusted />
        <Problem />
        <PainPoints />
        <SolutionIntro />
        <ServicePerformance />
        <ServiceWebsite />
        <ServiceSEO />
        <ServiceAI />
        <Portfolio limit={4} />
        <CaseStudies />
        <Industries />
        <WhyNexdeer />
        <Process />
        <TechStack />
        <CeoMessage />
        <Testimonials />
        <SocialProof />
        <FAQ />
        <FinalCTA />
        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
