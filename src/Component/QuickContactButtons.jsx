import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function QuickContactButtons() {
  const phoneNumber = "+97431171127";
  const whatsappUrl = "https://wa.me/97431171127";

  return (
    <div
      className="fixed bottom-6 left-5 z-[9999] flex flex-col items-start gap-3 select-none"
      aria-label="Quick contact buttons"
    >
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:shadow-2xl hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white/90"></span>
        </span>
        <FaWhatsapp className="text-2xl" />
        
        {/* Hover Label */}
        <span className="pointer-events-none absolute left-14 opacity-0 group-hover:opacity-100 group-hover:left-16 transition-all duration-200 bg-gray-900/90 text-white text-xs font-semibold px-2.5 py-1.5 rounded-md shadow-md whitespace-nowrap hidden sm:block">
          WhatsApp Us
        </span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call us directly"
        className="group relative flex items-center bg-[#2563eb] text-white p-3.5 rounded-full shadow-lg hover:shadow-2xl hover:bg-[#1d4ed8] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <FaPhoneAlt className="text-xl" />

        {/* Hover Label */}
        <span className="pointer-events-none absolute left-14 opacity-0 group-hover:opacity-100 group-hover:left-16 transition-all duration-200 bg-gray-900/90 text-white text-xs font-semibold px-2.5 py-1.5 rounded-md shadow-md whitespace-nowrap hidden sm:block">
          Call Now
        </span>
      </a>
    </div>
  );
}
