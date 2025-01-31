"use client";
import React from "react";
import Image from "next/image";
import { FaTag, FaClock } from "react-icons/fa";

interface SaleBannerProps {
  sale: {
    name: string;
    discountPercentage: number;
    couponCode: string;
    description: string;
    bannerImageUrl: string;
    validFrom: string;
    validUntil: string;
  };
}

export default function SaleBanner({ sale }: SaleBannerProps) {
  if (!sale) return null;

  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      {/* Banner Image */}
      <div className="absolute inset-0 z-0">
        <Image src={sale.bannerImageUrl} alt={sale.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <h2 className="text-sm uppercase tracking-wider">{sale.name}</h2>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {sale.discountPercentage}% OFF
          </h1>

          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            {sale.description}
          </p>

          <div className="flex items-center justify-center gap-3 mb-6">
            <FaTag className="text-gray-400" />
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-gray-400 mr-2">Use code:</span>
              <span className="font-mono font-bold">{sale.couponCode}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <FaClock />
            <span>
              Valid from {new Date(sale.validFrom).toLocaleDateString()} to{" "}
              {new Date(sale.validUntil).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}