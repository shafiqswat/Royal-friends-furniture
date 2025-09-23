/** @format */

"use client";

import { WhatsAppIcon, InstagramIcon } from "@/assets/Svg";

export default function FloatingWhatsApp() {
  return (
    <div className='fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3'>
      {/* Instagram Button */}
      <a
        href={`https://www.instagram.com/royalfriendsfurnitur/`}
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-purple-500 via-pink-500 to-amber-400 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-transform duration-200'
        title='Follow us on Instagram'>
        <InstagramIcon className='w-6 h-6' />
      </a>

      <a
        href={`https://wa.me/971555088276?text=Hello! I'm interested in your furniture services.`}
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-transform duration-200'
        title='Contact us on WhatsApp'>
        <WhatsAppIcon className='w-7 h-7' />
      </a>
    </div>
  );
}
