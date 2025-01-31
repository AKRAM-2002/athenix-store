"use client"
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ProductType } from '@/sanity.types';
import ProductThumb from './ProductThumb';



export default function ProductGrid({ products } : { products: ProductType[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 mt-4">
      {products.map((product) => {
        return (
            <AnimatePresence key={product._id}>
                <motion.div
                    layout
                    initial={{
                        opacity: 0.2,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    className='flex justify-center'
                >
                    <ProductThumb key={product._id} product={product} />
                </motion.div>
            </AnimatePresence>
        )     
    })}
    </div>
  );
};

