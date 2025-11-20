import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-[0_0_25px_rgba(56,189,248,0.45)]">
          We Build AI-Powered Solutions That Transform Your Business.
        </h1>
        <p className="mt-5 text-blue-100/90 text-lg md:text-xl">
          HADS delivers automation, apps, and websites designed for scaling modern companies.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#contact" className="px-6 py-3 rounded-xl bg-sky-400 text-slate-900 font-semibold shadow-[0_0_30px_rgba(56,189,248,0.45)] hover:shadow-[0_0_45px_rgba(56,189,248,0.7)] transition">Start Project</a>
          <a href="#services" className="px-6 py-3 rounded-xl border border-sky-400/60 text-white hover:bg-sky-400/10 transition">View Services</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-950/90" />
    </section>
  )
}
