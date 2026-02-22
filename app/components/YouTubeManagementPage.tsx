import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { GradientButton } from '@/app/components/GradientButton';
import {
  Youtube,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Target,
  BarChart3,
  Users,
  Sparkles,
  Award,
  Video,
  Edit,
  MessageSquare,
  Search,
  Layers,
  Lightbulb,
  FileSearch,
  Map,
  Clapperboard,
  Megaphone,
  LineChart,
} from 'lucide-react';
import { Link } from 'react-router';

const steps = [
  {
    number: '01',
    icon: FileSearch,
    title: 'Channel Audit',
    description:
      "We deep-dive into your channel's analytics, content library, competitors, and niche — identifying exactly what's holding you back and where the growth opportunities are.",
  },
  {
    number: '02',
    icon: Map,
    title: 'Strategy & Roadmap',
    description:
      'A custom content plan built around your goals: upload schedule, topic pillars, keyword targets, and growth milestones. No templates — built specifically for your channel.',
  },
  {
    number: '03',
    icon: Clapperboard,
    title: 'Create & Produce',
    description:
      'Video production, editing, thumbnail design — any combination of our services, or all of them. Pick exactly what you need. Every deliverable is optimized for retention and CTR.',
  },
  {
    number: '04',
    icon: Megaphone,
    title: 'Publish & Optimize',
    description:
      'SEO-optimized titles, descriptions, tags, and chapters. Community management and comment engagement. Every upload goes live algorithm-ready.',
  },
  {
    number: '05',
    icon: LineChart,
    title: 'Analyze & Refine',
    description:
      'Monthly reporting with audience retention breakdowns, CTR analysis, and growth tracking. We use data from every video to sharpen the strategy continuously.',
  },
];

export default function YouTubeManagementPage() {
  return (
    <div className="min-h-screen bg-transparent text-white overflow-x-hidden relative z-10">
      <div className="relative">
        <Navigation />

        {/* Hero Section */}
        <section className="w-full max-w-[1440px] mx-auto px-6 py-24 lg:py-32">
          <div className="flex flex-col items-center gap-6 z-10 relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-wider w-fit">
              <Youtube className="w-3 h-3" />
              YouTube Management Services
            </div>

            <h1 className="text-white text-5xl lg:text-7xl font-black leading-[1.1] tracking-[-0.02em]">
              Grow Your Channel, <br />
              <span className="cotton-candy-gradient">Build Your Audience</span>
            </h1>

            <p className="text-white/60 text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
              YouTube is the world's second-largest search engine. We handle everything from video production to optimization, so you can focus on creating great content while we grow your channel.
            </p>

            <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
              <Link to="/contact">
                <GradientButton className="px-8 py-4 text-lg flex items-center gap-2 group">
                  Grow Your YouTube Channel
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </GradientButton>
              </Link>
            </div>
          </div>
        </section>

        {/* YouTube Stats */}
        <section className="w-full border-t border-white/5 bg-black/40 py-16 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-black cotton-candy-gradient mb-2">368,181</div>
                <p className="text-white/60">Total Client YouTube Subscriber Growth</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-black cotton-candy-gradient mb-2">12M+</div>
                <p className="text-white/60">Total Views Generated</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-black cotton-candy-gradient mb-2">6+</div>
                <p className="text-white/60">Years of YouTube Channel Management</p>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Management Services */}
        <section className="w-full border-t border-white/5 py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Our <span className="cotton-candy-gradient">YouTube</span> Services
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                End-to-end YouTube channel management that drives views, subscribers, and engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Video Production */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF0000]/20 to-[#FF0000]/10 flex items-center justify-center text-[#FF0000] mb-6 group-hover:scale-110 transition-transform">
                  <Video className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Video Production</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Professional video production from concept to final edit that keeps viewers engaged.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#FF0000] mt-0.5 flex-shrink-0" />
                    Script writing & storyboarding
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#FF0000] mt-0.5 flex-shrink-0" />
                    Video shooting & direction
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#FF0000] mt-0.5 flex-shrink-0" />
                    Professional editing
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#FF0000] mt-0.5 flex-shrink-0" />
                    Motion graphics & animations
                  </li>
                </ul>
              </div>

              {/* Video Editing */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#a855f7]/20 to-[#c084fc]/20 flex items-center justify-center text-[#a855f7] mb-6 group-hover:scale-110 transition-transform">
                  <Edit className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Video Editing</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Expert editing that transforms raw footage into polished, engaging YouTube content.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" />
                    Color grading & correction
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" />
                    Audio mixing & enhancement
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" />
                    Transitions & effects
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" />
                    Captions & subtitles
                  </li>
                </ul>
              </div>

              {/* Channel Optimization */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3b82f6]/20 to-[#60a5fa]/20 flex items-center justify-center text-[#3b82f6] mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Channel Optimization</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Optimize your channel for maximum discoverability and subscriber conversion.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                    Channel art & branding
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                    About section optimization
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                    Playlist organization
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                    Featured channels setup
                  </li>
                </ul>
              </div>

              {/* SEO & Metadata */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#10b981]/20 to-[#34d399]/20 flex items-center justify-center text-[#10b981] mb-6 group-hover:scale-110 transition-transform">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">YouTube SEO</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Optimize every video for search and discovery to maximize organic views.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                    Keyword research
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                    Title & description optimization
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                    Tag strategy
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                    Hashtag optimization
                  </li>
                </ul>
              </div>

              {/* Thumbnail Design */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f472b6]/20 to-[#fb7185]/20 flex items-center justify-center text-[#f472b6] mb-6 group-hover:scale-110 transition-transform">
                  <Layers className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Thumbnail Design</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Eye-catching thumbnails that stand out in search results and increase click-through rates.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#f472b6] mt-0.5 flex-shrink-0" />
                    Custom thumbnail design
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#f472b6] mt-0.5 flex-shrink-0" />
                    A/B testing
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#f472b6] mt-0.5 flex-shrink-0" />
                    Brand consistency
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#f472b6] mt-0.5 flex-shrink-0" />
                    Click-optimized designs
                  </li>
                </ul>
              </div>

              {/* Community Management */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#eab308]/20 to-[#facc15]/20 flex items-center justify-center text-[#eab308] mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Community Management</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Build and nurture a loyal community through active engagement and moderation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#eab308] mt-0.5 flex-shrink-0" />
                    Comment management
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#eab308] mt-0.5 flex-shrink-0" />
                    Community posts
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#eab308] mt-0.5 flex-shrink-0" />
                    Subscriber engagement
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#eab308] mt-0.5 flex-shrink-0" />
                    Live stream moderation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full border-t border-white/5 bg-black/40 py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                How It <span className="cotton-candy-gradient">Works</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                A structured process for every client — whether you need one service or all of them.
              </p>
            </div>

            {/* Steps */}
            <div className="relative">
              {/* Connector line — desktop only */}
              <div className="hidden lg:block absolute top-[2.75rem] left-[calc(10%+2rem)] right-[calc(10%+2rem)] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.number} className="relative flex flex-col items-center lg:items-center text-center group">
                      {/* Step number bubble */}
                      <div className="relative mb-5 flex-shrink-0">
                        <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors duration-300">
                          <Icon className="w-5 h-5 text-white/50 group-hover:text-white/80 transition-colors duration-300" />
                        </div>
                        {/* Step number badge */}
                        <div
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white"
                          style={{
                            background: 'linear-gradient(135deg, #f472b6 0%, #a855f7 50%, #3b82f6 100%)',
                          }}
                        >
                          {i + 1}
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-base font-bold text-white mb-2 leading-tight">{step.title}</h3>
                      <p className="text-white/50 text-xs leading-relaxed">{step.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Modular callout */}
            <div className="mt-14 flex items-start gap-4 max-w-2xl mx-auto widget-card rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f472b6]/20 to-[#3b82f6]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5 text-[#f472b6]" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">Every service is available independently.</p>
                <p className="text-white/50 text-sm leading-relaxed">
                  Need only editing and thumbnails? Done. Want full-service management from production to reporting? We handle that too. You choose exactly what you need.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full border-t border-white/5 py-24 px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to <span className="cotton-candy-gradient">Grow</span> Your YouTube Channel?
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Let's build your YouTube presence and turn viewers into subscribers. Get a free channel audit and growth strategy consultation.
            </p>
            <Link to="/contact">
              <GradientButton className="px-10 py-5 text-xl flex items-center gap-2 group mx-auto w-fit">
                Get Your Free Channel Audit
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </GradientButton>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
