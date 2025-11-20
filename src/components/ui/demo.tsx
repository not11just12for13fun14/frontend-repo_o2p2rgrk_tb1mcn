import React from 'react'
import WavyBackground from './wavy-background'

export default function DemoWavy() {
  return (
    <div className="relative h-[400px] rounded-2xl overflow-hidden">
      <WavyBackground />
      <div className="relative z-10 h-full flex items-center justify-center">
        <h2 className="text-white text-3xl font-semibold">Wavy Background Demo</h2>
      </div>
    </div>
  )
}
