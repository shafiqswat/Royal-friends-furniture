/** @format */
"use client";

import { motion } from "framer-motion";
import { whyChooseUsData, statisticsData } from "@/assets/Dummy";
import WhyChooseCard from "./cards/WhyChooseCard";

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id='about'
      className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* ... header omitted for brevity ... */}

        {/* Features Grid: add items-stretch so each grid cell stretches */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 items-stretch'>
          {whyChooseUsData.map((feature, index) => (
            // WhyChooseCard handles h-full + layout
            <WhyChooseCard
              key={feature.id}
              feature={feature}
              itemVariants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
