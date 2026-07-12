import { useState, useEffect, useRef } from 'react';
import { Code, Smartphone, Globe, Table, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import imgSoftware from '../assets/service-software.png';
import imgMobile from '../assets/sercice-mobile.png';
import imgWeb from '../assets/service-web.png';
import imgExcel from '../assets/service-excel.png';

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      id: 'software',
      icon: <Code size={32} className="text-blue-400" />,
      title: 'Custom Software Development',
      description: 'We engineer robust, scalable, and secure enterprise software tailored to solve your most complex business bottlenecks.',
      features: ['School Management Systems', 'Hospital & Church Software', 'POS & Inventory', 'Bespoke Enterprise Apps'],
      image: imgSoftware,
      bgColor: 'from-blue-900/40 to-blue-950',
      accentColor: 'text-blue-400'
    },
    {
      id: 'mobile',
      icon: <Smartphone size={32} className="text-purple-400" />,
      title: 'Mobile & Windows Apps',
      description: 'High-performance cross-platform and native applications delivering exceptional, fluid user experiences.',
      features: ['iOS & Android Native', 'Windows Desktop Pro', 'UI/UX Motion Design', 'App Store Optimization'],
      image: imgMobile,
      bgColor: 'from-purple-900/40 to-purple-950',
      accentColor: 'text-purple-400'
    },
    {
      id: 'web',
      icon: <Globe size={32} className="text-teal-400" />,
      title: 'Website Development',
      description: 'From stunning corporate landing pages to complex e-commerce platforms, we build the blazing-fast web of tomorrow.',
      features: ['E-Commerce Platforms', 'Church & NGO Websites', 'Corporate Portals', 'Responsive Web Apps'],
      image: imgWeb,
      bgColor: 'from-teal-900/40 to-teal-950',
      accentColor: 'text-teal-400'
    },
    {
      id: 'excel',
      icon: <Table size={32} className="text-emerald-400" />,
      title: 'Excel Solutions',
      description: 'Automate your workflows and unlock the power of your data with our elite Excel analytics and macro services.',
      features: ['Advanced VBA Macros', 'Dynamic Dashboards', 'Process Automation', 'Complex Data Modeling'],
      image: imgExcel,
      bgColor: 'from-emerald-900/40 to-emerald-950',
      accentColor: 'text-emerald-400'
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-50 min-h-screen selection:bg-brand-secondary selection:text-brand-primary">
      {/* Page Header */}
      <section className="relative pt-40 pb-20 px-4 md:px-8 z-10 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[100px]" />
           <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-md text-sm font-bold tracking-widest uppercase text-brand-secondary">
              What We Do
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-amber-500">Services.</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto font-light leading-relaxed text-slate-300">
              Comprehensive digital solutions crafted with extreme precision and engineering excellence to accelerate your growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Scroll Section */}
      <section className="relative w-full px-4 md:px-8 pb-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row relative items-start">
          
          {/* Left Text Column */}
          <div className="w-full md:w-1/2 relative z-10">
            {services.map((service, index) => (
              <ServiceTextItem 
                key={service.id} 
                service={service} 
                index={index} 
                setActiveIndex={setActiveIndex} 
              />
            ))}
          </div>

          {/* Right Image Column (Sticky) */}
          <div className="hidden md:flex w-1/2 h-screen sticky top-0 flex-col items-center justify-center p-8 z-0">
             <div className="relative w-full aspect-square max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-xl flex items-center justify-center p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`absolute inset-0 bg-gradient-to-br ${services[activeIndex].bgColor} opacity-30`}
                  />
                  <motion.img
                    key={`img-${activeIndex}`}
                    src={services[activeIndex].image}
                    alt={services[activeIndex].title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                  />
                </AnimatePresence>
             </div>
          </div>

        </div>
      </section>

      {/* Massive CTA Section */}
      <section className="w-full py-32 px-4 md:px-8 relative bg-slate-900 border-t border-slate-800">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
              Ready to build <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-amber-500">something amazing?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Stop settling for template solutions. Let our elite engineering team architect the perfect software for your exact needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link 
                to="/contact" 
                className="px-10 py-5 rounded-full font-extrabold text-lg flex items-center gap-3 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,159,28,0.2)] hover:shadow-[0_0_50px_rgba(255,159,28,0.4)] bg-brand-secondary text-brand-primary"
              >
                Let's Talk <ArrowRight size={20} />
              </Link>
              <Link 
                to="/products" 
                className="px-10 py-5 rounded-full font-bold text-lg text-white border border-slate-700 hover:bg-slate-800 transition-colors flex items-center gap-2"
              >
                View Our Apps
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Child component for the scrolling text blocks
function ServiceTextItem({ service, index, setActiveIndex }: { service: any, index: number, setActiveIndex: (val: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When this item is intersecting roughly at the center of the viewport
        if (entry.isIntersecting) {
          setActiveIndex(index);
        }
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px", // Trigger when element is near center
        threshold: 0
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [index, setActiveIndex]);

  return (
    <div ref={ref} className="min-h-[80vh] flex flex-col justify-center py-20 pr-0 md:pr-12">
      
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-slate-800 border border-slate-700/50 shadow-xl">
          {service.icon}
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
          {service.title}
        </h2>
        
        <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
          {service.description}
        </p>
        
        <ul className="space-y-5 mb-12">
          {service.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-center gap-4 group">
              <div className="bg-slate-800/50 p-1.5 rounded-full group-hover:scale-110 group-hover:bg-slate-700 transition-all border border-slate-700/50">
                 <CheckCircle2 size={20} className={service.accentColor} />
              </div>
              <span className="font-medium text-lg text-slate-300 group-hover:text-white transition-colors">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Mobile-only Image (hidden on desktop where sticky image is used) */}
        <div className="md:hidden w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-slate-800/50 border border-slate-700/50 p-6 flex items-center justify-center">
            <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-30`} />
            <img 
              src={service.image} 
              alt={service.title} 
              className="relative z-10 w-full h-full object-contain drop-shadow-xl"
            />
        </div>
      </motion.div>

    </div>
  );
}
