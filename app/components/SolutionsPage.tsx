import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { GradientButton } from '@/app/components/GradientButton';
import {
  Globe,
  MousePointerClick,
  Bot,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Mail,
  Calendar,
  Trash2,
  Archive,
  MessageSquare,
  Video,
  Pen,
  Fingerprint,
  BarChart3,
  Palette,
  Code,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-transparent relative z-10 text-white overflow-x-hidden">
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="w-full max-w-[1440px] mx-auto px-6 py-24 lg:py-32 text-center">
          <div className="flex flex-col items-center gap-6 z-10 relative max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-wider w-fit">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f472b6]"></span>
              </span>
              Result-Driven Services
            </div>

            <h1 className="text-white text-5xl lg:text-7xl font-black leading-[1.1] tracking-[-0.02em]">
              Full-Stack <br />
              <span className="cotton-candy-gradient">Growth Solutions</span>
            </h1>

            <p className="text-white/60 text-lg lg:text-xl font-light leading-relaxed max-w-3xl mx-auto text-center">
              Websites • Paid Advertising • Automation • SEO • Social Media Management • Content Creation • Email Marketing • YouTube Management • Logo Design • Brand Identity
            </p>
          </div>
        </section>

        {/* High-Converting Web Architecture */}
        <section className="w-full border-t border-white/5 bg-black/20 backdrop-blur-sm py-24 px-6">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex flex-col gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f472b6] mb-2">
                <Globe className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                High-Converting <br />
                <span className="text-[#f472b6]">Web Architecture</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Your website is your 24/7 salesperson. We design interfaces that guide visitors seamlessly from curiosity to conversion. Forget templates; we build custom digital experiences optimized for speed and persuasion.
              </p>

              <div className="result-snippet pink">
                <div className="mt-1 w-10 h-10 rounded-full bg-[#f472b6]/20 flex items-center justify-center text-[#f472b6] shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-wider mb-1">Client Success Story</p>
                  <p className="text-white text-sm leading-relaxed">
                    "Strategic redesign of the user experience resulted in significantly improved engagement and lead generation."
                  </p>
                </div>
              </div>

              <ul className="space-y-4 mt-2">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">Conversion-First UI/UX</h4>
                    <p className="text-sm text-white/50">Layouts designed around user psychology and clear CTAs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">SEO-Ready Structure</h4>
                    <p className="text-sm text-white/50">Built-in technical SEO to rank higher from day one.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-4">
                <Link to="/services/website">
                  <GradientButton className="py-3 px-8 flex items-center gap-2 group">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </GradientButton>
                </Link>
              </div>
            </div>

            {/* Website Mockup */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-[#f472b6]/20 blur-[80px] rounded-full"></div>
              <div className="glass-pane w-full rounded-2xl p-4 border border-white/10 relative shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 mb-4 px-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="bg-white/5 h-6 rounded flex-1 ml-4 border border-white/5"></div>
                </div>
                <div className="bg-[#06071a] rounded-lg border border-white/5 p-6 aspect-[4/3] flex flex-col gap-4 relative overflow-hidden">
                  <div className="flex justify-between items-center">
                    <div className="w-20 h-6 bg-white/10 rounded"></div>
                    <div className="flex gap-2">
                      <div className="w-12 h-4 bg-white/5 rounded"></div>
                      <div className="w-12 h-4 bg-white/5 rounded"></div>
                      <div className="w-16 h-8 bg-[#f472b6] rounded-md"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-8 gap-4 text-center z-10">
                    <div className="w-3/4 h-8 bg-gradient-to-r from-white/20 to-white/5 rounded"></div>
                    <div className="w-1/2 h-8 bg-gradient-to-r from-white/20 to-white/5 rounded"></div>
                    <div className="w-2/3 h-4 bg-white/5 rounded mt-2"></div>
                    <div className="flex gap-4 mt-4">
                      <div className="w-32 h-10 bg-[#f472b6] rounded-lg"></div>
                      <div className="w-32 h-10 bg-white/10 rounded-lg"></div>
                    </div>
                  </div>
                  
                  {/* Project Timeline Badge */}
                  <div className="absolute bottom-6 right-6 z-20 bg-black/90 backdrop-blur-md border border-[#f472b6]/30 p-4 rounded-xl shadow-xl">
                    <div className="flex flex-col gap-3">
                      <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider">Project Flow</span>
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-8 h-8 rounded-lg bg-[#f472b6]/20 border border-[#f472b6]/40 flex items-center justify-center">
                            <Palette className="w-4 h-4 text-[#f472b6]" />
                          </div>
                          <span className="text-[8px] text-white/60 font-medium">Design</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-white/30" />
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-8 h-8 rounded-lg bg-[#60a5fa]/20 border border-[#60a5fa]/40 flex items-center justify-center">
                            <Code className="w-4 h-4 text-[#60a5fa]" />
                          </div>
                          <span className="text-[8px] text-white/60 font-medium">Build</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-white/30" />
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-8 h-8 rounded-lg bg-[#10b981]/20 border border-[#10b981]/40 flex items-center justify-center">
                            <Rocket className="w-4 h-4 text-[#10b981]" />
                          </div>
                          <span className="text-[8px] text-white/60 font-medium">Launch</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mt-auto">
                    <div className="h-24 bg-white/5 rounded-lg border border-white/5"></div>
                    <div className="h-24 bg-white/5 rounded-lg border border-white/5"></div>
                    <div className="h-24 bg-white/5 rounded-lg border border-white/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Precision Ad Targeting */}
        <section className="w-full border-t border-white/5 bg-[#06071a] py-24 px-6">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Campaign Dashboard */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#3b82f6]/20 blur-[80px] rounded-full"></div>
              <div className="glass-pane w-full rounded-2xl p-6 lg:p-8 border border-white/10 relative shadow-2xl flex flex-col gap-6">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <h3 className="text-white font-bold">Campaign Performance</h3>
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded text-xs text-white/60">
                    <span>Last 30 Days</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="widget-card rounded-xl p-4">
                    <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Total Spend</p>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-xl font-bold text-white">$1,250</span>
                      <span className="text-[10px] text-red-400 font-bold">+5%</span>
                    </div>
                  </div>
                  <div className="widget-card rounded-xl p-4 bg-[#3b82f6]/10 border-[#3b82f6]/20">
                    <p className="text-[10px] text-[#3b82f6] uppercase font-bold tracking-widest">Meetings Scheduled</p>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-xl font-bold text-white">35</span>
                      <span className="text-xs text-[#3b82f6] font-bold flex items-center gap-0.5">+22% <TrendingUp className="w-3 h-3" /></span>
                    </div>
                  </div>
                </div>

                {/* Chart */}
                <div className="widget-card rounded-xl p-4 h-48 flex items-end justify-between gap-2 px-6">
                  {[30, 45, 35, 60, 50, 85, 75].map((height, i) => (
                    <div
                      key={i}
                      className={`w-full rounded-t transition-colors ${
                        i === 5
                          ? 'bg-[#3b82f6]/50 hover:bg-[#3b82f6] relative group'
                          : 'bg-white/5 hover:bg-[#3b82f6]/40'
                      }`}
                      style={{ height: `${height}%` }}
                    >
                      {i === 5 && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black border border-white/10 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap shadow-lg">
                          ROAS: 5.4x
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <div className="flex items-center gap-2 text-xs text-white/50 bg-white/5 px-2 py-1 rounded-full border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div> Meta Ads
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/50 bg-white/5 px-2 py-1 rounded-full border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div> Google PPC
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/50 bg-white/5 px-2 py-1 rounded-full border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div> LinkedIn
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#3b82f6] mb-2">
                <MousePointerClick className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Precision <br />
                <span className="text-[#3b82f6]">Ad Targeting</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Stop burning budget on broad audiences. We deploy capital where it counts. Our data-driven approach ensures every dollar spent brings you closer to your ideal customer with surgical precision.
              </p>

              <div className="result-snippet blue">
                <div className="mt-1 w-10 h-10 rounded-full bg-[#3b82f6]/20 flex items-center justify-center text-[#3b82f6] shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-wider mb-1">Real Estate ROI Spotlight</p>
                  <p className="text-white text-sm leading-relaxed">
                    "Achieved a <strong className="text-[#3b82f6]">150x ROAS</strong> for a Florida Realtor, acquiring and closing 2 high-ticket deals."
                  </p>
                </div>
              </div>

              <ul className="space-y-4 mt-2">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#3b82f6] mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">Cross-Channel Retargeting</h4>
                    <p className="text-sm text-white/50">Follow high-intent users across Meta, Google, and LinkedIn.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#3b82f6] mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">Creative Testing Lab</h4>
                    <p className="text-sm text-white/50">Continuous A/B testing of visuals and copy to lower CPA.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-4">
                <Link to="/services/advertising">
                  <GradientButton className="py-3 px-8 flex items-center gap-2 group">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </GradientButton>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Intelligent Automation */}
        <section className="w-full border-t border-white/5 bg-black/20 backdrop-blur-sm py-24 px-6">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex flex-col gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#60a5fa] mb-2">
                <Bot className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Intelligent <br />
                <span className="text-[#60a5fa]">Automation</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Eliminate manual follow-ups. Our systems capture, qualify, and nurture leads instantly, ensuring no opportunity slips through the cracks while you focus on closing deals.
              </p>

              <div className="result-snippet cyan">
                <div className="mt-1 w-10 h-10 rounded-full bg-[#60a5fa]/20 flex items-center justify-center text-[#60a5fa] shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-wider mb-1">Efficiency Gain</p>
                  <p className="text-white text-sm leading-relaxed">
                    "Saved a Real Estate Agency <strong className="text-[#60a5fa]">20 hours/week</strong> of manual entry, freeing agents to close deals."
                  </p>
                </div>
              </div>

              <ul className="space-y-4 mt-2">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#60a5fa] mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">Instant Lead Response</h4>
                    <p className="text-sm text-white/50">Trigger SMS & Email sequences within 5 seconds of opt-in.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#60a5fa] mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">CRM Synchronization</h4>
                    <p className="text-sm text-white/50">Seamless two-way sync with HubSpot, Salesforce, and Pipedrive.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-4">
                <Link to="/services/automation">
                  <GradientButton className="py-3 px-8 flex items-center gap-2 group">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </GradientButton>
                </Link>
              </div>
            </div>

            {/* Automation Workflow */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-[#60a5fa]/20 blur-[80px] rounded-full"></div>
              <div className="glass-pane w-full rounded-2xl p-8 border border-white/10 relative shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center">
                <div className="absolute top-6 right-6 z-20 bg-black/80 backdrop-blur-md border border-[#60a5fa]/30 px-4 py-2 rounded-full shadow-xl flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-bold text-white">24/7 Active</span>
                </div>

                <div className="relative w-full h-full flex flex-col items-center gap-8">
                  {/* New Lead */}
                  <div className="bg-white/10 border border-white/20 p-4 rounded-xl flex items-center gap-3 w-48 shadow-lg z-10">
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold text-white">New Lead In</div>
                  </div>

                  <div className="h-8 w-0.5 bg-white/20"></div>

                  {/* Qualify Decision */}
                  <div className="bg-[#111] border border-[#60a5fa]/30 p-4 rounded-xl flex items-center justify-center gap-3 w-48 shadow-lg z-10">
                    <div className="text-sm font-bold text-white">Qualify Lead?</div>
                  </div>

                  <div className="relative w-64 h-8">
                    <div className="absolute left-1/2 top-0 h-4 w-0.5 bg-white/20 -translate-x-1/2"></div>
                    <div className="absolute left-[20%] top-4 right-[20%] h-0.5 bg-white/20"></div>
                    <div className="absolute left-[20%] top-4 h-4 w-0.5 bg-white/20"></div>
                    <div className="absolute right-[20%] top-4 h-4 w-0.5 bg-white/20"></div>
                  </div>

                  {/* Action Branches */}
                  <div className="flex gap-8 w-full justify-center">
                    <div className="flex flex-col items-center">
                      <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-3 w-40 opacity-50">
                        <div className="w-6 h-6 rounded bg-gray-700 flex items-center justify-center">
                          <Archive className="w-3 h-3" />
                        </div>
                        <span className="text-xs font-medium text-white">Archive</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                      <div className="bg-[#60a5fa]/10 border border-[#60a5fa]/30 p-3 rounded-xl flex items-center gap-3 w-48 shadow-[0_0_15px_rgba(96,165,250,0.2)]">
                        <div className="w-6 h-6 rounded bg-[#60a5fa]/20 flex items-center justify-center text-[#60a5fa]">
                          <MessageSquare className="w-3 h-3" />
                        </div>
                        <span className="text-xs font-bold text-white">Send SMS Intro</span>
                      </div>
                      <div className="h-4 w-0.5 bg-[#60a5fa]/30"></div>
                      <div className="bg-[#f472b6]/10 border border-[#f472b6]/30 p-3 rounded-xl flex items-center gap-3 w-48 shadow-[0_0_15px_rgba(244,114,182,0.2)]">
                        <div className="w-6 h-6 rounded bg-[#f472b6]/20 flex items-center justify-center text-[#f472b6]">
                          <Calendar className="w-3 h-3" />
                        </div>
                        <span className="text-xs font-bold text-white">Book Meeting</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Solutions */}
        <section className="w-full border-t border-white/5 py-24 px-6 bg-black/40">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-white mb-4">
                Specialized <span className="text-white/50">Solutions</span>
              </h2>
              <p className="text-white/60">Additional capabilities to round out your brand presence.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="widget-card p-8 rounded-2xl group cursor-default flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 transition-transform">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">YouTube Management</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-8 flex-grow">
                  Full-service channel growth including thumbnail design, video SEO, and engagement strategies to build a loyal subscriber base.
                </p>
                <Link to="/services/youtube">
                  <GradientButton variant="ghost" className="w-fit px-6 py-2 text-xs self-start">
                    Learn more
                  </GradientButton>
                </Link>
              </div>

              <div className="widget-card p-8 rounded-2xl group cursor-default flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  <Pen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Logo Design</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-8 flex-grow">
                  Memorable, scalable marks that define your brand instantly. Delivered with full vector files and usage guidelines.
                </p>
                <Link to="/services/branding">
                  <GradientButton variant="ghost" className="w-fit px-6 py-2 text-xs self-start">
                    Learn more
                  </GradientButton>
                </Link>
              </div>

              <div className="widget-card p-8 rounded-2xl group cursor-default flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform">
                  <Fingerprint className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Brand Identity</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-8 flex-grow">
                  Cohesive visual systems including color palettes, typography, and voice guidelines to ensure consistency across all touchpoints.
                </p>
                <Link to="/services/branding">
                  <GradientButton variant="ghost" className="w-fit px-6 py-2 text-xs self-start">
                    Learn more
                  </GradientButton>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Integration */}
        <section className="w-full bg-[#06071a] py-32 px-6 relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center">
            <div className="text-center mb-24 max-w-3xl relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Ecosystem <span className="cotton-candy-gradient">Integration</span>
              </h2>
              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
                We don't provide isolated services. We build a connected engine where every component amplifies the others, creating a seamless loop of growth for your business.
              </p>
            </div>

            <div className="relative w-full max-w-6xl py-20 px-4">
              {/* Connection Lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg className="w-full h-full max-w-5xl" fill="none" viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg">
                  <line stroke="rgba(255,255,255,0.1)" strokeDasharray="8 8" strokeWidth="2" x1="125" x2="875" y1="130" y2="130" />
                  <path d="M875 130 C 875 350, 125 350, 125 130" stroke="rgba(255,255,255,0.1)" strokeDasharray="8 8" strokeWidth="2" />
                </svg>
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#06071a] border-2 flex items-center justify-center text-[#f472b6] pillar-glow-pink mb-6 relative">
                    <Globe className="w-8 h-8 icon-bright" />
                  </div>
                  <h3 className="text-white font-black text-sm tracking-tight mb-1">WEB ARCHITECTURE</h3>
                  <p className="text-[10px] text-white/40 font-bold tracking-widest uppercase">THE FOUNDATION</p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#06071a] border-2 flex items-center justify-center text-[#3b82f6] pillar-glow-blue mb-6 relative">
                    <MousePointerClick className="w-8 h-8 icon-bright" />
                  </div>
                  <h3 className="text-white font-black text-sm tracking-tight mb-1">PAID TRAFFIC</h3>
                  <p className="text-[10px] text-white/40 font-bold tracking-widest uppercase">THE FUEL</p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#06071a] border-2 flex items-center justify-center text-[#3b82f6] pillar-glow-blue mb-6 relative">
                    <Bot className="w-8 h-8 icon-bright" />
                  </div>
                  <h3 className="text-white font-black text-sm tracking-tight mb-1">AUTOMATION</h3>
                  <p className="text-[10px] text-white/40 font-bold tracking-widest uppercase">THE SCALE</p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#06071a] border-2 flex items-center justify-center text-[#3b82f6] pillar-glow-blue mb-6 relative">
                    <BarChart3 className="w-8 h-8 icon-bright" />
                  </div>
                  <h3 className="text-white font-black text-sm tracking-tight mb-1">DATA INSIGHTS</h3>
                  <p className="text-[10px] text-white/40 font-bold tracking-widest uppercase">THE OPTIMIZER</p>
                </div>
              </div>

              <div className="mt-24 w-full flex flex-wrap justify-center gap-4 md:gap-8 items-center text-[10px] md:text-[11px] font-black tracking-[0.2em] text-white/20 uppercase">
                <span className="text-white/40">CLICK</span>
                <span className="text-white/10">→</span>
                <span className="text-white/40">VISIT</span>
                <span className="text-white/10">→</span>
                <span className="text-white/40">CAPTURE</span>
                <span className="text-white/10">→</span>
                <span className="text-white/40">NURTURE</span>
                <span className="text-white/10">→</span>
                <span className="text-white">CONVERSION</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-6 py-20 bg-gradient-to-b from-transparent to-black border-t border-white/5">
          <div className="max-w-[1000px] mx-auto">
            <div className="bg-gradient-to-r from-[#1a1d21] to-[#0f0f0f] border border-white/10 rounded-[2rem] p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b82f6]/10 blur-[80px] rounded-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f472b6]/10 blur-[80px] rounded-full pointer-events-none"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Ready to <span className="cotton-candy-gradient">Scale?</span>
                </h2>
                <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
                  Every business is unique. Tell us about your goals, and we'll engineer a custom growth stack specifically for your market.
                </p>
                <Link to="/contact">
                  <GradientButton className="px-10 py-4 text-lg">
                    Get a Custom Quote
                  </GradientButton>
                </Link>
                <p className="mt-6 text-xs text-white/30 font-bold uppercase tracking-widest">
                  Response time: &lt; 24 Hours
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