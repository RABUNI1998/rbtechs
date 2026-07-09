import { Code, Smartphone, Globe, Table, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <Code size={32} className="text-white" />,
      title: 'Custom Software Development',
      description: 'We engineer robust, scalable, and secure enterprise software tailored to solve your most complex business bottlenecks.',
      features: ['School Management Systems', 'Hospital & Church Software', 'POS & Inventory', 'Bespoke Enterprise Apps'],
      placeholder: 'service-software.png',
      bgColor: 'from-blue-500/20 to-blue-900/5'
    },
    {
      icon: <Smartphone size={32} className="text-white" />,
      title: 'Mobile & Windows Apps',
      description: 'High-performance cross-platform and native applications delivering exceptional, fluid user experiences.',
      features: ['iOS & Android Native', 'Windows Desktop Pro', 'UI/UX Motion Design', 'App Store Optimization'],
      placeholder: 'service-mobile.png',
      bgColor: 'from-purple-500/20 to-purple-900/5'
    },
    {
      icon: <Globe size={32} className="text-white" />,
      title: 'Website Development',
      description: 'From stunning corporate landing pages to complex e-commerce platforms, we build the blazing-fast web of tomorrow.',
      features: ['E-Commerce Platforms', 'Church & NGO Websites', 'Corporate Portals', 'Responsive Web Apps'],
      placeholder: 'service-web.png',
      bgColor: 'from-teal-500/20 to-teal-900/5'
    },
    {
      icon: <Table size={32} className="text-white" />,
      title: 'Excel Solutions',
      description: 'Automate your workflows and unlock the power of your data with our elite Excel analytics and macro services.',
      features: ['Advanced VBA Macros', 'Dynamic Dashboards', 'Process Automation', 'Complex Data Modeling'],
      placeholder: 'service-excel.png',
      bgColor: 'from-emerald-500/20 to-emerald-900/5'
    }
  ];

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
              What We Do
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">Our Services.</h1>
            <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto font-light leading-relaxed">
              Comprehensive digital solutions crafted with extreme precision and engineering excellence to accelerate your growth.
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

      {/* Services Content (Elevated Zig-Zag) */}
      <section className="w-full max-w-7xl mx-auto px-4 py-12 -mt-20 relative z-20 space-y-32 mb-32">
        {services.map((service, index) => (
          <div key={index} className={`flex flex-col md:flex-row gap-16 lg:gap-24 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Text Side */}
            <motion.div 
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full md:w-1/2 relative"
            >
              {/* Massive background number for depth */}
              <div className="absolute -top-20 -left-10 text-[200px] font-black text-gray-200/50 -z-10 select-none">
                0{index + 1}
              </div>

              <div className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-14 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white relative z-10 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-shadow duration-500">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-xl" style={{ backgroundColor: 'var(--color-brand-primary)' }}>
                  {service.icon}
                </div>
                <h2 className="text-4xl font-extrabold mb-6 text-gray-900 leading-tight">{service.title}</h2>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed font-light">{service.description}</p>
                <ul className="space-y-5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 group">
                      <div className="bg-blue-50 p-1.5 rounded-full group-hover:scale-110 transition-transform">
                         <CheckCircle2 size={20} style={{ color: 'var(--color-brand-secondary)' }} />
                      </div>
                      <span className="font-semibold text-lg text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Image Placeholder Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: index % 2 === 0 ? 15 : -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              className="w-full md:w-1/2 flex justify-center"
              style={{ perspective: '1000px' }}
            >
              <div className={`w-full aspect-[4/3] rounded-[3rem] shadow-2xl relative overflow-hidden bg-gradient-to-br ${service.bgColor} border border-white/50 backdrop-blur-3xl flex flex-col items-center justify-center group`}>
                
                {/* Decorative floating shapes */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-3xl pointer-events-none group-hover:bg-white/30 transition-colors" />
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-black/5 rounded-full blur-3xl pointer-events-none" />

                <div className="text-center px-12 z-10">
                   <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm text-sm font-bold tracking-widest uppercase text-gray-500 mb-6 border border-gray-100">
                     Image Placeholder
                   </div>
                   <p className="text-gray-600 font-medium text-lg max-w-sm mx-auto leading-relaxed">
                     [Replace with: <br/><code className="bg-white/50 px-2 py-1 rounded font-mono text-blue-600 mt-2 inline-block">{service.placeholder}</code>]
                   </p>
                </div>

              </div>
            </motion.div>
            
          </div>
        ))}
      </section>

      {/* Massive CTA Section */}
      <section className="w-full py-32 px-4 relative mt-16" style={{ backgroundColor: 'var(--color-brand-primary)' }}>
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
              Ready to build <br/>something <span style={{ color: 'var(--color-brand-secondary)' }}>amazing?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Stop settling for template solutions. Let our elite engineering team architect the perfect software for your exact needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link 
                to="/contact" 
                className="px-10 py-5 rounded-full font-extrabold text-lg flex items-center gap-3 transition-transform hover:scale-105 shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_60px_rgba(0,0,0,0.5)]"
                style={{ backgroundColor: 'var(--color-brand-secondary)', color: 'var(--color-brand-primary)' }}
              >
                Let's Talk <ArrowRight size={20} />
              </Link>
              <Link 
                to="/products" 
                className="px-10 py-5 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2"
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
