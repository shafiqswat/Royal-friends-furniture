/** @format */

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { StarIcon } from "@/assets/Svg";

export default function TestimonialCard({ testimonial, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: index * 0.1, ease: "easeOut" },
    },
  };

  const hoverVariants = {
    hover: { y: -5, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    // ensure card fills the grid cell
    <motion.div
      variants={cardVariants}
      whileHover='hover'
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className='group relative h-full'>
      <motion.div
        variants={hoverVariants}
        // h-full + flex column so we can control layout and push footer to bottom
        className='relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col'>
        {/* Background Pattern */}
        <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-wood-oak/5 to-accent-gold/5 rounded-full -translate-y-10 translate-x-10'></div>

        {/* Rating Stars */}
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
          className='flex space-x-1 mb-4'>
          {[...Array(testimonial.rating)].map((_, i) => (
            <StarIcon
              key={i}
              className='w-4 h-4 text-accent-gold fill-current'
            />
          ))}
        </motion.div>

        {/* Quote - make this grow so it evens out card heights */}
        <motion.div
          animate={{ scale: isHovered ? 1.02 : 1 }}
          transition={{ duration: 0.3 }}
          className='relative mb-6 text-sm text-gray-700 leading-relaxed flex-1'>
          <div className='text-4xl text-wood-oak/20 absolute -top-2 -left-2 font-serif'>
            "
          </div>
          <p className='relative z-10'>{testimonial.comment}</p>
          <div className='text-4xl text-wood-oak/20 absolute -bottom-4 -right-2 font-serif'>
            "
          </div>
        </motion.div>

        {/* Customer Info - push to bottom with mt-auto */}
        <div className='flex items-center space-x-3 mt-auto'>
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
            className='w-12 h-12 bg-gradient-to-br from-wood-oak to-accent-gold rounded-full flex items-center justify-center flex-shrink-0'>
            <span className='text-white font-semibold text-lg'>
              {testimonial.name.charAt(0)}
            </span>
          </motion.div>

          <div className='flex-1 min-w-0'>
            <h4 className='font-semibold text-wood-ebony group-hover:text-wood-oak transition-colors duration-300'>
              {testimonial.name}
            </h4>
            <p className='text-sm text-gray-500'>Verified Customer</p>
          </div>
        </div>

        {/* Hover overlay + bottom accent (absolute so layout unaffected) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className='absolute inset-0 bg-gradient-to-br from-wood-oak/5 to-accent-gold/5 rounded-2xl pointer-events-none'
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
          className='absolute bottom-0 left-0 h-1 bg-gradient-to-r from-wood-oak to-accent-gold rounded-b-2xl'
        />
        <div className='absolute top-4 right-4 w-2 h-2 bg-accent-gold/30 rounded-full'></div>
        <div className='absolute bottom-4 left-4 w-1 h-1 bg-wood-oak/30 rounded-full'></div>
      </motion.div>
    </motion.div>
  );
}
