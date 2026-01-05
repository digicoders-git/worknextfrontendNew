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
      title: "ATC Company Profile Website",
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
      image: "/ATC Calendar.png",
      images: ["/image copy 2.png"],
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
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4 backdrop-blur-md">
          <div className="bg-white rounded-lg sm:rounded-2xl lg:rounded-3xl w-full h-full sm:w-[95vw] sm:h-[95vh] md:w-[90vw] md:h-[90vh] lg:max-w-7xl lg:max-h-[85vh] overflow-hidden shadow-2xl border border-gray-100">
            <div className="relative h-full flex flex-col">
              <button
                onClick={closeProjectModal}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-2.5 lg:p-3 shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-200"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-700" />
              </button>

              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 h-full">
                {/* Left Side - Image */}
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-full">
                  <img
                    src={
                      selectedProject.images
                        ? selectedProject.images[currentImageIndex]
                        : selectedProject.image
                    }
                    alt={selectedProject.title}
                    className="max-w-[85%] max-h-[85%] object-contain"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/800x600/10b981/ffffff?text=Image+Not+Found";
                    }}
                  />

                  {selectedProject.images &&
                    selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 sm:left-3 md:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-2 sm:p-2.5 md:p-3 lg:p-4 rounded-full hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:scale-110"
                        >
                          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 sm:right-3 md:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-2 sm:p-2.5 md:p-3 lg:p-4 rounded-full hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:scale-110"
                        >
                          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </button>
                        <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {selectedProject.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full transition-all shadow-md hover:scale-110 ${
                                index === currentImageIndex
                                  ? "bg-green-500 scale-125 shadow-green-500/50"
                                  : "bg-white bg-opacity-70 hover:bg-opacity-100"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                </div>

                {/* Right Side - Content */}
                <div className="flex flex-col h-[65vh] lg:h-full overflow-hidden">
                  <div className="p-3 sm:p-4 md:p-5 lg:p-8 flex-1 overflow-y-auto">
                    <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                        {selectedProject.title}
                      </h2>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                        <span className="flex items-center bg-gray-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-600" />
                          <span className="font-medium">{selectedProject.year}</span>
                        </span>
                        <span className="flex items-center bg-gray-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                          <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-600" />
                          <span className="font-medium">{selectedProject.client}</span>
                        </span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 mb-3 sm:mb-4 md:mb-5 lg:mb-6 border border-green-100 shadow-sm">
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
                        {selectedProject.fullDescription}
                      </p>
                    </div>

                    <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 flex items-center">
                        <div className="w-1 sm:w-1.5 md:w-2 h-5 sm:h-6 md:h-7 lg:h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full mr-2 sm:mr-3"></div>
                        Key Highlights
                      </h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {selectedProject.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="flex items-start text-gray-700 text-xs sm:text-sm"
                          >
                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 sm:mt-2.5 mr-3 sm:mr-4 flex-shrink-0 shadow-lg"></div>
                            <span className="font-medium leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 flex items-center">
                        <Settings className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-500 mr-2 sm:mr-3" />
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-white border border-green-200 text-green-700 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-lg text-xs font-semibold shadow-sm hover:shadow-md transition-all hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-end gap-2 sm:gap-3 p-3 sm:p-4 md:p-5 lg:p-6 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 flex-shrink-0">
                    {selectedProject.projectUrl ? (
                      <a
                        href={selectedProject.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 text-white px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center group"
                      >
                        <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                        <span className="truncate">{selectedProject.id === 0 ? "View Live Project" : "View More Details"}</span>
                      </a>
                    ) : null}

                    <button
                      onClick={closeProjectModal}
                      className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl hover:scale-105"
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
