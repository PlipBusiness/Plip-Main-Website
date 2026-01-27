import { Link } from 'react-router';
import { TrendingUp, Share2, Database } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-12 px-6 lg:px-20 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 md:col-span-1 space-y-4">
          <div className="flex items-center gap-2 text-white">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="12" cy="12" r="10" fill="url(#footer-gradient)" />
                <path d="M8 10h8M8 14h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <defs>
                  <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#f472b6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold">Plip</h2>
          </div>
          <p className="text-white/40 text-sm leading-relaxed">
            Full-service marketing agency specializing in websites, paid advertising, and marketing automation. 6+ years experience, 500+ projects delivered.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm">Services</h4>
          <ul className="space-y-2 text-white/50 text-sm">
            <li>
              <Link to="/services/website" className="hover:text-[#3b82f6] transition-colors">
                Website Development
              </Link>
            </li>
            <li>
              <Link to="/services/advertising" className="hover:text-[#3b82f6] transition-colors">
                Paid Advertising
              </Link>
            </li>
            <li>
              <Link to="/services/automation" className="hover:text-[#3b82f6] transition-colors">
                Marketing Automation
              </Link>
            </li>
            <li>
              <Link to="/solutions" className="hover:text-[#3b82f6] transition-colors">
                All Services
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm">Company</h4>
          <ul className="space-y-2 text-white/50 text-sm">
            <li>
              <Link to="/architecture" className="hover:text-[#3b82f6] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/solutions" className="hover:text-[#3b82f6] transition-colors">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#3b82f6] transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-[#3b82f6] transition-colors">
                Case Studies
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#3b82f6]/20 transition-all">
              <TrendingUp className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#3b82f6]/20 transition-all">
              <Share2 className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#3b82f6]/20 transition-all">
              <Database className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/30 text-xs">© 2026 Plip LLC. All rights reserved.</p>
        <div className="flex gap-6 text-white/30 text-xs">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}