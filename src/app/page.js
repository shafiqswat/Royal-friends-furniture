/** @format */

import HeroSection from "@/components/HeroSection";
import InstagramSection from "@/components/InstagramSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className='min-h-screen'>
      <HeroSection />
      {/* <InstagramSection /> */}
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
