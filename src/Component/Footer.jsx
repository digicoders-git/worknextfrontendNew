// components/Footer.jsx
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaPhoneAlt,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    { name: "Digital Marketing", link: "/services/Digital_Marketing" },
    { name: "Graphic Designing", link: "/services/Graphic_designing_services" },
    {
      name: "Web & App Development",
      link: "/services/Website_and_App_Development",
    },
    { name: "IT & AI Solutions", link: "/services/IT_&_AI_Solutions" },
    { name: "Business Consulting", link: "/services/Business_Consultings" },
  ];

  const navigation = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "All Services", link: "/services" },
    { name: "Project", link: "/Project" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
    { name: "Careers", link: "/Careers" },
    { name: "Get Demo", link: "/GetDemo" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#076950] via-[#0d5640] to-[#024a38] text-white pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-10 relative overflow-hidden">
      {/* Glow Animation */}
      <div className="absolute -top-16 sm:-top-24 md:-top-32 -left-16 sm:-left-24 md:-left-32 w-36 sm:w-48 md:w-72 h-36 sm:h-48 md:h-72 bg-[#A8FFE0] rounded-full opacity-10 animate-ping"></div>
      <div className="absolute -bottom-16 sm:-bottom-24 md:-bottom-32 -right-16 sm:-right-24 md:-right-32 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-[#A8FFE0] rounded-full opacity-10 animate-ping"></div>

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-12 md:mb-16 text-center lg:text-left">
          {/* Logo + Text + Social Icons */}
          <div className="flex flex-col items-center lg:items-start">
            <img src="/Footer.png" alt="" className="w-48 sm:w-56 md:w-64 mb-3 sm:mb-4" />

            <p className="text-gray-200 max-w-xs sm:max-w-sm leading-relaxed text-sm sm:text-base">
              Digital Marketing, Graphic Designing, Website & App Development,
              IT & AI Solutions, Business Consulting — all under one roof.
            </p>

            {/* Social Icons */}
            <div className="mt-3 sm:mt-4 max-w-xs mx-auto lg:max-w-none">
              {/* First Row - 4 Icons */}
              <div className="grid grid-cols-4 gap-4 sm:gap-5 md:gap-6 justify-items-center mb-3">
                {[
                  {
                    icon: <FaLinkedin />,
                    link: "https://www.linkedin.com/company/worknestconnect",
                  },
                  {
                    icon: <FaFacebook />,
                    link: "https://www.facebook.com/share/1FYPKKECea/",
                  },
                  {
                    icon: <FaInstagram />,
                    link: "https://www.instagram.com/worknestconnect",
                  },
                  {
                    icon: <FaTwitter />,
                    link: "https://www.x.com/Worknestconnect",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white p-3 sm:p-3.5 md:p-4 rounded-full hover:bg-green-700 hover:scale-110 sm:hover:scale-125 transition-all duration-300 shadow-lg text-base sm:text-lg"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
              
              {/* Second Row - 3 Icons */}
              <div className="flex justify-center gap-4 sm:gap-5 md:gap-6">
                {[
                  {
                    icon: <FaYoutube />,
                    link: "https://www.youtube.com/@worknestconnect",
                  },
                  {
                    icon: <FaTiktok />,
                    link: "https://www.tiktok.com/@worknestconnect?lang=en",
                  },
                  {
                    icon: <FaWhatsapp />,
                    link: "https://wa.me/97431175515",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white p-3 sm:p-3.5 md:p-4 rounded-full hover:bg-green-700 hover:scale-110 sm:hover:scale-125 transition-all duration-300 shadow-lg text-base sm:text-lg"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 justify-center text-center lg:text-left">
            {/* Services */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-green-300 mb-3 sm:mb-4">
                Services
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-200">
                {services.map((service, idx) => (
                  <li key={idx}>
                    <Link
                      to={service.link}
                      className="hover:text-green-400 transition-colors duration-300 font-medium text-sm sm:text-base"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-green-300 mb-3 sm:mb-4">
                Quick Links
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-200">
                {navigation.map((nav, idx) => (
                  <li key={idx}>
                    <Link
                      to={nav.link}
                      className="hover:text-green-400 transition-colors duration-300 font-medium text-sm sm:text-base"
                    >
                      {nav.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-green-300 mb-3 sm:mb-4">
                Contact Info
              </h4>
              <ul className="space-y-3 sm:space-y-4 text-gray-200">
                <li className="flex flex-col sm:flex-row justify-center lg:justify-start items-center sm:items-center gap-1 sm:gap-0">
                  <FaEnvelope className="sm:mr-2 text-green-400 text-base sm:text-lg" />
                  <a
                    href="mailto:info@worknestconnect.com"
                    className="hover:text-green-400 transition text-xs sm:text-sm md:text-base break-all"
                  >
                    info@worknestconnect.com
                  </a>
                </li>
                <li className="flex flex-col sm:flex-row justify-center lg:justify-start items-center sm:items-center gap-1 sm:gap-0">
                  <FaPhoneAlt className="sm:mr-2 text-green-400 text-base sm:text-lg" />
                  <a
                    href="tel:+97431175515"
                    className="hover:text-green-400 transition text-xs sm:text-sm md:text-base"
                  >
                    +974 3117 5515
                  </a>
                </li>

                <li className="flex flex-col sm:flex-row justify-center lg:justify-start items-center sm:items-start gap-1 sm:gap-0">
                  <FaMapMarkerAlt className="sm:mr-2 text-green-400 text-xl sm:text-2xl md:text-3xl flex-shrink-0" />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=1st+floor,+Apartment+4+Building+No.+33,+Street+180,+Zone+55,+Al+Rayyan+-+Doha,+Qatar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition text-xs sm:text-sm md:text-base leading-relaxed text-center sm:text-left"
                  >
                    1st floor, Apartment 4 Building No. 33, Street 180, Zone 55,
                    Al Rayyan - Doha, Qatar
                  </a>
                </li>

                <li className="flex flex-col sm:flex-row justify-center lg:justify-start items-center sm:items-center gap-1 sm:gap-0">
                  <FaGlobe className="sm:mr-2 text-green-400 text-base sm:text-lg" />
                  <a
                    href="https://www.worknestconnect.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition text-xs sm:text-sm md:text-base break-all"
                  >
                    www.worknestconnect.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-green-900/40 pt-4 sm:pt-6 text-center text-gray-400 text-xs sm:text-sm font-semibold px-2">
          {new Date().getFullYear()} © Copyright To WorkNest Connect. Designed
          and Developed by #TeamWorknestConnect
        </div>
      </div>
    </footer>
  );
};

export default Footer;
