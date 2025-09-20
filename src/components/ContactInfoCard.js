/** @format */

"use client";

import { PhoneIcon, MailIcon, MapPinIcon } from "@/assets/Svg";
import { companyInfo } from "@/assets/Dummy";
import { formatPhoneNumber } from "@/utils/smoothScroll";

export default function ContactInfoCard() {
  return (
    <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
      <h3 className='text-2xl font-bold text-wood-ebony mb-6'>
        Contact Information
      </h3>

      <div className='space-y-6'>
        <div className='flex items-start space-x-4'>
          <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-wood-oak to-accent-gold rounded-lg flex items-center justify-center'>
            <MapPinIcon className='w-6 h-6 text-white' />
          </div>
          <div>
            <h4 className='font-semibold text-wood-ebony mb-1'>Address</h4>
            <p className='text-gray-600 text-sm'>{companyInfo.address}</p>
            <p className='text-gray-600 text-sm'>{companyInfo.fullAddress}</p>
          </div>
        </div>

        <div className='flex items-start space-x-4'>
          <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-wood-oak to-accent-gold rounded-lg flex items-center justify-center'>
            <PhoneIcon className='w-6 h-6 text-white' />
          </div>
          <div>
            <h4 className='font-semibold text-wood-ebony mb-1'>
              Phone Numbers
            </h4>
            <a
              href={`https://wa.me/971555088276?text=${encodeURIComponent(
                "Hello! I'm interested in your furniture services."
              )}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-wood-oak transition-colors text-sm block'>
              {formatPhoneNumber(companyInfo.mobile1)}
            </a>
            <a
              href={`https://wa.me/971555088276?text=${encodeURIComponent(
                "Hello! I'm interested in your furniture services."
              )}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-wood-oak transition-colors text-sm block'>
              {formatPhoneNumber(companyInfo.mobile2)}
            </a>
          </div>
        </div>

        <div className='flex items-start space-x-4'>
          <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-wood-oak to-accent-gold rounded-lg flex items-center justify-center'>
            <MailIcon className='w-6 h-6 text-white' />
          </div>
          <div>
            <h4 className='font-semibold text-wood-ebony mb-1'>Email</h4>
            <a
              href={`https://wa.me/971555088276?text=${encodeURIComponent(
                "Hello! I'm interested in your furniture services."
              )}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-wood-oak transition-colors text-sm'>
              {companyInfo.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
