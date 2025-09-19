/** @format */

"use client";

import { WhatsAppIcon } from "@/assets/Svg";

export default function FloatingWhatsApp() {
  return (
    <div className='fixed bottom-6 right-6 z-50'>
      <a
        href={`https://wa.me/971555088276?text=Hello! I'm interested in your furniture services.`}
        target='_blank'
        rel='noopener noreferrer'
        className='group flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110'
        title='Contact us on WhatsApp'>
        <WhatsAppIcon className='w-7 h-7' />

        {/* Pulse animation */}
        <div className='absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20'></div>

        {/* Tooltip */}
        <div className='absolute right-full mr-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>
          Chat with us on WhatsApp
          <div className='absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent'></div>
        </div>
      </a>
    </div>
  );
}
