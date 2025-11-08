import React from 'react';

export default function Footer() {
  const cols = [
    {
      title: 'Solutions',
      links: [
        'Automation',
        'Software Development',
        'Web Development',
        'Cloud',
        'Cybersecurity',
        'AI & Data',
        'Managed Services',
      ],
    },
    {
      title: 'Resources',
      links: ['Learning', 'Case Studies', 'Partners', 'Blog'],
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Contact', 'Legal'],
    },
  ];

  return (
    <footer className="relative w-full bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2">
            <a href="#" className="text-xl font-bold">Flames SaaS</a>
            <p className="mt-3 max-w-md text-sm text-white/70">
              Build the future faster with a subscription that unifies engineering, AI, and operations into one seamless platform.
            </p>
            <div className="mt-6 flex gap-3 text-sm text-white/60">
              <span>© {new Date().getFullYear()} Flames. All rights reserved.</span>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-white/80">{c.title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-white/60">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition hover:text-white">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
