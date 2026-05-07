import React from 'react'
import { motion } from 'framer-motion'
import rosePortrait from '../assets/rose_portrait.png'

const About = () => {
  return (
    <section id="about" className="py-24 bg-black-bg overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden border-2 border-gold/30">
              <img src={rosePortrait} alt="Roselyn Okoroma" className="w-full h-auto" />
            </div>
            {/* Decorative background box */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold/20 -z-0 rounded-lg hidden md:block"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6">
              About <span className="gold-text">Roselyn Okoroma</span>
            </h2>
            <div className="w-20 h-1 bg-gold mb-8"></div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Roselyn Okoroma is a Lagos-based real estate professional with a reputation for clarity, honesty, and results. Operating as "Rose the Realtor," she has built a brand centered on delivering value to discerning clients in Nigeria's most vibrant market.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Whether you're buying land to build your legacy, securing a luxury home for your family, or booking a premium shortlet for your stay, Rose handles every transaction with precision and care. 
            </p>
            <div className="italic text-gold text-xl font-medium border-l-4 border-gold pl-6 mb-8">
              "I give nothing but the best. My goal is to ensure you find a property that truly feels like home, or an investment that truly grows."
            </div>
            <a href="#contact" className="btn-gold">Work With Rose</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
