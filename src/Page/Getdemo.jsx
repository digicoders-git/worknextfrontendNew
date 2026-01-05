import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Check, Megaphone, Palette, Laptop, Bot, TrendingUp, Globe, Mail, Phone, Instagram, Facebook, Twitter, Youtube, CalendarCheck, BarChart3, X, Database } from "lucide-react";
import Footer from "../Component/Footer";
import axios from "axios";
import ContactSection from "../Component/GetDemoComponent";
import { Link } from "react-router-dom";
const DemoPage = () => {
  const api_url = import.meta.env.VITE_API_URL;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = await axios.post(`${api_url}/api/demo`, formData);
      console.log(data);
      toast.success("Form data saved successfully");
      setIsModalOpen(false);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to submit form. Please try again." +error);
    } finally {
      setIsLoading(false);
    }
  };
  const bubbles = [
    { size: 8, x: 10, y: 20, delay: 0 },
    { size: 12, x: 80, y: 50, delay: 1 },
    { size: 6, x: 40, y: 80, delay: 0.5 },
    { size: 10, x: 70, y: 10, delay: 1.5 },
  ];


  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative py-25 mt-20 overflow-hidden bg-linear-to-b from-[#088667] via-[#177458] to-[#024a38]
      
          text-white"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        {/* Background gradient + bubbles */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-br from-green-400/10 to-emerald-600/10"></div>

          {/* Floating animated bubbles */}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* LEFT CONTENT */}
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6 animate-bounce-slow">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                Complete Business Solutions
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Transform Your{" "}
                <span className="text-emerald-400">Business</span> With Our
                Digital Solutions
              </h1>
              <p className="text-xl lg:text-xl text-white mb-8 leading-relaxed">
                From digital marketing to AI solutions, we provide everything
                your business needs to succeed in the digital age. Get a
                personalized demo to see how we can help.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-linear-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl hover:shadow-emerald-200"
                >
                  <CalendarCheck className="text-xl" />
                  <span>Request Free Demo</span>
                </button>
                <Link
                  to="/project"
                  className="border-2 border-emerald-500 text-emerald-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-50/20 transition-all duration-300 "
                  id="#Service"
                >
                  View Our Work
                </Link>
              </div>

              {/* STATS */}
              <div className="flex items-center mt-12 space-x-8 text-emerald-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">40+</div>
                  <div className="text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">99%</div>
                  <div className="text-sm">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm">Team Experts</div>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="lg:w-1/2 relative">
              <motion.div
                className="bg-linear-to-br from-emerald-500 to-emerald-700 rounded-3xl p-8 text-white shadow-2xl relative "
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-6">
                  <BarChart3 className="text-5xl mx-auto mb-4 text-emerald-200" size={48} />
                  <h3 className="text-2xl font-bold mb-2">
                    See Our Solutions in Action
                  </h3>
                  <p className="text-emerald-100">
                    Book a personalized demo today
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    "Customized solutions",
                    "Expert consultation",
                    "No commitment required",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <Check className="text-emerald-200" size={20} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating icons */}
              <motion.div
                className="absolute -top-6 -left-6 w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              >
                <Megaphone className="text-2xl text-emerald-600" size={32} />
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <Laptop className="text-xl text-emerald-600" size={28} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
      `}</style>
<ContactSection/>


      {/* CTA Section */}
      <section
        className="py-16 relative bg-linear-to-b from-[#088667] via-[#177458] to-[#024a38]
          text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
            Join hundreds of successful businesses that have grown with our
            solutions
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-emerald-600 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 flex items-center space-x-3 shadow-lg mx-auto"
          >
            <CalendarCheck className="text-xl" />
            <span>Get Your Free Demo Now</span>
          </button>
        </div>
      </section>

      {/* Contact Section */}


      {/* Footer */}
      <Footer />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-black/80 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] mt-sm[200px] mt-[100px] overflow-y-auto animate-fade-in">
            <div className="bg-linear-to-r from-emerald-500 to-emerald-700 text-white p-6 rounded-t-2xl flex justify-between items-center">
              <h2 className="text-2xl font-bold">Request a Demo</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:text-emerald-200 transition duration-300 p-1 rounded-full hover:bg-white/10"
              >
                <X className="text-xl" />
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-300"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Message
                    </label>
                    <input
                      type="text"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-300"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-linear-to-r from-emerald-500 to-emerald-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 relative overflow-hidden"
                >
                  {isLoading ? (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <div className="absolute top-0 left-0 w-6 h-6 border-3 border-transparent border-t-emerald-200 rounded-full animate-spin" style={{animationDuration: '0.8s'}}></div>
                        </div>
                        <span className="animate-pulse">Sending your request...</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default DemoPage;
