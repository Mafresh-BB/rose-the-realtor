import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black-card relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Find Your <span className="gold-text">Property?</span></h2>
            <p className="text-xl text-gray-400">Let's talk about your next investment or luxury home.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-bold">Get In Touch</h3>
              
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gold/10 rounded-lg text-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Office Location</h4>
                  <p className="text-gray-400">Lagos, Nigeria (Lekki & Victoria Island)</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-gold/10 rounded-lg text-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Email Me</h4>
                  <a href="mailto:rosetheraltor3@gmail.com" className="text-gray-400 hover:text-gold transition-colors">
                    rosetheraltor3@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-gold/10 rounded-lg text-gold">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-6 h-6"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Follow Me</h4>
                  <a 
                    href="https://instagram.com/rose_the_realtor_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    @rose_the_realtor_
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black p-10 rounded-2xl border border-gold/20 shadow-2xl"
            >
              <h3 className="text-3xl font-bold mb-6">Send A Message</h3>
              <p className="text-gray-400 mb-8">
                The fastest way to reach me is via WhatsApp. Click the button below to start a conversation.
              </p>
              
              <a 
                href="https://wa.me/2347032415409" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-gold w-full py-5 flex items-center justify-center gap-3 text-lg"
              >
                <MessageCircle size={24} /> Chat with Rose on WhatsApp
              </a>
              
              <div className="mt-8 pt-8 border-t border-gold/10 text-center">
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">
                  Usually replies within 1 hour
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
