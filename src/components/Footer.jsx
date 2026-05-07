import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-black border-t border-gold/10">
      <div className="container mx-auto px-6 text-center">
        <div className="text-2xl font-bold font-outfit gold-gradient tracking-tighter mb-6">
          ROSE THE REALTOR
        </div>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          Providing verified land, luxury homes, and premium shortlets across the most vibrant locations in Lagos.
        </p>
        <div className="flex justify-center space-x-6 text-gray-400 text-sm mb-10">
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#listings" className="hover:text-gold transition-colors">Listings</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>
        <p className="text-gray-600 text-xs tracking-widest uppercase">
          &copy; {currentYear} Rose The Realtor. All rights reserved. Built for Excellence.
        </p>
      </div>
    </footer>
  )
}

export default Footer
