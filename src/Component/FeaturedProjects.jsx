import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  Code,
  Smartphone,
  Palette,
  TrendingUp,
  Globe,
  Users,
  Calendar,
  CheckCircle,
  Settings,
  ShoppingCart,
  Bot,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      title: "ATC Company Profile",
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
  ];

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

  return (
    <>
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl lg:hover:shadow-2xl transition-all duration-500 border border-green-100 hover:border-green-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 flex flex-col h-full"
              >
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

                  <div className="pt-3 sm:pt-4 border-t border-green-100 mt-auto">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                      <div className="flex-grow">
                        <p className="text-xs text-green-600">Client</p>
                        <p className="font-semibold text-gray-900 text-xs sm:text-sm truncate">
                          {project.client}
                        </p>
                      </div>
                      <button
                        onClick={() => openProjectModal(project)}
                        className="inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 font-medium rounded-md sm:rounded-lg hover:from-green-100 hover:to-emerald-100 transition-all cursor-pointer flex-shrink-0 w-full sm:w-auto"
                      >
                        <Eye className="mr-1 sm:mr-2" size={14} />
                        <span className="text-xs sm:text-sm">View Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8 md:mt-10 lg:mt-12">
            <Link
              to="/project"
              className="inline-flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-md sm:rounded-lg lg:rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-xs sm:text-sm md:text-base"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Project Details Modal - Fully Responsive */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-1 xs:p-2 sm:p-4">
          <div className="bg-white rounded-xl xs:rounded-2xl w-full h-full xs:h-[95vh] xs:max-w-md sm:max-w-3xl lg:max-w-5xl xs:max-h-[95vh] sm:max-h-[90vh] lg:max-h-[85vh] overflow-hidden shadow-2xl border border-gray-200 relative">
            {/* Close Button */}
            <button
              onClick={closeProjectModal}
              className="absolute top-2 right-2 xs:top-3 xs:right-3 sm:top-4 sm:right-4 z-30 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 xs:p-2 transition-all duration-200 shadow-md"
            >
              <X className="w-4 h-4 xs:w-5 xs:h-5 text-gray-600" />
            </button>

            <div className="flex flex-col lg:flex-row h-full">
              {/* Left Side - Image Gallery */}
              <div className="lg:w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 relative flex items-center justify-center h-[35vh] xs:h-[40vh] sm:h-[45vh] lg:min-h-[500px]">
                <img
                  src={
                    selectedProject.images
                      ? selectedProject.images[currentImageIndex]
                      : selectedProject.image
                  }
                  alt={selectedProject.title}
                  className="max-w-[90%] max-h-[90%] xs:max-w-full xs:max-h-full object-contain p-2 xs:p-4"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/600x400/10b981/ffffff?text=Project+Image";
                  }}
                />

                {/* Image Navigation */}
                {selectedProject.images &&
                  selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 xs:left-3 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 xs:p-2 shadow-lg transition-all"
                      >
                        <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 text-gray-700" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 xs:right-3 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 xs:p-2 shadow-lg transition-all"
                      >
                        <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 text-gray-700" />
                      </button>

                      {/* Image Indicators */}
                      <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 xs:space-x-2">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full transition-all ${
                              index === currentImageIndex
                                ? "bg-green-500 scale-125"
                                : "bg-white/70 hover:bg-white"
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
                  <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 xs:mb-3 leading-tight">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 xs:gap-3 sm:gap-4 text-xs xs:text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 xs:w-4 xs:h-4" />
                      {selectedProject.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3 xs:w-4 xs:h-4" />
                      {selectedProject.client}
                    </span>
                    <span
                      className={`px-2 xs:px-3 py-0.5 xs:py-1 rounded-full text-xs font-medium ${
                        selectedProject.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {selectedProject.status}
                    </span>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-3 xs:p-4 sm:p-6 space-y-3 xs:space-y-4 sm:space-y-6">
                  {/* Description */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg xs:rounded-xl p-3 xs:p-4">
                    <p className="text-gray-700 leading-relaxed text-xs xs:text-sm sm:text-base">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-gray-900 mb-2 xs:mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 xs:w-5 xs:h-5 text-green-500" />
                      Key Highlights
                    </h3>
                    <ul className="space-y-1.5 xs:space-y-2">
                      {selectedProject.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 xs:gap-3 text-gray-600 text-xs xs:text-sm"
                        >
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
                      <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-gray-900 mb-2">
                        Results Achieved
                      </h3>
                      <p className="text-gray-700 text-xs xs:text-sm">
                        {selectedProject.results}
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer Actions */}
                <div className="p-3 xs:p-4 sm:p-6 border-t border-gray-100 bg-gray-50 flex-shrink-0 mb-2.5 xs:mb-0">
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
                        {selectedProject.id === 0
                          ? "View Live Project"
                          : "View More Details"}
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
    </>
  );
};

export default FeaturedProjects;
