import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { Star, Download } from 'lucide-react';
import { productsData } from '../data/products';
import AdBanner from '../components/AdBanner';
import { Helmet } from 'react-helmet-async';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

export default function Products() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-50 pb-24">
      <Helmet>
        <title>RBTECHS App Store | Premium Software & Applications</title>
        <meta name="description" content="Discover our suite of beautifully crafted applications designed to supercharge your workflow. Download RB Player, RB Calculator, and more." />
      </Helmet>

      {/* Premium Hero Section */}
      <section className="w-full relative pt-40 pb-32 px-4" style={{ backgroundColor: 'var(--color-brand-primary)', color: 'var(--text-inverse)' }}>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <Star size={16} style={{ color: 'var(--color-brand-secondary)' }} className="fill-current" />
              <span className="text-sm font-bold uppercase tracking-widest">Premium Software</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight">
              App Store<span style={{ color: 'var(--color-brand-secondary)' }}>.</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-80 max-w-2xl mx-auto font-light leading-relaxed">
              Discover our suite of beautifully crafted applications designed to supercharge your workflow.
            </p>
          </motion.div>
        </div>

        {/* Custom SVG Curve Divider matching Home.tsx */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[120px]">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="rgba(255,255,255,0.05)"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05c50.7,38.41,114.73,50.7,178.6,48.78,138.8-4.18,272.2-46.13,410.6-53.79C774.5,58.59,887.6,108.31,1028,103.87c74.4-2.38,138.7-22.75,172-35.34V0Z" fill="#f9fafb"></path>
          </svg>
        </div>
      </section>

      {/* Featured App (Hero Card) */}
      <section className="w-full max-w-7xl mx-auto px-4 -mt-20 z-20 relative">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <Link to={`/products/${productsData[0].id}`} className="block relative rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group bg-white border-[8px] border-white/50 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 transition-opacity duration-500 group-hover:from-black/95" />
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              src={productsData[0].bannerUrl} 
              alt={productsData[0].name} 
              className="w-full h-[500px] md:h-[600px] object-cover"
            />
            <div className="absolute bottom-0 left-0 p-8 md:p-14 z-20 flex flex-col md:flex-row items-start md:items-end gap-8 w-full">
              <motion.img 
                whileHover={{ rotate: -5, scale: 1.05 }}
                src={productsData[0].iconUrl} alt="icon" 
                className="w-28 h-28 md:w-40 md:h-40 rounded-[24%] shadow-2xl border border-white/20" 
              />
              <div className="text-white flex-grow">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-4" style={{ backgroundColor: 'var(--color-brand-secondary)', color: 'var(--color-brand-primary)' }}>Featured</span>
                <h2 className="text-5xl md:text-6xl font-extrabold mb-3">{productsData[0].name}</h2>
                <p className="text-lg md:text-xl opacity-90 max-w-2xl font-light leading-relaxed mb-6">{productsData[0].description}</p>
                <div className="flex flex-wrap gap-3">
                  {productsData[0].platforms.map(p => (
                    <span key={p} className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-lg text-sm font-bold tracking-wide border border-white/10">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* App Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 mt-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">More Apps</h2>
          <div className="h-[2px] flex-grow ml-8 bg-gradient-to-r from-gray-200 to-transparent"></div>
        </div>

        <div className="mb-12">
          <AdBanner />
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {productsData.slice(1).map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Link to={`/products/${product.id}`} className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-400 border border-gray-100 flex flex-col h-full group relative overflow-hidden">
                {/* Subtle background gradient on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" style={{ backgroundColor: 'var(--color-brand-primary)' }} />
                
                <div className="flex items-start gap-6 mb-8 relative z-10">
                  <motion.img 
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    src={product.iconUrl} alt={product.name} 
                    className="w-24 h-24 rounded-[22%] shadow-md border border-gray-100 flex-shrink-0" 
                  />
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-1 leading-tight">{product.name}</h3>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{product.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.platforms.map(p => (
                        <span key={p} className="text-[10px] uppercase font-bold px-2 py-1 bg-gray-100 rounded text-gray-600">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow relative z-10">{product.description}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto relative z-10">
                  <div className="flex items-center gap-1.5" style={{ color: 'var(--color-brand-secondary)' }}>
                    <span className="font-bold text-gray-900">{product.rating}</span>
                    <Star size={16} className="fill-current" />
                  </div>
                  <motion.div 
                    whileHover={!product.comingSoon ? { scale: 1.05 } : {}}
                    whileTap={!product.comingSoon ? { scale: 0.95 } : {}}
                    className={`flex items-center gap-2 px-6 py-2.5 font-bold text-sm rounded-full transition-shadow ${product.comingSoon ? 'opacity-50 cursor-not-allowed' : 'shadow-md hover:shadow-lg'}`}
                    style={{ backgroundColor: 'var(--color-brand-primary)', color: 'var(--text-inverse)' }}
                  >
                    {product.comingSoon ? 'Coming Soon' : <><Download size={16} /> Get</>}
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
