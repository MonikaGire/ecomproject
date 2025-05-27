'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import video1 from '../../public/videos/video2.mp4';
import videoBg from '../../public/videos/slider-bg.mp4';
import { useEffect, useState } from 'react';

// Dynamically import OwlCarousel to avoid SSR issues
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const options = {
  loop: true,
  items: 1,
  autoplay: false,
  autoplayTimeout: 8000,
  autoplaySpeed: 3000,
};

export default function SliderOne() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Prevent hydration mismatch
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <OwlCarousel className="carousel-slider-four" {...options}>
      <div className="relative pt-12 md:pt-20 xl:pt-[100px] pb-12 sm:pb-20 xl:pb-24 px-[15px] sm:px-12 bg-[#F5F5F5] dark:bg-title">
        <div className="relative w-full overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src={videoBg.src}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="container" style={{ padding: '300px' }}>
            <div className="max-w-[1720px] mx-auto">
              <div className="flex items-center justify-between gap-8 flex-col sm:flex-row">
                <div className="relative z-10 sm:max-w-[632px] w-full slider-content">
                  <h2 className="mt-[10px] font-normal text-3xl sm:text-4xl xl:text-5xl !leading-[1.3] dark:text-black">
                    INFINE8 LIGHTING STUDIO.
                  </h2>
                  <p className="dark:text-black mt-3 md:mt-4 sm:max-w-[450px] xl:max-w-full">
                    Transform your space with stunning lighting, where style and brilliance shine.
                  </p>
                  <div className="button mt-4 md:mt-6">
                    <Link href="/index-v2" className="btn border-black">
                      <span>Explore Now</span>
                    </Link>
                  </div>
                </div>
                <div className="sm:max-w-[750px] w-full">
                  {/* Optional video (commented out) */}
                  {/* <video className="slider-video w-full h-[400px] sm:h-[500px] md:h-[550px] xl:h-[600px] object-cover rounded-lg shadow-lg" autoPlay loop muted playsInline>
                    <source src={video1.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
}
