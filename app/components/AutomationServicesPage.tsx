import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import ServiceTabs from '@/app/components/ServiceTabs';
import { Button } from '@/app/components/ui/button';
import { 
  Workflow, 
  Mail,
  Calendar,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  BarChart3,
  Instagram,
  Youtube,
  Facebook,
  Linkedin,
  Twitter,
  RefreshCw,
  FileText,
  Target,
  Sparkles,
  Bot,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router';

export default function AutomationServicesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Blur Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#a855f7] blur-[100px] opacity-25 top-[-150px] left-[-150px]"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#3b82f6] blur-[100px] opacity-25 bottom-[-150px] right-[-150px]"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#f472b6] blur-[100px] opacity-20 top-[40%] left-[50%]"></div>
      </div>

      <div className="relative z-10">
        <Navigation />
        <ServiceTabs />

        {/* Hero Section */}
        <section className="w-full max-w-[1440px] mx-auto px-6 py-24 lg:py-32">
          <div className="flex flex-col items-center gap-6 z-10 relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-wider w-fit">
              <Workflow className="w-3 h-3" />
              Marketing Automation Services
            </div>

            <h1 className="text-white text-5xl lg:text-7xl font-black leading-[1.1] tracking-[-0.02em]">
              Work Smarter, Not Harder with <br />
              <span className="cotton-candy-gradient">Marketing Automation</span>
            </h1>

            <p className="text-white/60 text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
              Stop wasting time on repetitive tasks. We build intelligent automation systems that nurture leads, manage your content, and keep your marketing running 24/7—so you can focus on growing your business.
            </p>

            <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
              <Link to="/contact">
                <Button className="px-8 py-4 bg-[#3b82f6] hover:bg-blue-600 text-white text-lg font-bold rounded-xl cta-glow-blue flex items-center gap-2 group">
                  Automate Your Marketing
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Core Automation Services */}
        <section className="w-full border-t border-white/5 bg-black/40 py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Our <span className="cotton-candy-gradient">Automation</span> Services
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                From email sequences to social media management, we automate the entire marketing lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Email Marketing Automation */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3b82f6]/20 to-[#60a5fa]/20 flex items-center justify-center text-[#3b82f6] mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Email Marketing Automation</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Set up sophisticated email sequences that nurture leads, onboard customers, and drive conversions on autopilot.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                    Welcome series & onboarding
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                    Abandoned cart recovery
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                    Lead nurture campaigns
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                    Re-engagement sequences
                  </li>
                </ul>
              </div>

              {/* Workflow Automation */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#a855f7]/20 to-[#8b5cf6]/20 flex items-center justify-center text-[#a855f7] mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Workflow & Integration Setup</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Connect all your tools and create automated workflows that eliminate manual data entry and repetitive tasks.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" />
                    CRM integrations & sync
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" />
                    Lead routing & assignment
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" />
                    Multi-channel automation
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" />
                    Custom API connections
                  </li>
                </ul>
              </div>

              {/* Social Media Automation */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f472b6]/20 to-[#ec4899]/20 flex items-center justify-center text-[#f472b6] mb-6 group-hover:scale-110 transition-transform">
                  <Instagram className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Social Media Content Automation</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Automate content creation, scheduling, and posting across all your social channels for consistent brand presence.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#f472b6] mt-0.5 flex-shrink-0" />
                    Multi-platform scheduling
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#f472b6] mt-0.5 flex-shrink-0" />
                    Content calendar management
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#f472b6] mt-0.5 flex-shrink-0" />
                    Automated content repurposing
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#f472b6] mt-0.5 flex-shrink-0" />
                    Performance tracking
                  </li>
                </ul>
              </div>

              {/* Lead Nurturing */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Lead Nurturing Systems</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Build automated nurture paths that guide prospects from first touch to closed deal without manual intervention.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    Behavioral triggers
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    Lead scoring automation
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    Sales handoff automation
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    Multi-touch attribution
                  </li>
                </ul>
              </div>

              {/* Content Production */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Automated Content Production</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Streamline your content creation process with AI-assisted writing, batch production, and automated distribution.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    AI content generation
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    Template-based production
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    Cross-platform optimization
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    Automated publishing
                  </li>
                </ul>
              </div>

              {/* Analytics & Reporting */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Reporting & Analytics Automation</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Get automated insights delivered to your inbox with custom dashboards and scheduled reports.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    Automated report generation
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    Real-time dashboards
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    Performance alerts
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    Custom KPI tracking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Automation Matters */}
        <section className="w-full border-t border-white/5 py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Why <span className="cotton-candy-gradient">Automation</span> Matters
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Marketing automation isn't just about saving time—it's about scaling your impact and delivering better results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Save 20+ Hours Per Week</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Stop manually sending emails, posting content, and updating spreadsheets. Automation handles the repetitive work so you can focus on strategy.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-[#f472b6]/10 flex items-center justify-center text-[#f472b6] flex-shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Increase Conversion Rates</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Deliver the right message at the right time with behavioral triggers and personalized nurture sequences that convert.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-[#a855f7]/10 flex items-center justify-center text-[#a855f7] flex-shrink-0">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Never Miss a Follow-Up</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Every lead gets timely, consistent communication. No more lost opportunities from forgotten follow-ups.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 flex-shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Scale Without Hiring</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Handle 10x more leads with the same team size. Automation systems work 24/7 without overtime pay.
                    </p>
                  </div>
                </div>
              </div>

              <div className="widget-card p-10 rounded-3xl">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#3b82f6]/20 to-[#a855f7]/20">
                    <Bot className="w-10 h-10 text-[#3b82f6]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Ready to Automate?</h3>
                  <p className="text-white/60 leading-relaxed">
                    Let's build a custom automation system tailored to your business. We'll audit your current processes and identify opportunities to save time and increase revenue.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-4 rounded-xl cta-glow-blue flex items-center justify-center gap-2 group">
                      Get Your Free Automation Audit
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Platforms We Support */}
        <section className="w-full border-t border-white/5 bg-black/40 py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Platforms We <span className="cotton-candy-gradient">Automate</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                We integrate with all major platforms to create a seamless automation ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="widget-card p-6 rounded-2xl text-center group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-[#E4405F]/10 flex items-center justify-center text-[#E4405F] mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-white">Instagram</h3>
              </div>

              <div className="widget-card p-6 rounded-2xl text-center group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-[#FF0000]/10 flex items-center justify-center text-[#FF0000] mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Youtube className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-white">YouTube</h3>
              </div>

              <div className="widget-card p-6 rounded-2xl text-center group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2] mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Facebook className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-white">Facebook</h3>
              </div>

              <div className="widget-card p-6 rounded-2xl text-center group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-white">LinkedIn</h3>
              </div>

              <div className="widget-card p-6 rounded-2xl text-center group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Twitter className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-white">X (Twitter)</h3>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full border-t border-white/5 py-24 px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Stop Doing It Manually.<br />
              <span className="cotton-candy-gradient">Start Automating Today.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Book a free consultation and we'll show you exactly how automation can transform your marketing—no fluff, just actionable strategies.
            </p>
            <Link to="/contact">
              <Button className="px-10 py-5 bg-[#3b82f6] hover:bg-blue-600 text-white text-lg font-bold rounded-xl cta-glow-blue inline-flex items-center gap-2 group">
                Schedule Your Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
