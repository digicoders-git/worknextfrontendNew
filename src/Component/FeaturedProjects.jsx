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
      description: "The ATC Website was designed and developed to establish a strong digital presence for a technical and engineering-focused organization. The goal was to create a professional, structured, and easy-to-navigate platform that clearly communicates services, capabilities, and company credibility.",
      image: "/Project/ATC website main photo.png",
      images: [
        "/Project/ATC website main photo.png",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "HTML5", "CSS3", "JavaScript"],
      client: "ATC Company",
      duration: "4 months",
      year: "2024",
      status: "Completed",
      projectUrl: "https://www.alsuwaiditechnical.com/",
      featured: true,
      results: "Strong digital presence, professional platform",
      likes: 200,
      views: 1200,
      highlights: ["Professional digital presence", "Technical and engineering focus", "Easy-to-navigate platform", "Clear service communication"],
      fullDescription: "The ATC Website was designed and developed to establish a strong digital presence for a technical and engineering-focused organization. The goal was to create a professional, structured, and easy-to-navigate platform that clearly communicates services, capabilities, and company credibility."
    },
    {
      id: 9,
      title: "ATC Company Profile Website",
      category: "web",
      description: "A professionally structured company profile designed to clearly present ATC's services, strengths, and brand identity. Clean corporate layout with consistent branding.",
      image: "/Company profile main photo.png",
      images: [
        "/Company profile main photo.png",
        "/Company profile more photo.png",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
      client: "ATC Company",
      duration: "3 months",
      year: "2024",
      status: "Completed",
      projectUrl: "https://simplebooklet.com/alsuwaidi",
      featured: true,
      results: "Professional brand presentation, client-ready format",
      likes: 156,
      views: 892,
      highlights: ["Clean, corporate layout", "Clear service overview", "Consistent branding", "Print-ready format"],
      fullDescription: "A professionally structured company profile designed to clearly present ATC's services, strengths, and brand identity. Perfect for client meetings and proposals."
    },
    {
      id: 10,
      title: "ATC Corporate Calendar Design",
      category: "design",
      description: "Complete corporate calendar set including wall and table calendars, created to ensure year-round brand visibility with clean and professional design.",
      image: "/ATC Calendar.png",
      images: [
        "/ATC Calendar.png",
      ],
      technologies: ["Adobe InDesign", "Photoshop", "Print Design", "Brand Guidelines"],
      client: "ATC Company",
      duration: "2 months",
      year: "2024",
      status: "Completed",
      projectUrl: "https://simplebooklet.com/alsuwaidi",
      featured: false,
      results: "Year-round brand visibility, professional finish",
      likes: 89,
      views: 567,
      highlights: ["Large, easy-to-read layout", "Strong brand placement", "Print-ready finish", "Desk-friendly design"],
      fullDescription: "Complete corporate calendar set including wall and table calendars, created to ensure year-round brand visibility with clean and professional design."
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
              Explore our curated selection of innovative projects that showcase
              our technical expertise and creative problem-solving approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100 hover:border-green-300 transform hover:-translate-y-2"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400/10b981/ffffff?text=Project+Image';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-green-600/90 text-white text-xs font-semibold px-3 py-1 rounded-lg backdrop-blur-sm">
                      {
                        categories.find((cat) => cat.id === project.category)
                          ?.name
                      }
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-green-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-green-600">Client</p>
                        <p className="font-semibold text-gray-900">
                          {project.client}
                        </p>
                      </div>
                      <a
                        onClick={() => openProjectModal(project)}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 font-medium rounded-lg hover:from-green-100 hover:to-emerald-100 transition-all cursor-pointer"
                      >
                        <Eye className="mr-2" size={18} />
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/project"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-0 sm:p-4 backdrop-blur-md">
          <div className="bg-white rounded-none sm:rounded-3xl w-full h-full sm:max-w-7xl sm:w-full sm:max-h-[85vh] overflow-hidden shadow-2xl border-0 sm:border border-gray-100">
            <div className="relative h-full">
              <button
                onClick={closeProjectModal}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-200"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center h-1/2 lg:h-full">
                  <img
                    src={selectedProject.images ? selectedProject.images[currentImageIndex] : selectedProject.image}
                    alt={selectedProject.title}
                    className="max-w-full max-h-[250px] sm:max-h-[350px] object-contain drop-shadow-2xl"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x600/10b981/ffffff?text=Image+Not+Found';
                    }}
                  />
                  
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-800 p-2 sm:p-4 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl border border-gray-200"
                      >
                        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-800 p-2 sm:p-4 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl border border-gray-200"
                      >
                        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <div className="absolute bottom-2 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 shadow-lg ${
                              index === currentImageIndex ? 'bg-green-500 scale-125 shadow-green-500/50' : 'bg-white/70 hover:bg-white hover:scale-110'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="p-4 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-white to-gray-50/50 overflow-y-auto scrollbar-hide h-1/2 lg:h-full">
                  <div>
                    <div className="mb-4 sm:mb-8">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4 leading-tight">
                        {selectedProject.title}
                      </h2>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-gray-600">
                        <span className="flex items-center bg-gray-100 px-3 py-1 sm:px-4 sm:py-2 rounded-full">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-600" />
                          <span className="font-medium text-xs sm:text-sm">{selectedProject.year}</span>
                        </span>
                        <span className="flex items-center bg-gray-100 px-3 py-1 sm:px-4 sm:py-2 rounded-full">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-600" />
                          <span className="font-medium text-xs sm:text-sm">{selectedProject.client}</span>
                        </span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 mb-4 sm:mb-8 border border-green-100 shadow-lg">
                      <p className="text-gray-800 text-sm sm:text-lg leading-relaxed font-medium">
                        {selectedProject.fullDescription}
                      </p>
                    </div>

                    <div className="mb-4 sm:mb-8">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-6 flex items-center">
                        <div className="w-1 sm:w-2 h-6 sm:h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full mr-2 sm:mr-4"></div>
                        Key Highlights
                      </h3>
                      <ul className="space-y-2 sm:space-y-4">
                        {selectedProject.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="flex items-start text-gray-700 text-sm sm:text-base"
                          >
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-1 sm:mt-2 mr-2 sm:mr-4 flex-shrink-0 shadow-lg"></div>
                            <span className="font-medium">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4 sm:mb-8">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-6 flex items-center">
                        <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" />
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-white border border-green-200 text-green-700 px-2 py-1 sm:px-3 sm:py-1 rounded-lg text-xs sm:text-sm font-medium shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-end pt-4 sm:pt-8 border-t border-gray-200 sm:space-y-0 sm:space-x-4">
                    {selectedProject.projectUrl ? (
                      <a
                        href={selectedProject.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center group"
                      >
                        <Globe className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform" />
                        {selectedProject.id === 0 ? "View Live Project" : "View More Details"}
                      </a>
                    ) : (
                      <div></div>
                    )}

                    <button
                      onClick={closeProjectModal}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 sm:px-10 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl"
                    >
                      Close Details
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