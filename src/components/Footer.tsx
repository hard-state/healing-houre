'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './ui/Button';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#F1DCC0] border-t border-black/20 via-[#FFE7C8] to-yellow-600 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-soft-gold/5 via-transparent to-soft-gold/10" />
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-soft-gold rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-soft-gold rounded-full filter blur-3xl" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content */}
        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6 md:col-span-1"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <Image
                  src="/logo 7.png"
                  alt="Massage Therapy Logo"
                  width={50}
                  height={50}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -inset-1 bg-soft-gold/20 rounded-lg blur-sm" />
              </div>
              <div>
                <h3 className="font-elegant text-2xl font-bold text-matte-black">
                  Massage Therapy
                </h3>
                <p className="text-amber-900 text-sm">London</p>
              </div>
            </motion.div>
            
            <p className="text-gray-800 leading-relaxed text-sm">
              Experience ultimate relaxation and rejuvenation with our expert massage therapists in the heart of London. Your wellness journey begins here.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <motion.a
                href="tel:+447400415437"
                whileHover={{ x: 5 }}
                className="flex items-center text-gray-800 hover:text-amber-900 transition-colors duration-300 group"
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="font-medium">+44 7400 415437</span>
              </motion.a>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start text-gray-800 group"
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover:bg-white/30 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-gray-600">London area</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile: Links and Services in 2 columns */}
          <div className="md:hidden grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-elegant text-xl font-semibold text-matte-black mb-4 relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-900" />
              </h3>
              <ul className="space-y-3">
                {['Home', 'Our Team', 'Services'].map((link, index) => (
                  <motion.li
                    key={link}
                    whileHover={{ x: 8 }}
                    className="group"
                  >
                    <a
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-800 hover:text-amber-900 transition-all duration-300 flex items-center text-sm"
                    >
                      <span className="w-0 h-0.5 bg-amber-900 mr-0 group-hover:w-6 group-hover:mr-3 transition-all duration-300" />
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-elegant text-xl font-semibold text-matte-black mb-4 relative">
                Our Services
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-900" />
              </h3>
              <ul className="space-y-3">
                {['Deep Tissue', 'Swedish', 'Hot Stone'].map((service, index) => (
                  <motion.li
                    key={service}
                    whileHover={{ x: 8 }}
                    className="group"
                  >
                    <a
                      href="#book"
                      className="text-gray-800 hover:text-amber-900 transition-all duration-300 flex items-center text-sm"
                    >
                      <span className="w-0 h-0.5 bg-amber-900 mr-0 group-hover:w-6 group-hover:mr-3 transition-all duration-300" />
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Desktop: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden md:flex flex-col items-center justify-center space-y-4"
          >
            <h3 className="font-elegant text-xl font-semibold text-matte-black mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-900" />
            </h3>
            <ul className="space-y-4">
              {['Home', 'Our Team', 'Services', 'Location', 'Contact'].map((link, index) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 8 }}
                  className="group"
                >
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-800 hover:text-amber-900 transition-all duration-300 flex items-center text-sm"
                  >
                    <span className="w-0 h-0.5 bg-amber-900 mr-0 group-hover:w-6 group-hover:mr-3 transition-all duration-300" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Desktop: Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden md:flex flex-col items-center justify-center space-y-4"
          >
            <h3 className="font-elegant text-xl font-semibold text-matte-black mb-6 relative">
              Our Services
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-900" />
            </h3>
            <ul className="space-y-4">
              {['Deep Tissue Massage', 'Swedish Massage', 'Hot Stone Therapy', 'Aromatherapy', 'Sports Massage'].map((service, index) => (
                <motion.li
                  key={service}
                  whileHover={{ x: 8 }}
                  className="group"
                >
                  <a
                    href="#book"
                    className="text-gray-800 hover:text-amber-900 transition-all duration-300 flex items-center text-sm"
                  >
                    <span className="w-0 h-0.5 bg-amber-900 mr-0 group-hover:w-6 group-hover:mr-3 transition-all duration-300" />
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-6 md:col-span-1"
          >
            <h3 className="font-elegant text-xl font-semibold text-matte-black mb-6 relative">
              Stay Connected
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-900" />
            </h3>
            
            {/* Newsletter */}
            <div className="space-y-4 w-full max-w-sm">
              <p className="text-gray-800 text-sm text-center">
                Subscribe for wellness tips and exclusive offers
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/20 border border-amber-900/30 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-600 focus:outline-none focus:border-amber-900 focus:bg-white/30 transition-all"
                />
                <Button size="sm" className="px-4 bg-amber-900 hover:bg-amber-800 text-white">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <p className="text-gray-800 text-sm text-center">Follow us on social media</p>
              <motion.a
                href="https://www.tiktok.com/@massagetherapy696?_r=1&_t=ZN-945S35ornZj"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                className="inline-flex items-center space-x-3 bg-white/20 border border-amber-900/30 px-6 py-3 rounded-full text-gray-800 hover:bg-white/30 hover:text-amber-900 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.89.01 5.77-.02 8.64-.08 1.36-.54 2.71-1.35 3.77-.8 1.06-1.96 1.79-3.22 2.11-1.27.33-2.64.29-3.88-.15-1.11-.39-2.11-1.08-2.84-1.96-.75-.89-1.23-1.99-1.39-3.13-.16-1.05-.14-2.13.08-3.16.22-1.03.67-2 1.33-2.8.66-.8 1.51-1.44 2.47-1.81.85-.33 1.77-.46 2.68-.41.01 1.32.02 2.64.01 3.96-.5-.15-1.05-.24-1.57-.12-.52.12-.99.45-1.25.92-.26-.47-.31 1.04-.18 1.56.13.52.45.98.91 1.25.46.27 1.02.33 1.54.2.52-.13.98-.45 1.25-.91.27-.46.33-1.02.2-1.54-.13-.52-.45-.98-.91-1.25-.46-.27-1.02-.33-1.54-.2.01-1.32.02-2.64.01-3.96.5.15 1.05.24 1.57.12.52-.12.99-.45 1.25-.92.26-.47.31-1.04.18-1.56z"/>
                </svg>
                <span className="font-medium">@massagetherapy696</span>
              </motion.a>
            </div>

            {/* CTA Button */}
            <Button size="lg" href="#book" className="w-full shadow-xl">
              Book Your Session
            </Button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-soft-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-700 text-sm"
            >
              <p>&copy; 2024 Massage Therapy London. All rights reserved.</p>
            </motion.div>

            {/* Bottom Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row space-x-0 md:space-x-6 text-sm space-y-2 md:space-y-0"
            >
              <a href="#" className="text-gray-700 hover:text-amber-900 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-700 hover:text-amber-900 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-700 hover:text-amber-900 transition-colors">Cookie Policy</a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
