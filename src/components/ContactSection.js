/** @format */

"use client";

import { motion } from "framer-motion";
import { contactFormData, mapConfig } from "@/assets/Dummy";
import ContactForm from "@/components/ContactForm";
import ContactInfoCard from "@/components/ContactInfoCard";
import LeafletMapComponent from "@/components/LeafletMapComponent";

export default function ContactSection() {
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

  const handleSubmit = async (formData) => {
    const targetNumber = "971555088276";
    const lines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email || "(not provided)"}`,
      `Phone: ${formData.phone || "(not provided)"}`,
      `Product interest: ${formData.product || "(not selected)"}`,
      `Message: ${formData.message}`,
    ];
    const text = encodeURIComponent(lines.join("\n"));
    const isMobile =
      typeof window !== "undefined" &&
      /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://api.whatsapp.com/send?phone=${targetNumber}&text=${text}`
      : `https://web.whatsapp.com/send?phone=${targetNumber}&text=${text}`;
    if (typeof window !== "undefined") window.location.href = url;
  };

  return (
    <section
      id='contact'
      className='py-20 bg-white'>
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
                Contact Us
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-wood-ebony'>
              Get In Touch
              <span className='text-gradient block'>With Us Today</span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              {contactFormData.description}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='space-y-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <motion.div variants={itemVariants}>
              <ContactForm onSubmit={handleSubmit} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ContactInfoCard />
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <div className='bg-white rounded-2xl shadow-lg border border-gray-100'>
              <LeafletMapComponent config={mapConfig} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
