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
    <div className="py-12 bg-gray-100 overflow-hidden relative w-full flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto px-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-black">
          Our Clients
        </h2>
      </div>
      <div className="w-full overflow-hidden relative">
        <div className="flex w-[200%] animate-marquee items-center mt-2">
          {/* We double the logos to create an infinite scroll effect */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-3 flex items-center justify-center h-40 w-52 sm:h-36 sm:w-80 bg-white shadow-sm rounded-md overflow-hidden p-[2px]"
            >
              <img
                src={logo}
                alt={`Client Logo ${index}`}
                className="w-full h-full object-contain scale-[1.7] transition-all duration-300 transform hover:scale-[1.8]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
