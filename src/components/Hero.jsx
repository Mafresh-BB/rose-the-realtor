import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'
import lagosHero from '../assets/lagos_luxury_home.png'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${lagosHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-gold font-semibold tracking-widest uppercase mb-4 block">
            Premium Real Estate in Lagos
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Find Your Perfect <br />
            <span className="gold-gradient">Property in Lagos</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
            Lands, luxury homes, and shortlets. Clarity and trust, every step of the way. I give nothing but the best.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#listings" className="btn-gold flex items-center justify-center gap-2">
              View Listings <ArrowRight size={20} />
            </a>
            <a 
              href="https://wa.me/2347032415409" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline-gold flex items-center justify-center gap-2"
            >
              Contact Rose <MessageCircle size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-1 h-12 bg-gradient-to-b from-gold to-transparent rounded-full"></div>
      </div>
    </section>
  )
}

export default Hero
