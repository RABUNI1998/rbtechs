import { Star, Code2, LineChart, Globe, ArrowRight, LayoutDashboard, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';
import heroImg from '../assets/hero.png';
import clientDannieApps from '../assets/DannieApps.png';
import clientNecel from '../assets/necel.png';
import clientKgw from '../assets/kgw.png';
import clientPhds from '../assets/PHDS.png';

// Animated Number Counter Component
function Counter({ from, to, suffix = "" }: { from: number, to: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toString() + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, from, to, suffix]);

  return <span ref={ref}>{from}{suffix}</span>;
}

export default function Home() {
  const expertise = [
    { 
      icon: <Globe size={32} />, 
      title: 'Websites & Web Apps', 
      desc: 'Blazing fast, responsive, and SEO-optimized websites tailored to your brand.',
      colSpan: 'md:col-span-2'
    },
    { 
      icon: <LineChart size={32} />, 
      title: 'Excel Solutions', 
      desc: 'Advanced VBA macros, dynamic dashboards, and complex data analytics.',
      colSpan: 'md:col-span-1'
    },
    { 
      icon: <Smartphone size={32} />, 
      title: 'Custom Software', 
      desc: 'Bespoke mobile (Android/iOS) and desktop applications built for scale.',
      colSpan: 'md:col-span-3'
    },
  ];

  const clients = [
    { id: 'dannie', name: 'Dannie Apps', url: 'https://dannieappsventures.com', logo: clientDannieApps },
    { id: 'necel', name: 'Necel Luxury Hair', url: 'https://necelluxuryhair.com', logo: clientNecel },
    { id: 'kgw', name: 'K Gyamfi Water Supply', url: null, logo: clientKgw },
    { id: 'phds', name: 'PHDS', url: null, logo: clientPhds },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="w-full relative pt-40 pb-56 px-4" style={{ backgroundColor: 'var(--color-brand-primary)', color: 'var(--text-inverse)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-2 font-bold" style={{ color: 'var(--color-brand-secondary)' }}>
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
              </div>
              <span className="text-sm text-white/90">Trusted by Global Clients</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              We Build <br/>Digital <span style={{ color: 'var(--color-brand-secondary)' }}>Excellence.</span>
            </h1>
            
            <p className="text-lg opacity-80 max-w-md leading-relaxed border-l-2 pl-5" style={{ borderColor: 'var(--color-brand-secondary)' }}>
              From bespoke mobile apps and high-performance websites to advanced Excel analytics. RBTECH transforms your complex ideas into powerful software.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link to="/contact" className="flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 shadow-xl" style={{ backgroundColor: 'var(--color-brand-secondary)', color: 'var(--color-brand-primary)' }}>
                Start a Project
              </Link>
              <Link to="/products" className="flex items-center gap-3 font-bold hover:opacity-80 transition-opacity px-4 py-2 border border-white/20 rounded-full bg-white/5">
                <LayoutDashboard size={20} />
                Explore Our Apps
              </Link>
            </div>

            {/* Animated Counters */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10 mt-12 max-w-lg">
              <div>
                <div className="text-4xl font-extrabold text-white"><Counter from={0} to={50} suffix="+" /></div>
                <div className="text-xs font-medium opacity-70 mt-1 uppercase tracking-wider">Projects Shipped</div>
              </div>
              <div className="border-l border-white/10 pl-8">
                <div className="text-4xl font-extrabold text-white"><Counter from={0} to={200} suffix="K+" /></div>
                <div className="text-xs font-medium opacity-70 mt-1 uppercase tracking-wider">App Downloads</div>
              </div>
              <div className="border-l border-white/10 pl-8">
                <div className="text-4xl font-extrabold text-white"><Counter from={0} to={99} suffix="%" /></div>
                <div className="text-xs font-medium opacity-70 mt-1 uppercase tracking-wider">Client Success</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden md:flex h-full items-center justify-center z-20"
          >
            {/* Real Hero Image injected with floating animation */}
            <motion.img 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              src={heroImg} 
              alt="Hero Devices" 
              className="w-full max-w-[600px] object-contain drop-shadow-2xl z-20 relative"
            />
            
            {/* Decorative Glows Behind Hero Image */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/40 rounded-full blur-[100px] pointer-events-none mix-blend-screen z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-[100px] pointer-events-none mix-blend-screen z-10" style={{ backgroundColor: 'var(--color-brand-secondary)', opacity: 0.3 }} />
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

      {/* Trusted By Clients Marquee */}
      <section className="w-full py-16 bg-white border-b border-gray-100 overflow-hidden relative z-20">
        <div className="max-w-7xl mx-auto px-4 text-center mb-10">
          <p className="text-sm font-bold tracking-widest uppercase text-gray-400">Trusted by innovative companies</p>
        </div>
        
        {/* Gradient Fades for the edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max">
          <motion.div 
            className="flex gap-16 md:gap-24 items-center px-8 md:px-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {/* Group 1 */}
            {[...clients, ...clients].map((client, idx) => (
              client.url ? (
                <a key={`g1-${client.id}-${idx}`} href={client.url} target="_blank" rel="noopener noreferrer" className="w-48 h-20 bg-white border border-gray-100 shadow-sm rounded-2xl flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer p-3">
                   <img src={client.logo} alt={client.name} className="max-h-12 max-w-full object-contain" />
                </a>
              ) : (
                <div key={`g1-${client.id}-${idx}`} className="w-48 h-20 bg-white border border-gray-100 shadow-sm rounded-2xl flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-3">
                   <img src={client.logo} alt={client.name} className="max-h-12 max-w-full object-contain" />
                </div>
              )
            ))}
            {/* Group 2 (Duplicate for infinite scroll) */}
            {[...clients, ...clients].map((client, idx) => (
              client.url ? (
                <a key={`g2-${client.id}-${idx}`} href={client.url} target="_blank" rel="noopener noreferrer" className="w-48 h-20 bg-white border border-gray-100 shadow-sm rounded-2xl flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer p-3">
                   <img src={client.logo} alt={client.name} className="max-h-12 max-w-full object-contain" />
                </a>
              ) : (
                <div key={`g2-${client.id}-${idx}`} className="w-48 h-20 bg-white border border-gray-100 shadow-sm rounded-2xl flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-3">
                   <img src={client.logo} alt={client.name} className="max-h-12 max-w-full object-contain" />
                </div>
              )
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bento Grid: Our Expertise - Enhanced with Glassmorphism and Assymmetry */}
      <section className="w-full py-32 px-4 max-w-7xl mx-auto z-20 relative bg-gray-50">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-bold tracking-widest uppercase text-sm mb-2 block" style={{ color: 'var(--color-brand-primary)' }}>
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            Everything you need. <br/>Nothing you don't.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-0">
          {expertise.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: 'spring', stiffness: 200, damping: 20 }}
              className={`bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white flex flex-col items-start text-left group relative overflow-hidden ${item.colSpan}`}
              style={{ transform: i === 1 ? 'translateY(20px)' : 'none' }} // Stagger middle card
            >
              {/* Subtle gradient glow inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-xl relative z-10" style={{ backgroundColor: 'var(--color-brand-primary)' }}>
                {item.icon}
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4 relative z-10 leading-tight">{item.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed mb-8 flex-grow relative z-10 max-w-xl">{item.desc}</p>
              
              <div className="mt-auto relative z-10 w-full pt-6 border-t border-gray-100 flex items-center justify-between">
                <Link to="/services" className="font-bold flex items-center gap-2 transition-colors" style={{ color: 'var(--color-brand-primary)' }}>
                  Explore Services <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
                {/* Decorative circle */}
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-gray-400">↗</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Software Process Section - Deep Dark Mode with Circular Layout */}
      <section className="w-full py-32 px-4 border-t" style={{ backgroundColor: 'var(--color-brand-primary)', color: 'var(--text-inverse)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-brand-secondary" style={{ backgroundColor: 'var(--color-brand-secondary)' }} />
                <span className="text-sm font-bold tracking-widest uppercase text-white/80">Workflow</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6">Our Software <br/>Process</h2>
              <p className="text-xl text-white/70 font-light max-w-md">We don't just write code. We engineer complete solutions designed specifically for your business goals.</p>
            </div>
            
            <div className="space-y-10">
              {[
                { num: '01', title: 'Discovery & Strategy', desc: 'We analyze your requirements, identify bottlenecks, and architect a scalable solution.' },
                { num: '02', title: 'Engineering & UI/UX', desc: 'Our team develops robust native apps, websites, and Excel macros with premium interfaces.' },
                { num: '03', title: 'Launch & Scale', desc: 'We deploy to App Stores, set up your hosting, and provide 24/7 dedicated support.' }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-8 relative group cursor-default">
                  <div className="text-2xl font-black text-white/20 pt-1 tracking-widest font-mono group-hover:text-brand-secondary transition-colors" style={{ color: idx === 0 ? 'var(--color-brand-secondary)' : '' }}>{step.num}</div>
                  <div className={`pb-8 ${idx !== 2 ? 'border-b border-white/10' : ''} w-full transition-colors`}>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/60 text-lg leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center py-12 hidden md:flex"
          >
            {/* The Restored Circular Image Layout! */}
            <div className="w-[450px] h-[450px] rounded-full border-[6px] border-white/10 shadow-2xl p-2 relative">
               <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center border-[8px] relative bg-white/5 backdrop-blur-sm" style={{ borderColor: 'var(--color-brand-secondary)' }}>
                  
                  {/* Abstract Background or Future Image */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent z-0" />
                  <Code2 size={150} className="text-white/20 z-10" />
                  <div className="absolute z-20 text-center px-12 text-white/50 text-sm font-bold uppercase tracking-widest">
                    Process Visual
                  </div>
               </div>
               
               {/* Restored Floating Stats Cards */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-1/4 -right-12 px-8 py-5 rounded-2xl shadow-2xl text-center border border-white/10 backdrop-blur-xl z-30"
                 style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
               >
                  <div className="text-3xl font-extrabold text-white">500+</div>
                  <div className="text-sm text-white/70 font-medium mt-1 uppercase tracking-wider">Commits</div>
               </motion.div>

               <motion.div 
                 animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute top-2/4 -left-8 px-8 py-5 rounded-2xl shadow-2xl text-center mt-12 border border-white/10 backdrop-blur-xl z-30"
                 style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
               >
                  <div className="text-3xl font-extrabold text-white">24/7</div>
                  <div className="text-sm text-white/70 font-medium mt-1 uppercase tracking-wider">Uptime</div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
