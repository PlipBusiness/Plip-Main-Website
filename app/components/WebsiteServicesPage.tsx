import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { GradientButton } from '@/app/components/GradientButton';
import { 
  Globe, 
  Code, 
  Search,
  Smartphone,
  Zap,
  ShieldCheck,
  Palette,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Gauge,
  Users,
  LineChart,
  Layout
} from 'lucide-react';
import { Link } from 'react-router';

export default function WebsiteServicesPage() {
  return (
    <div className="min-h-screen bg-transparent relative z-10 text-white overflow-x-hidden">
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="w-full max-w-[1440px] mx-auto px-6 py-24 lg:py-32">
          <div className="flex flex-col items-center gap-6 z-10 relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-wider w-fit">
              <Globe className="w-3 h-3" />
              Website Design & Development
            </div>

            <h1 className="text-white text-5xl lg:text-7xl font-black leading-[1.1] tracking-[-0.02em]">
              Build a Website That <br />
              <span className="cotton-candy-gradient">Converts Like Crazy</span>
            </h1>

            <p className="text-white/60 text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
              Your website isn't just a digital business card—it's your most powerful sales tool. We craft custom, high-performance websites designed to turn visitors into customers, built on a foundation of conversion psychology and technical excellence.
            </p>

            <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
              <Link to="/contact">
                <GradientButton className="px-8 py-4 text-lg flex items-center gap-2 group">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </GradientButton>
              </Link>
            </div>
          </div>
        </section>

        {/* What We Build */}
        <section className="w-full border-t border-white/5 bg-black/40 py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                What We <span className="cotton-candy-gradient">Build</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Every project is custom-tailored to your business goals. Here's what goes into every website we create.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Custom Design */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f472b6]/20 to-[#ec4899]/20 flex items-center justify-center text-[#f472b6] mb-6 group-hover:scale-110 transition-transform">
                  <Palette className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Custom Design</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  No templates. Every pixel is designed specifically for your brand, ensuring you stand out from the competition with a unique visual identity.
                </p>
              </div>

              {/* Mobile-First Development */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3b82f6]/20 to-[#2563eb]/20 flex items-center justify-center text-[#3b82f6] mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Mobile-First Development</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Over 60% of web traffic is mobile. We build responsive sites that look stunning and function flawlessly on every device and screen size.
                </p>
              </div>

              {/* Lightning-Fast Performance */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Lightning-Fast Performance</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Speed = conversions. Our sites are optimized for blazing-fast load times, reducing bounce rates and keeping visitors engaged.
                </p>
              </div>

              {/* SEO Foundation */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">SEO Foundation</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Built-in technical SEO from day one. Clean code, fast loading, proper schema markup, and optimized metadata to help you rank higher.
                </p>
              </div>

              {/* Conversion-Optimized */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Conversion-Optimized</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Strategic placement of CTAs, trust signals, and persuasive copy that guide visitors toward taking action—whether it's booking a call or making a purchase.
                </p>
              </div>

              {/* Security & Reliability */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Security & Reliability</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  SSL certificates, regular backups, and enterprise-grade hosting ensure your site is always secure, fast, and online when your customers need it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="w-full border-t border-white/5 bg-black/40 py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Our <span className="text-[#3b82f6]">Process</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                A proven framework that delivers results every time. Here's how we take your website from concept to conversion machine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f472b6]/20 to-[#ec4899]/20 border-2 border-[#f472b6]/30 flex items-center justify-center text-[#f472b6] mb-4 relative z-10">
                    <span className="text-2xl font-black">1</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Discovery & Strategy</h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    We dive deep into your business, audience, and goals to create a conversion-focused strategy.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#f472b6]/30 to-transparent"></div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3b82f6]/20 to-[#2563eb]/20 border-2 border-[#3b82f6]/30 flex items-center justify-center text-[#3b82f6] mb-4 relative z-10">
                    <span className="text-2xl font-black">2</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Design & Wireframes</h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Custom mockups and prototypes that visualize the user experience before a single line of code is written.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#3b82f6]/30 to-transparent"></div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border-2 border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 relative z-10">
                    <span className="text-2xl font-black">3</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Development & Testing</h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Clean, modern code built with performance and scalability in mind. Rigorous testing across all devices.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-purple-500/30 to-transparent"></div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30 flex items-center justify-center text-green-400 mb-4 relative z-10">
                    <span className="text-2xl font-black">4</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Launch & Optimize</h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    We launch your site and continuously monitor performance, making data-driven improvements to boost conversions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Expertise */}
        <section className="w-full border-t border-white/5 bg-black/20 py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Technical <span className="cotton-candy-gradient">Expertise</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                We use modern technologies and best practices to build websites that perform flawlessly and scale with your business.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center text-[#3b82f6] shrink-0">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Modern Tech Stack</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Built with React, Next.js, and other cutting-edge frameworks for maximum performance and maintainability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                    <Gauge className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Performance Optimization</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Image compression, lazy loading, code splitting, and CDN integration to achieve sub-2-second load times.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <Layout className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">CMS Integration</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Easy-to-use content management systems like WordPress, Webflow, or headless CMS so you can update content without touching code.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f472b6]/10 border border-[#f472b6]/20 flex items-center justify-center text-[#f472b6] shrink-0">
                    <LineChart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Analytics Integration</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Google Analytics, heat mapping, and conversion tracking set up from day one so you can measure what matters.
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="absolute inset-0 bg-[#3b82f6]/20 blur-[80px] rounded-full"></div>
                <div className="glass-pane rounded-2xl p-8 border border-white/10 relative overflow-hidden min-h-[500px] flex items-center justify-center">
                  <div className="w-full space-y-4">
                    {/* Code Editor Mockup */}
                    <div className="bg-[#0a0a0a] rounded-lg border border-white/10 p-4 font-mono text-xs">
                      <div className="flex gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="space-y-2 text-white/70">
                        <div><span className="text-purple-400">const</span> <span className="text-blue-400">Website</span> = () =&gt; {'{'}</div>
                        <div className="pl-4"><span className="text-purple-400">return</span> (</div>
                        <div className="pl-8">&lt;<span className="text-green-400">section</span>&gt;</div>
                        <div className="pl-12">&lt;<span className="text-green-400">h1</span>&gt;High Performance&lt;/<span className="text-green-400">h1</span>&gt;</div>
                        <div className="pl-12">&lt;<span className="text-green-400">p</span>&gt;Fast. Secure. Optimized.&lt;/<span className="text-green-400">p</span>&gt;</div>
                        <div className="pl-8">&lt;/<span className="text-green-400">section</span>&gt;</div>
                        <div className="pl-4">)</div>
                        <div>{'}'}</div>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Gauge className="w-4 h-4 text-green-400" />
                          <span className="text-xs text-white/50 font-bold uppercase">Performance</span>
                        </div>
                        <div className="text-2xl font-black text-white">98<span className="text-green-400">/100</span></div>
                      </div>
                      <div className="bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Search className="w-4 h-4 text-[#3b82f6]" />
                          <span className="text-xs text-white/50 font-bold uppercase">SEO Score</span>
                        </div>
                        <div className="text-2xl font-black text-white">95<span className="text-[#3b82f6]">/100</span></div>
                      </div>
                    </div>

                    {/* Load Time */}
                    <div className="bg-[#f472b6]/10 border border-[#f472b6]/20 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-white/50 font-bold uppercase">Page Load Time</span>
                        <span className="text-xl font-black text-white">1.2<span className="text-sm text-[#f472b6]">s</span></span>
                      </div>
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-gradient-to-r from-[#f472b6] to-[#3b82f6] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Services Deep Dive */}
        <section className="w-full border-t border-white/5 bg-black/40 py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Built-In <span className="text-green-400">SEO Excellence</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                A beautiful website means nothing if nobody can find it. Every site we build is optimized for search engines from the ground up.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="widget-card p-8 rounded-2xl">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Technical SEO Audit</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Clean URL structures, proper heading hierarchy, XML sitemaps, robots.txt, and canonical tags—all configured correctly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="widget-card p-8 rounded-2xl">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">On-Page Optimization</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Strategic keyword placement, optimized meta titles and descriptions, and schema markup to boost visibility in search results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="widget-card p-8 rounded-2xl">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Core Web Vitals</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Optimized for Google's ranking signals: Largest Contentful Paint, First Input Delay, and Cumulative Layout Shift.
                    </p>
                  </div>
                </div>
              </div>

              <div className="widget-card p-8 rounded-2xl">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Mobile-First Indexing</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Google prioritizes mobile versions. We ensure your mobile experience is flawless, fast, and fully optimized.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="result-snippet green mt-12">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-white/40 font-bold uppercase tracking-wider mb-1">SEO CASE STUDY</p>
                <p className="text-white leading-relaxed">
                  "Within 90 days of launching a redesigned site, organic traffic increased by <strong className="text-green-400">217%</strong> and first-page rankings jumped from 12 to 47 keywords."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Website Types */}
        <section className="w-full border-t border-white/5 bg-black/40 py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Website Types We <span className="cotton-candy-gradient">Specialize In</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Whether you need a simple landing page or a complex e-commerce platform, we've got you covered.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="widget-card p-6 rounded-2xl text-center group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Landing Pages</h3>
                <p className="text-xs text-white/50">
                  High-converting single-page sites designed to capture leads and drive action.
                </p>
              </div>

              <div className="widget-card p-6 rounded-2xl text-center group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-[#f472b6]/10 flex items-center justify-center text-[#f472b6] mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Layout className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Corporate Sites</h3>
                <p className="text-xs text-white/50">
                  Professional multi-page websites for businesses that need to establish credibility.
                </p>
              </div>

              <div className="widget-card p-6 rounded-2xl text-center group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">E-Commerce</h3>
                <p className="text-xs text-white/50">
                  Online stores built to maximize sales with seamless checkout experiences.
                </p>
              </div>

              <div className="widget-card p-6 rounded-2xl text-center group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Web Applications</h3>
                <p className="text-xs text-white/50">
                  Custom dashboards, portals, and tools tailored to your unique business needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-6 py-20 bg-gradient-to-b from-transparent to-black border-t border-white/5">
          <div className="max-w-[1000px] mx-auto">
            <div className="bg-gradient-to-r from-[#1a1d21] to-[#0f0f0f] border border-white/10 rounded-[2rem] p-12 lg:p-16 text-center relative overflow-hidden" style={{ boxShadow: '0 0 60px rgba(59, 130, 246, 0.15), 0 0 100px rgba(59, 130, 246, 0.08)' }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b82f6]/10 blur-[80px] rounded-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f472b6]/10 blur-[80px] rounded-full pointer-events-none"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Ready to Build Your <br />
                  <span className="cotton-candy-gradient">High-Converting Website?</span>
                </h2>
                <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
                  Let's create a website that doesn't just look good—it drives real results for your business.
                </p>
                <Link to="/contact">
                  <GradientButton className="px-10 py-4 text-lg">
                    Start Your Website Project
                  </GradientButton>
                </Link>
                <p className="mt-6 text-xs text-white/30 font-bold uppercase tracking-widest">
                  Free Strategy Session • No Obligation
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
