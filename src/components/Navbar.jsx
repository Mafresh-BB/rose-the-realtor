import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Listings', href: '#listings' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-gold/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl md:text-3xl font-bold font-outfit gold-gradient tracking-tighter">
          ROSE THE REALTOR
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest font-medium hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/2347032416409" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-gold !py-2 !px-6 text-sm"
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gold focus:outline-none">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black-card border-b border-gold/20 absolute w-full left-0 py-6 px-6 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium hover:text-gold transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/2347032416409" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-gold w-full"
            onClick={() => setIsOpen(false)}
          >
            WhatsApp Rose
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
