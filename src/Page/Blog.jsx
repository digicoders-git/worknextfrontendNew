import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../Component/Footer";
import {
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaSearch,
  FaTag,
  FaArrowLeft,
} from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

// Cloudinary full URL directly use karo
const getImageUrl = (img) => {
  if (Array.isArray(img)) return img[0] || "/logo.png";
  return img || "/logo.png";
};

// ─── DETECT MEDIA TYPE ───────────────────────────────────────────────────────
const getMediaType = (url = "") => {
  const u = url.toLowerCase().split("?")[0];
  if (/\.(mp4|webm|ogg|mov)$/.test(u)) return "video";
  if (/\.(mp3|wav|ogg|aac|m4a)$/.test(u)) return "audio";
  if (/\.pdf$/.test(u)) return "pdf";
  if (/\.(gif)$/.test(u)) return "gif";
  if (/\.(json)$/.test(u)) return "lottie";
  return "image";
};

// ─── SINGLE MEDIA ITEM ───────────────────────────────────────────────────────
function MediaItem({ src, className, isCard = false }) {
  const type = getMediaType(src);

  if (type === "video") return (
    <video
      src={src}
      className={`w-full h-full object-cover ${className}`}
      autoPlay muted loop playsInline
    />
  );

  if (type === "audio") return (
    <div className={`flex flex-col items-center justify-center bg-gradient-to-br from-green-900 to-[#013026] w-full h-full ${className}`}>
      <span className="text-4xl mb-3">🎵</span>
      {!isCard && <audio src={src} controls className="w-full max-w-xs" />}
      {isCard && <p className="text-white text-xs font-semibold">Audio</p>}
    </div>
  );

  if (type === "pdf") return (
    <div className={`flex flex-col items-center justify-center bg-gradient-to-br from-red-900 to-red-700 w-full h-full ${className}`}>
      <span className="text-4xl mb-2">📄</span>
      <p className="text-white text-xs font-semibold">PDF Document</p>
      {!isCard && (
        <a href={src} target="_blank" rel="noreferrer"
          className="mt-3 px-4 py-1.5 bg-white text-red-700 text-xs font-bold rounded-full hover:scale-105 transition-all">
          Open PDF
        </a>
      )}
    </div>
  );

  if (type === "gif") return (
    <img src={src} className={`w-full h-full object-cover ${className}`} alt="animation" />
  );

  // default: image
  return (
    <img
      src={src}
      className={`w-full h-full object-cover ${className}`}
      alt="blog"
      onError={(e) => (e.target.src = "/logo.png")}
    />
  );
}

// ─── MEDIA SLIDER (replaces ImageSlider) ─────────────────────────────────────
function ImageSlider({ images, className, isCard = false }) {
  const [index, setIndex] = useState(0);
  const items = Array.isArray(images) ? images.filter(Boolean) : [images].filter(Boolean);

  useEffect(() => {
    if (items.length <= 1) return;
    const interval = setInterval(() => setIndex((p) => (p + 1) % items.length), 4000);
    return () => clearInterval(interval);
  }, [items.length]);

  if (items.length === 0) return <img src="/logo.png" className={className} alt="blog" />;
  if (items.length === 1) return <MediaItem src={items[0]} className={className} isCard={isCard} />;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {items.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <MediaItem src={src} className="w-full h-full" isCard={isCard} />
        </motion.div>
      ))}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
        {items.map((_, i) => (
          <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === index ? "bg-white w-3" : "bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
}


// Date formatter
const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

// ─── BLOG DETAIL VIEW ────────────────────────────────────────────────────────
function BlogDetail({ blogId, onBack }) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // GET /api/blog/:id se fresh data fetch karo
    axios
      .get(`${API_URL}/api/blog/${blogId}`)
      .then((res) => {
        setBlog(res.data?.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Blog load nahi hua. Please try again.");
        setLoading(false);
      });
  }, [blogId]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <header className="relative mt-[50px] sm:mt-[30px] text-white overflow-hidden" style={{background: 'linear-gradient(to bottom, #076950, #0d5640, #024a38)'}}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0" style={{background: 'radial-gradient(circle at center, rgba(31,209,152,0.15), transparent 70%)'}} />
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-green-400 rounded-full opacity-20 animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-400 rounded-full opacity-20 animate-pulse" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          {loading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-6 bg-white/20 rounded-full w-32 mx-auto" />
              <div className="h-10 bg-white/20 rounded-xl w-3/4 mx-auto" />
              <div className="h-10 bg-white/20 rounded-xl w-1/2 mx-auto" />
            </div>
          ) : error ? (
            <h1 className="text-3xl font-bold text-white">Something went wrong</h1>
          ) : (
            <>
              {blog?.category && (
                <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2 mb-6">
                  <span className="text-green-300 font-semibold text-sm">{blog.category}</span>
                </div>
              )}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg" style={{background: 'linear-gradient(to right, #1FD198, white, #CFFFE9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                {blog?.heading}
              </h1>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-green-200">
                <span className="flex items-center gap-2"><FaUser className="text-green-400" /> {blog?.author}</span>
                <span className="flex items-center gap-2"><FaCalendarAlt className="text-green-400" /> {formatDate(blog?.createdAt)}</span>
              </div>
            </>
          )}
        </div>
      </header>

      {/* Content */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-green-50 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back button */}
          <button
            onClick={() => { onBack(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2 text-[#027A55] font-semibold mb-8 hover:gap-3 transition-all duration-300 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Blogs
          </button>

          {/* Loading skeleton */}
          {loading && (
            <div className="animate-pulse space-y-6">
              <div className="h-72 bg-gray-200 rounded-2xl" />
              <div className="flex gap-2">
                <div className="h-6 bg-gray-200 rounded-full w-16" />
                <div className="h-6 bg-gray-200 rounded-full w-20" />
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
                <div className="h-4 bg-gray-200 rounded w-4/6" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
              </div>
            </div>
          )}

          {/* Error */}
          {error && !loading && (
            <div className="text-center py-16">
              <p className="text-5xl mb-4">⚠️</p>
              <h3 className="text-xl font-bold text-gray-700">{error}</h3>
              <button
                onClick={() => window.location.reload()}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-[#013026] to-[#027A55] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300"
              >
                Retry
              </button>
            </div>
          )}

          {/* Blog Content */}
          {!loading && !error && blog && (
            <>
              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl mb-10 h-64 sm:h-80 lg:h-96">
                <ImageSlider images={blog.image} className="w-full h-full" />
              </div>

              {/* Tags */}
              {blog.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {blog.tags.map((tag, i) => (
                    <span key={i} className="flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                      <FaTag className="text-[10px]" /> {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="blog-detail-content">
                <style>{`
                  .blog-detail-content { font-size: 1rem; line-height: 1.8; color: #374151; }
                  .blog-detail-content p { margin: 0.6em 0; min-height: 1.2em; }
                  .blog-detail-content h1 { font-size: 2em; font-weight: 700; margin: 1em 0 0.5em; color: #111827; }
                  .blog-detail-content h2 { font-size: 1.6em; font-weight: 700; margin: 1em 0 0.5em; color: #111827; }
                  .blog-detail-content h3 { font-size: 1.3em; font-weight: 700; margin: 1em 0 0.5em; color: #111827; }
                  .blog-detail-content h4 { font-size: 1.1em; font-weight: 700; margin: 0.8em 0 0.4em; }
                  .blog-detail-content ul { list-style-type: disc; padding-left: 2em; margin: 0.5em 0; }
                  .blog-detail-content ul ul { list-style-type: circle; }
                  .blog-detail-content ol { list-style-type: decimal; padding-left: 2em; margin: 0.5em 0; }
                  .blog-detail-content li { display: list-item; margin: 0.3em 0; }
                  .blog-detail-content strong, .blog-detail-content b { font-weight: 700; }
                  .blog-detail-content em, .blog-detail-content i { font-style: italic; }
                  .blog-detail-content u { text-decoration: underline; }
                  .blog-detail-content a { color: #027A55; text-decoration: underline; }
                  .blog-detail-content blockquote { border-left: 4px solid #027A55; padding-left: 1em; margin: 1em 0; color: #555; font-style: italic; background: #f9fafb; border-radius: 0 8px 8px 0; }
                  .blog-detail-content img { max-width: 100%; height: auto; display: block; margin: 12px auto; border-radius: 8px; }
                  .blog-detail-content table { width: 100%; border-collapse: collapse; margin: 1em 0; }
                  .blog-detail-content td, .blog-detail-content th { border: 1px solid #ddd; padding: 8px; }
                  .blog-detail-content th { background: #f3f4f6; font-weight: 700; }
                  .blog-detail-content iframe { width: 100%; min-height: 315px; border: none; display: block; margin: 12px 0; }
                  .blog-detail-content video { width: 100%; display: block; margin: 12px 0; }
                  .blog-detail-content pre { background: #1f2937; color: #f9fafb; padding: 1em; border-radius: 8px; overflow-x: auto; margin: 1em 0; }
                  .blog-detail-content code { background: #f3f4f6; padding: 2px 6px; border-radius: 4px; font-family: monospace; font-size: 0.9em; }
                `}</style>
                <div dangerouslySetInnerHTML={{ __html: blog.description }} />
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ─── MAIN BLOG PAGE ───────────────────────────────────────────────────────────
export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const navigate = useNavigate();

  // Fetch all blogs
  useEffect(() => {
    axios
      .get(`${API_URL}/api/blog`)
      .then((res) => {
        setBlogs(res.data?.data || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Blogs load nahi ho sake. Please try again.");
        setLoading(false);
      });
  }, []);

  // If a blog is selected → show detail view
  if (selectedBlog) {
    return <BlogDetail blogId={selectedBlog} onBack={() => setSelectedBlog(null)} />;
  }

  // Filter — only search, no category filter
  const filtered = (blogs || []).filter(
    (b) =>
      b?.heading?.toLowerCase().includes(search.toLowerCase()) ||
      b?.description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ── */}
      <header className="relative mt-[50px] sm:mt-[30px] text-white overflow-hidden" style={{background: 'linear-gradient(to bottom, #076950, #0d5640, #024a38)'}}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{background: 'radial-gradient(circle at center, rgba(31,209,152,0.15), transparent 70%)'}} />
          <div className="absolute top-0 left-0 right-0 h-px" style={{background: 'linear-gradient(to right, transparent, #86efac, transparent)'}} />
        </div>
        <div className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 w-48 h-48 sm:w-72 sm:h-72 bg-green-400 rounded-full opacity-20 animate-pulse" />
        <div className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 w-64 h-64 sm:w-96 sm:h-96 bg-green-400 rounded-full opacity-20 animate-pulse" />
        <div className="hidden sm:block absolute top-20 left-10 w-6 h-6 bg-green-400/40 rounded-full animate-bounce" />
        <div className="hidden sm:block absolute top-40 right-32 w-8 h-8 bg-yellow-400/40 rounded-full animate-bounce" style={{ animationDelay: "1s" }} />
        <div className="hidden sm:block absolute bottom-20 right-16 w-5 h-5 bg-green-300/40 rounded-full animate-bounce" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-8 hover:bg-white/20 transition-all duration-500 shadow-lg">
            <div className="relative mr-2 sm:mr-3">
              <span className="text-green-400 text-base sm:text-lg animate-pulse">📝</span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping" />
            </div>
            <span className="text-green-300 font-semibold text-sm sm:text-base tracking-wide">
              Insights, Tips & Industry News
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            <span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(to right, #1FD198, white, #CFFFE9)'}}>
              Our Blog
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text mt-3" style={{backgroundImage: 'linear-gradient(to right, #86efac, #dcfce7)'}}>
              Knowledge That Drives Growth
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-100 leading-relaxed max-w-3xl mx-auto mb-10">
            Stay updated with the latest trends in Digital Marketing, Web Development, AI, Graphic Design, and Business Consulting.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-11 pr-5 py-3.5 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-green-400 focus:bg-white/20 transition-all duration-300 text-sm sm:text-base"
            />
          </div>
        </div>
      </header>



      {/* ── BLOG GRID ── */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-green-50 min-h-screen py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 bg-[#027A55] rounded-full animate-pulse"></span>
              <span className="text-[#027A55] font-semibold text-xs sm:text-sm tracking-wide">Fresh Articles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Latest from Our{" "}
              <span className="bg-gradient-to-r from-[#013026] to-[#027A55] bg-clip-text text-transparent">
                Blog
              </span>
            </h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-xl mx-auto">
              Expert insights, industry trends, and actionable tips to help your business grow.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-[#013026] to-[#027A55] rounded-full"></div>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-200" />
                  <div className="p-5 space-y-3">
                    <div className="h-3 bg-gray-200 rounded w-1/3" />
                    <div className="h-5 bg-gray-200 rounded w-full" />
                    <div className="h-5 bg-gray-200 rounded w-4/5" />
                    <div className="h-3 bg-gray-200 rounded w-full" />
                    <div className="h-3 bg-gray-200 rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="text-center py-24">
              <p className="text-5xl mb-4">⚠️</p>
              <h3 className="text-xl font-bold text-gray-700">{error}</h3>
              <button
                onClick={() => window.location.reload()}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-[#013026] to-[#027A55] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300"
              >
                Retry
              </button>
            </div>
          )}

          {/* No Results */}
          {!loading && !error && filtered?.length === 0 && (
            <div className="text-center py-24">
              <p className="text-5xl mb-4">🔍</p>
              <h3 className="text-xl font-bold text-gray-700">No articles found</h3>
              <p className="text-gray-500 mt-2">Try a different search or category</p>
            </div>
          )}

          {/* Blogs — sab cards same style: image upar, text neeche, 3 per row */}
          {!loading && !error && (filtered?.length || 0) > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filtered.map((blog) => (
                <div
                  key={blog._id}
                  onClick={() => setSelectedBlog(blog._id)}
                  className="group bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                >
                  {/* Image — upar */}
                  <div className="relative overflow-hidden h-52 sm:h-56 w-full flex-shrink-0">
                    <ImageSlider images={blog.image} className="w-full h-full group-hover:scale-110 transition-transform duration-700" isCard={true} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    {blog.category && (
                      <span className="absolute top-3 left-3 bg-gradient-to-r from-[#013026] to-[#027A55] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                        {blog.category}
                      </span>
                    )}
                  </div>

                  {/* Text — neeche */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#027A55] transition-colors duration-300 line-clamp-2">
                      {blog.heading}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1 mb-4">
                      {blog.description?.replace(/<[^>]*>/g, " ").replace(/&[a-z]+;/gi, " ").replace(/\s+/g, " ").trim()}
                    </p>

                    {/* Tags */}
                    {blog.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {blog.tags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-full flex items-center gap-1 font-medium">
                            <FaTag className="text-[8px]" /> {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400 border-t border-gray-100 pt-4 mt-auto">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <FaUser className="text-[#027A55]" /> {blog.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt className="text-[#027A55]" /> {formatDate(blog.createdAt)}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-[#027A55] font-semibold group-hover:gap-2 transition-all duration-300">
                        Read More <FaArrowRight className="text-[10px]" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-[#013026] to-[#027A55] py-16 sm:py-20 text-white text-center relative overflow-hidden">
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-green-400 rounded-full opacity-10 animate-pulse" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-green-400 rounded-full opacity-10 animate-pulse" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Want to Grow Your Business?
          </h2>
          <p className="text-green-200 text-base sm:text-lg mb-8 leading-relaxed">
            Let's talk about how WorkNestConnect can help you achieve your digital goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3.5 bg-white text-[#013026] font-bold rounded-xl hover:bg-green-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get In Touch
            </button>
            <button
              onClick={() => navigate("/services")}
              className="px-8 py-3.5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              View Services
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}