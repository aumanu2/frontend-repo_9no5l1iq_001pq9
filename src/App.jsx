import React from 'react';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#" className="text-base font-semibold">Flames SaaS</a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#cta" className="hover:text-white">Contact</a>
        </nav>
        <a href="#pricing" className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90">Start</a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid />
        <Pricing />
        <section id="cta" className="w-full bg-neutral-950 py-16 text-white">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h3 className="text-2xl font-semibold">Ready to accelerate your roadmap?</h3>
            <p className="mt-3 text-white/70">Book a demo and see how quickly your team can ship with our platform.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]"
            >
              <input
                type="email"
                required
                placeholder="Enter your work email"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-emerald-400/50"
              />
              <button
                type="submit"
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90"
              >
                Book a demo
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
