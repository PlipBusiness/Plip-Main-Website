import { Link, useLocation } from 'react-router';
import { Button } from '@/app/components/ui/button';
import Logo from '@/app/components/Logo';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
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