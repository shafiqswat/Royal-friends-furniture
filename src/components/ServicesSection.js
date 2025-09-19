/** @format */

"use client";

import { motion } from "framer-motion";
import {
  HomeIcon,
  BriefcaseIcon,
  SettingsIcon,
  WrenchIcon,
} from "@/assets/Svg";
import { servicesData } from "@/assets/Dummy";
import ServiceCard from "@/components/cards/ServiceCard";

export default function ServicesSection() {
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

  const getIcon = (iconName) => {
    switch (iconName) {
      case "home":
        return <HomeIcon className='w-8 h-8' />;
      case "briefcase":
        return <BriefcaseIcon className='w-8 h-8' />;
      case "settings":
        return <SettingsIcon className='w-8 h-8' />;
      case "wrench":
        return <WrenchIcon className='w-8 h-8' />;
      default:
        return <HomeIcon className='w-8 h-8' />;
    }
  };

  return (
    <section
      id='services'
      className='py-20 bg-gradient-to-br from-neutral-cream to-wood-ash'>
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
                Our Services
              </span>
            </div>

            <h2 className='text-4xl md:text-5xl font-bold text-wood-ebony'>
              Premium Furniture
              <span className='text-gradient block'>Solutions</span>
            </h2>

            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              From luxury home furniture to custom office solutions, we provide
              comprehensive furniture services that transform your space into a
              masterpiece of comfort and style.
            </p>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch'>
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}>
              <ServiceCard
                service={service}
                icon={getIcon(service.icon)}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            variants={itemVariants}
            className='space-y-6'>
            <h3 className='text-3xl font-bold text-wood-ebony'>
              Why Choose Our Furniture Services?
            </h3>
            <p className='text-lg text-gray-600 leading-relaxed'>
              With years of experience in the furniture industry, we understand
              that every space is unique. Our expert team combines traditional
              craftsmanship with modern design principles to deliver furniture
              solutions that exceed expectations.
            </p>

            <div className='space-y-4'>
              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0 w-8 h-8 bg-wood-oak rounded-full flex items-center justify-center'>
                  <span className='text-white text-sm font-bold'>1</span>
                </div>
                <div>
                  <h4 className='font-semibold text-wood-ebony'>
                    Expert Consultation
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    Personalized advice to help you choose the perfect furniture
                    for your space.
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0 w-8 h-8 bg-wood-oak rounded-full flex items-center justify-center'>
                  <span className='text-white text-sm font-bold'>2</span>
                </div>
                <div>
                  <h4 className='font-semibold text-wood-ebony'>
                    Quality Materials
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    We use only the finest materials to ensure durability and
                    longevity.
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0 w-8 h-8 bg-wood-oak rounded-full flex items-center justify-center'>
                  <span className='text-white text-sm font-bold'>3</span>
                </div>
                <div>
                  <h4 className='font-semibold text-wood-ebony'>
                    Professional Installation
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    Expert installation and setup services for a hassle-free
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='relative'>
            <div className='relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl'>
              <img
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                alt='Furniture Showroom'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-wood-ebony/50 to-transparent'></div>

              {/* Floating Stats */}
              <div className='absolute bottom-6 left-6 right-6'>
                <div className='bg-white/95 backdrop-blur-sm rounded-xl p-6'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='text-center'>
                      <div className='text-2xl font-bold text-wood-oak'>5+</div>
                      <div className='text-sm text-gray-600'>
                        Years Experience
                      </div>
                    </div>
                    <div className='text-center'>
                      <div className='text-2xl font-bold text-wood-oak'>
                        24/7
                      </div>
                      <div className='text-sm text-gray-600'>Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
