import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";
import TransformBussnationCV from "../Component/TransformBussnationCV";
import {
  TrendingUp,
  Settings,
  Palette,
  Code,
  Megaphone,
  DollarSign,
  Home,
  BookOpen,
  Heart,
  Database,
} from "lucide-react";

const CareersPage = () => {
  const Navigate = useNavigate();

  // Our Teams Section
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
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section
        className="relative    bg-linear-to-b from-[#088667] via-[#177458] to-[#024a38]
          text-white mt-20 py-24"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        {/* Floating Bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large bubbles */}
          <div className="absolute -top-32 -left-32 w-72 h-72 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-90 h-90 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          {/* Small floating dots */}
          <span className="absolute top-20 left-10 w-4 h-4 bg-white/40 rounded-full animate-float"></span>
          <span className="absolute top-40 right-12 w-3 h-3 bg-green-300/60 rounded-full animate-float"></span>
          <span className="absolute bottom-32 left-1/3 w-3 h-3 bg-yellow-300/50 rounded-full animate-float"></span>
          <span className="absolute bottom-48 right-1/4 w-2 h-2 bg-white/40 rounded-full animate-float"></span>
          <span className="absolute top-1/3 right-1/2 w-2 h-2 bg-green-200/50 rounded-full animate-float"></span>
        </div>

        {/* Glass Glow Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,209,152,0.15),transparent_70%)]"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-8 group hover:bg-white/20 transition-all duration-500 shadow-lg">
            <div className="flex items-center">
              <div className="relative">
                <span className="w-4 h-4 bg-green-400 rounded-full animate-ping absolute -top-1 -right-1"></span>
              </div>
              <span className="text-green-300 font-semibold drop-shadow-sm">
                Join Our Career Opportunities
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight drop-shadow-lg">
            Build Your Career With <br />
            <span className="bg-linear-to-r from-green-300 via-white to-green-400 bg-clip-text text-transparent">
              WorknestConnect
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white drop-shadow-sm">
            Join our innovative team and help shape the future of digital
            solutions. We're building cutting-edge platforms that transform
            businesses worldwide. Grow with us and make an impact!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => Navigate("/contact")}
              className="group relative inline-flex items-center justify-center bg-linear-to-r from-green-400 to-green-400 text-[#3a2407] font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-400/40 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative">Explore Open Positions</span>
            </button>

            <a
              href="#services"
              className="group relative inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-green-300 font-semibold px-8 py-4 rounded-2xl border-2 border-green-400 backdrop-blur-sm transition-all duration-300 overflow-hidden"
            >
              <span className="relative">Learn About Our Culture</span>
            </a>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-12 bg-white ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                100%
              </div>
              <div className="text-gray-600">Quality Execution</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                40+
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                100%
              </div>
              <div className="text-gray-600">Trusted Business Partner</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                5★
              </div>
              <div className="text-gray-600">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
    
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
                  <p className="text-lg font-semibold mb-3">
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

      {/* Benefits Section */}
      <section
        id="benefits"
        className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-2 mb-4">
              <span className="text-green-700 font-semibold text-sm">
                ✨ Employee Benefits
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Join{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                WorknestConnect?
              </span>
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto text-lg">
              We offer a comprehensive benefits package and a supportive work
              environment to help you thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-8 text-center rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-green-400">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <DollarSign className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                Competitive Salary
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We offer industry-leading compensation packages with performance
                bonuses.
              </p>
            </div>

            <div className="group bg-white p-8 text-center rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-green-400">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Home className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                Flexible Work
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Remote, hybrid, or on-site - choose what works best for your
                lifestyle.
              </p>
            </div>

            <div className="group bg-white p-8 text-center rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-green-400">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <BookOpen className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                Learning & Growth
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access to training, conferences, and mentorship programs for
                career development.
              </p>
            </div>

            <div className="group bg-white p-8 text-center rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-green-400">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Heart className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                Health & Wellness
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive health insurance, gym memberships, and wellness
                programs.
              </p>
            </div>
          </div>
        </div>
      </section>
        <TransformBussnationCV />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CareersPage;
