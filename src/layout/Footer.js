/** @format */

"use client";

import { CrownIcon, PhoneIcon, MailIcon, MapPinIcon } from "@/assets/Svg";
import { companyInfo, socialLinks } from "@/assets/Dummy";
import { formatPhoneNumber } from "@/utils/smoothScroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-wood-ebony text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='flex items-center space-x-2 sm:space-x-3'>
            <div className='flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-wood-oak to-accent-gold rounded-lg sm:rounded-xl flex-shrink-0 shadow-md'>
              <CrownIcon className='w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-white' />
            </div>
            <div className='flex flex-col justify-center min-h-[32px] sm:min-h-[40px] lg:min-h-[48px]'>
              <div className='text-sm sm:text-base lg:text-xl font-bold text-gradient leading-none tracking-tight'>
                Royal Friends
              </div>
              <div className='text-xs sm:text-sm lg:text-lg font-semibold text-gradient leading-none tracking-wide mt-0.5'>
                Furniture
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-accent-gold'>
              Quick Links
            </h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#home'
                  className='text-gray-300 hover:text-accent-gold transition-colors text-sm'>
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='text-gray-300 hover:text-accent-gold transition-colors text-sm'>
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='text-gray-300 hover:text-accent-gold transition-colors text-sm'>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='#testimonials'
                  className='text-gray-300 hover:text-accent-gold transition-colors text-sm'>
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-gray-300 hover:text-accent-gold transition-colors text-sm'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-accent-gold'>
              Our Services
            </h4>
            <ul className='space-y-2'>
              <li className='text-gray-300 text-sm'>Luxury Home Furniture</li>
              <li className='text-gray-300 text-sm'>Office Furniture</li>
              <li className='text-gray-300 text-sm'>Custom Furniture</li>
              <li className='text-gray-300 text-sm'>Furniture Repair</li>
              <li className='text-gray-300 text-sm'>Interior Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-accent-gold'>
              Contact Info
            </h4>
            <div className='space-y-3'>
              <div className='flex items-start space-x-3'>
                <MapPinIcon className='w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0' />
                <div>
                  <p className='text-gray-300 text-sm font-medium'>Address</p>
                  <p className='text-gray-300 text-sm'>{companyInfo.address}</p>
                  <p className='text-gray-300 text-sm'>
                    {companyInfo.fullAddress}
                  </p>
                </div>
              </div>

              <div className='flex space-x-3'>
                <PhoneIcon className='w-5 h-5 text-accent-gold flex-shrink-0' />
                <div>
                  <p className='text-gray-300 text-sm font-medium'>Phone</p>
                  <a
                    href={`https://wa.me/971555088276?text=Hello! I'm interested in your furniture services.`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-300 hover:text-accent-gold transition-colors text-sm block'>
                    {formatPhoneNumber(companyInfo.mobile1)}
                  </a>
                  <a
                    href={`https://wa.me/971555088276?text=Hello! I'm interested in your furniture services.`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-300 hover:text-accent-gold transition-colors text-sm block'>
                    {formatPhoneNumber(companyInfo.mobile2)}
                  </a>
                </div>
              </div>

              <div className='flex space-x-3'>
                <MailIcon className='w-5 h-5 text-accent-gold flex-shrink-0' />
                <div>
                  <p className='text-gray-300 text-sm font-medium'>Email</p>
                  <a
                    href={`https://wa.me/971555088276?text=Hello! I'm interested in your furniture services.`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-300 hover:text-accent-gold transition-colors text-sm'>
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-700 mt-8 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-gray-300 text-sm'>
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
