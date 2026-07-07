import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Download, ChevronRight, ShieldCheck, LifeBuoy, ArrowLeft, Share2 } from 'lucide-react';
import { getProductById } from '../data/products';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">App Not Found</h1>
        <Link to="/products" className="text-blue-600 font-bold hover:underline">
          &larr; Back to App Store
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-24 font-sans">
      {/* Immersive Glassmorphism Header */}
      <div className="relative w-full overflow-hidden" style={{ backgroundColor: 'var(--color-brand-primary)' }}>
        {/* Dynamic blurred background element for a premium feel */}
        <div className="absolute inset-0 opacity-40 blur-3xl scale-110 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-500/30 rounded-full mix-blend-screen" />
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-purple-500/30 rounded-full mix-blend-screen" />
        </div>

        <section className="max-w-6xl mx-auto px-4 pt-32 pb-16 relative z-10 text-white">
          <div className="flex justify-between items-center mb-10">
            <Link to="/products" className="inline-flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity text-white/80">
              <ArrowLeft size={20} /> App Store
            </Link>
            
            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: product.name,
                    text: `Check out ${product.name} on RB-TECH App Store!`,
                    url: window.location.href,
                  }).catch(console.error);
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }
              }}
              className="inline-flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity text-white/80 bg-white/10 px-4 py-2 rounded-full border border-white/20 hover:bg-white/20"
            >
              <Share2 size={18} /> Share
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              src={product.iconUrl} 
              alt={product.name} 
              className="w-32 h-32 md:w-48 md:h-48 rounded-[24%] shadow-2xl border border-white/20 flex-shrink-0"
            />
            <div className="flex-grow">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight"
              >
                {product.name}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl font-medium mb-8 opacity-90" style={{ color: 'var(--color-brand-secondary)' }}
              >
                {product.developer}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                {product.platforms.map((platform, i) => {
                  const downloadUrl = product.downloadUrls?.[platform];
                  const isAvailable = downloadUrl && downloadUrl !== '#';

                  return (
                    <motion.a 
                      key={platform} 
                      href={isAvailable ? downloadUrl : '#'}
                      download={isAvailable}
                      onClick={(e) => {
                        if (!isAvailable) {
                          e.preventDefault();
                          alert(`${platform} version is coming soon!`);
                        }
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-4 font-bold rounded-full transition-shadow shadow-xl hover:shadow-2xl flex items-center gap-3 text-lg ${!isAvailable ? 'opacity-80' : ''}`}
                      style={{ 
                        backgroundColor: i === 0 ? 'var(--color-brand-secondary)' : 'rgba(255,255,255,0.1)', 
                        color: i === 0 ? 'var(--color-brand-primary)' : 'white',
                        border: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.2)',
                        cursor: isAvailable ? 'pointer' : 'default'
                      }}
                    >
                      <Download size={22} />
                      Get for {platform}
                    </motion.a>
                  );
                })}
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap items-center gap-8 text-sm md:text-base font-medium opacity-80"
              >
                <div className="flex flex-col">
                  <span className="uppercase text-[11px] tracking-widest opacity-70 mb-1">Rating</span>
                  <div className="flex items-center gap-1.5 text-xl font-bold">
                    {product.rating}
                    <Star size={18} className="fill-current text-yellow-400" />
                  </div>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div className="flex flex-col">
                  <span className="uppercase text-[11px] tracking-widest opacity-70 mb-1">Age</span>
                  <span className="text-xl font-bold">{product.ageRating}</span>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div className="flex flex-col">
                  <span className="uppercase text-[11px] tracking-widest opacity-70 mb-1">Category</span>
                  <span className="text-xl font-bold">{product.category}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Animated Screenshots Gallery */}
      <section className="py-16 border-b border-gray-100 overflow-hidden bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Preview</h2>
          <motion.div 
            className="flex gap-6 overflow-x-auto pb-8 snap-x custom-scrollbar" 
            style={{ 
              scrollbarWidth: 'auto', 
              scrollbarColor: 'var(--color-brand-secondary) rgba(0,0,0,0.05)' 
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {product.screenshots.map((img, index) => (
              <motion.img 
                key={index} 
                whileHover={{ scale: 1.02 }}
                src={img} 
                alt={`Screenshot ${index + 1}`} 
                className="h-[450px] md:h-[600px] w-auto object-cover rounded-3xl shadow-xl border border-gray-200/60 snap-center flex-shrink-0"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Description & Information */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-grow lg:w-2/3">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">About This App</h2>
            <p className="text-gray-600 text-xl leading-relaxed whitespace-pre-line mb-12 font-light">
              {product.longDescription}
            </p>
            
            <div className="bg-gray-50 rounded-[2rem] p-8 md:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
                  <motion.li 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    key={index} className="flex items-start gap-4 text-gray-700 text-lg"
                  >
                    <div className="mt-1" style={{ color: 'var(--color-brand-primary)' }}>
                      <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Information Sidebar with Glass/Premium styling */}
          <div className="lg:w-1/3">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl shadow-gray-200/50">
                <h3 className="text-xl font-extrabold text-gray-900 mb-6">Information</h3>
                <div className="space-y-5">
                  <div className="flex justify-between items-center pb-5 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">Provider</span>
                    <span className="text-gray-900 font-bold">{product.developer}</span>
                  </div>
                  <div className="flex justify-between items-center pb-5 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">Size</span>
                    <span className="text-gray-900 font-bold">{product.size}</span>
                  </div>
                  <div className="flex justify-between items-center pb-5 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">Version</span>
                    <span className="text-gray-900 font-bold">{product.version}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Released</span>
                    <span className="text-gray-900 font-bold">{product.releaseDate}</span>
                  </div>
                </div>
              </div>

              {/* Support and Privacy Footer Links */}
              <div className="space-y-4 pt-4">
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={product.privacyPolicyUrl} 
                  className="w-full flex items-center justify-between p-6 bg-white border border-gray-200 rounded-[1.5rem] shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <ShieldCheck size={24} />
                    </div>
                    <span className="font-bold text-lg text-gray-900">Privacy Policy</span>
                  </div>
                  <ChevronRight size={24} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </motion.a>

                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={product.supportUrl} 
                  className="w-full flex items-center justify-between p-6 bg-white border border-gray-200 rounded-[1.5rem] shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <LifeBuoy size={24} />
                    </div>
                    <span className="font-bold text-lg text-gray-900">Developer Support</span>
                  </div>
                  <ChevronRight size={24} className="text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
