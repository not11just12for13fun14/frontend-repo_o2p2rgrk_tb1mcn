import React from 'react'
import { Bot, Code2, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Workflow automation, chatbots, CRM workflows.'
  },
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Landing pages, business websites, custom dashboards.'
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'iOS & Android apps, cross-platform builds, UI/UX.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 opacity-30">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative h-40 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_30%_10%,rgba(56,189,248,0.25),transparent),radial-gradient(600px_200px_at_70%_10%,rgba(129,140,248,0.25),transparent)]" />
          </div>
        </div>
      </div>
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center">Our Services</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="group relative rounded-2xl border border-sky-400/20 bg-white/5 backdrop-blur-xl p-6 hover:shadow-[0_0_35px_rgba(56,189,248,0.35)] transition">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-sky-400/10 text-sky-300 ring-1 ring-sky-400/20">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white text-xl font-semibold">{title}</h3>
              </div>
              <p className="text-blue-100/80 mt-4">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
