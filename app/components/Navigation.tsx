import { Link, useLocation } from 'react-router';
import { Button } from '@/app/components/ui/button';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-white/5 px-6 py-4 lg:px-20 backdrop-blur-md bg-[#050505]/80">
      <Link to="/" className="flex items-center gap-3 text-white flex-shrink-0">
        <div className="w-8 h-8 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="12" cy="12" r="10" fill="url(#nav-gradient)" />
            <path d="M8 10h8M8 14h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <defs>
              <linearGradient id="nav-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
            </defs>
          </svg>
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
        <Link
          to="/solutions"
          className={`text-sm font-medium transition-colors ${
            isActive('/solutions') ? 'text-white' : 'text-white/70 hover:text-white'
          }`}
        >
          Our Services
        </Link>
        <Link
          to="/architecture"
          className={`text-sm font-medium transition-colors ${
            isActive('/architecture') ? 'text-white' : 'text-white/70 hover:text-white'
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
        <Button variant="ghost" className="min-w-[80px] h-9 px-4 text-white/70 hover:text-white text-sm font-bold">
          Log In
        </Button>
        <Link to="/contact">
          <Button className="min-w-[100px] h-9 px-5 bg-[#3b82f6] hover:bg-blue-600 text-white text-sm font-bold cta-glow-blue">
            Start Growth
          </Button>
        </Link>
      </div>
    </header>
  );
}