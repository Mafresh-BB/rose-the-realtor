import React from 'react'
import { CheckCircle, ShieldCheck, HeartHandshake } from 'lucide-react'

const trustPoints = [
  {
    title: 'Verified Listings',
    description: 'Every property in our portfolio undergoes rigorous verification to ensure peace of mind.',
    icon: <ShieldCheck size={40} className="text-gold" />,
  },
  {
    title: 'End-to-End Support',
    description: 'From initial inspection to final paperwork, Rose handles the complexity so you don\'t have to.',
    icon: <HeartHandshake size={40} className="text-gold" />,
  },
  {
    title: 'Zero Runaround',
    description: 'We value your time. No fake listings, no hidden fees, just honest and direct communication.',
    icon: <CheckCircle size={40} className="text-gold" />,
  },
]

const TrustSignals = () => {
  return (
    <section className="py-24 bg-black-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Work With <span className="gold-text">Rose?</span></h2>
          <p className="text-gray-400 text-lg">The standard of excellence in Lagos real estate.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {trustPoints.map((point) => (
            <div key={point.title} className="text-center flex flex-col items-center group">
              <div className="mb-6 p-5 bg-gold/5 rounded-2xl transform transition-transform group-hover:scale-110 group-hover:bg-gold/10 duration-300">
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors">{point.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSignals
