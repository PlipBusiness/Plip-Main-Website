import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import ServiceTabs from '@/app/components/ServiceTabs';
import { Button } from '@/app/components/ui/button';
import { 
  MousePointerClick, 
  Target,
  TrendingUp,
  Zap,
  BarChart3,
  Users,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Eye,
  Gauge,
  RefreshCw,
  Megaphone,
  LineChart,
  Brain,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router';

export default function PaidAdvertisingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Blur Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#3b82f6] blur-[100px] opacity-25 top-[-150px] left-[-150px]"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#f472b6] blur-[100px] opacity-25 bottom-[-150px] right-[-150px]"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-600 blur-[100px] opacity-20 top-[40%] left-[50%]"></div>
      </div>

      <div className="relative z-10">
        <Navigation />
        <ServiceTabs />

        {/* Hero Section */}
        <section className="w-full max-w-[1440px] mx-auto px-6 py-24 lg:py-32">
          <div className="flex flex-col items-center gap-6 z-10 relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-wider w-fit">
              <MousePointerClick className="w-3 h-3" />
              Paid Advertising Services
            </div>

            <h1 className="text-white text-5xl lg:text-7xl font-black leading-[1.1] tracking-[-0.02em]">
              Turn Ad Spend Into <br />
              <span className="cotton-candy-gradient">Predictable Revenue</span>
            </h1>

            <p className="text-white/60 text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
              Stop wasting money on ads that don't convert. Our data-driven approach combines strategic targeting, conversion-focused creative, and continuous optimization to deliver ROAS that makes your CFO smile.
            </p>

            <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
              <Link to="/contact">
                <Button className="px-8 py-4 bg-[#3b82f6] hover:bg-blue-600 text-white text-lg font-bold rounded-xl cta-glow-blue flex items-center gap-2 group">
                  Start Your Campaign
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Platforms We Dominate */}
        <section className="w-full border-t border-white/5 bg-black/40 py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Platforms We <span className="text-[#3b82f6]">Dominate</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                We're certified experts across all major advertising platforms, ensuring your message reaches the right people at the right time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Meta Ads */}
              <div className="widget-card p-6 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#3b82f6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Meta Ads</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-3">
                  Facebook & Instagram campaigns with pixel-perfect tracking and dynamic retargeting.
                </p>
                <div className="text-xs text-[#3b82f6] font-bold">3B+ Users</div>
              </div>

              {/* Google Ads */}
              <div className="widget-card p-6 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-yellow-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#ea4335" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Google Ads</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-3">
                  Search, Display, and YouTube campaigns capturing high-intent buyers.
                </p>
                <div className="text-xs text-red-400 font-bold">8.5B Searches/Day</div>
              </div>

              {/* LinkedIn Ads */}
              <div className="widget-card p-6 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-700/20 to-blue-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0077b5" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">LinkedIn Ads</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-3">
                  B2B targeting with precision audience filters for decision-makers.
                </p>
                <div className="text-xs text-blue-400 font-bold">900M Professionals</div>
              </div>

              {/* TikTok Ads */}
              <div className="widget-card p-6 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-600/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.40-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" fill="#f472b6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">TikTok Ads</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-3">
                  Viral creative strategies to capture younger, highly-engaged audiences.
                </p>
                <div className="text-xs text-[#f472b6] font-bold">1B+ Active Users</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="w-full border-t border-white/5 bg-[#050505] py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Our <span className="cotton-candy-gradient">Approach</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                We don't just launch campaigns and hope for the best. Our systematic approach is designed to maximize every dollar spent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Strategic Audience Research */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Strategic Audience Research</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Deep audience analysis to identify your ideal customers' demographics, behaviors, pain points, and buying patterns.
                </p>
              </div>

              {/* Conversion-Focused Creative */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f472b6]/20 to-[#ec4899]/20 flex items-center justify-center text-[#f472b6] mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Conversion-Focused Creative</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Eye-catching ad design and persuasive copy that stops the scroll and drives action. Every element is A/B tested.
                </p>
              </div>

              {/* Precision Targeting */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3b82f6]/20 to-[#2563eb]/20 flex items-center justify-center text-[#3b82f6] mb-6 group-hover:scale-110 transition-transform">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Precision Targeting</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Advanced audience segmentation, lookalike modeling, and retargeting strategies to reach the right people at the right time.
                </p>
              </div>

              {/* Landing Page Optimization */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
                  <Gauge className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Landing Page Optimization</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Purpose-built landing pages designed for maximum conversions, with clear CTAs and minimal friction.
                </p>
              </div>

              {/* Real-Time Optimization */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 transition-transform">
                  <RefreshCw className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Real-Time Optimization</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Continuous monitoring and tweaking of campaigns based on performance data to improve ROAS week over week.
                </p>
              </div>

              {/* Advanced Analytics */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Advanced Analytics</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Detailed reporting on every metric that matters—CAC, ROAS, conversion rates, and full-funnel attribution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Campaign Types */}
        <section className="w-full border-t border-white/5 bg-black/20 py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Campaign Types We <span className="text-[#3b82f6]">Master</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                From awareness to conversion, we execute campaigns across the entire customer journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Lead Generation */}
              <div className="widget-card p-8 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center text-[#3b82f6] shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Lead Generation Campaigns</h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-4">
                      Capture high-quality leads with compelling offers, lead magnets, and forms that convert. Perfect for B2B and high-ticket services.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-white/50">
                        <CheckCircle className="w-4 h-4 text-[#3b82f6]" />
                        Facebook Lead Ads
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/50">
                        <CheckCircle className="w-4 h-4 text-[#3b82f6]" />
                        LinkedIn Lead Gen Forms
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/50">
                        <CheckCircle className="w-4 h-4 text-[#3b82f6]" />
                        Google Search Ads
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* E-Commerce */}
              <div className="widget-card p-8 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f472b6]/10 border border-[#f472b6]/20 flex items-center justify-center text-[#f472b6] shrink-0">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">E-Commerce Sales Campaigns</h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-4">
                      Drive direct sales with dynamic product ads, shopping campaigns, and abandoned cart retargeting.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-white/50">
                        <CheckCircle className="w-4 h-4 text-[#f472b6]" />
                        Dynamic Product Ads
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/50">
                        <CheckCircle className="w-4 h-4 text-[#f472b6]" />
                        Google Shopping
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/50">
                        <CheckCircle className="w-4 h-4 text-[#f472b6]" />
                        Retargeting Funnels
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Brand Awareness */}
              <div className="widget-card p-8 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <Megaphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Brand Awareness Campaigns</h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-4">
                      Build brand recognition and reach cold audiences with video ads, display campaigns, and influencer partnerships.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-white/50">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        YouTube Pre-Roll Ads
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/50">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        Display Network
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/50">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        TikTok Brand Takeovers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Retargeting */}
              <div className="widget-card p-8 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Retargeting Campaigns</h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-4">
                      Re-engage warm audiences who've already shown interest. The most cost-effective way to drive conversions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-white/50">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Pixel-Based Retargeting
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/50">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Email List Retargeting
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/50">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Video View Audiences
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Dashboard Visualization */}
        <section className="w-full border-t border-white/5 bg-[#050505] py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Track Every <span className="cotton-candy-gradient">Dollar</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Full transparency with detailed dashboards showing exactly where your money goes and what returns it generates.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Dashboard Mockup */}
              <div className="relative">
                <div className="absolute inset-0 bg-[#3b82f6]/20 blur-[80px] rounded-full"></div>
                <div className="glass-pane rounded-2xl p-6 border border-white/10 relative overflow-hidden">
                  <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                    <h3 className="text-white font-bold">Campaign Performance</h3>
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded text-xs text-white/60">
                      <span>Last 30 Days</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="widget-card rounded-xl p-4">
                      <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">Total Spend</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">$12,480</span>
                      </div>
                    </div>
                    <div className="widget-card rounded-xl p-4 bg-green-500/10 border-green-500/20">
                      <p className="text-[10px] text-green-400 uppercase font-bold tracking-widest mb-1">Revenue Generated</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">$67,392</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="widget-card rounded-xl p-4 text-center">
                      <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-2">ROAS</p>
                      <div className="text-2xl font-bold text-[#3b82f6] flex items-center justify-center gap-1">
                        5.4<span className="text-sm">x</span>
                      </div>
                    </div>
                    <div className="widget-card rounded-xl p-4 text-center">
                      <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-2">CTR</p>
                      <div className="text-2xl font-bold text-[#f472b6]">3.8%</div>
                    </div>
                    <div className="widget-card rounded-xl p-4 text-center">
                      <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-2">Conv. Rate</p>
                      <div className="text-2xl font-bold text-green-400">4.2%</div>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="widget-card rounded-xl p-4 h-40 flex items-end justify-between gap-2 px-6">
                    {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 100].map((height, i) => (
                      <div
                        key={i}
                        className={`w-full rounded-t transition-colors ${
                          i >= 9
                            ? 'bg-[#3b82f6] hover:bg-[#3b82f6]/80'
                            : 'bg-white/10 hover:bg-[#3b82f6]/40'
                        }`}
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Metrics List */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center text-[#3b82f6] shrink-0">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Cost Per Acquisition (CPA)</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Track exactly how much it costs to acquire each customer across all channels and campaigns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Return on Ad Spend (ROAS)</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Real-time ROAS tracking so you know which campaigns are printing money and which need optimization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f472b6]/10 border border-[#f472b6]/20 flex items-center justify-center text-[#f472b6] shrink-0">
                    <LineChart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Customer Lifetime Value (LTV)</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Understand the full value of customers acquired through paid ads to optimize for long-term profitability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Attribution Modeling</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Multi-touch attribution to understand which touchpoints deserve credit for conversions in complex customer journeys.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="w-full border-t border-white/5 bg-black/20 py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Real Results, Real <span className="text-[#3b82f6]">Clients</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                We let the numbers do the talking. Here's what we've achieved for businesses just like yours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <div className="widget-card p-8 rounded-2xl">
                <div className="text-xs text-white/40 font-bold uppercase tracking-widest mb-4">Real Estate Agency</div>
                <div className="mb-6">
                  <div className="text-5xl font-black text-white mb-2">150<span className="text-[#3b82f6]">x</span></div>
                  <div className="text-sm text-white/60">Return on Ad Spend</div>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  Generated 2 high-ticket property sales from a $1,800 ad budget, resulting in $270K in commissions.
                </p>
              </div>

              {/* Case Study 2 */}
              <div className="widget-card p-8 rounded-2xl">
                <div className="text-xs text-white/40 font-bold uppercase tracking-widest mb-4">E-Commerce Brand</div>
                <div className="mb-6">
                  <div className="text-5xl font-black text-white mb-2">4.8<span className="text-[#f472b6]">x</span></div>
                  <div className="text-sm text-white/60">ROAS in 60 Days</div>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  Scaled monthly revenue from $40K to $185K through strategic Meta and Google ad campaigns.
                </p>
              </div>

              {/* Case Study 3 */}
              <div className="widget-card p-8 rounded-2xl">
                <div className="text-xs text-white/40 font-bold uppercase tracking-widest mb-4">SaaS Company</div>
                <div className="mb-6">
                  <div className="text-5xl font-black text-white mb-2">-62<span className="text-green-400">%</span></div>
                  <div className="text-sm text-white/60">Cost Per Lead Reduction</div>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  Optimized LinkedIn campaigns to reduce CPL from $145 to $55 while maintaining lead quality.
                </p>
              </div>
            </div>

            <div className="result-snippet blue mt-12">
              <div className="w-12 h-12 rounded-full bg-[#3b82f6]/20 flex items-center justify-center text-[#3b82f6] shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-white/40 font-bold uppercase tracking-wider mb-1">AVERAGE CLIENT RESULT</p>
                <p className="text-white leading-relaxed">
                  Our clients see an average <strong className="text-[#3b82f6]">340% increase in qualified leads</strong> and <strong className="text-[#3b82f6]">4.2x ROAS</strong> within the first 90 days of working with us.
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
                  Ready to Scale With <br />
                  <span className="cotton-candy-gradient">Profitable Ad Campaigns?</span>
                </h2>
                <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
                  Stop throwing money at ads that don't convert. Let's build campaigns that actually deliver ROI.
                </p>
                <Link to="/contact">
                  <Button className="px-10 py-4 bg-white text-black text-lg font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-lg hover:shadow-white/20">
                    Launch Your Campaign
                  </Button>
                </Link>
                <p className="mt-6 text-xs text-white/30 font-bold uppercase tracking-widest">
                  Free Ad Account Audit • 30-Day Performance Guarantee
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
