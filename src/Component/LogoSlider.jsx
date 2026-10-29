import React from 'react';

const LogoSlider = () => {
  const logos = [
    "/WNC All Clients/1.png",
    "/WNC All Clients/2.png",
    "/WNC All Clients/3.png",
    "/WNC All Clients/4.png",
    "/WNC All Clients/5.png",
    "/WNC All Clients/6.png",
    "/WNC All Clients/7.png",
    "/WNC All Clients/8.png",
    "/WNC All Clients/9.png",
    "/WNC All Clients/10.png",
    "/WNC All Clients/11.png",
    "/WNC All Clients/12.png",
    "/WNC All Clients/13.png",
    "/WNC All Clients/14.png",
    "/WNC All Clients/15.png",
    "/WNC All Clients/16.png",
    "/WNC All Clients/17.png",
    "/WNC All Clients/18.png",
    "/WNC All Clients/19.png",
    "/WNC All Clients/20.png",
    "/WNC All Clients/21.png",
    "/WNC All Clients/22.png",
    "/WNC All Clients/23.png",
    "/WNC All Clients/24.png",
    "/WNC All Clients/25.png",
    "/WNC All Clients/26.png",
    "/WNC All Clients/27.png",
    "/WNC All Clients/28.png",
    "/WNC All Clients/29.png",
    "/WNC All Clients/30.png",
    "/WNC All Clients/31.png",
    "/WNC All Clients/32.png",
    "/WNC All Clients/33.png",
  ];

  return (
    <div className="py-12 bg-gray-100 overflow-hidden relative w-full flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto px-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-black">
          Our Clients
        </h2>
      </div>
      <div className="w-full overflow-hidden relative">
        <div 
          className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center mt-2"
          style={{ animationDuration: "50s" }}
        >
          {/* We double the logos to create an infinite scroll effect */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-3 flex items-center justify-center h-40 w-52 sm:h-36 sm:w-80 bg-white shadow-sm rounded-md overflow-hidden p-[2px]"
            >
              <img
                src={logo}
                alt={`Client Logo ${(index % logos.length) + 1}`}
                className="w-full h-full object-contain scale-[1.7] transition-all duration-300 transform hover:scale-[1.8]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
