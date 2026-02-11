import React, { useState } from "react";
import { Calendar, User, ArrowRight, Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";

function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  const blogPosts = [
    // Digital Marketing Blogs
    {
      id: 1,
      title: "Digital Marketing Trends Shaping Qatar's Business Landscape in 2025",
      excerpt: "Discover how Qatar's businesses are leveraging cutting-edge digital marketing strategies to dominate the Middle Eastern market and drive unprecedented growth.",
      image: "/Digital.png",
      category: "Digital Marketing",
      author: "WorkNext Team",
      date: "Jan 15, 2025",
      readTime: "6 min read"
    },
    {
      id: 2,
      title: "SEO Strategies for Doha-Based Businesses: Ranking Higher in Local Search",
      excerpt: "Master local SEO techniques specifically designed for Qatar's competitive market. Learn how to dominate Google search results and attract more customers in Doha.",
      image: "/SEO Illustration.png",
      category: "Digital Marketing",
      author: "WorkNext Team",
      date: "Jan 12, 2025",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Social Media Marketing Success Stories from Qatar's Top Brands",
      excerpt: "Explore how leading Qatari businesses are using social media to build engaged communities, increase brand awareness, and drive sales across the GCC region.",
      image: "/Social Media Marketing Illustration.png",
      category: "Digital Marketing",
      author: "WorkNext Team",
      date: "Jan 10, 2025",
      readTime: "5 min read"
    },
    // Graphic Design Blogs
    {
      id: 4,
      title: "The Art of Logo Design: Creating Memorable Brand Identities in Qatar",
      excerpt: "Learn the principles of effective logo design and how Qatar's most successful brands create visual identities that resonate with Middle Eastern audiences.",
      image: "/logo.png",
      category: "Graphic Design",
      author: "WorkNext Team",
      date: "Jan 8, 2025",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Print Design Excellence: Marketing Materials That Convert in Doha",
      excerpt: "Discover how professional print design can elevate your brand presence in Qatar's competitive market with brochures, flyers, and business cards that stand out.",
      image: "/Marketing material illustration.png",
      category: "Graphic Design",
      author: "WorkNext Team",
      date: "Jan 6, 2025",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Digital Graphics for Social Media: Engaging Qatar's Online Audience",
      excerpt: "Master the art of creating scroll-stopping social media graphics that capture attention and drive engagement across platforms popular in Qatar and the GCC.",
      image: "/Digital Graphics illustration.png",
      category: "Graphic Design",
      author: "WorkNext Team",
      date: "Jan 4, 2025",
      readTime: "4 min read"
    },
    // Web & App Development Blogs
    {
      id: 7,
      title: "Building Responsive Websites for Qatar's Mobile-First Market",
      excerpt: "With 99% mobile penetration in Qatar, learn how to create websites that deliver exceptional experiences on every device and drive business growth.",
      image: "/Web.png",
      category: "Web Development",
      author: "WorkNext Team",
      date: "Jan 2, 2025",
      readTime: "7 min read"
    },
    {
      id: 8,
      title: "E-Commerce Solutions Transforming Retail in Doha",
      excerpt: "Explore how Qatar's retailers are embracing e-commerce platforms to reach customers across the GCC and compete in the digital marketplace.",
      image: "/Web1.png",
      category: "Web Development",
      author: "WorkNext Team",
      date: "Dec 30, 2024",
      readTime: "6 min read"
    },
    {
      id: 9,
      title: "Mobile App Development: Engaging Qatar's Tech-Savvy Population",
      excerpt: "Learn how custom mobile applications are helping Qatari businesses deliver personalized experiences and build lasting customer relationships.",
      image: "/Web2.png",
      category: "Web Development",
      author: "WorkNext Team",
      date: "Dec 28, 2024",
      readTime: "8 min read"
    },
    // IT & AI Solutions Blogs
    {
      id: 10,
      title: "AI Integration: Revolutionizing Business Operations in Qatar",
      excerpt: "Discover how artificial intelligence is transforming Qatar's business landscape, from automation to predictive analytics and intelligent decision-making.",
      image: "/AI1.jpg",
      category: "IT & AI Solutions",
      author: "WorkNext Team",
      date: "Dec 26, 2024",
      readTime: "7 min read"
    },
    {
      id: 11,
      title: "Cloud Solutions for Doha Businesses: Scalability and Security",
      excerpt: "Learn how cloud technology is enabling Qatar's businesses to scale efficiently while maintaining data security and compliance with local regulations.",
      image: "/dig.png",
      category: "IT & AI Solutions",
      author: "WorkNext Team",
      date: "Dec 24, 2024",
      readTime: "6 min read"
    },
    {
      id: 12,
      title: "Business Automation: Streamlining Operations for Qatar's SMEs",
      excerpt: "Explore how automation technologies are helping small and medium enterprises in Qatar reduce costs, improve efficiency, and compete with larger corporations.",
      image: "/ERP Solutions.png",
      category: "IT & AI Solutions",
      author: "WorkNext Team",
      date: "Dec 22, 2024",
      readTime: "5 min read"
    },
    // Business Consulting Blogs
    {
      id: 13,
      title: "Strategic Business Planning for Success in Qatar's Dynamic Market",
      excerpt: "Master the art of strategic planning with insights on navigating Qatar's unique business environment and achieving sustainable growth in the GCC region.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
      category: "Business Consulting",
      author: "WorkNext Team",
      date: "Dec 20, 2024",
      readTime: "8 min read"
    },
    {
      id: 14,
      title: "Market Entry Strategies: Launching Your Business in Doha",
      excerpt: "A comprehensive guide to entering Qatar's market, from understanding local regulations to building partnerships and establishing your brand presence.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      category: "Business Consulting",
      author: "WorkNext Team",
      date: "Dec 18, 2024",
      readTime: "7 min read"
    },
    {
      id: 15,
      title: "Performance Optimization: Maximizing ROI for Qatar Businesses",
      excerpt: "Learn proven strategies to optimize your business performance, reduce operational costs, and maximize returns in Qatar's competitive marketplace.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      category: "Business Consulting",
      author: "WorkNext Team",
      date: "Dec 16, 2024",
      readTime: "6 min read"
    }
  ];

  const categories = ["All", "Digital Marketing", "AI & Technology", "Design", "Development", "Business"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <header className="relative mt-[50px] sm:mt-[30px] bg-gradient-to-b from-[#076950] via-[#0d5640] to-[#024a38] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,209,152,0.15),transparent_70%)]"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-36 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-8 sm:mb-10 group hover:bg-white/20 transition-all duration-500 shadow-lg">
            <div className="flex items-center">
              <div className="relative">
                <span className="text-green-400 mr-2 sm:mr-3 text-base sm:text-lg animate-pulse drop-shadow-md">📝</span>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-green-300 font-semibold text-sm sm:text-base drop-shadow-sm tracking-wide">
                Insights & Articles
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-[#1FD198] via-white to-[#CFFFE9] bg-clip-text text-transparent">
              Our Blog
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-transparent bg-gradient-to-r from-green-300 to-green-100 bg-clip-text mt-2 sm:mt-4">
              Knowledge That Drives Success
            </span>
          </h1>

          <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-100 leading-relaxed drop-shadow-sm">
              Explore expert insights, industry trends, and actionable strategies to help your business thrive in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button 
                onClick={() => {
                  const blogSection = document.querySelector('.min-h-screen.bg-gradient-to-br');
                  blogSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-8 py-4 bg-white text-[#013026] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span className="relative z-10">Explore Articles</span>
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="group relative px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#013026] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span className="relative z-10">Contact Us</span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 w-48 h-48 sm:w-72 sm:h-72 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 w-64 h-64 sm:w-96 sm:h-96 bg-green-400 rounded-full opacity-20 animate-pulse"></div>

        <div className="hidden sm:block absolute top-20 left-10 w-6 h-6 bg-green-400/40 rounded-full animate-float shadow-lg"></div>
        <div className="hidden sm:block absolute top-40 right-32 w-8 h-8 bg-yellow-400/40 rounded-full animate-float shadow-lg" style={{ animationDelay: "1s" }}></div>
        <div className="hidden sm:block absolute bottom-40 left-1/4 w-5 h-5 bg-green-300/40 rounded-full animate-float shadow-lg" style={{ animationDelay: "2s" }}></div>
        <div className="hidden sm:block absolute bottom-20 right-16 w-5 h-5 bg-green-300/40 rounded-full animate-float shadow-lg" style={{ animationDelay: "1.5s" }}></div>
      </header>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 font-[Poppins]">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-[#013026]/10 to-[#027A55]/10 backdrop-blur-sm border border-[#027A55]/20 rounded-full px-6 py-2 mb-6">
            <span className="text-[#027A55] font-bold text-sm">📚 Latest Articles</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Explore Our <span className="bg-gradient-to-r from-[#013026] to-[#027A55] bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover valuable knowledge and stay ahead with our expert articles
          </p>
        </div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-cardFade border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-[#013026] text-xs font-bold rounded-full shadow-lg">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <div className="flex items-center gap-3 text-white text-sm">
                        <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          <Calendar size={14} />
                          <span className="font-medium">{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          <span className="font-medium">{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#027A55] transition-colors duration-300 line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#013026] to-[#027A55] rounded-full flex items-center justify-center text-white font-bold text-xs">
                          W
                        </div>
                        <span className="font-medium">{post.author}</span>
                      </div>

                      <button 
                        onClick={() => setSelectedPost(post)}
                        className="flex items-center gap-2 text-[#027A55] font-bold text-sm group-hover:gap-3 transition-all duration-300"
                      >
                        Read
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">No articles found matching your search.</p>
            </div>
          )}
        </div>

        {/* Newsletter Section */}
      
      </div>

      {/* Blog Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-md animate-fadeIn" onClick={() => setSelectedPost(null)}>
          <div className="relative bg-white rounded-2xl sm:rounded-3xl max-w-5xl w-full max-h-[95vh] sm:max-h-[92vh] overflow-hidden shadow-2xl animate-fadeUp border border-gray-200" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-3 right-3 sm:top-6 sm:right-6 z-50 p-2 sm:p-3 bg-gradient-to-r from-[#013026] to-[#027A55] text-white rounded-full shadow-xl hover:scale-110 transition-all duration-300"
            >
              <X size={16} className="sm:hidden" />
              <X size={18} className="hidden sm:block" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[95vh] sm:max-h-[92vh] scrollbar-thin scrollbar-thumb-[#027A55] scrollbar-track-gray-100">
              {/* Image Header */}
              <div className="relative h-48 sm:h-64 md:h-96 overflow-hidden">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-8 md:p-12 bg-gradient-to-b from-white to-gray-50">
                {/* Title & Meta */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="px-3 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-[#013026] to-[#027A55] text-white text-xs sm:text-sm font-bold rounded-full shadow-xl">
                      {selectedPost.category}
                    </span>
                    <div className="flex items-center gap-2 sm:gap-3 text-gray-500 text-xs sm:text-sm">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Calendar size={12} className="sm:hidden" />
                        <Calendar size={14} className="hidden sm:block" />
                        <span className="font-semibold">{selectedPost.date}</span>
                      </div>
                      <span>•</span>
                      <span className="font-semibold">{selectedPost.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">{selectedPost.title}</h2>
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b-2 border-gray-200">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-[#013026] to-[#027A55] rounded-full flex items-center justify-center text-white font-bold text-base sm:text-xl shadow-lg flex-shrink-0">
                    W
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-base sm:text-lg">{selectedPost.author}</p>
                    <p className="text-xs sm:text-sm text-gray-500">Al Sadd, Doha, Qatar</p>
                  </div>
                </div>
                
                {/* Main Content */}
                <div className="prose prose-sm sm:prose-lg max-w-none">
                  <p className="text-sm sm:text-xl text-gray-800 leading-relaxed mb-6 sm:mb-8 font-light italic border-l-4 border-[#027A55] pl-4 sm:pl-6 bg-gray-50 py-3 sm:py-4 rounded-r-lg">
                    {selectedPost.excerpt}
                  </p>
                  
                  <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-sm sm:text-lg">
                    <p>
                      In today's rapidly evolving digital landscape, businesses in Al Sadd, Doha, Qatar and across the GCC region are discovering innovative ways to leverage technology and strategic thinking to achieve unprecedented growth. This comprehensive guide explores the latest trends, best practices, and actionable strategies that are transforming how businesses operate and succeed in Qatar's dynamic market.
                    </p>
                    
                    <div className="bg-gradient-to-r from-[#013026]/5 to-[#027A55]/5 p-4 sm:p-8 rounded-xl sm:rounded-2xl border-l-4 border-[#027A55] my-6 sm:my-8">
                      <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                        <span className="w-1.5 sm:w-2 h-6 sm:h-8 bg-gradient-to-b from-[#013026] to-[#027A55] rounded-full"></span>
                        Key Insights for Success in Doha
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700">
                        Understanding the unique dynamics of the Middle Eastern market, particularly in Al Sadd and greater Doha area, is crucial for success. Qatar's business environment offers tremendous opportunities for companies that can adapt their strategies to local preferences while maintaining global standards of excellence.
                      </p>
                    </div>
                    
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-10 mb-4 sm:mb-6">Essential Strategies</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-4 sm:my-6">
                      {[
                        "Strategic planning and implementation",
                        "Data-driven decision making",
                        "Continuous improvement and optimization",
                        "Customer-centric approach",
                        "Innovation and adaptability",
                        "Performance measurement and analytics"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 border-gray-100 hover:border-[#027A55]/30 transition-all duration-300 shadow-sm">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-[#013026] to-[#027A55] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                          <span className="text-xs sm:text-base text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-[#013026]/5 to-[#027A55]/5 p-4 sm:p-8 rounded-xl sm:rounded-2xl border-l-4 border-[#027A55] my-6 sm:my-8">
                      <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                        <span className="w-1.5 sm:w-2 h-6 sm:h-8 bg-gradient-to-b from-[#013026] to-[#027A55] rounded-full"></span>
                        Looking Forward in Qatar
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700">
                        As Doha and Al Sadd continue to position themselves as leading business hubs in the Middle East, companies that embrace innovation, prioritize customer experience, and maintain operational excellence will be best positioned to thrive in Qatar's dynamic market.
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-gray-700 mt-6 sm:mt-8">
                      Whether you're a startup looking to establish your presence in Al Sadd, Doha or an established business seeking to expand across Qatar, understanding these fundamental principles and applying them strategically will help you achieve your goals and build lasting success in Qatar's vibrant business ecosystem.
                    </p>
                  </div>

                  {/* CTA Section */}
                  <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-gradient-to-br from-[#013026] to-[#027A55] rounded-xl sm:rounded-2xl text-center">
                    <h4 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Transform Your Business in Doha?</h4>
                    <p className="text-sm sm:text-base text-white/90 mb-1 sm:mb-2">Visit us at Al Sadd, Doha, Qatar</p>
                    <p className="text-sm sm:text-base text-white/90 mb-4 sm:mb-6">Let's discuss how we can help you achieve your goals</p>
                    <button 
                      onClick={() => {
                        setSelectedPost(null);
                        navigate('/contact');
                      }}
                      className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#013026] font-bold text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105"
                    >
                      Get in Touch
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Blog;
