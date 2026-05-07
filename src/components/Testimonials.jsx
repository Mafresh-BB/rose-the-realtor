import React from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Olumide Adeyemi',
    role: 'Land Investor',
    content: 'Rose made the process of buying land in Ibeju-Lekki so seamless. I was worried about the documentation, but she handled everything. Her honesty is rare in this market.',
    location: 'Lagos Island',
  },
  {
    name: 'Chinyere Okafor',
    role: 'Shortlet Client',
    content: 'The shortlet I booked through Rose was exactly as seen in the pictures. Immaculate, secure, and in a prime location. She is my go-to for luxury stays in Lagos now.',
    location: 'Victoria Island',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-black-bg border-t border-gold/10">
      <div className="container mx-auto px-6">
        <h2 className="section-title">What My <span className="gold-text">Clients Say</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t) => (
            <div key={t.name} className="p-10 rounded-2xl bg-black-card border border-gold/5 relative overflow-hidden group">
              <Quote className="absolute top-6 right-8 text-gold/10 group-hover:text-gold/20 transition-colors" size={100} />
              
              <div className="relative z-10">
                <p className="text-xl text-gray-300 italic mb-8 leading-relaxed">
                  "{t.content}"
                </p>
                <div>
                  <h4 className="text-2xl font-bold text-gold">{t.name}</h4>
                  <p className="text-gray-500 font-medium">{t.role} • {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
