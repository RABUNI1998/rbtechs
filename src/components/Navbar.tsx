import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Store', path: '/products' },
    { name: 'Pricing', path: '/#pricing' },
    { name: 'Resources', path: '/#resources' },
  ];

  return (
    <nav className="absolute w-full z-50 text-white px-4 pt-6 pb-2" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tight">
              RBTECH
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="hover:text-brand-secondary text-sm font-medium transition-colors opacity-90 hover:opacity-100">
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="ml-4 px-6 py-2 rounded-full font-bold text-brand-primary transition-transform hover:scale-105" style={{ backgroundColor: 'var(--color-brand-secondary)' }}>
                Contact
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" style={{ backgroundColor: 'var(--color-brand-primary)' }}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg border-t border-white/10">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:text-brand-secondary">
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 mt-4 rounded-md text-base font-bold text-brand-primary text-center" style={{ backgroundColor: 'var(--color-brand-secondary)' }}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
