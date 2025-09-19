'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FeatureCard({ feature, icon, index }) {
  const [isHovered, setIsHovered] = useState(false)

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  }

  const hoverVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        variants={hoverVariants}
        className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-wood-oak/5 to-accent-gold/5 rounded-full -translate-y-12 translate-x-12"></div>
        
        {/* Icon */}
        <motion.div
          animate={{
            rotate: isHovered ? 10 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.3 }}
          className="relative w-12 h-12 bg-gradient-to-br from-wood-oak to-accent-gold rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300"
        >
          <div className="text-white">
            {icon}
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative space-y-3">
          <h3 className="text-lg font-bold text-wood-ebony group-hover:text-wood-oak transition-colors duration-300">
            {feature.title}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>

        {/* Hover Effect Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-wood-oak/5 to-accent-gold/5 rounded-2xl"
        />

        {/* Bottom Accent */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-wood-oak to-accent-gold rounded-b-2xl"
        />

        {/* Decorative Elements */}
        <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-accent-gold/40 rounded-full"></div>
        <div className="absolute bottom-3 left-3 w-1 h-1 bg-wood-oak/40 rounded-full"></div>
      </motion.div>
    </motion.div>
  )
}
