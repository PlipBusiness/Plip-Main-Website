import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { Button } from '@/app/components/ui/button';
import { 
  Youtube, 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Target,
  BarChart3,
  Users,
  Eye,
  Sparkles,
  Award,
  Video,
  Film,
  Edit,
  MessageSquare,
  ThumbsUp,
  Bell,
  Search,
  Lightbulb,
  Camera,
  Mic,
  Layers,
  Clock,
  DollarSign,
  PlayCircle
} from 'lucide-react';
import { Link } from 'react-router';

export default function YouTubeManagementPage() {
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
                <Button className="px-8 py-4 bg-[#FF0000] hover:bg-red-600 text-white text-lg font-bold rounded-xl cta-glow-red flex items-center gap-2 group">
                  Grow Your YouTube Channel
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
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
                <div className="text-5xl font-black cotton-candy-gradient mb-2">1B+</div>
                <p className="text-white/60">Hours Watched Daily</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-black cotton-candy-gradient mb-2">#2</div>
                <p className="text-white/60">Most Visited Website</p>
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

        {/* Content Strategy */}
        <section className="w-full border-t border-white/5 bg-black/40 py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                YouTube <span className="cotton-candy-gradient">Content Strategy</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Strategic planning and execution to grow your channel consistently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="widget-card p-8 rounded-2xl">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF0000]/20 to-[#FF0000]/10 flex items-center justify-center text-[#FF0000] mb-6">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Content Planning</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Data-driven content strategies that align with audience interests and trending topics.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#FF0000] mt-0.5 flex-shrink-0" />
                    Content calendar development
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#FF0000] mt-0.5 flex-shrink-0" />
                    Topic research & ideation
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#FF0000] mt-0.5 flex-shrink-0" />
                    Competitor analysis
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#FF0000] mt-0.5 flex-shrink-0" />
                    Upload scheduling
                  </li>
                </ul>
              </div>

              <div className="widget-card p-8 rounded-2xl">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3b82f6]/20 to-[#60a5fa]/20 flex items-center justify-center text-[#3b82f6] mb-6">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Analytics & Growth</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Comprehensive analytics tracking and optimization to maximize channel growth.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                    Performance tracking
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                    Audience retention analysis
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                    Monthly reporting
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                    Growth strategy refinement
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full border-t border-white/5 py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Why Choose <span className="cotton-candy-gradient">Plip</span> for YouTube?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF0000]/20 to-[#FF0000]/10 flex items-center justify-center text-[#FF0000] mb-4 mx-auto">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Proven Expertise</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  6+ years growing YouTube channels across multiple niches and industries.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#a855f7]/20 to-[#c084fc]/20 flex items-center justify-center text-[#a855f7] mb-4 mx-auto">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Data-Driven Growth</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Strategic optimization based on analytics, not guesswork.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3b82f6]/20 to-[#60a5fa]/20 flex items-center justify-center text-[#3b82f6] mb-4 mx-auto">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">End-to-End Service</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  From production to publishing, we handle everything for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full border-t border-white/5 bg-black/40 py-24 px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to <span className="cotton-candy-gradient">Grow</span> Your YouTube Channel?
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Let's build your YouTube presence and turn viewers into subscribers. Get a free channel audit and growth strategy consultation.
            </p>
            <Link to="/contact">
              <Button className="px-10 py-5 bg-[#FF0000] hover:bg-red-600 text-white text-xl font-bold rounded-xl cta-glow-red flex items-center gap-2 group mx-auto w-fit">
                Get Your Free Channel Audit
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
