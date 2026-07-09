import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Download, ChevronRight, ShieldCheck, LifeBuoy, ArrowLeft, Share2, Info, Monitor, Smartphone, Video, Plus, ChevronDown, CheckCircle } from 'lucide-react';
import { getProductById, productsData } from '../data/products';
import { trackAppDownload, getAppDownloads, getProductReviews, addProductReview, type Review } from '../lib/firebase';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');

  const [downloads, setDownloads] = useState<any>({ total: 0 });
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewForm, setReviewForm] = useState({ user: '', rating: 5, text: '' });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (product) {
      loadFirebaseData();
    }
  }, [product]);

  const loadFirebaseData = async () => {
    if (!product) return;
    const dl = await getAppDownloads(product.id);
    if (dl) setDownloads(dl);

    const revs = await getProductReviews(product.id);
    setReviews(revs);
  };

  const handleDownload = async (platform: string) => {
    if (product) {
      await trackAppDownload(product.id, platform);
      // Update local state optimistically
      setDownloads((prev: any) => ({
        ...prev,
        [platform]: (prev[platform] || 0) + 1,
        total: (prev.total || 0) + 1
      }));
    }
    // Note: Since this is an external link or local file, window.location.href or window.open is usually used.
    // Given the anchor has the href, we just track it.
  };

  const submitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;
    setIsSubmittingReview(true);
    await addProductReview(product.id, { ...reviewForm, date: new Date() });
    await loadFirebaseData();
    setShowReviewForm(false);
    setReviewForm({ user: '', rating: 5, text: '' });
    setIsSubmittingReview(false);
  };

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

  const similarApps = productsData.filter(p => p.id !== product.id).slice(0, 3);
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : product.rating;

  return (
    <div className="bg-white min-h-screen pb-24 font-sans">
      {/* Immersive Glassmorphism Header */}
      <div className="relative w-full overflow-hidden" style={{ backgroundColor: 'var(--color-brand-primary)' }}>
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
                        } else {
                          handleDownload(platform);
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
                    {averageRating}
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
                <div className="w-px h-10 bg-white/20"></div>
                <div className="flex flex-col">
                  <span className="uppercase text-[11px] tracking-widest opacity-70 mb-1">Downloads</span>
                  <span className="text-xl font-bold">{downloads.total > 0 ? `${downloads.total}+` : product.downloads}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Pricing Banner */}
      {product.pricing && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <CheckCircle size={24} className="text-green-300" />
                Upgrade to {product.pricing.type}
              </h3>
              <p className="opacity-90 mt-1">Unlock all premium features, remove ads, and get priority support.</p>
            </div>
            <div className="mt-4 sm:mt-0 text-3xl font-extrabold bg-white/20 px-6 py-2 rounded-full border border-white/30">
              {product.pricing.price}
            </div>
          </div>
        </div>
      )}

      {/* Animated Screenshots & Video Gallery */}
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
            {product.videoTrailerUrl && (
              <div className="h-[450px] md:h-[600px] aspect-[9/16] md:aspect-video rounded-3xl shadow-xl border border-gray-200/60 snap-center flex-shrink-0 overflow-hidden bg-black relative">
                <video 
                  src={product.videoTrailerUrl} 
                  controls 
                  autoPlay 
                  muted 
                  loop 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 backdrop-blur-md">
                  <Video size={14} /> Trailer
                </div>
              </div>
            )}
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
            
            <div className="bg-gray-50 rounded-[2rem] p-8 md:p-10 border border-gray-100 mb-12">
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

            {/* FAQs */}
            {product.faqs && product.faqs.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {product.faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
                      <button 
                        className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 flex justify-between items-center transition-colors font-bold text-gray-800"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      >
                        {faq.question}
                        <ChevronDown size={20} className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openFaq === index && (
                          <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="overflow-hidden bg-gray-50"
                          >
                            <p className="p-6 pt-2 text-gray-600 border-t border-gray-100">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* System Requirements */}
            {product.systemRequirements && (
              <div className="mb-12">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-6">System Requirements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(product.systemRequirements).map(([os, reqs]) => (
                    <div key={os} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-4 text-blue-600">
                        {os.toLowerCase().includes('windows') ? <Monitor size={24} /> : <Smartphone size={24} />}
                        <h4 className="font-bold text-lg text-gray-900">{os}</h4>
                      </div>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li><strong className="text-gray-800">OS:</strong> {reqs.os}</li>
                        <li><strong className="text-gray-800">Memory:</strong> {reqs.ram}</li>
                        <li><strong className="text-gray-800">Storage:</strong> {reqs.storage}</li>
                        {reqs.architecture && <li><strong className="text-gray-800">Architecture:</strong> {reqs.architecture}</li>}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews Section */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-extrabold text-gray-900">User Reviews</h3>
                <button 
                  onClick={() => setShowReviewForm(!showReviewForm)}
                  className="flex items-center gap-2 text-blue-600 font-bold hover:bg-blue-50 px-4 py-2 rounded-full transition-colors"
                >
                  <Plus size={18} /> Write a Review
                </button>
              </div>

              <AnimatePresence>
                {showReviewForm && (
                  <motion.form 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    onSubmit={submitReview}
                    className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-8 overflow-hidden"
                  >
                    <div className="mb-4">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                      <input 
                        required
                        type="text" 
                        value={reviewForm.user}
                        onChange={e => setReviewForm({...reviewForm, user: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Rating</label>
                      <select 
                        value={reviewForm.rating}
                        onChange={e => setReviewForm({...reviewForm, rating: Number(e.target.value)})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      >
                        {[5, 4, 3, 2, 1].map(r => <option key={r} value={r}>{r} Stars</option>)}
                      </select>
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Review</label>
                      <textarea 
                        required
                        rows={3}
                        value={reviewForm.text}
                        onChange={e => setReviewForm({...reviewForm, text: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="What do you think about this app?"
                      ></textarea>
                    </div>
                    <button 
                      disabled={isSubmittingReview}
                      type="submit" 
                      className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50"
                    >
                      {isSubmittingReview ? 'Submitting...' : 'Submit Review'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

              <div className="space-y-6">
                {reviews.length === 0 ? (
                  <p className="text-gray-500 italic">No reviews yet. Be the first to review!</p>
                ) : (
                  reviews.map((review, idx) => (
                    <div key={idx} className="bg-white border border-gray-100 shadow-sm p-6 rounded-2xl">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-bold text-gray-900">{review.user}</h4>
                          <span className="text-sm text-gray-400">{review.date?.toLocaleDateString()}</span>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-200"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600">{review.text}</p>
                    </div>
                  ))
                )}
              </div>
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
                    <span className="text-gray-900 font-bold text-right">{product.developer}</span>
                  </div>
                  <div className="flex justify-between items-center pb-5 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">Size</span>
                    <span className="text-gray-900 font-bold text-right">{product.size}</span>
                  </div>
                  <div className="flex justify-between items-center pb-5 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">Version</span>
                    <span className="text-gray-900 font-bold text-right">{product.version}</span>
                  </div>
                  <div className="flex justify-between items-center pb-5 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">Released</span>
                    <span className="text-gray-900 font-bold text-right">{product.releaseDate}</span>
                  </div>
                  {product.languages && (
                    <div className="flex justify-between items-start pt-2">
                      <span className="text-gray-500 font-medium whitespace-nowrap mr-4">Languages</span>
                      <span className="text-gray-900 font-bold text-right leading-tight">
                        {product.languages.join(', ')}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Changelog */}
              {product.changelog && product.changelog.length > 0 && (
                <div className="bg-gray-50 rounded-[1.5rem] p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Info size={18} className="text-blue-600" /> What's New
                  </h3>
                  {product.changelog.map((log, idx) => (
                    <div key={idx} className="mb-4 last:mb-0">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded">v{log.version}</span>
                        <span className="text-xs text-gray-500">{log.date}</span>
                      </div>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {log.changes.map((change, i) => (
                          <li key={i}>{change}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

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

      {/* Similar Apps Section */}
      {similarApps.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 py-12 border-t border-gray-100">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarApps.map(app => (
              <Link to={`/products/${app.id}`} key={app.id}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <img src={app.iconUrl} alt={app.name} className="w-16 h-16 rounded-xl object-cover" />
                  <div>
                    <h4 className="font-bold text-gray-900">{app.name}</h4>
                    <p className="text-sm text-gray-500">{app.category}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
