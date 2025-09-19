/** @format */

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ServiceCard({ service, icon, index }) {
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
    hover: { y: -10, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover='hover'
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className='group relative h-full'>
      <motion.div
        variants={hoverVariants}
        className='relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col'>
        <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-wood-oak/5 to-accent-gold/5 rounded-full -translate-y-16 translate-x-16'></div>

        <motion.div
          animate={{ rotate: isHovered ? 5 : 0, scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className='relative w-16 h-16 bg-gradient-to-br from-wood-oak to-accent-gold rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300'>
          <div className='text-white'>{icon}</div>
        </motion.div>

        <div className='relative space-y-4 flex-1 flex flex-col'>
          <h3 className='text-xl font-bold text-wood-ebony group-hover:text-wood-oak transition-colors duration-300'>
            {service.title}
          </h3>

          <p className='text-gray-600 leading-relaxed'>{service.description}</p>

          <div className='space-y-2 mt-auto'>
            {service.features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: isHovered ? 1 : 0.7,
                  x: isHovered ? 0 : -5,
                }}
                transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                className='flex items-center space-x-2'>
                <div className='w-1.5 h-1.5 bg-wood-oak rounded-full flex-shrink-0'></div>
                <span className='text-sm text-gray-600'>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className='absolute inset-0 bg-gradient-to-br from-wood-oak/5 to-accent-gold/5 rounded-2xl'
        />

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
          className='absolute bottom-0 left-0 h-1 bg-gradient-to-r from-wood-oak to-accent-gold rounded-b-2xl'
        />
      </motion.div>
    </motion.div>
  );
}
