import React from 'react'

const items = [
  'AI Document Automation System',
  'Real Estate Lead Conversion Portal',
  'E-Commerce Mobile App',
  'Custom CRM Dashboard',
]

export default function Portfolio() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center">Selected Work</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((title) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-sky-400/20 bg-gradient-to-br from-slate-800/70 to-slate-900/70 p-6">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="w-full h-full bg-[radial-gradient(600px_300px_at_60%_-10%,rgba(56,189,248,0.2),transparent),radial-gradient(600px_300px_at_20%_110%,rgba(34,211,238,0.18),transparent)]" />
              </div>
              <h3 className="relative z-10 text-white text-xl font-semibold">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
