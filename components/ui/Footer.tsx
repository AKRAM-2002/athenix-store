"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
  FaShippingFast,
} from "react-icons/fa";

export default function Footer() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <footer className="bg-white text-gray-800">
      {/* Newsletter Section */}
      <motion.div 
        className="border-t border-gray-100 py-12 bg-gray-50"
        {...fadeInUp}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Join the Movement</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to get special offers, free giveaways, and training tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-400 transition-all duration-300"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 relative">
                <Image
                  src="/images/athenix-logo1.png"
                  alt="Athenix Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">ATHENIX</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Premium calisthenics gear and apparel for athletes who push beyond limits.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { Icon: FaFacebookF, href: "#" },
                { Icon: FaInstagram, href: "#" },
                { Icon: FaYoutube, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { text: "Equipment", href: "/equipment" },
                { text: "Clothing", href: "/clothing" },
                { text: "About Us", href: "/about-us" },
                { text: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-800 transition-all duration-300"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              {[
                { text: "Track Order", href: "/track" },
                { text: "Return Policy", href: "/returns" },
                { text: "Shipping Info", href: "/shipping" },
                { text: "FAQs", href: "/faqs" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-800 transition-all duration-300"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Email: support@athenix.com</li>
              <li>Mon - Fri: 9:00 - 18:00</li>
              <li>Saturday: 9:00 - 14:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Copyright */}
            <div className="text-sm text-gray-600 text-center md:text-left">
              © {new Date().getFullYear()} Athenix. All rights reserved.
            </div>
            {/* Payment Methods */}
            <div className="flex justify-center md:justify-end space-x-4 text-gray-400">
              {[FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex].map((Icon, index) => (
                <Icon key={index} className="text-2xl" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Banner */}
      <motion.div 
        className="bg-gray-800 text-white py-3 text-center text-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 flex items-center justify-center gap-2">
          <FaShippingFast className="text-xl" />
          <span>Free EU Shipping on Orders Above €100</span>
        </div>
      </motion.div>
    </footer>
  );
}