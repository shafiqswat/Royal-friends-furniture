/** @format */

"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@/assets/Svg";
import InputField from "@/components/form/InputField";
import { contactFormData } from "@/assets/Dummy";

export default function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await onSubmit(formData);
      setFormData({ name: "", email: "", phone: "", product: "", message: "" });
      setSubmitStatus({ type: "success", message: "Opening WhatsApp..." });
    } catch (err) {
      setSubmitStatus({ type: "error", message: "Could not open WhatsApp." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='bg-gradient-to-br from-neutral-cream to-wood-ash rounded-2xl p-8 shadow-lg'>
      <h3 className='text-2xl font-bold text-wood-ebony mb-6'>
        {contactFormData.title}
      </h3>

      <form
        onSubmit={handleSubmit}
        className='space-y-6'>
        <InputField
          label='Full Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
          placeholder='Enter your full name'
        />

        <InputField
          label='Email Address'
          name='email'
          type='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email address'
        />

        <InputField
          label='Phone Number'
          name='phone'
          type='tel'
          value={formData.phone}
          onChange={handleChange}
          placeholder='Enter your phone number'
        />

        <InputField
          label='Product Interest'
          name='product'
          type='select'
          value={formData.product}
          onChange={handleChange}
          options={[
            "Luxury Home Furniture",
            "Office Furniture",
            "Custom Furniture",
            "Furniture Repair",
          ]}
          placeholder='Select a product'
        />

        <InputField
          label='Message'
          name='message'
          type='textarea'
          value={formData.message}
          onChange={handleChange}
          required
          placeholder='Tell us about your furniture needs...'
        />

        <button
          type='submit'
          disabled={isSubmitting}
          className='w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed'>
          {isSubmitting ? (
            <>
              <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <ArrowRightIcon className='w-5 h-5' />
            </>
          )}
        </button>

        {submitStatus && (
          <div
            className={`p-4 rounded-lg ${
              submitStatus.type === "success"
                ? "bg-green-100 text-green-800 border border-green-200"
                : "bg-red-100 text-red-800 border border-red-200"
            }`}>
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
}
