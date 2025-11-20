import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WavyBackground from './components/ui/wavy-background.jsx'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section with Spline cover and Wavy overlay */}
      <div className="relative">
        <Hero />
        <div className="absolute inset-0 top-[60%] h-[40%]">
          <WavyBackground />
        </div>
      </div>

      <main className="relative">
        <Services />
        <WhyChooseUs />
        <About />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
