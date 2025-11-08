import React from 'react';
import { Cloud, Shield, Cog, Cpu, Globe, Database, Bot, Rocket } from 'lucide-react';

const services = [
  { icon: Bot, title: 'Automation', desc: 'Workflow automations, RPA, and no-code orchestration to eliminate manual tasks.' },
  { icon: Cog, title: 'Software Development', desc: 'Full-stack product engineering with modern stacks and proven delivery.' },
  { icon: Rocket, title: 'Digital Engineering', desc: 'From prototypes to scalable systems—CI/CD, DevOps, and platform engineering.' },
  { icon: Cloud, title: 'Cloud', desc: 'Architecture, migration, FinOps, and managed services across all major clouds.' },
  { icon: Shield, title: 'Cybersecurity', desc: 'Zero-trust, threat detection, compliance, and incident response.' },
  { icon: Cpu, title: 'AI & Data', desc: 'ML pipelines, analytics, LLM apps, and data platforms that drive decisions.' },
  { icon: Globe, title: 'Web Development', desc: 'High-performance websites and headless experiences that convert.' },
  { icon: Database, title: 'Managed Services', desc: 'Reliable 24/7 operations, SRE, monitoring, and SLA-backed support.' },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Capabilities that compound</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              A broad suite of offerings spanning cloud, cybersecurity, data & AI, and more—designed to accelerate your roadmap.
            </p>
          </div>
          <a href="#pricing" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/10">See pricing</a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 transition hover:border-white/20">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -bottom-10 right-0 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition-transform duration-500 group-hover:translate-y-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
