'use client'

import { motion } from 'framer-motion'

export default function Link({ href, children, className = '', ...props }) {
  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  }

  return (
    <motion.a
      href={href}
      variants={linkVariants}
      whileHover="hover"
      whileTap="tap"
      className={`inline-flex items-center text-wood-oak hover:text-wood-mahogany transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  )
}
