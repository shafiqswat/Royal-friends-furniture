/** @format */

"use client";

import Script from "next/script";

export default function InstagramSection() {
  const elfsightAppId = process.env.NEXT_PUBLIC_ELFSIGHT_APP_ID;
  return (
    <section
      id='gallerySec'
      className='py-16 bg-cream-pastel'>
      <div className='container mx-auto px-4'>
        <h2 className='subHeading text-center mb-8'>
          WholeCraft Community Gallery
        </h2>
        <div>
          <div className={`elfsight-app-${elfsightAppId}`} />
        </div>
      </div>
      <Script
        src='https://apps.elfsight.com/p/platform.js'
        strategy='afterInteractive'
      />
    </section>
  );
}
