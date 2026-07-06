import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    // IMPORTANT: Replace this with your actual Web3Forms Access Key
    // You can get a free key at: https://web3forms.com/
    formData.append("access_key", "19966e8e-e591-4698-a8f6-e1eb5b5553ac");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        
        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Error submitting form", data);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden bg-gray-50">
      {/* Page Header */}
      <section className="w-full relative pt-40 pb-48 px-4" style={{ backgroundColor: 'var(--color-brand-primary)', color: 'var(--text-inverse)' }}>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm font-bold tracking-widest uppercase" style={{ color: 'var(--color-brand-secondary)' }}>
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">Let's Talk.</h1>
            <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto font-light leading-relaxed">
              Ready to start your next massive project? Reach out to our team of engineering experts today.
            </p>
          </motion.div>
        </div>
        
        {/* Custom SVG Curve Divider */}
        <div className="hero-curve-divider pointer-events-none">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="rgba(255,255,255,0.05)"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05c50.7,38.41,114.73,50.7,178.6,48.78,138.8-4.18,272.2-46.13,410.6-53.79C774.5,58.59,887.6,108.31,1028,103.87c74.4-2.38,138.7-22.75,172-35.34V0Z" fill="#f9fafb"></path>
          </svg>
        </div>
      </section>

      {/* Contact Content */}
      <section className="w-full max-w-7xl mx-auto px-4 py-12 -mt-24 relative z-20 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="bg-white/80 backdrop-blur-2xl rounded-[3rem] p-12 h-full shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Contact Information</h2>
              <div className="space-y-12">
                <div className="flex items-start gap-6 group">
                  <div className="p-5 rounded-2xl transition-transform group-hover:scale-110 shadow-lg" style={{ backgroundColor: 'var(--color-brand-primary)', color: 'var(--text-inverse)' }}>
                    <Mail size={32} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-2xl text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-500 text-lg">josephmarfo1998@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="p-5 rounded-2xl transition-transform group-hover:scale-110 shadow-lg" style={{ backgroundColor: 'var(--color-brand-secondary)', color: 'var(--color-brand-primary)' }}>
                    <Phone size={32} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-2xl text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-500 text-lg">+233 24 525 9221<br/>+233 59 299 2566</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="p-5 rounded-2xl transition-transform group-hover:scale-110 shadow-lg" style={{ backgroundColor: 'var(--color-brand-primary)', color: 'var(--text-inverse)' }}>
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-2xl text-gray-900 mb-2">Visit Us</h3>
                    <p className="text-gray-500 text-lg leading-relaxed">
                      Kumasi, Ghana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Functional Contact Form Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-2xl rounded-[3rem] p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white relative overflow-hidden"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Send a Message</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="first_name" className="text-sm font-bold text-gray-500 uppercase tracking-wider">First Name</label>
                  <input required id="first_name" name="First Name" type="text" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last_name" className="text-sm font-bold text-gray-500 uppercase tracking-wider">Last Name</label>
                  <input required id="last_name" name="Last Name" type="text" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                <input required id="email" name="Email" type="email" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-500 uppercase tracking-wider">Message</label>
                <textarea required id="message" name="Message" rows={5} className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              {/* Status Feedback */}
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3">
                    <CheckCircle2 size={20} /> Message sent successfully! We'll be in touch soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-3">
                    <AlertCircle size={20} /> Failed to send message. Please ensure the API key is configured.
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-5 rounded-xl font-extrabold text-lg flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 shadow-lg disabled:opacity-70 disabled:hover:translate-y-0" 
                style={{ backgroundColor: 'var(--color-brand-secondary)', color: 'var(--color-brand-primary)' }}
              >
                {status === 'submitting' ? (
                  <><Loader2 size={24} className="animate-spin" /> Sending...</>
                ) : (
                  <><Send size={24} /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
