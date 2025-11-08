import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.5)_70%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Launch your modern SaaS in days, not months
        </span>

        <h1 className="mt-2 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Automate. Build. Scale.
          <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            One platform for digital transformation
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
          A unified subscription that delivers automation, software development, AI, cloud, and more. From prototype to enterprise scale—beautifully integrated.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/10 transition hover:opacity-90"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Explore Services
          </a>
        </div>

        <div className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {['Automation', 'AI', 'Cloud', 'Security'].map((badge) => (
            <div
              key={badge}
              className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80 backdrop-blur"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
