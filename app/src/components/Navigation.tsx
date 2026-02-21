import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out pointer-events-none ${isScrolled ? 'px-2 sm:px-4 lg:px-8 pt-4 lg:pt-6' : 'px-0 pt-0'}`}
    >
      <div
        className={`pointer-events-auto w-full transition-all duration-500 ease-in-out relative ${isScrolled
          ? 'bg-[#1B3B6F] shadow-[0_8px_30px_rgb(0,0,0,0.5)] rounded-full max-w-7xl px-5 lg:px-8 py-2 border border-white/5'
          : isHomePage
            ? 'bg-transparent max-w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6'
            : 'bg-white shadow-sm max-w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-4 lg:py-6'
          }`}
      >
        <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-20'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/images/Spencer's_logo_top_only.svg"
              alt="Spencer's Moving Company"
              className={`w-auto transition-all duration-500 ${isScrolled ? 'h-10 lg:h-12 brightness-0 invert' : 'h-14 lg:h-16'
                }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => {
                  if (isActive(link.path)) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`text-base lg:text-lg font-medium uppercase tracking-wider transition-colors duration-300 ${isActive(link.path)
                  ? 'text-[#D32F2F]'
                  : isScrolled
                    ? 'text-white/90 hover:text-white'
                    : 'text-[#1B3B6F] hover:text-[#D32F2F]'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:850-760-4588"
              className={`flex items-center transition-colors text-base lg:text-lg ${isScrolled ? 'text-white hover:text-[#D32F2F]' : 'text-[#1B3B6F] hover:text-[#D32F2F]'}`}
            >
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-medium">(850) 760-4588</span>
            </a>
            <Link to="/contact">
              <Button
                className={`bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-semibold transition-all duration-500 hover:scale-105 shadow-md ${isScrolled ? 'h-10 px-5 lg:px-6 text-sm rounded-full' : 'h-12 lg:h-14 px-8 text-base lg:text-lg rounded-full'}`}
              >
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-white hover:text-[#D32F2F]' : 'text-[#1B3B6F] hover:text-[#D32F2F]'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-[calc(100%+0.5rem)] left-4 right-4 bg-[#1B3B6F]/98 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.4)] rounded-2xl border border-white/10 transition-all duration-300 pointer-events-auto ${isMobileMenuOpen
          ? 'opacity-100 visible translate-y-0'
          : 'opacity-0 invisible -translate-y-2'
          }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={(e) => {
                if (isActive(link.path)) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }
              }}
              className={`block text-lg font-medium uppercase tracking-wider py-2 transition-colors ${isActive(link.path)
                ? 'text-[#D32F2F]'
                : 'text-white/90 hover:text-white'
                }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10">
            <a
              href="tel:850-760-4588"
              className="flex items-center text-white/90 py-2 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5 mr-3" />
              <span className="font-medium">(850) 760-4588</span>
            </a>
            <Link to="/contact" className="block mt-4">
              <Button
                className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-semibold py-3 rounded-xl"
              >
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
