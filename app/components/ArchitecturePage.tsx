import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { Button } from '@/app/components/ui/button';
import { 
  Handshake, 
  Building2, 
  TrendingUp, 
  Zap, 
  Infinity, 
  ShieldCheck,
  ArrowRight,
  Quote
} from 'lucide-react';
import { Link } from 'react-router';

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Blur Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#f472b6] blur-[120px] opacity-20 -top-40 -right-40"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#60a5fa] blur-[120px] opacity-20 top-1/3 -left-60"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/30 blur-[100px] opacity-20 bottom-20 right-1/4"></div>
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="w-full px-6 pt-24 pb-40 lg:pt-40 lg:pb-52 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#60a5fa] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Building Legacies Together
            </div>

            <h1 className="text-white text-6xl lg:text-8xl font-black leading-[1] tracking-tight">
              Your Growth, <br />
              <span className="cotton-candy-gradient">Our Architecture</span>
            </h1>

            <p className="text-white/60 text-xl lg:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
              We don't just build systems; we architect the foundations of your scale. Our agency exists to turn your operational chaos into your greatest competitive advantage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link to="/contact">
                <Button className="h-14 px-10 rounded-xl bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors">
                  Explore the Partnership
                </Button>
              </Link>
              <Link to="/#testimonials">
                <Button className="h-14 px-10 rounded-xl border-2 border-white bg-black text-white hover:bg-white/10 font-bold text-lg transition-colors">
                  Our Impact Stories
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="w-full bg-[#050505] py-32 overflow-hidden relative">
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Mission */}
            <div className="relative overflow-hidden">
              <span className="text-stroke text-8xl font-black absolute -top-20 left-0 opacity-20 pointer-events-none select-none">
                MISSION
              </span>
              <div className="relative z-10 space-y-8">
                <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                  To scale the <br />
                  <span className="text-[#f472b6]">unscalable.</span>
                </h2>
                <p className="text-white/60 text-xl leading-relaxed">
                  Our mission is to dismantle the barriers of manual effort. We partner with ambitious leaders to build intelligent infrastructure that allows human talent to focus on creativity, strategy, and connection.
                </p>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10">
                  <p className="text-white font-medium text-lg mb-4">
                    "Joe has taught me so much and has helped expand my marketing to where it's not only helping my business but I actually feel more confident when speaking with new clients."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-800"></div>
                    <span className="text-sm font-bold text-white/40">Wesley Krombel, Connecticut Realtor</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="relative overflow-hidden">
              <span className="text-stroke text-8xl font-black absolute -top-20 left-0 opacity-20 pointer-events-none select-none">
                VISION
              </span>
              <div className="relative z-10 space-y-8">
                <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                  Systems as <br />
                  <span className="text-[#60a5fa]">Capital.</span>
                </h2>
                <p className="text-white/60 text-xl leading-relaxed">
                  We envision a future where your business systems are your most valuable asset. Not just workflows, but appreciating capital that drives predictable, compounding returns for every partner we serve.
                </p>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10">
                  <p className="text-white font-medium text-lg mb-4">
                    "We recently closed on a 400k deal provided by Plip that was basically 25x my investment for the month. I always feel like things are under control for all my marketing."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-800"></div>
                    <span className="text-sm font-bold text-white/40">Chris R., Texas Realtor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="w-full bg-[#0a0a0a] border-y border-white/5 py-12">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center">
              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-black text-white">$734k+</div>
                <div className="text-[10px] font-bold text-[#60a5fa] tracking-widest uppercase">Ad Spend Managed</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-black text-white">27k+</div>
                <div className="text-[10px] font-bold text-[#f472b6] tracking-widest uppercase">Leads Generated</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-black text-white">192+</div>
                <div className="text-[10px] font-bold text-[#3b82f6] tracking-widest uppercase">Businesses Scaled</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-black text-white">43+</div>
                <div className="text-[10px] font-bold text-green-400 tracking-widest uppercase">Websites Influenced</div>
              </div>
            </div>
          </div>
        </section>

        {/* Built on Shared Values */}
        <section className="w-full max-w-[1200px] mx-auto px-6 py-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Built on Shared Values</h2>
            <p className="text-white/50 text-xl max-w-2xl mx-auto">
              Partnership isn't just a word; it's a commitment to a specific set of engineering and ethical standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Radical Ownership */}
            <div className="bg-[#0f0f0f] p-10 rounded-[2rem] border border-white/5 relative flex flex-col items-start min-h-[360px] group cursor-default transition-all duration-500">
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ 
                  boxShadow: '0 0 40px rgba(244, 114, 182, 0.6), 0 0 80px rgba(244, 114, 182, 0.3)',
                  filter: 'blur(2px)'
                }}
              ></div>
              
              <div className="w-14 h-14 bg-[#f472b6]/10 rounded-full flex items-center justify-center mb-8 text-[#f472b6] glow-icon relative z-10">
                <Handshake className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 relative z-10">Radical Ownership</h3>
              <p className="text-white/40 leading-relaxed text-sm mb-auto relative z-10">
                We don't just 'consult.' We own the outcomes of the systems we build alongside you. If your system isn't performing, neither are we.
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-1/4 bg-[#f472b6] rounded-full ml-10 mb-8 z-10"></div>
            </div>

            {/* Structural Integrity */}
            <div className="bg-[#0f0f0f] p-10 rounded-[2rem] border border-white/5 relative flex flex-col items-start min-h-[360px] group cursor-default transition-all duration-500">
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ 
                  boxShadow: '0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(59, 130, 246, 0.3)',
                  filter: 'blur(2px)'
                }}
              ></div>
              
              <div className="w-14 h-14 bg-[#3b82f6]/10 rounded-full flex items-center justify-center mb-8 text-[#3b82f6] glow-icon relative z-10">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 relative z-10">Structural Integrity</h3>
              <p className="text-white/40 leading-relaxed text-sm mb-auto relative z-10">
                No quick fixes or duct-tape solutions. We architect for the next decade, ensuring your tech stack scales as fast as your ambition.
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-1/4 bg-[#3b82f6] rounded-full ml-10 mb-8 z-10"></div>
            </div>

            {/* Truth in Data */}
            <div className="bg-[#0f0f0f] p-10 rounded-[2rem] border border-white/5 relative flex flex-col items-start min-h-[360px] group cursor-default transition-all duration-500">
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ 
                  boxShadow: '0 0 40px rgba(96, 165, 250, 0.6), 0 0 80px rgba(96, 165, 250, 0.3)',
                  filter: 'blur(2px)'
                }}
              ></div>
              
              <div className="w-14 h-14 bg-[#60a5fa]/10 rounded-full flex items-center justify-center mb-8 text-[#60a5fa] glow-icon relative z-10">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 relative z-10">Truth in Data</h3>
              <p className="text-white/40 leading-relaxed text-sm mb-auto relative z-10">
                Decisions at Plip are never made by feeling. We rely on hard data points to validate our architecture and your growth trajectory.
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-1/4 bg-[#60a5fa] rounded-full ml-10 mb-8 z-10"></div>
            </div>

            {/* Velocity of Change */}
            <div className="bg-[#0f0f0f] p-10 rounded-[2rem] border border-white/5 relative flex flex-col items-start min-h-[360px] group cursor-default transition-all duration-500">
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ 
                  boxShadow: '0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(168, 85, 247, 0.3)',
                  filter: 'blur(2px)'
                }}
              ></div>
              
              <div className="w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center mb-8 text-purple-400 glow-icon relative z-10">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 relative z-10">Velocity of Change</h3>
              <p className="text-white/40 leading-relaxed text-sm mb-auto relative z-10">
                The market moves fast, so we move faster. Our partnership is built on the agile deployment of systems that adapt in real-time.
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-1/4 bg-purple-500 rounded-full ml-10 mb-8 z-10"></div>
            </div>

            {/* Infinite Horizon */}
            <div className="bg-[#0f0f0f] p-10 rounded-[2rem] border border-white/5 relative flex flex-col items-start min-h-[360px] group cursor-default transition-all duration-500">
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ 
                  boxShadow: '0 0 40px rgba(34, 197, 94, 0.6), 0 0 80px rgba(34, 197, 94, 0.3)',
                  filter: 'blur(2px)'
                }}
              ></div>
              
              <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center mb-8 text-green-400 glow-icon relative z-10">
                <Infinity className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 relative z-10">Infinite Horizon</h3>
              <p className="text-white/40 leading-relaxed text-sm mb-auto relative z-10">
                We don't look for projects; we look for partners. We think about your business's 5-year growth, not just the next 5 weeks.
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-1/4 bg-green-500 rounded-full ml-10 mb-8 z-10"></div>
            </div>

            {/* Absolute Clarity */}
            <div className="bg-[#0f0f0f] p-10 rounded-[2rem] border border-white/5 relative flex flex-col items-start min-h-[360px] group cursor-default transition-all duration-500">
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ 
                  boxShadow: '0 0 40px rgba(249, 115, 22, 0.6), 0 0 80px rgba(249, 115, 22, 0.3)',
                  filter: 'blur(2px)'
                }}
              ></div>
              
              <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mb-8 text-orange-400 glow-icon relative z-10">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 relative z-10">Absolute Clarity</h3>
              <p className="text-white/40 leading-relaxed text-sm mb-auto relative z-10">
                Communication is our cornerstone. No technical jargon—just clear reporting on what's working and how we're winning.
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-1/4 bg-orange-500 rounded-full ml-10 mb-8 z-10"></div>
            </div>
          </div>
        </section>

        {/* The Lifecycle of a Partnership */}
        <section className="w-full bg-[#050505] py-32 relative">
          <div className="max-w-[1400px] mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
                Lifecycle of a Partnership
              </h2>
              <p className="text-white/40 text-base leading-relaxed max-w-2xl mx-auto">
                Joining Plip is more than a service contract. It's an evolution. We've mapped the typical journey our partners take as they transition from manual struggle to automated dominance.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="max-w-[1200px] mx-auto mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* Card 01 */}
                <div className="p-10 rounded-3xl bg-[#1a1a1f] border border-white/[0.06] flex flex-col min-h-[320px]">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c026d3] to-[#9333ea] flex items-center justify-center font-black text-white text-lg mb-6">
                    01
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-3xl font-bold text-white mb-2">Discovery</h3>
                    <p className="text-[#c026d3] text-xs font-bold uppercase tracking-wider mb-4">MONTH 1</p>
                    <p className="text-white/50 text-base leading-relaxed mb-auto">
                      Deep-tissue audit of current tech. Identification of bottlenecks and architecture of your custom growth roadmap.
                    </p>
                    <p className="text-white/20 text-[11px] uppercase tracking-wider font-medium mt-6">PHASE: STRATEGIC AUDIT</p>
                  </div>
                </div>

                {/* Card 02 */}
                <div className="p-10 rounded-3xl bg-[#1a1a1f] border border-white/[0.06] flex flex-col min-h-[320px]">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6366f1] to-[#4f46e5] flex items-center justify-center font-black text-white text-lg mb-6">
                    02
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-3xl font-bold text-white mb-2">Foundation</h3>
                    <p className="text-[#6366f1] text-xs font-bold uppercase tracking-wider mb-4">MONTHS 2-4</p>
                    <p className="text-white/50 text-base leading-relaxed mb-auto">
                      Engineering core automation. Your 'Digital Twin' begins handling prospecting, lead management, and sync.
                    </p>
                    <p className="text-white/20 text-[11px] uppercase tracking-wider font-medium mt-6">PHASE: CORE BUILD</p>
                  </div>
                </div>

                {/* Card 03 */}
                <div className="p-10 rounded-3xl bg-[#1a1a1f] border border-white/[0.06] flex flex-col min-h-[320px]">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] flex items-center justify-center font-black text-white text-lg mb-6">
                    03
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-3xl font-bold text-white mb-2">Optimization</h3>
                    <p className="text-[#8b5cf6] text-xs font-bold uppercase tracking-wider mb-4">MONTHS 4-12</p>
                    <p className="text-white/50 text-base leading-relaxed mb-auto">
                      Pivoting to data-driven scale. Leveraging feedback loops to increase ROI and expand market footprint.
                    </p>
                    <p className="text-white/20 text-[11px] uppercase tracking-wider font-medium mt-6">PHASE: SCALE & TEST</p>
                  </div>
                </div>

                {/* Card 04 */}
                <div className="p-10 rounded-3xl bg-[#1a1a1f] border border-white/[0.06] flex flex-col min-h-[320px]">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ec4899] to-[#d946ef] flex items-center justify-center font-black text-white text-lg mb-6">
                    04
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-3xl font-bold text-white mb-2">Legacy Ops</h3>
                    <p className="text-[#ec4899] text-xs font-bold uppercase tracking-wider mb-4">YEAR 1+</p>
                    <p className="text-white/50 text-base leading-relaxed mb-auto">
                      Strategic advisory role. Your business runs as a self-sustaining asset, allowing you to focus on high-level growth.
                    </p>
                    <p className="text-white/20 text-[11px] uppercase tracking-wider font-medium mt-6">PHASE: ASSET STABILITY</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Note */}
            <div className="max-w-[800px] mx-auto">
              <div className="p-8 rounded-3xl bg-[#1a1a1f] border border-white/[0.06] text-center">
                <p className="text-[#3b82f6] text-[11px] font-bold uppercase tracking-wider mb-3">PERFORMANCE NOTE</p>
                <p className="text-white/50 text-base leading-relaxed italic">
                  85% of our partners achieve full system amortization within the first 6 months of implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Spotlight */}
        <section className="w-full py-32 bg-black border-t border-white/5">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Text Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-[#f472b6] text-xs font-bold uppercase tracking-widest">Founder Spotlight</span>
                  <h2 className="text-5xl font-black text-white">Joe Teegarden</h2>
                  <p className="text-white/60 font-medium tracking-wide">Founder & Growth Architect</p>
                </div>

                <div className="space-y-6 text-white/50 leading-relaxed text-lg">
                  <p>
                    I started Plip in 2020 after realizing that most businesses don't struggle because they lack traffic or ideas; they struggle because their systems don't work together. Leads get lost, follow-ups break, data lives in too many places, and owners end up spending their time managing chaos instead of growing.
                  </p>
                  <p>
                    What I do is build the infrastructure behind growth; automation, integrations, and internal systems that replace manual work and create clarity. Plip isn't about flashy campaigns or quick wins. It's about designing operations that run smoothly, scale intelligently, and free teams to focus on what actually matters.
                  </p>
                  <p>
                    Plip exists to turn fragmented tools into a single, reliable growth machine.
                  </p>
                </div>

                <div className="flex gap-6 pt-4">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex-1">
                    <div className="text-2xl font-black text-white">8+</div>
                    <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest mt-1">Years Experience</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex-1">
                    <div className="text-2xl font-black text-white">192+</div>
                    <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest mt-1">Businesses Scaled</div>
                  </div>
                </div>
              </div>

              {/* Right - Image and Quote */}
              <div className="space-y-6">
                {/* Image */}
                <div className="aspect-[4/5] rounded-[2.5rem] bg-gradient-to-b from-[#f3e5d8] to-[#d6c4b2] overflow-hidden relative group shadow-2xl">
                  <div className="w-full h-full bg-gray-700"></div>
                </div>

                {/* Quote Card */}
                <div className="bg-[#0f0f0f] border border-white/10 p-10 rounded-[2.5rem] space-y-6 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 text-white/10">
                    <Quote className="w-16 h-16 rotate-180" />
                  </div>
                  <p className="text-white text-lg font-medium leading-relaxed relative z-10 italic">
                    "My promise to every client is simple: you will know exactly where every cent goes, and you will see exactly what managing data, not black boxes, does for your bottom line."
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-white/40 text-xs font-bold uppercase tracking-widest">The Plip Promise</span>
                    <a href="#" className="flex items-center gap-2 text-white font-bold hover:gap-4 transition-all">
                      Meet 
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-32 relative overflow-hidden">
          <div className="max-w-[1000px] mx-auto px-6 text-center">
            <div className="glass-pane p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f472b6]/10 to-[#60a5fa]/10 pointer-events-none"></div>
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 relative z-10">
                Ready to <span className="cotton-candy-gradient">Automate?</span>
              </h2>
              <p className="text-white/60 text-xl mb-12 relative z-10 max-w-2xl mx-auto">
                We only partner with agencies where our systems can deliver exponential growth. Let's see if we're a match.
              </p>
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button className="px-10 py-5 bg-[#3b82f6] text-white text-lg font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-2xl shadow-[#3b82f6]/20">
                    Apply for Partnership
                  </Button>
                </Link>
                <Button variant="outline" className="px-10 py-5 bg-transparent border border-white/30 text-white text-lg font-bold rounded-2xl hover:bg-white/5 transition-all">
                  Download Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}