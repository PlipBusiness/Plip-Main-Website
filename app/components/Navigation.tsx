import { Link, useLocation } from 'react-router';
import { Button } from '@/app/components/ui/button';
import Logo from '@/app/components/Logo';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isServicesActive = () => {
    return location.pathname.startsWith('/services');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-white/5 px-6 py-4 lg:px-20 backdrop-blur-md bg-[#050505]/80">
      <Link to="/" className="flex items-center gap-3 text-white flex-shrink-0">
        <div className="w-8 h-8 flex items-center justify-center">
          <Logo />
        </div>
        <h2 className="text-white text-xl font-black leading-tight tracking-tight">Plip</h2>
      </Link>

      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-10">
        <Link
          to="/"
          className={`text-sm font-medium transition-colors ${
            isActive('/') ? 'text-white' : 'text-white/70 hover:text-white'
          }`}
        >
          Home
        </Link>

        {/* Services Dropdown */}
        <div className="relative group">
          <Link
            to="/services"
            className={`text-sm font-medium transition-colors ${
              isServicesActive() ? 'text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            Our Services
          </Link>

          {/* Dropdown Menu */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl py-3 px-4 min-w-[220px] backdrop-blur-md">
              <Link
                to="/services/website"
                className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                Websites
              </Link>
              <Link
                to="/services/advertising"
                className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                Paid Advertising
              </Link>
              <Link
                to="/services/automation"
                className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                Automation
              </Link>
              <Link
                to="/services/branding"
                className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                Logo Design
              </Link>
              <Link
                to="/services/branding"
                className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                Brand Identity
              </Link>
              <Link
                to="/services/youtube"
                className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                YouTube Management
              </Link>
              <div className="border-t border-white/10 my-2"></div>
              <Link
                to="/services"
                className="block px-4 py-2.5 text-sm text-[#3b82f6] hover:text-blue-400 hover:bg-white/5 rounded-lg transition-colors font-medium"
              >
                View All Services →
              </Link>
            </div>
          </div>
        </div>

        <Link
          to="/about"
          className={`text-sm font-medium transition-colors ${
            isActive('/about') ? 'text-white' : 'text-white/70 hover:text-white'
          }`}
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className={`text-sm font-medium transition-colors ${
            isActive('/contact') ? 'text-white' : 'text-white/70 hover:text-white'
          }`}
        >
          Contact Us
        </Link>
      </div>

      <div className="flex gap-4 flex-shrink-0">
        <Link to="/contact">
          <Button className="min-w-[100px] h-9 px-5 bg-[#3b82f6] hover:bg-blue-600 text-white text-sm font-bold cta-glow-blue">
            Start Growth
          </Button>
        </Link>
      </div>
    </header>
  );
}