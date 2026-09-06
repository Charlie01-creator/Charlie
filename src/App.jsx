import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  Globe2,
  Cpu,
  Sparkles,
  PenTool,
  Workflow,
  ShieldCheck,
  Gauge,
  Layers,
  Quote,
  Linkedin,
  Twitter,
  Github,
  Mail,
  ArrowUpRight,
  Sun,
  Moon,
  ChevronDown,
} from "lucide-react";

/* ---------------------------------------------------------
   Nexora Tech — marketing site
   Tokens (dark theme, the original design):
   bg        #050505
   surface   #111111
   gold      #D4AF37
   gold-hi   #FFD700
   ink       #FFFFFF
   ink-dim   #B8B8B8

   Light theme mirrors the same structure with light surfaces;
   gold stays the constant brand accent in both themes.
--------------------------------------------------------- */

/* ---------------------------------------------------------
   HOW TO ADD A REAL PHOTO TO A PROJECT CARD:
   1. Drop the image file into src/assets/, e.g. src/assets/hospital.jpg
   2. Import it up here, e.g.:
        import hospitalImg from "./assets/hospital.jpg";
   3. In the PROJECTS array below, set that project's `image` field
      to the imported variable instead of null, e.g.:
        image: hospitalImg,
   Projects with image: null automatically fall back to the gradient
   + name-text look, so you can add photos one at a time without
   breaking anything.
--------------------------------------------------------- */

function useInView(threshold = 0.3) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function CountUp({ to, suffix = "", duration = 1400, start }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration]);
  return (
    <span>
      {val}
      {suffix}
    </span>
  );
}

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Globe2,
    title: "Website Development",
    desc: "Business sites, e-commerce platforms, and web applications built for speed and built to last.",
    items: ["Business websites", "E-commerce platforms", "Web applications"],
  },
  {
    icon: Cpu,
    title: "Software Development",
    desc: "Custom software and SaaS systems engineered around how your business actually runs.",
    items: ["Custom software", "SaaS platforms", "Enterprise systems"],
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    desc: "Automation and intelligent applications that put AI to work inside your product, not beside it.",
    items: ["AI automation", "Intelligent applications", "AI integration"],
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "Interfaces designed for the people who use them every day, not just the demo.",
    items: ["Modern interfaces", "Product experiences"],
  },
  {
    icon: Workflow,
    title: "Digital Transformation",
    desc: "Helping organizations move from legacy process to modern, scalable technology.",
    items: ["Technology adoption", "Process modernization"],
  },
];

const STATS = [
  { to: 50, suffix: "+", label: "Projects Delivered" },
  { to: 99, suffix: "%", label: "Client Satisfaction" },
  { to: 24, suffix: "/7", label: "Technology Support" },
];

const ADVANTAGES = [
  { icon: Sparkles, text: "Cutting-edge technology" },
  { icon: PenTool, text: "Premium design quality" },
  { icon: Gauge, text: "Fast performance" },
  { icon: Layers, text: "Scalable solutions" },
  { icon: ShieldCheck, text: "Security focused" },
];

const PROJECTS = [
  {
    name: "St. Aurelius Medical Center",
    category: "Hospital & Healthcare Platform",
    stack: ["Next.js", "TypeScript", "Supabase"],
    color: "from-[#1a1a1a] to-[#0a0a0a]",
    link: "#",
    image: null,
  },
  {
    name: "Forge Fitness Club",
    category: "Gym & Membership Platform",
    stack: ["React", "Stripe", "Node.js"],
    color: "from-[#171717] to-[#080808]",
    link: "#",
    image: null,
  },
  {
    name: "Ember & Oak",
    category: "Restaurant Website",
    stack: ["React", "Tailwind CSS", "Vercel"],
    color: "from-[#1c1c1c] to-[#0a0a0a]",
    link: "#",
    image: null,
  },
  {
    name: "The Meridian Grand",
    category: "Hotel Booking Platform",
    stack: ["Next.js", "PostgreSQL", "Stripe"],
    color: "from-[#191919] to-[#090909]",
    link: "#",
    image: null,
  },
  {
    name: "Azure Coast Resort",
    category: "Beach Resort Website",
    stack: ["React", "Framer Motion", "Vercel"],
    color: "from-[#1e1e1e] to-[#0b0b0b]",
    link: "#",
    image: null,
  },
  {
    name: "Aurelia Capital",
    category: "Fintech Platform",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    color: "from-[#1a1a1a] to-[#0a0a0a]",
    link: "#",
    image: null,
  },
  {
    name: "Meridian Health",
    category: "Enterprise Web App",
    stack: ["React", "Node.js", "AWS"],
    color: "from-[#171717] to-[#080808]",
    link: "#",
    image: null,
  },
  {
    name: "Voltra Logistics",
    category: "AI-Powered Dashboard",
    stack: ["Next.js", "OpenAI API", "Prisma"],
    color: "from-[#1c1c1c] to-[#0a0a0a]",
    link: "#",
    image: null,
  },
  {
    name: "Solace Retail",
    category: "E-commerce Platform",
    stack: ["React", "Stripe", "Vercel"],
    color: "from-[#191919] to-[#090909]",
    link: "#",
    image: null,
  },
  {
    name: "Blackwood & Sons",
    category: "Legal Services Website",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    color: "from-[#1e1e1e] to-[#0b0b0b]",
    link: "#",
    image: null,
  },
  {
    name: "Bloom Botanical Salon",
    category: "Hair & Beauty Salon",
    stack: ["React", "Tailwind CSS", "Vercel"],
    color: "from-[#1a1a1a] to-[#0a0a0a]",
    link: "#",
    image: null,
  },
  {
    name: "Harbor & Vine",
    category: "Wine Bar Website",
    stack: ["React", "Framer Motion", "Vercel"],
    color: "from-[#171717] to-[#080808]",
    link: "#",
    image: null,
  },
  {
    name: "Northstar Auto Repair",
    category: "Mechanic & Auto Shop",
    stack: ["React", "Tailwind CSS", "Vercel"],
    color: "from-[#1c1c1c] to-[#0a0a0a]",
    link: "#",
    image: null,
  },
  {
    name: "Little Sprouts Academy",
    category: "Childcare & Tutoring Platform",
    stack: ["Next.js", "Supabase", "Vercel"],
    color: "from-[#191919] to-[#090909]",
    link: "#",
    image: null,
  },
  {
    name: "Cedar Ridge Guesthouse",
    category: "B&B / Guesthouse Website",
    stack: ["React", "Tailwind CSS", "Vercel"],
    color: "from-[#1e1e1e] to-[#0b0b0b]",
    link: "#",
    image: null,
  },
  {
    name: "Pulse Dance Studio",
    category: "Dance & Movement Studio",
    stack: ["React", "Framer Motion", "Vercel"],
    color: "from-[#1a1a1a] to-[#0a0a0a]",
    link: "#",
    image: null,
  },
  {
    name: "The Daily Grind",
    category: "Café & Coffee Shop",
    stack: ["React", "Tailwind CSS", "Vercel"],
    color: "from-[#171717] to-[#080808]",
    link: "#",
    image: null,
  },
  {
    name: "Marlowe & Finch Florists",
    category: "Independent Retail Website",
    stack: ["React", "Tailwind CSS", "Vercel"],
    color: "from-[#1c1c1c] to-[#0a0a0a]",
    link: "#",
    image: null,
  },
  {
    name: "Trailhead Adventures",
    category: "Tour Guide & Activities Booking",
    stack: ["Next.js", "Stripe", "Vercel"],
    color: "from-[#191919] to-[#090909]",
    link: "#",
    image: null,
  },
  {
    name: "Ironclad Builders",
    category: "Construction & Trades Website",
    stack: ["React", "Tailwind CSS", "Vercel"],
    color: "from-[#1e1e1e] to-[#0b0b0b]",
    link: "#",
    image: null,
  },
];

const STACK = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "PostgreSQL", "Prisma"],
  Cloud: ["Vercel", "AWS", "Docker"],
  AI: ["OpenAI APIs", "Machine Learning Tools"],
};

const PROCESS = [
  { n: "01", title: "Discovery", desc: "Understanding your goals, your users, and what success looks like." },
  { n: "02", title: "Strategy", desc: "Planning the right architecture, stack, and scope for the problem." },
  { n: "03", title: "Development", desc: "Building high-quality technology in focused, reviewable stages." },
  { n: "04", title: "Launch", desc: "Deploying, measuring, and improving with real usage data." },
];

const TESTIMONIALS = [
  {
    quote:
      "Nexora rebuilt our platform from the ground up and it finally feels like the product we always meant to ship.",
    name: "Amara Osei",
    role: "CEO, Meridian Health",
  },
  {
    quote:
      "They think like engineers and design like a studio. That combination is rare and it shows in the finished product.",
    name: "Daniel Reyes",
    role: "Founder, Voltra Logistics",
  },
  {
    quote:
      "Every milestone shipped on time, and the codebase they handed us was cleaner than what we started with.",
    name: "Priya Nair",
    role: "CTO, Aurelia Capital",
  },
];

const INITIAL_PROJECT_COUNT = 6;

function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`relative px-6 md:px-10 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="text-[13px] font-medium tracking-wide text-[#D4AF37] mb-3">
      {children}
    </p>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [statsRef, statsInView] = useInView(0.4);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Website Development",
    message: "",
  });
  const [sent, setSent] = useState(false);

  // Theme state is initialized from the class the inline script in
  // index.html already set on <html>, so there's no mismatch/flash
  // between what was set before paint and what React thinks it is.
  const [theme, setTheme] = useState(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark") ? "dark" : "light";
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem("nexora-theme", theme);
    } catch (e) {
      // localStorage can throw in private-browsing/blocked-storage contexts;
      // theme still works for the current session, it just won't persist.
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  const visibleProjects = showAllProjects
    ? PROJECTS
    : PROJECTS.slice(0, INITIAL_PROJECT_COUNT);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#050505] dark:text-white antialiased transition-colors duration-300" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-black/[0.06] dark:border-white/[0.06] bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display font-semibold text-lg">
            Nexora
            <span className="text-[#D4AF37]">Tech</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-black/60 dark:text-[#B8B8B8] hover:text-black dark:hover:text-white transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <button
              onClick={toggleTheme}
              aria-label="Toggle light/dark theme"
              className="p-2 rounded-full border border-black/10 dark:border-white/10 text-black dark:text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href="#contact"
              className="text-sm font-medium bg-[#D4AF37] text-black px-4 py-2 rounded-full hover:bg-[#FFD700] transition-colors"
            >
              Start A Project
            </a>
          </nav>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle light/dark theme"
              className="p-2 rounded-full border border-black/10 dark:border-white/10 text-black dark:text-white"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              className="text-black dark:text-white"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-black/[0.06] dark:border-white/[0.06] px-6 py-4 flex flex-col gap-4 bg-white dark:bg-[#050505]">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-black/60 dark:text-[#B8B8B8]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium bg-[#D4AF37] text-black px-4 py-2 rounded-full text-center"
            >
              Start A Project
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <div id="top" className="relative overflow-hidden pt-40 pb-28 px-6 md:px-10">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(212,175,55,0.10), transparent 70%), radial-gradient(40% 30% at 85% 20%, rgba(255,215,0,0.06), transparent 70%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="drift-a absolute top-24 left-[12%] h-1.5 w-1.5 rounded-full bg-[#D4AF37]/70" />
          <span className="drift-b absolute top-40 left-[70%] h-1 w-1 rounded-full bg-[#FFD700]/60" />
          <span className="drift-c absolute top-64 left-[35%] h-1 w-1 rounded-full bg-[#D4AF37]/50" />
          <span className="drift-b absolute top-16 left-[55%] h-1.5 w-1.5 rounded-full bg-[#D4AF37]/40" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          {loaded && (
            <>
              <h1
                className="rise-in font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] tracking-tight"
                style={{ animationDelay: "0.05s" }}
              >
                Building The Future
                <br />
                Through Technology
              </h1>
              <p
                className="rise-in mt-6 text-base md:text-lg text-black/60 dark:text-[#B8B8B8] max-w-2xl mx-auto leading-relaxed"
                style={{ animationDelay: "0.2s" }}
              >
                Nexora Tech creates premium websites, intelligent software, and
                AI-powered digital solutions that help businesses grow in the
                digital era.
              </p>
              <div
                className="rise-in mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
                style={{ animationDelay: "0.35s" }}
              >
                <a
                  href="#contact"
                  className="relative overflow-hidden gold-sweep w-full sm:w-auto text-center bg-[#D4AF37] text-black font-medium px-7 py-3 rounded-full hover:bg-[#FFD700] transition-colors"
                >
                  Start A Project
                </a>
                <a
                  href="#work"
                  className="w-full sm:w-auto text-center border border-[#D4AF37]/50 text-black dark:text-white font-medium px-7 py-3 rounded-full hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-colors"
                >
                  View Our Work
                </a>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ABOUT */}
      <Section id="about" className="py-24 border-t border-black/[0.06] dark:border-white/[0.06]">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <Eyebrow>About Nexora Tech</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
              We don't just build websites.
              <br />
              We engineer digital experiences.
            </h2>
          </div>
          <div className="space-y-5 text-black/60 dark:text-[#B8B8B8] leading-relaxed">
            <p>
              Nexora Tech is a technology partner for businesses that need
              more than a template — high-performance websites, custom
              software, and AI-powered products built by people who treat
              engineering as a craft.
            </p>
            <p>
              <span className="text-black dark:text-white font-medium">Our mission</span> is
              to give ambitious companies the same quality of technology that
              the world's best-funded teams build for themselves.
            </p>
            <p>
              <span className="text-black dark:text-white font-medium">Our vision</span> is a
              future where great software isn't reserved for big budgets —
              where any business with the right idea can build something
              world-class.
            </p>
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" className="py-24 border-t border-black/[0.06] dark:border-white/[0.06]">
        <Eyebrow>Services</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12 max-w-xl">
          Everything it takes to ship world-class technology
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm p-7 transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
            >
              <s.icon className="text-[#D4AF37]" size={26} strokeWidth={1.6} />
              <h3 className="font-display text-lg font-medium mt-5 mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-black/60 dark:text-[#B8B8B8] leading-relaxed mb-4">
                {s.desc}
              </p>
              <ul className="space-y-1.5">
                {s.items.map((it) => (
                  <li key={it} className="text-sm text-black/60 dark:text-[#B8B8B8] flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#D4AF37]/70" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY NEXORA */}
      <Section className="py-24 border-t border-black/[0.06] dark:border-white/[0.06]" id="why">
        <div ref={statsRef} className="grid sm:grid-cols-3 gap-8 mb-16 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl md:text-5xl font-semibold text-[#FFD700]">
                <CountUp to={s.to} suffix={s.suffix} start={statsInView} />
              </div>
              <p className="mt-2 text-sm text-black/60 dark:text-[#B8B8B8]">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {ADVANTAGES.map((a) => (
            <div key={a.text} className="flex items-center gap-2 text-sm text-black/60 dark:text-[#B8B8B8]">
              <a.icon size={16} className="text-[#D4AF37]" />
              {a.text}
            </div>
          ))}
        </div>
      </Section>

      {/* PORTFOLIO */}
      <Section id="work" className="py-24 border-t border-black/[0.06] dark:border-white/[0.06]">
        <Eyebrow>Selected Work</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12 max-w-xl">
          Products we've built for ambitious teams
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {visibleProjects.map((p) => (
            <a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-black/[0.08] dark:border-white/[0.08] overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/60 block"
            >
              <div className="h-44 relative overflow-hidden">
                {p.image ? (
                  <>
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${p.color} opacity-70`}
                    />
                  </>
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${p.color} flex items-center justify-center`}
                  >
                    <span className="font-display text-2xl text-white/15 font-semibold">
                      {p.name}
                    </span>
                  </div>
                )}
                {p.image && (
                  <span className="absolute bottom-4 left-4 font-display text-lg text-white font-semibold drop-shadow-lg">
                    {p.name}
                  </span>
                )}
                <ArrowUpRight
                  className="absolute top-4 right-4 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"
                  size={18}
                />
              </div>
              <div className="p-6 bg-black/[0.02] dark:bg-white/[0.02]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-medium">{p.name}</h3>
                  <span className="text-xs text-[#D4AF37]">{p.category}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-black/60 dark:text-[#B8B8B8] border border-black/10 dark:border-white/10 rounded-full px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {PROJECTS.length > INITIAL_PROJECT_COUNT && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAllProjects((v) => !v)}
              className="flex items-center gap-2 text-sm font-medium border border-black/15 dark:border-white/15 text-black dark:text-white px-6 py-3 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
            >
              {showAllProjects
                ? "Show Less"
                : `Show More (${PROJECTS.length - INITIAL_PROJECT_COUNT} more)`}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${showAllProjects ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </Section>

      {/* TECH STACK */}
      <Section className="py-24 border-t border-black/[0.06] dark:border-white/[0.06]">
        <Eyebrow>Technology</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12 max-w-xl">
          Built on tools made for scale
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(STACK).map(([cat, items]) => (
            <div key={cat}>
              <p className="text-sm font-medium text-black dark:text-white mb-3">{cat}</p>
              <div className="flex flex-col gap-2">
                {items.map((it) => (
                  <span
                    key={it}
                    className="text-sm text-black/60 dark:text-[#B8B8B8] border-b border-black/[0.06] dark:border-white/[0.06] pb-2"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section id="process" className="py-24 border-t border-black/[0.06] dark:border-white/[0.06]">
        <Eyebrow>How We Work</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-14 max-w-xl">
          A clear process from first call to launch
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS.map((step, i) => (
            <div key={step.n} className="relative pl-0">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-display text-sm text-[#D4AF37]">{step.n}</span>
                <span className="h-px flex-1 bg-black/10 dark:bg-white/10" />
              </div>
              <h3 className="font-display text-lg font-medium mb-2">{step.title}</h3>
              <p className="text-sm text-black/60 dark:text-[#B8B8B8] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="py-24 border-t border-black/[0.06] dark:border-white/[0.06]">
        <Eyebrow>Client Feedback</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12 max-w-xl">
          What it's like to work with us
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-7 flex flex-col"
            >
              <Quote className="text-[#D4AF37]/70 mb-4" size={22} />
              <p className="text-sm text-black/60 dark:text-[#B8B8B8] leading-relaxed flex-1">
                {t.quote}
              </p>
              <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                <p className="text-sm font-medium text-black dark:text-white">{t.name}</p>
                <p className="text-xs text-black/60 dark:text-[#B8B8B8]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="py-24 border-t border-black/[0.06] dark:border-white/[0.06]">
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <Eyebrow>Get In Touch</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-5">
              Ready To Build The Future?
            </h2>
            <p className="text-black/60 dark:text-[#B8B8B8] leading-relaxed mb-8 max-w-md">
              Tell us about your project and we'll get back to you within one
              business day with next steps.
            </p>
            <div className="space-y-3 text-sm text-black/60 dark:text-[#B8B8B8]">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#D4AF37]" />
                hello@nexoratech.com
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#" aria-label="Twitter" className="text-black/60 dark:text-[#B8B8B8] hover:text-[#D4AF37] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-black/60 dark:text-[#B8B8B8] hover:text-[#D4AF37] transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="GitHub" className="text-black/60 dark:text-[#B8B8B8] hover:text-[#D4AF37] transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-sm placeholder:text-[#888] dark:placeholder:text-[#666] focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-sm placeholder:text-[#888] dark:placeholder:text-[#666] focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
            <input
              placeholder="Company"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-sm placeholder:text-[#888] dark:placeholder:text-[#666] focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
            <select
              value={form.projectType}
              onChange={(e) => setForm({ ...form, projectType: e.target.value })}
              className="w-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-black/70 dark:text-[#B8B8B8] focus:outline-none focus:border-[#D4AF37] transition-colors"
            >
              <option>Website Development</option>
              <option>Software Development</option>
              <option>AI Solutions</option>
              <option>UI/UX Design</option>
              <option>Digital Transformation</option>
            </select>
            <textarea
              placeholder="Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-sm placeholder:text-[#888] dark:placeholder:text-[#666] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={sent}
              className="w-full bg-[#D4AF37] text-black font-medium px-6 py-3 rounded-lg hover:bg-[#FFD700] transition-colors disabled:opacity-70"
            >
              {sent ? "Message Sent" : "Send Message"}
            </button>
          </form>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-black/[0.06] dark:border-white/[0.06] py-12 px-6 md:px-10">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p className="font-display font-semibold text-lg">
              Nexora<span className="text-[#D4AF37]">Tech</span>
            </p>
            <p className="text-sm text-black/60 dark:text-[#B8B8B8] mt-2 max-w-xs">
              Engineering Tomorrow's Technology.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm">
            <div className="flex flex-col gap-2">
              <p className="text-black dark:text-white font-medium mb-1">Navigate</p>
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href} className="text-black/60 dark:text-[#B8B8B8] hover:text-black dark:hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black dark:text-white font-medium mb-1">Services</p>
              {SERVICES.slice(0, 4).map((s) => (
                <span key={s.title} className="text-black/60 dark:text-[#B8B8B8]">
                  {s.title}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black dark:text-white font-medium mb-1">Connect</p>
              <span className="text-black/60 dark:text-[#B8B8B8]">hello@nexoratech.com</span>
              <div className="flex gap-3 mt-1">
                <Twitter size={16} className="text-black/60 dark:text-[#B8B8B8] hover:text-[#D4AF37] transition-colors" />
                <Linkedin size={16} className="text-black/60 dark:text-[#B8B8B8] hover:text-[#D4AF37] transition-colors" />
                <Github size={16} className="text-black/60 dark:text-[#B8B8B8] hover:text-[#D4AF37] transition-colors" />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl mt-10 pt-6 border-t border-black/[0.06] dark:border-white/[0.06] text-xs text-black/40 dark:text-[#666]">
          © {new Date().getFullYear()} Nexora Tech. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
