/** @format */

"use client";

import { motion } from "framer-motion";
import { Award, DollarSign, Users, Truck } from "lucide-react";

export default function WhyChooseCard({ feature, itemVariants }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "award":
        return <Award className='w-8 h-8' />;
      case "dollar-sign":
        return <DollarSign className='w-8 h-8' />;
      case "users":
        return <Users className='w-8 h-8' />;
      case "truck":
        return <Truck className='w-8 h-8' />;
      default:
        return <Award className='w-8 h-8' />;
    }
  };

  return (
    // IMPORTANT: h-full so grid cell is filled
    <motion.div
      variants={itemVariants}
      className='h-full'>
      {/* card wrapper must be flex column and h-full */}
      <div className='group relative bg-gradient-to-br from-neutral-cream to-wood-ash rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-wood-pine/20 h-full flex flex-col'>
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className='w-16 h-16 bg-gradient-to-br from-wood-oak to-accent-gold rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300'>
          <div className='text-white'>{getIcon(feature.icon)}</div>
        </motion.div>

        {/* title */}
        <h3 className='text-xl font-bold text-wood-ebony mb-4 group-hover:text-wood-oak transition-colors duration-300'>
          {feature.title}
        </h3>

        {/* description - flex-1 so it takes available space and equalizes cards */}
        <p className='text-gray-600 leading-relaxed flex-1'>
          {feature.description}
        </p>

        {/* optional footer or CTA stays at bottom because of flex layout */}
        <div className='mt-6'>
          {/* example small CTA or stat */}
          <span className='text-sm text-wood-ash'>{feature.note}</span>
        </div>

        {/* Hover Effect (absolute so it doesn't affect layout) */}
        <div className='absolute inset-0 bg-gradient-to-br from-wood-oak/5 to-accent-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
      </div>
    </motion.div>
  );
}
