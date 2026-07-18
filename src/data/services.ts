import { 
  TrendingUp, 
  MonitorSmartphone, 
  Search, 
  Globe2, 
  Palette, 
  Bot,
  Target,
  Zap,
  BarChart3,
  MousePointerClick,
  Code2,
  Cpu,
  Layers,
  LineChart,
  Megaphone,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Settings,
  ShieldCheck,
  Workflow,
  Lightbulb,
  Rocket
} from "lucide-react";

export const SERVICES_DATA = [
  {
    label: "Performance Marketing",
    title: "Expert Performance Marketing Agency",
    description: "Looking for the best performance marketing agency? We provide data-driven B2B lead generation, PPC management, and paid social campaigns to scale your business globally.",
    heroImage: "/images/unsplash/photo-1460925895917-afdab827c52f_w2000_q80.jpg",
    icon: TrendingUp,
    seo: {
      keywords: "performance marketing agency, B2B lead generation services, PPC management agency, Google Ads expert, Meta Ads agency, paid social marketing"
    },
    features: [
      { title: "Omni-Channel PPC Strategy", desc: "Maximize your reach with highly targeted Google Ads, Meta Ads, and LinkedIn B2B lead generation campaigns.", icon: Globe2 },
      { title: "Conversion Rate Optimization (CRO)", desc: "We don't just drive traffic; we optimize landing pages and ad creatives to ensure maximum ROI and lowest Cost Per Acquisition (CPA).", icon: Target },
      { title: "Advanced Analytics & Tracking", desc: "Server-side tracking and precise attribution modeling to measure the exact return on your marketing spend.", icon: Layers }
    ],
    benefits: [
      { metric: "3.5x", label: "Average ROAS Increase" },
      { metric: "45%", label: "Reduction in CAC" },
      { metric: "90 Days", label: "To Predictable Pipeline" }
    ],
    deepDive: [
      {
        title: "Top-Rated Performance Marketing Agency for B2B Lead Generation",
        content: "As a leading performance marketing agency, we understand that clicks and impressions do not pay the bills. Our core focus is on B2B lead generation and driving high-quality, sales-qualified leads (SQLs) to your business. By leveraging advanced data analytics, AI-driven bidding strategies, and precise audience targeting across Google Ads, LinkedIn Ads, and Meta, we ensure that your marketing budget delivers a massive Return on Ad Spend (ROAS).",
        image: "/images/unsplash/photo-1551288049-bebda4e38f71_w1200_q80.jpg"
      },
      {
        title: "Expert Google Ads & PPC Management Services",
        content: "Don't waste your budget on poor keyword targeting. Our expert PPC management services are designed to capture high-intent buyers exactly when they are searching for your solutions. We provide comprehensive search engine marketing (SEM) services, including keyword research, competitor analysis, A/B testing, and continuous campaign optimization to secure the lowest Cost Per Click (CPC) and highest conversion rates in your industry.",
        image: "/images/unsplash/photo-1533750516457-a7f992034fec_w1200_q80.jpg"
      }
    ],
    process: [
      { step: "01", title: "Comprehensive Account Audit", desc: "Our performance marketing experts analyze your current PPC campaigns to find wasted ad spend and growth opportunities." },
      { step: "02", title: "Keyword & Audience Strategy", desc: "Developing a robust targeting strategy utilizing high-intent keywords and custom B2B buyer personas." },
      { step: "03", title: "Campaign Launch & A/B Testing", desc: "Deploying highly optimized ad creatives and copy, continuously testing to find the highest converting variations." },
      { step: "04", title: "Scaling for Maximum ROI", desc: "Once we identify winning campaigns, we strategically scale your budget to dominate your market." }
    ]
  },
  {
    label: "Website Design & Development",
    title: "Custom B2B Website Design & Development",
    description: "Award-winning website design and enterprise web development services. We build SEO-friendly, high-converting React and Next.js websites for growing businesses.",
    heroImage: "/images/unsplash/photo-1547658719-da2b51169166_w2000_q80.jpg",
    icon: MonitorSmartphone,
    seo: {
      keywords: "custom website design, enterprise web development company, B2B website design agency, Next.js development services, SEO friendly web design"
    },
    features: [
      { title: "High-Converting UI/UX Design", desc: "User-centric interface design built specifically to maximize engagement, reduce bounce rates, and drive enterprise sales.", icon: MousePointerClick },
      { title: "Custom Web Application Development", desc: "Robust, scalable, and ultra-fast web development using modern frameworks like Next.js, React, and Node.js.", icon: Code2 },
      { title: "SEO & CRM Integration", desc: "Fully SEO-optimized architecture with seamless Hubspot, Salesforce, and custom API integrations for automated lead capture.", icon: Zap }
    ],
    benefits: [
      { metric: "0.8s", label: "Average Load Time" },
      { metric: "210%", label: "Increase in Conversions" },
      { metric: "100", label: "Lighthouse Performance" }
    ],
    deepDive: [
      {
        title: "Premium B2B Website Design Services That Drive Revenue",
        content: "Your website is your 24/7 digital storefront. As a top-tier B2B website design agency, we specialize in creating high-performance, custom web designs that do more than just look good—they convert visitors into paying clients. We implement the latest UI/UX best practices, ensuring your site offers an intuitive, frictionless journey that guides enterprise buyers straight to your contact forms and sales pipelines.",
        image: "/images/unsplash/photo-1498050108023-c5249f4df085_w1200_q80.jpg"
      },
      {
        title: "Enterprise Web Development & Technical SEO Architecture",
        content: "A beautiful design is useless if it's slow or invisible to search engines. Our enterprise web development team builds blazing-fast, mobile-responsive websites using cutting-edge technologies like Next.js. We focus heavily on Core Web Vitals, schema markup, and technical SEO architecture so your custom website ranks higher on Google and provides a flawless user experience across all devices.",
        image: "/images/unsplash/photo-1555066931-4365d14bab8c_w1200_q80.jpg"
      }
    ],
    process: [
      { step: "01", title: "Discovery & UI/UX Strategy", desc: "We conduct deep market research to map out optimal user journeys and wireframes tailored to your target audience." },
      { step: "02", title: "Custom Web Design", desc: "Our award-winning designers craft premium, fully responsive visual interfaces that align with your corporate brand." },
      { step: "03", title: "Frontend & Backend Development", desc: "Our developers write clean, SEO-friendly code to bring the design to life with lightning-fast load times." },
      { step: "04", title: "Testing, SEO & Launch", desc: "Rigorous quality assurance, technical SEO auditing, and CRM integration checks before going live." }
    ]
  },
  {
    label: "SEO & Local SEO",
    title: "Top Enterprise SEO & Local SEO Services",
    description: "Dominate Google search results with our expert enterprise SEO and local SEO services. Drive massive organic traffic and outrank your competitors.",
    heroImage: "/images/unsplash/photo-1432888498266-38ffec3eaf0a_w2000_q80.jpg",
    icon: Search,
    seo: {
      keywords: "enterprise SEO services, local SEO agency, best SEO company, B2B SEO optimization, technical SEO audit, organic traffic growth"
    },
    features: [
      { title: "Technical SEO Audits", desc: "Comprehensive technical SEO analysis to fix indexing errors, crawlability issues, and site speed bottlenecks.", icon: BarChart3 },
      { title: "B2B Content & Keyword Strategy", desc: "Building massive topical authority through strategic keyword research and high-quality SEO content writing.", icon: LineChart },
      { title: "Local SEO & Google Business Profile", desc: "Dominate local searches with aggressive Local SEO strategies, local citations, and Google Maps optimization.", icon: Target }
    ],
    benefits: [
      { metric: "400%", label: "Organic Traffic Growth" },
      { metric: "Top 3", label: "Rankings for Core Terms" },
      { metric: "60%", label: "Lower Cost Per Lead" }
    ],
    deepDive: [
      {
        title: "Best Enterprise SEO Services for Organic Growth",
        content: "Securing the top spot on Google requires more than just basic keywords. As an expert SEO company, we provide enterprise SEO services designed to build absolute topical authority in your industry. Through meticulous on-page optimization, semantic keyword clustering, and high-DR backlink acquisition, we help B2B companies dominate organic search results and capture high-intent traffic without relying on paid ads.",
        image: "/images/unsplash/photo-1460925895917-afdab827c52f_w1200_q80.jpg"
      },
      {
        title: "Expert Local SEO Agency for Unmatched Visibility",
        content: "If you operate in specific geographic regions, Local SEO is critical. Our Local SEO services focus on hyper-local keyword targeting, Google Business Profile (GBP) optimization, and localized link building. Whether you want to dominate search results in Pakistan, the UAE, or any global metropolitan area, we ensure your business appears in the highly coveted Google Local Pack for maximum visibility.",
        image: "/images/unsplash/photo-1504868584819-f8e8b4b6d7e3_w1200_q80.jpg"
      }
    ],
    process: [
      { step: "01", title: "Comprehensive SEO Audit", desc: "We perform a deep dive into your website's technical SEO, backlink profile, and current keyword rankings." },
      { step: "02", title: "Keyword Research & Strategy", desc: "Identifying high-volume, high-intent keywords that your competitors are missing." },
      { step: "03", title: "On-Page & Technical Optimization", desc: "Fixing site architecture, optimizing meta tags, improving speed, and deploying schema markup." },
      { step: "04", title: "Off-Page SEO & Link Building", desc: "Executing a safe, white-hat backlink strategy to dramatically increase your Domain Authority (DA)." }
    ]
  },
  {
    label: "GEO & AEO",
    title: "Generative Engine Optimization (GEO) & AEO",
    description: "Future-proof your business with Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO). Rank higher in ChatGPT, Perplexity, and AI search.",
    heroImage: "/images/unsplash/photo-1620712943543-bcc4688e7485_w2000_q80.jpg",
    icon: Globe2,
    seo: {
      keywords: "Generative Engine Optimization, GEO services, Answer Engine Optimization, AEO agency, ChatGPT SEO, AI search visibility"
    },
    features: [
      { title: "AI Search Visibility", desc: "Optimize your digital presence to be the top recommended brand by ChatGPT, Perplexity, and Google SGE.", icon: Cpu },
      { title: "Entity-Based SEO", desc: "Establishing your brand as a clear, authoritative entity that Large Language Models (LLMs) trust and cite.", icon: Layers },
      { title: "Zero-Click Search Dominance", desc: "Capturing Google featured snippets and Answer Box placements to dominate zero-click searches.", icon: Search }
    ],
    benefits: [
      { metric: "1st", label: "Mover Advantage in AI" },
      { metric: "85%", label: "AI Recommendation Rate" },
      { metric: "Future", label: "Proof Visibility" }
    ],
    deepDive: [
      {
        title: "Pioneering Generative Engine Optimization (GEO) Services",
        content: "The future of search is here, and it's powered by AI. Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) are replacing traditional search behaviors. Users are increasingly turning to AI tools like ChatGPT, Perplexity, and Google's AI Overviews for direct answers. Our specialized AEO agency ensures that your brand's content is structured, cited, and optimized so that AI engines recommend you as the definitive solution.",
        image: "/images/unsplash/photo-1677442136019-21780ecad995_w1200_q80.jpg"
      },
      {
        title: "Structuring Data for AI and Large Language Models",
        content: "AI models require highly structured data to understand your business. We implement advanced JSON-LD schema markup, optimize your content for Natural Language Processing (NLP), and build strong digital entities. By optimizing your website for Answer Engine Optimization (AEO), we help you capture featured snippets and become the primary source of truth for conversational AI platforms.",
        image: "/images/unsplash/photo-1620712943543-bcc4688e7485_w1200_q80.jpg"
      }
    ],
    process: [
      { step: "01", title: "Brand Entity Establishment", desc: "We define and solidify your brand as an unambiguous entity across trusted digital databases." },
      { step: "02", title: "Advanced Schema Deployment", desc: "Injecting complex structured data (Schema.org) so AI bots can instantly understand your offerings." },
      { step: "03", title: "Conversational Content Strategy", desc: "Creating Q&A style content that directly answers the exact prompts your prospects type into ChatGPT." },
      { step: "04", title: "Digital PR for AI Trust", desc: "Securing citations in high-authority publications that LLMs use as ground-truth training data." }
    ]
  },
  {
    label: "Branding",
    title: "Premium B2B Branding & Corporate Identity",
    description: "Elevate your market position with our premium B2B branding agency. We specialize in corporate identity, logo design, and strategic brand positioning.",
    heroImage: "/images/unsplash/photo-1561070791-2526d30994b5_w2000_q80.jpg",
    icon: Palette,
    seo: {
      keywords: "B2B branding agency, corporate identity design, premium brand positioning, professional logo design, rebranding services company"
    },
    features: [
      { title: "Strategic Brand Positioning", desc: "We craft compelling brand narratives and unique value propositions that differentiate you from competitors.", icon: Target },
      { title: "Corporate Visual Identity", desc: "Expert logo design, typography selection, and color palettes that exude trust and enterprise authority.", icon: Palette },
      { title: "Comprehensive Brand Guidelines", desc: "Creating detailed brand rulebooks to ensure absolute consistency across your website, social media, and sales collateral.", icon: ShieldCheck }
    ],
    benefits: [
      { metric: "2.5x", label: "Perceived Value Increase" },
      { metric: "100%", label: "Market Differentiation" },
      { metric: "Global", label: "Brand Cohesion" }
    ],
    deepDive: [
      {
        title: "Top-Tier B2B Branding Agency for Market Leaders",
        content: "In the B2B space, trust is your most valuable currency. A strong brand is what justifies premium pricing and shortens enterprise sales cycles. As a specialized B2B branding agency, we do more than design logos. We architect complete corporate identities that resonate with decision-makers. From your core messaging to your visual aesthetic, we ensure your brand commands absolute authority in your industry.",
        image: "/images/unsplash/photo-1542744094-24638ea0b5b5_w1200_q80.jpg"
      },
      {
        title: "Corporate Identity Design & Rebranding Services",
        content: "Whether you are a startup needing a ground-up brand strategy or an established enterprise seeking modern rebranding services, our expert design team delivers. We leverage psychological design principles to craft corporate visual identities that subconsciously communicate stability, innovation, and premium quality, setting the foundation for all your marketing efforts.",
        image: "/images/unsplash/photo-1558655146-d09347e92766_w1200_q80.jpg"
      }
    ],
    process: [
      { step: "01", title: "Brand Discovery & Audit", desc: "Deep-dive sessions to understand your business goals, target audience, and current market perception." },
      { step: "02", title: "Brand Strategy & Messaging", desc: "Developing your core brand archetype, tone of voice, and unique market positioning statement." },
      { step: "03", title: "Visual Identity Creation", desc: "Iterative design of your logo, color psychology, typography, and visual assets." },
      { step: "04", title: "Brand Rollout & Guidelines", desc: "Delivering a comprehensive brand book and applying the new identity across all digital touchpoints." }
    ]
  },
  {
    label: "AI & CRM Automation",
    title: "AI Sales Agents & CRM Automation Services",
    description: "Streamline operations with our expert CRM automation agency. We build AI sales agents, Hubspot workflows, and custom business process automations.",
    heroImage: "/images/unsplash/photo-1551288049-bebda4e38f71_w2000_q80.jpg",
    icon: Bot,
    seo: {
      keywords: "CRM automation agency, AI sales agents, Hubspot implementation services, business process automation, B2B AI chatbots, sales automation company"
    },
    features: [
      { title: "Custom AI Sales Agents", desc: "Deploy intelligent LLM-powered chatbots that qualify leads, answer FAQs, and book meetings 24/7.", icon: Bot },
      { title: "Expert Hubspot Implementation", desc: "Flawless CRM architecture setup in Hubspot or Salesforce to give you 100% visibility into your sales pipeline.", icon: Workflow },
      { title: "Business Process Automation", desc: "Connecting your software stack via Zapier or Make to eliminate manual data entry and accelerate response times.", icon: Zap }
    ],
    benefits: [
      { metric: "10x", label: "Faster Response Times" },
      { metric: "30h+", label: "Saved Per Rep/Month" },
      { metric: "24/7", label: "Lead Qualification" }
    ],
    deepDive: [
      {
        title: "Expert CRM Automation Agency for Scaling Businesses",
        content: "Manual data entry and slow follow-ups are destroying your conversion rates. As a premier CRM automation agency, we help businesses scale operations without scaling headcount. We specialize in Hubspot implementation and Salesforce configuration, building robust automated workflows that handle lead routing, personalized email nurturing sequences, and pipeline management automatically.",
        image: "/images/unsplash/photo-1518770660439-4636190af475_w1200_q80.jpg"
      },
      {
        title: "Next-Generation AI Sales Agents & Chatbots",
        content: "Don't let leads go cold after hours. We develop custom AI sales agents and B2B chatbots powered by advanced Large Language Models (LLMs). These are not basic rule-based bots; these AI agents can hold dynamic conversations, pre-qualify prospects based on your specific criteria, and instantly book appointments directly into your sales team's calendar, operating flawlessly 24/7.",
        image: "/images/unsplash/photo-1555949963-aa79dcee981c_w1200_q80.jpg"
      }
    ],
    process: [
      { step: "01", title: "Workflow Audit & Mapping", desc: "We analyze your current sales and marketing processes to identify massive automation opportunities." },
      { step: "02", title: "CRM Setup & Configuration", desc: "Structuring your Hubspot or CRM with custom properties, deal stages, and accurate reporting dashboards." },
      { step: "03", title: "AI Agent Development", desc: "Training custom AI models on your company data to accurately represent your brand in customer interactions." },
      { step: "04", title: "Integration & Zapier Automation", desc: "Connecting your website, CRM, and communication tools (Slack, Email) for seamless data flow." }
    ]
  }
];
