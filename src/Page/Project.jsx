import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Rocket,
  Eye,
  Code,
  Smartphone,
  Palette,
  TrendingUp,
  Globe,
  ArrowRight,
  Play,
  Star,
  Award,
  Users,
  Calendar,
  Handshake,
  CheckCircle,
  Bot,
  Database,
  Cloud,
  ShoppingCart,
  Search,
  BarChart3,
  Lightbulb,
  Trophy,
  Shield,
  Settings,
} from "lucide-react";
import Footer from "../Component/Footer";
import TransformBussnation from "../Component/TransformBussnation";

const Project = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const categories = [
    { id: "all", name: "All Projects", icon: Globe, count: 200 },
    { id: "web", name: "Web Apps", icon: Code, count: 68 },
    { id: "mobile", name: "Mobile Apps", icon: Smartphone, count: 42 },
    { id: "ecommerce", name: "E-Commerce", icon: ShoppingCart, count: 35 },
    { id: "design", name: "UI/UX Design", icon: Palette, count: 28 },
    { id: "marketing", name: "Marketing", icon: TrendingUp, count: 24 },
    { id: "ai", name: "AI/ML", icon: Bot, count: 19 },
  ];

  const projects = [
    {
      id: 0,
      title: "ATC Website",
      category: "web",
      description:
        "The ATC Website was designed and developed to establish a strong digital presence for a technical and engineering-focused organization. The goal was to create a professional, structured, and easy-to-navigate platform that clearly communicates services, capabilities, and company credibility.",
      image: "/Project/ATC website main photo.png",
      images: ["/Project/ATC website main photo.png"],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      client: "ATC Company",
      duration: "4 months",
      year: "2025",
      status: "Completed",
      projectUrl: "https://www.alsuwaiditechnical.com/",
      featured: true,
      results: "Strong digital presence, professional platform",
      likes: 200,
      views: 1200,
      highlights: [
        "Professional digital presence",
        "Technical and engineering focus",
        "Easy-to-navigate platform",
        "Clear service communication",
      ],
      fullDescription:
        "The ATC Website was designed and developed to establish a strong digital presence for a technical and engineering-focused organization. The goal was to create a professional, structured, and easy-to-navigate platform that clearly communicates services, capabilities, and company credibility.",
    },
    {
      id: 9,
      title: "ATC Company Profile ",
      category: "web",
      description:
        "A professionally structured company profile designed to clearly present ATC's services, strengths, and brand identity. Clean corporate layout with consistent branding.",
      image: "/Company profile main photo.png",
      images: [
        "/Company profile main photo.png",
        "/Company profile more photo.png",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "Responsive Design",
      ],
      client: "ATC Company",
      duration: "3 months",
      year: "2025",
      status: "Completed",
      projectUrl: "https://simplebooklet.com/alsuwaidi",
      featured: true,
      results: "Professional brand presentation, client-ready format",
      likes: 156,
      views: 892,
      highlights: [
        "Clean, corporate layout",
        "Clear service overview",

        "Consistent branding",
        "Print-ready format",
      ],
      fullDescription:
        "A professionally structured company profile designed to clearly present ATC's services, strengths, and brand identity. Perfect for client meetings and proposals.",
    },
    {
      id: 10,
      title: "ATC Corporate Calendar Design",
      category: "design",
      description:
        "Complete corporate calendar set including wall and table calendars, created to ensure year-round brand visibility with clean and professional design.",
      image: "/Main.jpg",
      images: ["/Main.jpg"],
      technologies: [
        "Adobe InDesign",
        "Photoshop",
        "Print Design",
        "Brand Guidelines",
      ],
      client: "ATC Company",
      duration: "2 months",
      year: "2025",
      status: "Completed",
      projectUrl: "https://simplebooklet.com/alsuwaidi",
      pdfUrl: "/ATC Wall Calendar Design Final.pdf",
      featured: false,
      results: "Year-round brand visibility, professional finish",
      likes: 89,
      views: 567,
      highlights: [
        "Large, easy-to-read layout",
        "Strong brand placement",
        "Print-ready finish",
        "Desk-friendly design",
      ],
      fullDescription:
        "Complete corporate calendar set including wall and table calendars, created to ensure year-round brand visibility with clean and professional design.",
    },
    {
      id: 11,
      title: "ATC Company Brochure",
      category: "design",
      description:
        "A modern and well-structured company brochure designed to showcase ATC's services and capabilities with strong corporate appeal.",
      image: "/brochure main photo.png",
      images: ["/brochure main photo.png", "/brochure more photo.png"],
      technologies: [
        "Adobe InDesign",
        "Illustrator",
        "Print Design",
        "Digital Format",
      ],
      client: "ATC Company",
      duration: "1.5 months",
      year: "2025",
      status: "Completed",
      projectUrl: "https://simplebooklet.com/alsuwaidi",
      featured: false,
      results: "Professional service presentation, print & digital ready",
      likes: 67,
      views: 423,
      highlights: [
        "Professional layout",
        "Clear service presentation",
        "Print and digital ready",
        "Corporate appeal",
      ],
      fullDescription:
        "A modern and well-structured company brochure designed to showcase ATC's services and capabilities with strong corporate appeal.",
    },
    {
      id: 12,
      title: "MyoPain Medical Center - Social Media Ads",
      category: "marketing",
      description:
        "Targeted social media ad campaigns designed to generate patient enquiries and appointments within a short timeframe with strong engagement and ROI.",
      image: "/MyoPain main photo.png",
      images: [
        "/MyoPain main photo.png",
        "/1_20260103_193809_0000.png",
        "/2_20260103_193809_0001.png",
        "/3_20260103_193809_0002.png",
        "/4_20260103_193809_0003.png",
        "/5_20260103_193809_0004.png",
      ],
      technologies: [
        "Facebook Ads",
        "Instagram Marketing",
        "Canva",
        "Analytics",
      ],
      client: "MyoPain Medical Center",
      duration: "2 months",
      year: "2025",
      status: "Completed",
      projectUrl: "https://simplebooklet.com/alsuwaidi",
      featured: true,
      results: "6-8 new clients within weeks, improved enquiry flow",
      likes: 134,
      views: 756,
      highlights: [
        "6-8 new clients acquired",
        "Improved enquiry flow",
        "Strong engagement and ROI",
        "Facebook & Instagram platforms",
      ],
      fullDescription:
        "Targeted social media ad campaigns designed to generate patient enquiries and appointments within a short timeframe. Successfully acquired 6-8 new clients within weeks.",
    },
    {
      id: 13,
      title: "Golden Choice Contracting - Social Media Branding",
      category: "marketing",
      description:
        "Complete social media branding to build consistent and professional online presence with LinkedIn & Facebook assets and professional display pictures.",
      image: "/golden choice main photo.png",
      images: [
        "/golden choice main photo.png",
        "/image copy 3.png",
        "/image copy 4.png",
        "/image copy 5.png",
        "/image copy 6.png",
        "/image copy 7.png",
        "/image copy 8.png",
        // "/file/5_20260103_185403_0004.png",
        "/image copy 9.png",
       
        
      ],
      technologies: [
        "Social Media Design",
        "Brand Identity",
        "LinkedIn",
        "Facebook",
      ],
      client: "Golden Choice Contracting ",
      duration: "1 month",
      year: "2025",
      status: "Completed",
      projectUrl: "https://simplebooklet.com/alsuwaidi",
      featured: false,
      results: "Improved brand consistency, stronger professional image",
      likes: 98,
      views: 445,
      highlights: [
        "Social media posts",
        "LinkedIn & Facebook covers",
        "Professional display pictures",
        "Brand consistency",
      ],
      fullDescription:
        "Complete social media branding to build consistent and professional online presence. Deliverables include social media posts, LinkedIn & Facebook cover photos, and professional display pictures.",
    },

    {
      id: 1,
      title: "E-Commerce Platform Revolution",
      category: "ecommerce",
      description:
        "Complete e-commerce ecosystem with advanced analytics, AI-powered recommendations, and seamless payment integration.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "AWS"],
      client: "TechCorp Solutions",
      duration: "6 months",
      year: "2025",
      status: "Completed",
      link: "#",
      featured: true,
      results: "300% increase in sales, 50% faster load times",
      likes: 245,
      views: 1567,
      highlights: [
        "Advanced analytics",
        "AI-powered recommendations",
        "Seamless payment integration",
        "Complete e-commerce ecosystem",
      ],
      fullDescription:
        "Complete e-commerce ecosystem with advanced analytics, AI-powered recommendations, and seamless payment integration. This revolutionary platform transformed online retail with cutting-edge technology and user-centric design.",
    },
    {
      id: 2,
      title: "Next-Gen Banking Mobile App",
      category: "mobile",
      description:
        "Revolutionary mobile banking application with biometric authentication and AI fraud detection.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&auto=format",
      technologies: [
        "React Native",
        "Firebase",
        "Redux",
        "Biometric API",
        "ML Kit",
      ],
      client: "FinanceBank International",
      duration: "8 months",
      year: "2025",
      status: "Completed",
      link: "#",
      featured: true,
      results: "1M+ downloads, 4.8 app store rating",
      likes: 312,
      views: 1890,
      highlights: [
        "Biometric authentication",
        "AI fraud detection",
        "1M+ downloads",
        "4.8 app store rating",
      ],
      fullDescription:
        "Revolutionary mobile banking application with biometric authentication and AI fraud detection. Achieved over 1 million downloads with exceptional user ratings.",
    },
    {
      id: 3,
      title: "Corporate Brand Identity Suite",
      category: "design",
      description:
        "Complete brand transformation including logo design, brand guidelines, and marketing collaterals.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&auto=format",
      technologies: [
        "Adobe Creative Suite",
        "Figma",
        "Sketch",
        "After Effects",
      ],
      client: "Global StartupXYZ",
      duration: "4 months",
      year: "2025",
      status: "Completed",
      link: "#",
      featured: false,
      results: "200% brand recognition increase",
      likes: 187,
      views: 1245,
      highlights: [
        "Complete brand transformation",
        "Logo design",
        "Brand guidelines",
        "200% recognition increase",
      ],
      fullDescription:
        "Complete brand transformation including logo design, brand guidelines, and marketing collaterals. Achieved 200% increase in brand recognition through strategic design.",
    },
    {
      id: 4,
      title: "AI-Powered Marketing Platform",
      category: "marketing",
      description:
        "Data-driven marketing campaign using machine learning for audience targeting and personalized content delivery.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
      technologies: [
        "Google Analytics",
        "Facebook Ads",
        "Python",
        "TensorFlow",
        "Tableau",
      ],
      client: "Fashion Empire Brand",
      duration: "5 months",
      year: "2025",
      status: "Ongoing",
      link: "#",
      featured: false,
      results: "400% engagement increase, 250% ROI",
      likes: 156,
      views: 1123,
      highlights: [
        "Machine learning targeting",
        "Personalized content",
        "400% engagement increase",
        "250% ROI",
      ],
      fullDescription:
        "Data-driven marketing campaign using machine learning for audience targeting and personalized content delivery. Achieved remarkable 400% engagement increase with 250% ROI.",
    },
    {
      id: 5,
      title: "Healthcare Management Ecosystem",
      category: "web",
      description:
        "Comprehensive healthcare platform with patient management, telemedicine, and medical records integration.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRobZM_DcqaKJKjIUOuPN79KA79-pZSTR3s7w&s",
      technologies: [
        "Vue.js",
        "Laravel",
        "MySQL",
        "WebRTC",
        "HIPAA Compliance",
      ],
      client: "MediCare Hospital Network",
      duration: "12 months",
      year: "2023",
      status: "Completed",
      link: "#",
      featured: true,
      results: "10,000+ patients managed, 95% satisfaction",
      likes: 298,
      views: 1678,
      highlights: [
        "Patient management",
        "Telemedicine integration",
        "10,000+ patients managed",
        "95% satisfaction rate",
      ],
      fullDescription:
        "Comprehensive healthcare platform with patient management, telemedicine, and medical records integration. Successfully manages over 10,000 patients with 95% satisfaction rate.",
    },
    {
      id: 6,
      title: "Smart Food Delivery Platform",
      category: "mobile",
      description:
        "Intelligent food delivery app with AI route optimization, real-time tracking, and predictive ordering.",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop&auto=format",
      technologies: [
        "Flutter",
        "Firebase",
        "Google Maps API",
        "Machine Learning",
      ],
      client: "FoodieExpress Global",
      duration: "7 months",
      year: "2023",
      status: "Completed",
      link: "#",
      featured: false,
      results: "500K+ orders, 30% faster delivery",
      likes: 234,
      views: 1456,
      highlights: [
        "AI route optimization",
        "Real-time tracking",
        "500K+ orders",
        "30% faster delivery",
      ],
      fullDescription:
        "Intelligent food delivery app with AI route optimization, real-time tracking, and predictive ordering. Processed over 500K orders with 30% faster delivery times.",
    },
    {
      id: 7,
      title: "Enterprise Resource Planning System",
      category: "web",
      description:
        "Custom ERP solution for manufacturing companies with inventory management and financial reporting.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&auto=format",
      technologies: [
        "Angular",
        "Spring Boot",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
      ],
      client: "Manufacturing Corp",
      duration: "10 months",
      year: "2023",
      status: "Completed",
      link: "#",
      featured: true,
      results: "40% operational efficiency increase",
      likes: 276,
      views: 1567,
      highlights: [
        "Custom ERP solution",
        "Inventory management",
        "Financial reporting",
        "40% efficiency increase",
      ],
      fullDescription:
        "Custom ERP solution for manufacturing companies with inventory management and financial reporting. Achieved 40% operational efficiency increase through streamlined processes.",
    },
    {
      id: 8,
      title: "AI Chatbot Customer Service",
      category: "ai",
      description:
        "Intelligent customer service chatbot with natural language processing for 24/7 support.",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop&auto=format",
      technologies: ["Python", "TensorFlow", "NLP", "DialogFlow", "REST APIs"],
      client: "Customer Service Solutions",
      duration: "4 months",
      year: "2025",
      status: "Completed",
      link: "#",
      featured: false,
      results: "80% query resolution, 24/7 availability",
      likes: 189,
      views: 1324,
      highlights: [
        "Natural language processing",
        "24/7 support availability",
        "80% query resolution",
        "REST API integration",
      ],
      fullDescription:
        "Intelligent customer service chatbot with natural language processing for 24/7 support. Successfully resolves 80% of customer queries automatically with advanced AI capabilities.",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const stats = [
    {
      number: "40+",
      label: "Projects Completed",
      icon: Award, // achievement / success
      suffix: "",
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      icon: Star, // rating / satisfaction
      suffix: "",
      color: "from-green-500 to-lime-500",
    },
    {
      number: "100%",
      label: "Quality Execution",
      icon: CheckCircle, // quality / approved work
      suffix: "",
      color: "from-emerald-500 to-teal-500",
    },
    {
      number: "100%",
      label: "Trusted Business Partner",
      icon: Handshake, // trust / partnership
      suffix: "",
      color: "from-lime-500 to-green-500",
    },
  ];
  const technologies = [
    { name: "React", icon: Code, projects: 45, level: 95 },
    { name: "Node.js", icon: Database, projects: 38, level: 90 },
    { name: "Python", icon: Bot, projects: 32, level: 85 },
    { name: "React Native", icon: Smartphone, projects: 28, level: 88 },
    { name: "AWS", icon: Cloud, projects: 42, level: 92 },
    { name: "MongoDB", icon: Database, projects: 35, level: 87 },
    { name: "Firebase", icon: Shield, projects: 30, level: 85 },
    { name: "Docker", icon: Settings, projects: 25, level: 82 },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Trusted Web Development Experts",
      description: "High-quality web development you can trust",
      year: "2025",
    },
    {
      icon: BarChart3,
      title: "99% Project Success Rate",
      description: "Consistently delivering projects on time and within budget",
      year: "Ongoing",
    },
    {
      icon: Lightbulb,
      title: "Innovation Leader",
      description: "Recognized for cutting-edge technology solutions",
      year: "Ongoing",
    },
    {
      icon: Handshake,
      title: "Client Partnership Excellence",
      description: "Long-term relationships with 95% client retention",
      year: "2025",
    },
  ];

  const filteredProjects = projects;

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/50 to-emerald-50/30 mt-[70px]">
      {/* Hero Section - Green Theme */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden  bg-linear-to-b from-[#076950] via-[#188866] to-[#024a38] text-white  ">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 w-72 h-72 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400/20 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-green-300 to-transparent"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-emerald-900/40 to-teal-900/30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
              <Rocket className="w-4 h-4 mr-2 animate-pulse" />
              Explore 40+ Successful Projects
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-green-300 via-emerald-200 to-green-300 bg-clip-text text-transparent">
                Our Project
              </span>
              <br />
              <span className="text-white">Portfolio Gallery</span>
            </h1>

            <p className="text-lg sm:text-2xl text-green-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Discover innovative solutions that transformed businesses. Each
              project tells a story of collaboration, technical excellence, and
              measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span>View Projects</span>
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </a>
              <Link
                to="/contact"
                className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-400 hover:text-white transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                <Play className="mr-3" />
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-6 h-6 bg-green-400 rounded-full animate-float shadow-lg"></div>
        <div
          className="absolute top-40 right-32 w-8 h-8 bg-green-400 rounded-full animate-float shadow-lg"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-4 h-4 bg-green-300 rounded-full animate-float shadow-lg"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-16 w-5 h-5 bg-green-300 rounded-full animate-float shadow-lg"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </section>

      {/* Stats Section - Green Design */}
      <section className="py-8 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-b from-white to-green-50">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center shadow-md sm:shadow-lg hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 border border-green-100 hover:border-green-200 h-full flex flex-col justify-center">
                  <div
                    className={`inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${stat.color} mb-2 sm:mb-3 lg:mb-4 shadow-md mx-auto`}
                  >
                    <stat.icon className="text-lg sm:text-xl lg:text-2xl text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium leading-tight">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section - Green Cards */}
      <section className="py-8 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Tech Stack
              </span>{" "}
              Expertise
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              We master cutting-edge technologies to build scalable and
              future-proof solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-md hover:shadow-lg lg:hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200 flex flex-col h-full"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 mb-2 sm:mb-0">
                    <tech.icon className="text-lg sm:text-xl text-green-600" />
                  </div>
                  <div className="sm:ml-3 md:ml-4 flex-grow">
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">{tech.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {tech.projects} projects
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="w-full bg-green-100 rounded-full h-1.5 sm:h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-1.5 sm:h-2 rounded-full transition-all duration-500"
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-xs sm:text-sm font-medium text-green-700">
                      {tech.level}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Green Grid with Filters */}
      <section id="projects" className="py-6 sm:py-8 md:py-12 lg:py-16 bg-white">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              Explore our curated selection of innovative projects that showcase
              our technical expertise and creative problem-solving approach
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl lg:hover:shadow-2xl transition-all duration-500 border border-green-100 hover:border-green-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 flex flex-col h-full w-full"
              >
                {/* Project Image with Overlay */}
                <div className="relative h-40 sm:h-48 md:h-52 lg:h-64 overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/600x400/10b981/ffffff?text=Project+Image";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col flex-grow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-3 gap-2 sm:gap-0">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2 flex-grow">
                      {project.title}
                    </h3>
                    <span
                      className={`text-xs font-semibold px-2 sm:px-3 py-1 rounded-full self-start sm:ml-2 flex-shrink-0 ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Results and CTA */}
                  <div className="pt-3 sm:pt-4 border-t border-green-100 mt-auto">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                      <div className="flex-grow">
                        <p className="text-xs text-green-600">Client</p>
                        <p className="font-semibold text-gray-900 text-xs sm:text-sm truncate">
                          {project.client}
                        </p>
                      </div>
                      <a
                        onClick={() => openProjectModal(project)}
                        className="inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 font-medium rounded-md sm:rounded-lg hover:from-green-100 hover:to-emerald-100 transition-all cursor-pointer flex-shrink-0 w-full sm:w-auto"
                      >
                        <Eye className="mr-1 sm:mr-2" size={14} />
                        <span className="text-xs sm:text-sm">View Details</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleProjects < filteredProjects.length && (
            <div className="text-center mt-6 sm:mt-8 md:mt-10 lg:mt-12">
              <button
                onClick={loadMore}
                className="inline-flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-md sm:rounded-lg lg:rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-xs sm:text-sm md:text-base"
              >
                Load More Projects
                <ArrowRight className="ml-2" size={14} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Achievements Section - Green Cards */}
      <section className="py-8 sm:py-12 md:py-14 lg:py-16 bg-white">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              Recognition and milestones that showcase our commitment to
              excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-md sm:shadow-lg hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 border border-green-200 flex flex-col h-full"
              >
                <div className="inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl mb-3 sm:mb-4">
                  <achievement.icon className="text-lg sm:text-xl lg:text-2xl text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg mb-2 sm:mb-3 flex-grow">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed flex-grow">
                  {achievement.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-medium text-green-700 bg-green-100 px-2 sm:px-3 py-1 rounded-full">
                    {achievement.year}
                  </span>
                  <CheckCircle className="text-green-500" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section - Green Theme */}
      <TransformBussnation />
      {/* Process Section - Green Timeline */}
      <section className="py-8 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              Our Project{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              A systematic approach that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-7 lg:gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                icon: Search,
                description:
                  "Understanding requirements and planning the roadmap",
                color: "from-green-500 to-emerald-500",
              },
              {
                step: "02",
                title: "Design & Prototype",
                icon: Palette,
                description: "Creating wireframes and interactive prototypes",
                color: "from-emerald-500 to-teal-500",
              },
              {
                step: "03",
                title: "Development",
                icon: Code,
                description: "Building with clean code and best practices",
                color: "from-teal-500 to-cyan-500",
              },
              {
                step: "04",
                title: "Launch & Support",
                icon: Rocket,
                description: "Deployment and ongoing maintenance",
                color: "from-green-600 to-emerald-600",
              },
            ].map((process, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-md sm:shadow-lg hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 border border-green-200 hover:border-green-300 h-full flex flex-col">
                  <div className="inline-flex p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl mb-3 sm:mb-4 lg:mb-6">
                    <process.icon className="text-lg sm:text-xl lg:text-2xl text-green-600" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-green-600 mb-1 sm:mb-2">
                    STEP {process.step}
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 flex-grow">
                    {process.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 lg:w-6 h-0.5 bg-gradient-to-r from-green-300 to-emerald-300 group-hover:from-green-400 group-hover:to-emerald-400 transition-all"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-1 xs:p-2 sm:p-4">
          <div className="bg-white rounded-xl xs:rounded-2xl w-full h-full xs:h-[95vh] xs:max-w-md sm:max-w-3xl lg:max-w-5xl xs:max-h-[95vh] sm:max-h-[90vh] lg:max-h-[85vh] overflow-hidden shadow-2xl border border-gray-200 relative">
            {/* Close Button */}
            <button
              onClick={closeProjectModal}
              className="absolute top-2 right-2 xs:top-3 xs:right-3 sm:top-4 sm:right-4 z-30 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 xs:p-2 transition-all duration-200 shadow-md"
            >
              <svg className="w-4 h-4 xs:w-5 xs:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col lg:flex-row h-full">
              {/* Left Side - Image Gallery */}
              <div className="lg:w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 relative flex items-center justify-center h-[35vh] xs:h-[40vh] sm:h-[45vh] lg:min-h-[500px]">
                <img
                  src={selectedProject.images ? selectedProject.images[currentImageIndex] : selectedProject.image}
                  alt={selectedProject.title}
                  className="max-w-[90%] max-h-[90%] xs:max-w-full xs:max-h-full object-contain p-2 xs:p-4"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/600x400/10b981/ffffff?text=Project+Image";
                  }}
                />
                
                {/* Image Navigation */}
                {selectedProject.images && selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 xs:left-3 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 xs:p-2 shadow-lg transition-all"
                    >
                      <svg className="w-4 h-4 xs:w-5 xs:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 xs:right-3 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 xs:p-2 shadow-lg transition-all"
                    >
                      <svg className="w-4 h-4 xs:w-5 xs:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    {/* Image Indicators */}
                    <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 xs:space-x-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full transition-all ${
                            index === currentImageIndex ? "bg-green-500 scale-125" : "bg-white/70 hover:bg-white"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Right Side - Content */}
              <div className="lg:w-1/2 flex flex-col h-[65vh] xs:h-[58vh] sm:h-auto lg:h-full">
                {/* Header */}
                <div className="p-3 xs:p-4 sm:p-6 border-b border-gray-100 flex-shrink-0">
                  <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 xs:mb-3 leading-tight">{selectedProject.title}</h2>
                  <div className="flex flex-wrap items-center gap-2 xs:gap-3 sm:gap-4 text-xs xs:text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 xs:w-4 xs:h-4" />
                      {selectedProject.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3 xs:w-4 xs:h-4" />
                      {selectedProject.client}
                    </span>
                    <span className={`px-2 xs:px-3 py-0.5 xs:py-1 rounded-full text-xs font-medium ${
                      selectedProject.status === "Completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {selectedProject.status}
                    </span>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-3 xs:p-4 sm:p-6 space-y-3 xs:space-y-4 sm:space-y-6">
                  {/* Description */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg xs:rounded-xl p-3 xs:p-4">
                    <p className="text-gray-700 leading-relaxed text-xs xs:text-sm sm:text-base">{selectedProject.fullDescription}</p>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-gray-900 mb-2 xs:mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 xs:w-5 xs:h-5 text-green-500" />
                      Key Highlights
                    </h3>
                    <ul className="space-y-1.5 xs:space-y-2">
                      {selectedProject.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 xs:gap-3 text-gray-600 text-xs xs:text-sm">
                          <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-green-500 rounded-full mt-1.5 xs:mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-gray-900 mb-2 xs:mb-3 flex items-center gap-2">
                      <Settings className="w-4 h-4 xs:w-5 xs:h-5 text-green-500" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-1.5 xs:gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-white border border-green-200 text-green-700 px-2 xs:px-3 py-1 rounded-md xs:rounded-lg text-xs font-medium shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  {selectedProject.results && (
                    <div className="bg-gray-50 rounded-lg xs:rounded-xl p-3 xs:p-4">
                      <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-gray-900 mb-2">Results Achieved</h3>
                      <p className="text-gray-700 text-xs xs:text-sm">{selectedProject.results}</p>
                    </div>
                  )}
                </div>

                {/* Footer Actions */}
                <div className="p-3 xs:p-4 sm:p-6 border-t border-gray-100 bg-gray-50 flex-shrink-0">
                  <div className="flex flex-col sm:flex-row gap-2 xs:gap-3">
                    {selectedProject.id === 10 && selectedProject.pdfUrl ? (
                      <a
                        href={selectedProject.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 xs:px-6 py-2.5 xs:py-3 rounded-lg xs:rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg text-sm xs:text-base"
                      >
                        <Eye className="w-4 h-4" />
                        View PDF
                      </a>
                    ) : selectedProject.projectUrl ? (
                      <a
                        href={selectedProject.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 xs:px-6 py-2.5 xs:py-3 rounded-lg xs:rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg text-sm xs:text-base"
                      >
                        <Globe className="w-4 h-4" />
                        {selectedProject.id === 0 ? "View Live Project" : "View More Details"}
                      </a>
                    ) : null}
                    <button
                      onClick={closeProjectModal}
                      className="px-4 xs:px-6 py-2.5 xs:py-3 bg-gray-200 text-gray-700 rounded-lg xs:rounded-xl font-semibold hover:bg-gray-300 transition-all text-sm xs:text-base"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
