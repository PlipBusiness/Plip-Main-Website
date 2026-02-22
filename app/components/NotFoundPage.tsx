import { Link } from 'react-router';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { GradientButton } from '@/app/components/GradientButton';
import { ArrowRight, ArrowLeft, Compass } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-transparent relative z-10 text-white overflow-x-hidden flex flex-col">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 py-24">
          <div className="max-w-[800px] mx-auto text-center">

            {/* Icon Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest">
                <Compass className="w-3.5 h-3.5" />
                Page Not Found
              </div>
            </div>

            {/* 404 */}
            <div className="relative mb-4">
              <span
                className="text-[10rem] lg:text-[16rem] font-black leading-none cotton-candy-gradient select-none"
                style={{ display: 'block' }}
              >
                404
              </span>
              {/* Subtle glow behind the number */}
              <div
                className="absolute inset-0 blur-[80px] opacity-20 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, #a855f7 0%, #3b82f6 50%, transparent 80%)',
                }}
              />
            </div>

            {/* Heading */}
            <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
              You've wandered off the map.
            </h1>

            {/* Subtext */}
            <p className="text-white/50 text-lg mb-12 max-w-md mx-auto leading-relaxed">
              The page you're looking for doesn't exist or may have moved. Let's get you back on track.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/">
                <GradientButton className="px-8 py-4 flex items-center gap-2 group">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </GradientButton>
              </Link>
              <Link
                to="/services"
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-all text-sm font-semibold"
              >
                Browse Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
