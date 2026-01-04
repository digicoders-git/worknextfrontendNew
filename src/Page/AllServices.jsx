import React from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Settings,
  Palette,
  Code,
  Megaphone,
  ArrowRight,
  Star,
  CheckCircle,
  Database,
} from "lucide-react";
import Footer from "../Component/Footer";
import TransformBussnation from "../Component/TransformBussnation";

const AllServices = () => {
  const services = [
    {
      id: 1,
      icon: <Megaphone className="text-white" size={32} />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions to boost your online presence and drive growth through strategic campaigns.",
      features: ["SEO Optimization", "Social Media Marketing", "PPC Campaigns", "Content Marketing", "Email Marketing", "Analytics & Reporting"],
      path: "/services/Digital_Marketing",
      gradient: "from-green-500 to-emerald-500",
      color: "green"
    },
    {
      id: 2,
      icon: <Palette className="text-white" size={32} />,
      title: "Graphic Design Services",
      description: "Creative design solutions that capture your brand essence and communicate your message effectively across all platforms.",
      features: ["Logo Design", "Brand Identity", "Print Design", "Digital Graphics", "UI/UX Design", "Marketing Materials"],
      path: "/services/Graphic_designing_services",
      gradient: "from-green-600 to-emerald-600",
      color: "green"
    },
    {
      id: 3,
      icon: <Code className="text-white" size={32} />,
      title: "Website & App Development",
      description: "Custom web and mobile applications built with modern technologies to deliver exceptional user experiences.",
      features: ["Responsive Websites", "Mobile Apps", "E-commerce Solutions", "Custom Development", "API Integration", "Maintenance & Support"],
      path: "/services/Website_and_App_Development",
      gradient: "from-emerald-500 to-green-600",
      color: "green"
    },
    {
      id: 4,
      icon: <Settings className="text-white" size={32} />,
      title: "IT & AI Solutions",
      description: "Advanced technology solutions including AI integration, automation, and intelligent systems for business optimization.",
      features: ["AI Integration", "Business Automation", "Cloud Solutions", "Data Analytics", "System Integration", "Technical Support"],
      path: "/services/IT_&_AI_Solutions",
      gradient: "from-green-700 to-emerald-700",
      color: "green"
    },
    {
      id: 5,
      icon: <TrendingUp className="text-white" size={32} />,
      title: "Business Consulting",
      description: "Strategic business consulting services to help you make informed decisions and achieve sustainable growth.",
      features: ["Business Strategy", "Market Analysis", "Process Optimization", "Growth Planning", "Risk Management", "Performance Metrics"],
      path: "/services/Business_Consultings",
      gradient: "from-emerald-600 to-green-700",
      color: "green"
    }
  ];

  // Our Teams Section from Careers page
  const teams = [
    {
      icon: <TrendingUp className="text-white" size={32} />,
      title: "Marketing & Sales Team",
      description: "Our growth engine—responsible for business development, client acquisition, strategic partnerships, and revenue expansion. This team drives market positioning, builds relationships, and ensures our solutions reach the right audience.",
      roles: "Sales Executives, Business Development Officers, Account Managers, Client Relationship Managers.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: <Settings className="text-white" size={32} />,
      title: "Operations Team",
      description: "The backbone of our organization—ensuring smooth project execution, workflow management, quality assurance, vendor coordination, and end-to-end service delivery. They transform strategies into actionable outcomes.",
      roles: "Operations Executives, Project Coordinators, Admin Support, PRO Executives.",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: <Palette className="text-white" size={32} />,
      title: "Creative Design Team",
      description: "Where imagination becomes impact. This team crafts visual experiences that define brands—logos, graphics, videos, UI layouts, and complete creative systems that capture attention and tell powerful stories.",
      roles: "Graphic Designers, Video Editors, UI/UX Designers, Motion Designers, Brand Designers.",
      gradient: "from-pink-400 to-pink-600"
    },
    {
      icon: <Code className="text-white" size={32} />,
      title: "IT & AI Solutions Team",
      description: "Our innovation powerhouse—building intelligent systems, custom software, automation tools, websites, apps, and AI-driven solutions for clients across industries. This team shapes the future of digital transformation.",
      roles: "Full-Stack Developers, AI Engineers, Software Developers, QA Testers, Cloud Engineers, Data Analysts.",
      gradient: "from-green-400 to-green-600"
    },
    {
      icon: <Megaphone className="text-white" size={32} />,
      title: "Digital Marketing Team",
      description: "The team that drives performance, visibility, and conversions. From SEO and paid ads to social media, content, analytics, and automation—this team ensures brands grow with measurable success.",
      roles: "Digital Marketing Specialists, Social Media Managers, PPC Experts, Content Creators, SEO Analysts.",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      icon: <Database className="text-white" size={32} />,
      title: "Enterprise Resource Planning (ERP) System",
      description: "Manage your entire business from one powerful system. Our ERP solution integrates core operations—finance, HR, inventory, sales, and workflows—into a single, intelligent platform. Automate processes, gain real-time insights, and keep your organization fully aligned and efficient.",
      tagline: "One system. Total control. Smarter operations.",

      gradient: "from-indigo-500 to-blue-600",
      isERP: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30 mt-[80px]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#088667] via-[#177458] to-[#024a38] text-white py-37">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        
        {/* Floating Bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-72 h-72 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-90 h-90 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          <span className="absolute top-20 left-10 w-4 h-4 bg-white/40 rounded-full animate-float"></span>
          <span className="absolute top-40 right-12 w-3 h-3 bg-green-300/60 rounded-full animate-float"></span>
          <span className="absolute bottom-32 left-1/3 w-3 h-3 bg-yellow-300/50 rounded-full animate-float"></span>
          <span className="absolute bottom-48 right-1/4 w-2 h-2 bg-white/40 rounded-full animate-float"></span>
        </div>

        {/* Glass Glow Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,209,152,0.15),transparent_70%)]"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-8 group hover:bg-white/20 transition-all duration-500 shadow-lg">
            <div className="flex items-center">
              <div className="relative">
                <Star className="text-green-400 mr-3 text-lg animate-pulse drop-shadow-md" size={20} />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-green-300 font-semibold drop-shadow-sm">
                Complete Business Solutions
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight drop-shadow-lg">
            All Our <br />
            <span className="bg-gradient-to-r from-green-300 via-white to-green-400 bg-clip-text text-transparent">
              Services & Solutions
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white drop-shadow-sm">
            Comprehensive business solutions designed to transform your operations, 
            enhance your digital presence, and drive sustainable growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-green-400 to-green-400 text-[#3a2407] font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-400/40 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative">Get Started Today</span>
              <ArrowRight className="ml-3 relative group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>

            <a
              href="#services"
              className="group relative inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-green-300 font-semibold px-8 py-4 rounded-2xl border-2 border-green-400 backdrop-blur-sm transition-all duration-300 overflow-hidden"
            >
              <span className="relative">Explore Services</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03),transparent)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-white rounded-2xl shadow-md px-6 py-3 mb-5 border border-gray-100">
              <span className="text-green-700 font-semibold">
                🚀 Our Services
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-5">
              <span className="bg-gradient-to-r from-green-800 to-green-400 bg-clip-text text-transparent">
                Complete Business Solutions
              </span>
            </h2>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From digital marketing to AI solutions, we provide end-to-end services 
              to help your business thrive in the digital age.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-700 hover:-translate-y-2 border border-gray-100"
              >
                {/* Service Header */}
                <div className={`relative p-8 bg-gradient-to-br ${service.gradient} text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {service.icon}
                    </div>
                    <Link to={service.path} className="cursor-pointer">
                      <ArrowRight className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 hover:scale-110" size={24} />
                    </Link>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/90 leading-relaxed">{service.description}</p>
                </div>

                {/* Service Content */}
                <div className="p-8">
                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-4">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-600">
                          <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={service.path}
                    className={`w-full inline-flex items-center justify-center bg-gradient-to-r ${service.gradient} text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl group/btn`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Teams Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Teams at{" "}
              <span className="text-green-600">Worknest Connect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Where Talent Meets Purpose
            </p>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              At Worknest Connect, our strength comes from five specialized
              teams working together to deliver end-to-end solutions for our
              clients. Each team plays a critical role in our growth, and we
              continuously hire skilled, passionate professionals to join them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((team, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-green-400">
                <div className={`w-16 h-16 bg-gradient-to-br ${team.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {team.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                  {team.title}
                </h3>
                {team.tagline && (
                  <p className="text-lg font-semibold  mb-3">
                    {team.tagline}
                  </p>
                )}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {team.description}
                </p>
                
                {team.features && (
                  <div className="mb-4">
                    <h4 className="text-md font-semibold text-gray-800 mb-2">What You'll Get:</h4>
                    <div className="space-y-1">
                      {team.features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-gray-600">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {team.results && (
                  <div className="mb-4">
                    <h4 className="text-md font-semibold text-gray-800 mb-2">Expected Results:</h4>
                    <div className="space-y-1">
                      {team.results.map((result, idx) => (
                        <div key={idx} className="text-sm text-gray-600">
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {team.roles && (
                  <div className="text-sm text-gray-500 italic">
                    Ideal roles: {team.roles}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <TransformBussnation />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AllServices;