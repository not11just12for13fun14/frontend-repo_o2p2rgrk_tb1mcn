import React from 'react'

export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-sky-400/20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-blue-100/80">
        <nav className="flex gap-6">
          {['Home','Services','About','Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-sky-300">{l}</a>
          ))}
        </nav>
        <p className="text-sm">© HADS</p>
      </div>
    </footer>
  )
}
