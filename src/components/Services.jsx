import React from 'react'
import { motion } from 'framer-motion'
import { Map, Home, Key } from 'lucide-react'

const services = [
  {
    title: 'Land Sales',
    description: 'Verified land listings across Lagos. From Ibeju-Lekki to Epe, we ensure every plot is free from government encumbrance and ready for your vision.',
    icon: <Map className="text-gold" size={40} />,
  },
  {
    title: 'Luxury Homes',
    description: 'Premium residential properties for discerning buyers. We specialize in modern architecture and high-end finishes in Lagos\' most elite neighborhoods.',
    icon: <Home className="text-gold" size={40} />,
  },
  {
    title: 'Shortlets',
    description: 'Flexible short-term accommodation in prime Lagos locations. Experience luxury living with all the comforts of home, tailored for your convenience.',
    icon: <Key className="text-gold" size={40} />,
  },
]

const Services = () => {
  return (
    <section id="services" className="py-24 bg-black-card border-y border-gold/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Exclusive <span className="gold-text">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto -mt-8 text-lg">
            Providing tailored real estate solutions with a focus on integrity and premium quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-10 rounded-2xl bg-black border border-gold/20 card-hover group"
            >
              <div className="mb-6 p-4 bg-gold/5 rounded-full w-fit group-hover:bg-gold/10 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
