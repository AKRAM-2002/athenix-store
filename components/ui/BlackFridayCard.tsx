"use client";

import React from "react";
import { FaBolt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

interface BlackFridayCardProps {
  sale: {
    name: string;
    discountPercentage: number;
    description: string;
    validUntil: string;
    isActive?: boolean;
  };
}

export default function BlackFridayCard({ sale }: BlackFridayCardProps) {
  if (!sale || !sale.isActive) return null;

  const pulseAnimation = {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div
      className="absolute top-4 right-4 z-20 w-full max-w-[220px]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative bg-black/40 backdrop-blur-md rounded-lg border border-white/10 overflow-hidden">
        {/* Glowing effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-red-500 to-purple-600 opacity-20 blur-xl" />

        <div className="relative p-3">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <motion.div 
              className="flex items-center gap-1.5"
              animate={pulseAnimation}
            >
              <FaBolt className="text-yellow-500 text-sm" />
              <span className="text-yellow-500 font-bold uppercase tracking-wider text-xs">
                {sale.name}
              </span>
            </motion.div>
          </div>

          {/* Discount */}
          <div className="text-center mb-2">
            <motion.div
              className="text-2xl font-bold"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {sale.discountPercentage}% OFF
            </motion.div>
            <p className="text-gray-300 text-xs">
              {sale.description}
            </p>
          </div>

          {/* Timer */}
          <div className="flex items-center justify-center gap-1.5 text-gray-400 text-xs mb-2">
            <FaClock className="text-gray-500 text-xs" />
            <span>Ends {new Date(sale.validUntil).toLocaleDateString()}</span>
          </div>

          {/* CTA Button */}
          <motion.button
            className="w-full bg-gradient-to-r from-yellow-500 to-red-500 text-white py-1.5 rounded-md font-semibold hover:from-yellow-600 hover:to-red-600 transition-all duration-300 text-xs"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Shop Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}