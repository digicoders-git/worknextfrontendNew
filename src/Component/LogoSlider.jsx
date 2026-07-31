import React from 'react';

const LogoSlider = () => {
  const logos = [
    "/logo/1_20260727_114420_0000.png",
    "/logo/2_20260727_114420_0001.png",
    "/logo/3_20260727_114420_0002.png",
    "/logo/4_20260727_114420_0003.png",
    "/logo/5_20260727_114420_0004.png",
    "/logo/6_20260727_114420_0005.png",
    "/logo/7_20260727_114420_0006.png",
    "/logo/8_20260727_114421_0007.png",
    "/logo/10_20260727_114421_0009.png",
    "/logo/11_20260727_114421_0010.png",
    "/logo/12_20260727_114421_0011.png",
    "/logo/13_20260727_114421_0012.png",
    "/logo/14_20260727_114421_0013.png",
    "/logo/Divine Perfume Logo.jpg.jpeg",
  ];

  return (
    <div className="py-10 bg-white overflow-hidden relative w-full flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto px-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0F4F3C]">
          Our Trusted Partners & Clients
        </h2>
      </div>
      <div className="max-w-7xl w-full mx-auto overflow-hidden relative">
        <div className="flex w-[200%] animate-marquee items-center mt-6">
          {/* We double the logos to create an infinite scroll effect */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4 flex items-center justify-center h-24 sm:h-28"
            >
              <img
                src={logo}
                alt={`Client Logo ${index}`}
                className="h-full w-auto object-contain transition-all duration-300 transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
