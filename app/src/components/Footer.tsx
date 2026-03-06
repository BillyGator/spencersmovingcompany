import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'Home', path: '/' },
      { label: 'About Us', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Contact', path: '/contact' },
    ],
    services: [
      { label: 'Local Moves', path: '/services' },
      { label: 'Long Distance', path: '/services' },
      { label: 'Packing Services', path: '/services' },
      { label: 'Storage Solutions', path: '/services' },
    ],
    locations: [
      'Pensacola, FL',
      'Gulf Breeze, FL',
      'Navarre, FL',
      'Fort Walton Beach, FL',
      'Milton, FL',
    ],
  };

  return (
    <footer className="bg-[#0B1A33] text-white">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-24 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/images/Spencer's_moving_logo_width_guarantee.svg"
                alt="Spencer's Moving Company"
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Big or small, we move it all. Spencer's Moving Company is your trusted
              partner for local and long-distance moves across the Gulf Coast.
            </p>
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D32F2F] text-[#D32F2F]" />
              ))}
            </div>
            <p className="text-white/60 text-sm">Rated #1 on the Gulf Coast</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-[#D32F2F]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-[#D32F2F] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-[#D32F2F]">
              Our Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-[#D32F2F] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-[#D32F2F]">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href="tel:850-760-4588"
                className="flex items-center text-white/70 hover:text-[#D32F2F] transition-colors"
              >
                <Phone className="w-5 h-5 mr-3 text-[#D32F2F]" />
                <span className="text-sm">(850) 760-4588</span>
              </a>
              <a
                href="mailto:info@spencersmovingcompany.com"
                className="flex items-center text-white/70 hover:text-[#D32F2F] transition-colors"
              >
                <Mail className="w-5 h-5 mr-3 text-[#D32F2F]" />
                <span className="text-sm">info@spencersmovingcompany.com</span>
              </a>
              <div className="flex items-start text-white/70">
                <MapPin className="w-5 h-5 mr-3 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  4564 Gulf Breeze Pkwy<br />
                  Gulf Breeze, FL 32563
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-3">
                Follow Us
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#D32F2F] transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#D32F2F] transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/50 text-xs uppercase tracking-wider mb-4">
            Service Areas
          </p>
          <div className="flex flex-wrap gap-3">
            {footerLinks.locations.map((location) => (
              <span
                key={location}
                className="px-4 py-2 bg-white/5 rounded-full text-white/70 text-sm"
              >
                {location}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#050D1A]">
        <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-24 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <p className="text-white/50 text-xs text-center md:text-left">
              © {currentYear} Spencer's Moving Company, LLC. All rights reserved.
            </p>
            <p className="text-white/50 text-xs">
              Licensed & Insured • USDOT #4031758
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
