import React from 'react';

const tiers = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    highlight: false,
    features: [
      'Automation workflows (up to 3)',
      'Basic analytics',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: '$99',
    period: '/month',
    highlight: true,
    features: [
      'Unlimited automations',
      'AI assistants & integrations',
      'Priority support',
      'Team collaboration',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    highlight: false,
    features: [
      'Dedicated solutions team',
      'SSO, SAML, SCIM',
      'Custom SLAs & security review',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Choose a plan that grows with you. Cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border ${tier.highlight ? 'border-emerald-400/40 bg-emerald-400/5' : 'border-white/10 bg-white/5'} p-6`}
            >
              {tier.highlight && (
                <span className="absolute right-4 top-4 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-sm text-white/60">{tier.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition ${tier.highlight ? 'bg-white text-black hover:opacity-90' : 'border border-white/20 text-white hover:bg-white/10'}`}
              >
                {tier.name === 'Enterprise' ? 'Talk to Sales' : 'Start Free Trial'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
