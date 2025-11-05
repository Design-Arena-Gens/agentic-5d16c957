"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40">
      <div className="container-responsive py-4">
        <div className="glass flex items-center justify-between px-4 py-3">
          <a href="#hero" className="text-sm font-semibold tracking-widest uppercase text-subtle hover:text-fg focus-ring">FS Dev</a>
          <div className="hidden sm:flex items-center gap-6 text-sm text-subtle">
            <a className="hover:text-fg focus-ring" href="#skills">Skills</a>
            <a className="hover:text-fg focus-ring" href="#projects">Projects</a>
            <a className="hover:text-fg focus-ring" href="#contact">Contact</a>
          </div>
          <a href="#contact" className="sm:inline-flex hidden focus-ring px-3 py-1.5 rounded-md bg-accent/15 text-accent hover:bg-accent/25 transition">Let?s talk</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section id="hero" aria-label="Introduction" ref={ref} className="relative min-h-[90svh] flex items-center hero-bg overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 animated-gradient mix-blend-screen" aria-hidden />
      <div className="container-responsive pt-24">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight"
            >
              Building elegant, performant web experiences
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mt-5 text-subtle max-w-prose"
            >
              I?m a full?stack developer focused on clean interfaces, robust APIs, and thoughtful animations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#projects" className="focus-ring inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent text-bg font-medium hover:opacity-90 transition">
                View projects <ArrowRight className="size-4" aria-hidden />
              </a>
              <div className="flex items-center gap-3 text-subtle">
                <a href="https://github.com/" aria-label="GitHub" className="focus-ring hover:text-fg"><Github className="size-5" aria-hidden /></a>
                <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="focus-ring hover:text-fg"><Linkedin className="size-5" aria-hidden /></a>
                <a href="#contact" aria-label="Email" className="focus-ring hover:text-fg"><Mail className="size-5" aria-hidden /></a>
              </div>
            </motion.div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="glass p-6"
            >
              <div className="aspect-[4/3] w-full relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-subtle/20" />
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-6">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <motion.span
                      key={i}
                      className="border border-white/5"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.01 * i }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ label, value }: { label: string; value: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className="space-y-2" role="group" aria-label={`${label} proficiency`}>
      <div className="flex items-center justify-between text-sm text-subtle">
        <span>{label}</span>
        <span aria-hidden>{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: mounted ? `${value}%` : 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="h-full rounded-full bg-accent"
          aria-hidden
        />
      </div>
      <span className="sr-only">{label} skill level {value} percent</span>
    </div>
  );
}

function Skills() {
  const skills = [
    { label: "TypeScript", value: 90 },
    { label: "React / Next.js", value: 92 },
    { label: "Node.js / APIs", value: 88 },
    { label: "Databases", value: 80 },
    { label: "Testing", value: 78 },
    { label: "UI/UX", value: 86 },
  ];

  return (
    <section id="skills" aria-labelledby="skills-title" className="section-padding">
      <div className="container-responsive">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 id="skills-title" className="text-3xl sm:text-4xl font-semibold">Skills</h2>
            <p className="mt-4 text-subtle max-w-prose">A balanced toolkit across front?end and back?end, with a focus on performance and accessibility.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {skills.map((s) => (
                <SkillBar key={s.label} label={s.label} value={s.value} />
              ))}
            </div>
          </div>
          <div className="glass p-6">
            <h3 className="text-lg font-medium">Technologies</h3>
            <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-subtle">
              {[
                "Next.js","React","TypeScript","Node.js","PostgreSQL","Prisma","Tailwind","Framer Motion","Jest","Playwright","Docker","AWS"
              ].map((t) => (
                <li key={t} className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 transition focus-ring" tabIndex={0}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  caseStudy: string;
};

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <button
      className="text-left group glass p-2 focus-ring"
      onClick={() => onOpen(project)}
      aria-haspopup="dialog"
      aria-label={`Open case study for ${project.title}`}
    >
      <div className="aspect-video relative overflow-hidden rounded-md">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-subtle/20" />
        <Image src={project.image} alt="Project preview" fill className="object-cover opacity-90 group-hover:opacity-100 transition" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <ArrowRight className="size-4 text-subtle group-hover:text-fg transition" aria-hidden />
        </div>
        <p className="mt-2 text-sm text-subtle line-clamp-2">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-subtle">
          {project.tags.map((t) => (
            <span key={t} className="px-2 py-1 rounded bg-white/5">{t}</span>
          ))}
        </div>
      </div>
    </button>
  );
}

function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label={title}>
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute inset-0 grid place-items-center p-4">
        <div ref={dialogRef} tabIndex={-1} className="glass max-w-2xl w-full p-6 outline-none">
          <div className="flex items-center justify-between gap-6">
            <h3 className="text-xl font-semibold">{title}</h3>
            <button onClick={onClose} className="focus-ring text-subtle hover:text-fg" aria-label="Close dialog">?</button>
          </div>
          <div className="mt-4 text-subtle space-y-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Commerce UI",
      description: "Headless e?commerce storefront focused on speed and conversion.",
      image: "/placeholders/commerce.svg",
      tags: ["Next.js", "Edge", "Stripe"],
      caseStudy: "Built a blazing?fast storefront leveraging ISR and edge functions to deliver sub?second TTFB across regions.",
    },
    {
      title: "Realtime Dashboard",
      description: "Operational analytics with live charts and alerts.",
      image: "/placeholders/dashboard.svg",
      tags: ["WebSockets", "Timeseries", "Tailwind"],
      caseStudy: "Implemented streaming updates with graceful degradation and optimized rendering for 60fps interactions.",
    },
    {
      title: "Design System",
      description: "Accessible component library and tokens.",
      image: "/placeholders/design.svg",
      tags: ["Accessibility", "Storybook", "Theming"],
      caseStudy: "Established a scalable token system with strict a11y checks and keyboard support baked in.",
    },
  ];

  const openCase = (p: Project) => { setActive(p); setOpen(true); };
  const closeCase = () => { setOpen(false); setActive(null); };

  return (
    <section id="projects" aria-labelledby="projects-title" className="section-padding">
      <div className="container-responsive">
        <h2 id="projects-title" className="text-3xl sm:text-4xl font-semibold">Featured Projects</h2>
        <p className="mt-4 text-subtle max-w-prose">Selected work highlighting problem?solving, attention to detail, and delightful polish.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * idx }}>
              <ProjectCard project={p} onOpen={openCase} />
            </motion.div>
          ))}
        </div>
      </div>
      <Modal open={open} onClose={closeCase} title={active?.title ?? "Case Study"}>
        <p>{active?.caseStudy}</p>
        <ul className="flex flex-wrap gap-2">
          {active?.tags.map((t) => (
            <li key={t} className="px-2 py-1 rounded bg-white/5 text-xs">{t}</li>
          ))}
        </ul>
      </Modal>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  async function onSubmit(formData: FormData) {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Network error");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-padding">
      <div className="container-responsive">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 id="contact-title" className="text-3xl sm:text-4xl font-semibold">Let?s build something</h2>
            <p className="mt-4 text-subtle max-w-prose">Have a project in mind or a role to fill? I?d love to hear about it.</p>
            <div className="mt-6 flex items-center gap-4 text-subtle">
              <a className="focus-ring hover:text-fg inline-flex items-center gap-2" href="mailto:hello@example.com"><Mail className="size-4" aria-hidden /> hello@example.com</a>
              <a className="focus-ring hover:text-fg inline-flex items-center gap-2" href="https://github.com/"><Github className="size-4" aria-hidden /> GitHub</a>
              <a className="focus-ring hover:text-fg inline-flex items-center gap-2" href="https://www.linkedin.com/"><Linkedin className="size-4" aria-hidden /> LinkedIn</a>
            </div>
          </div>
          <form className="glass p-6 space-y-4" onSubmit={(e) => { e.preventDefault(); onSubmit(new FormData(e.currentTarget)); }}>
            <div>
              <label htmlFor="name" className="block text-sm text-subtle">Name</label>
              <input id="name" name="name" required className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 focus-ring" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-subtle">Email</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 focus-ring" placeholder="you@domain.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-subtle">Message</label>
              <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 focus-ring" placeholder="How can I help?" />
            </div>
            <div className="flex items-center gap-3">
              <button disabled={status === "sending"} className="focus-ring inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent text-bg font-medium disabled:opacity-60">
                {status === "sending" ? "Sending?" : "Send message"}
              </button>
              {status === "success" && <span role="status" className="text-sm text-green-300">Thanks! I?ll get back to you soon.</span>}
              {status === "error" && <span role="status" className="text-sm text-red-300">Something went wrong. Try again.</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 text-center text-xs text-subtle">
      <div className="container-responsive">? {new Date().getFullYear()} Full?Stack Developer. All rights reserved.</div>
    </footer>
  );
}

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
