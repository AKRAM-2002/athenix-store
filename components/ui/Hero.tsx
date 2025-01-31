"use client";

import Link from "next/link";
import { FaArrowRight, FaShippingFast, FaCheck, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";
import BlackFridayCard from "./BlackFridayCard";

export default function HeroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const trustIndicatorHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  // Sale data for Black Friday card
  const saleData = {
    name: "Black Friday",
    discountPercentage: 30,
    description: "on all equipment & apparel",
    validUntil: "2025-11-30",
    isActive: true
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden py-20 sm:py-0">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src="https://images.unsplash.com/photo-1634225309345-b6b49528bcf4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Calisthenics Athletes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </motion.div>

      {/* Black Friday Card */}
      <BlackFridayCard sale={saleData} />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span 
              className="block mb-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Master Your
            </motion.span>
            <motion.span 
              className="block text-gray-300"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Body Weight
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
            {...fadeInUp}
            transition={{ delay: 0.7 }}
          >
            Premium calisthenics equipment and apparel engineered for athletes who 
            push beyond their limits. Join the movement.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4 sm:px-0"
            {...fadeInUp}
            transition={{ delay: 0.9 }}
          >
            <Link
              href="/equipment"
              className="group inline-flex items-center justify-center bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300"
            >
              Shop Equipment
              <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-all duration-300" />
            </Link>
            <Link
              href="/clothing"
              className="inline-flex items-center justify-center bg-white text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              View Clothing
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto px-4 sm:px-0"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 1.1
                }
              }
            }}
          >
            {[
              { icon: FaShippingFast, text: "Free EU Shipping" },
              { icon: FaCheck, text: "100% Satisfaction" },
              { icon: FaTrophy, text: "200,000+ Athletes" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center gap-3 bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10 cursor-pointer"
                variants={trustIndicatorHover}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="text-xl sm:text-2xl text-gray-300" />
                </motion.div>
                <span className="text-sm font-medium whitespace-nowrap">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}