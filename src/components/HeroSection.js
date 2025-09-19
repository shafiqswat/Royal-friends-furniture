/** @format */

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, CheckIcon } from "@/assets/Svg";
import { heroData } from "@/assets/Dummy";

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2016&q=80",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
      id='home'
      className='relative min-h-screen flex items-center overflow-hidden'>
      {/* Background Images */}
      <div className='absolute inset-0 z-0'>
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}>
            <div
              className='w-full h-full bg-cover bg-center bg-no-repeat'
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${image})`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20'>
          {/* Left Content */}
          <div className='space-y-8'>
            <motion.div
              variants={itemVariants}
              className='space-y-4'>
              <div className='inline-flex items-center px-4 py-2 bg-accent-gold/20 backdrop-blur-sm rounded-full border border-accent-gold/30'>
                <span className='text-accent-gold font-semibold text-sm'>
                  {heroData.subtitle}
                </span>
              </div>

              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'>
                {heroData.title}
              </h1>

              <p className='text-xl text-gray-200 leading-relaxed max-w-lg'>
                {heroData.description}
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div
              variants={itemVariants}
              className='space-y-3'>
              {heroData.features.map((feature, index) => (
                <div
                  key={index}
                  className='flex items-center space-x-3'>
                  <div className='flex-shrink-0 w-6 h-6 bg-accent-gold rounded-full flex items-center justify-center'>
                    <CheckIcon className='w-4 h-4 text-wood-ebony' />
                  </div>
                  <span className='text-gray-200 font-medium'>{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className='flex flex-col sm:flex-row gap-4'>
              <a
                href={`https://wa.me/971555088276?text=Hello! I'm interested in your furniture services.`}
                target='_blank'
                rel='noopener noreferrer'
                className='btn-primary flex items-center justify-center space-x-2 group'>
                <span>{heroData.ctaText}</span>
                <ArrowRightIcon className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </a>
            </motion.div>
          </div>

          {/* Right Content - Image Gallery */}
          <motion.div
            variants={itemVariants}
            className='relative'>
            <div className='relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl'>
              <div className='absolute inset-0 bg-gradient-to-br from-wood-oak/20 to-accent-gold/20 rounded-2xl'></div>

              {/* Main Image */}
              <div className='relative w-full h-full'>
                <img
                  src={heroImages[currentImage]}
                  alt='Furniture Showcase'
                  className='w-full h-full object-cover transition-transform duration-700 hover:scale-105'
                />
              </div>

              {/* Image Indicators */}
              <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImage
                        ? "bg-accent-gold scale-125"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
        <div className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center'>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className='w-1 h-3 bg-white/70 rounded-full mt-2'
          />
        </div>
      </motion.div>
    </section>
  );
}
