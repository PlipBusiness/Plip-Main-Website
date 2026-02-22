import { Link } from 'react-router';
import { Facebook, Mail } from 'lucide-react';
import Logo from '@/app/components/Logo';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-12 px-6 lg:px-20 bg-[#06071a]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 md:col-span-1 space-y-4">
          <div className="flex items-center gap-2 text-white">
            <div className="w-5 h-5 flex items-center justify-center">
              <Logo />
            </div>
            <h2 className="text-white text-lg font-bold">Plip</h2>
          </div>
          <p className="text-white/40 text-sm leading-relaxed">
            Full-service marketing agency specializing in websites, advertising, and automation.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm">Services</h4>
          <ul className="space-y-2 text-white/50 text-sm">
            <li>
              <Link to="/services" className="hover:text-[#3b82f6] transition-colors">
                All Services
              </Link>
            </li>
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
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm">Company</h4>
          <ul className="space-y-2 text-white/50 text-sm">
            <li>
              <Link to="/" className="hover:text-[#3b82f6] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#3b82f6] transition-colors">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#3b82f6] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#3b82f6] transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm">Follow Us</h4>
          <div className="space-y-3">
            <a
              href="https://www.facebook.com/TeegardenJoe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </a>
            <a
              href="mailto:hello@plipmarketing.com"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>hello@plipmarketing.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/30 text-xs">© 2026 Plip LLC. All rights reserved.</p>
        <div className="flex gap-6 text-white/30 text-xs">
          <span>Privacy Policy (coming soon)</span>
          <span>Terms of Service (coming soon)</span>
        </div>
      </div>
    </footer>
  );
}