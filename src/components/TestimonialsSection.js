/** @format */

"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@/assets/Svg";
import { testimonialsData, companyInfo } from "@/assets/Dummy";
import TestimonialCard from "@/components/cards/TestimonialCard";

export default function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id='testimonials'
      className='py-20 bg-gradient-to-br from-wood-ash to-neutral-cream'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='text-center mb-16'>
          <motion.div
            variants={itemVariants}
            className='space-y-4'>
            <div className='inline-flex items-center px-4 py-2 bg-wood-oak/10 rounded-full border border-wood-oak/20'>
              <span className='text-wood-oak font-semibold text-sm'>
                Customer Reviews
              </span>
            </div>

            <h2 className='text-4xl md:text-5xl font-bold text-wood-ebony'>
              What Our Customers
              <span className='text-gradient block'>Say About Us</span>
            </h2>

            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              Don't just take our word for it. Here's what our satisfied
              customers have to say about their experience with Royal Friends
              Furniture.
            </p>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}>
              <TestimonialCard
                testimonial={testimonial}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='bg-white rounded-3xl p-8 md:p-12 shadow-lg'>
          <motion.div
            variants={itemVariants}
            className='text-center mb-8'>
            <h3 className='text-2xl md:text-3xl font-bold text-wood-ebony mb-4'>
              Trusted by Customers Across Dubai
            </h3>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Our commitment to quality and customer satisfaction has earned us
              the trust of thousands of customers throughout Dubai and the UAE.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <motion.div
              variants={itemVariants}
              className='text-center'>
              <div className='w-16 h-16 bg-gradient-to-br from-wood-oak to-accent-gold rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-white text-2xl'>🏆</span>
              </div>
              <h4 className='font-semibold text-wood-ebony mb-2'>
                Quality Guarantee
              </h4>
              <p className='text-gray-600 text-sm'>
                Every piece of furniture comes with our quality guarantee and
                warranty.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='text-center'>
              <div className='w-16 h-16 bg-gradient-to-br from-wood-oak to-accent-gold rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-white text-2xl'>🚚</span>
              </div>
              <h4 className='font-semibold text-wood-ebony mb-2'>
                Fast Delivery
              </h4>
              <p className='text-gray-600 text-sm'>
                Complimentary delivery and setup services throughout Dubai.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='text-center'>
              <div className='w-16 h-16 bg-gradient-to-br from-wood-oak to-accent-gold rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-white text-2xl'>💬</span>
              </div>
              <h4 className='font-semibold text-wood-ebony mb-2'>
                24/7 Support
              </h4>
              <p className='text-gray-600 text-sm'>
                Round-the-clock customer support for all your furniture needs.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
