import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, MessageCircle } from 'lucide-react'
import landImg from '../assets/lagos_land_verified.png'
import houseImg from '../assets/lagos_luxury_home.png'
import shortletImg from '../assets/shortlet_interior.png'

const listings = [
  {
    id: 1,
    title: '500sqm Land Plot',
    type: 'Land',
    location: 'Ibeju-Lekki, Lagos',
    price: '₦25,000,000 - ₦40,000,000',
    image: landImg,
  },
  {
    id: 2,
    title: '5 Bedroom Mansion',
    type: 'Luxury Home',
    location: 'Lekki Phase 1, Lagos',
    price: '₦450,000,000 - ₦600,000,000',
    image: houseImg,
  },
  {
    id: 3,
    title: 'Premium 3BR Shortlet',
    type: 'Shortlet',
    location: 'Victoria Island, Lagos',
    price: '₦120,000 - ₦180,000 / Night',
    image: shortletImg,
  },
]

const Listings = () => {
  return (
    <section id="listings" className="py-24 bg-black-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Current <span className="gold-text">Listings</span></h2>
            <p className="text-gray-400 text-lg">Verified properties updated regularly.</p>
          </div>
          <div className="hidden md:block">
            <a 
              href="https://wa.me/2347032416409" 
              className="text-gold font-semibold flex items-center gap-2 hover:underline"
            >
              Request Custom Portfolio <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {listings.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-black-card rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-300 shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-gold text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {item.type}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
                <div className="flex items-center gap-2 text-gray-400 mb-6">
                  <MapPin size={18} className="text-gold" />
                  <span>{item.location}</span>
                </div>
                <div className="text-xl font-bold text-white mb-8 border-t border-gold/10 pt-6">
                  {item.price}
                </div>
                <a 
                  href={`https://wa.me/2347032416409?text=Hi Rose, I'm interested in the ${item.title} in ${item.location}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-gold w-full flex items-center justify-center gap-2"
                >
                  Enquire via WhatsApp <MessageCircle size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a 
            href="https://wa.me/2347032416409" 
            className="text-gold font-semibold flex items-center justify-center gap-2"
          >
            Request Custom Portfolio <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Listings
