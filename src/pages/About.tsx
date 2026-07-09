import { Target, Users, Zap, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.png';

export default function About() {
  const values = [
    {
      icon: <Target size={28} className="text-white" />,
      title: "Precision Engineering",
      desc: "We don't do 'good enough'. We build highly optimized, secure, and blazing-fast software tailored exactly to your requirements.",
      color: "bg-blue-600"
    },
    {
      icon: <Users size={28} className="text-white" />,
      title: "Client-Centric",
      desc: "Your success is our success. We believe in transparent communication, agile feedback loops, and building long-term partnerships.",
      color: "bg-purple-600"
    },
    {
      icon: <Zap size={28} className="text-white" />,
      title: "Innovation First",
      desc: "We leverage the latest frameworks (like React, Tailwind, and native SDKs) to ensure your digital presence is future-proof.",
      color: "bg-emerald-600"
    },
    {
      icon: <Shield size={28} className="text-white" />,
      title: "Uncompromising Security",
      desc: "From local encryption in RB Player to secure enterprise cloud deployments, we treat your data with the highest level of protection.",
      color: "bg-slate-800"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden bg-gray-50">
      
      {/* Hero Section */}
      <section className="w-full relative pt-40 pb-48 px-4" style={{ backgroundColor: 'var(--color-brand-primary)', color: 'var(--text-inverse)' }}>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm font-bold tracking-widest uppercase" style={{ color: 'var(--color-brand-secondary)' }}>
              Who We Are
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">About RBTECH.</h1>
            <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto font-light leading-relaxed">
              We are an elite software development firm dedicated to engineering world-class digital experiences that empower businesses and individuals.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

        {/* Custom SVG Curve Divider */}
        <div className="hero-curve-divider pointer-events-none">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="rgba(255,255,255,0.05)"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05c50.7,38.41,114.73,50.7,178.6,48.78,138.8-4.18,272.2-46.13,410.6-53.79C774.5,58.59,887.6,108.31,1028,103.87c74.4-2.38,138.7-22.75,172-35.34V0Z" fill="#f9fafb"></path>
          </svg>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-24 -mt-32 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-2xl rounded-[3rem] p-10 md:p-20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white flex flex-col md:flex-row gap-16 items-center"
        >
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">Driven by a passion <br/>for code.</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded by <strong>Joseph Marfo</strong>, RBTECH started with a simple goal: to build software that doesn't just work, but feels extraordinary to use. What began as a passion for solving complex problems has evolved into a premier agency delivering bespoke solutions globally.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              From crafting the high-performance <strong>RB Player</strong> to developing intricate Excel architectures, full-scale E-commerce platforms, School & Church Management Software, Hospital Systems, and robust POS solutions. We approach every single line of code with craftsmanship and care.
            </p>
            <Link to="/products" className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition-colors group">
              View Our Portfolio <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="w-full md:w-1/2 relative flex justify-center">
             {/* Profile Image */}
             <div className="w-full max-w-md aspect-[4/5] rounded-[2rem] border border-gray-200 overflow-hidden relative group shadow-2xl">
                <img src={profileImg} alt="Joseph Marfo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                
                {/* Name Tag overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/50 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900">Joseph Marfo</h3>
                  <p className="text-sm font-bold tracking-widest text-blue-600 uppercase">Founder & Lead Engineer</p>
                </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-8 border-white shadow-xl flex items-center justify-center text-4xl" style={{ backgroundColor: 'var(--color-brand-secondary)' }}>
                🚀
             </div>
          </div>
        </motion.div>
      </section>

      {/* Core Values Bento Grid */}
      <section className="w-full py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Our Core Values</h2>
          <div className="h-1.5 w-24 mx-auto mt-6 rounded-full" style={{ backgroundColor: 'var(--color-brand-secondary)' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group relative overflow-hidden"
            >
              {/* Subtle hover background shift */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" style={{ backgroundColor: 'var(--color-brand-primary)' }} />
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform ${val.color}`}>
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
              <p className="text-gray-500 text-base leading-relaxed flex-grow">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mini CTA */}
      <section className="w-full py-24 px-4 relative mt-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Let's build the future together.</h2>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg text-white transition-transform hover:scale-105 shadow-xl"
              style={{ backgroundColor: 'var(--color-brand-primary)' }}
            >
              Contact Us <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
