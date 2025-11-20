import React from 'react'
import { ShieldCheck, Rocket, Layers, Award } from 'lucide-react'

const items = [
  { icon: ShieldCheck, label: 'High Quality' },
  { icon: Rocket, label: 'Fast Delivery' },
  { icon: Layers, label: 'Scalable Tech' },
  { icon: Award, label: 'Proven Expertise' },
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center">Why Choose Us</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="rounded-2xl border border-sky-400/20 bg-white/5 p-6 text-center hover:bg-white/10 transition">
              <div className="mx-auto w-12 h-12 rounded-xl flex items-center justify-center bg-sky-400/10 text-sky-300 ring-1 ring-sky-400/20">
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-white mt-3 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
