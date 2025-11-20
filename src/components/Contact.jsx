import React, { useState } from 'react'

const initial = { name: '', email: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState(null)
  const backend = import.meta.env.VITE_BACKEND_URL || ''

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')
      setStatus('sent')
      setForm(initial)
    } catch (err) {
      setStatus(`error:${err.message}`)
    }
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-2xl border border-sky-400/20 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(56,189,248,0.15)]">
          <h2 className="text-white text-3xl font-bold text-center">Start a Project</h2>
          <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4">
            <input name="name" placeholder="Name" value={form.name} onChange={onChange} className="w-full rounded-xl bg-slate-900/60 border border-sky-400/20 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-sky-400/40" required />
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={onChange} className="w-full rounded-xl bg-slate-900/60 border border-sky-400/20 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-sky-400/40" required />
            <input name="service" placeholder="Service" value={form.service} onChange={onChange} className="w-full rounded-xl bg-slate-900/60 border border-sky-400/20 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-sky-400/40" />
            <textarea name="message" placeholder="Message" value={form.message} onChange={onChange} rows={5} className="w-full rounded-xl bg-slate-900/60 border border-sky-400/20 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-sky-400/40" required />
            <button type="submit" className="mt-2 px-6 py-3 rounded-xl bg-sky-400 text-slate-900 font-semibold hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] transition">Submit</button>
          </form>
          {status && (
            <p className="mt-4 text-center text-blue-200">
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && 'Thanks! We\'ll be in touch.'}
              {status.startsWith?.('error') && 'Something went wrong.'}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
