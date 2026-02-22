import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { GradientButton } from '@/app/components/GradientButton';
import { 
  Palette, 
  ArrowRight,
  CheckCircle,
  Sparkles,
  Eye,
  Target,
  Layers,
  FileText,
  Award,
  Zap,
  TrendingUp,
  Users,
  Paintbrush,
  Shapes,
  Type,
  Image as ImageIcon,
  BookOpen,
  Layout
} from 'lucide-react';
import { Link } from 'react-router';

export default function BrandingPage() {
  return (
    <div className="min-h-screen bg-transparent relative z-10 text-white overflow-x-hidden">
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="w-full max-w-[1440px] mx-auto px-6 py-24 lg:py-32">
          <div className="flex flex-col items-center gap-6 z-10 relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-wider w-fit">
              <Palette className="w-3 h-3" />
              Logo Design & Brand Identity
            </div>

            <h1 className="text-white text-5xl lg:text-7xl font-black leading-[1.1] tracking-[-0.02em]">
              Build a Brand That <br />
              <span className="cotton-candy-gradient">Stands Out</span>
            </h1>

            <p className="text-white/60 text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
              Your brand is more than just a logo—it's the foundation of your business identity. We create memorable logos and comprehensive brand systems that captivate your audience and drive recognition.
            </p>

            <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
              <Link to="/contact">
                <GradientButton className="px-8 py-4 text-lg flex items-center gap-2 group">
                  Start Your Brand Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </GradientButton>
              </Link>
            </div>
          </div>
        </section>

        {/* Logo Design Section */}
        <section className="w-full border-t border-white/5 bg-black/40 py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3 h-3" />
                Logo Design
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Memorable <span className="cotton-candy-gradient">Logos</span> That Leave an Impression
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                A great logo is the cornerstone of your brand. We design unique, versatile logos that work across all platforms and mediums.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Custom Logo Design */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#a855f7]/20 to-[#c084fc]/20 flex items-center justify-center text-[#a855f7] mb-6 group-hover:scale-110 transition-transform">
                  <Paintbrush className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Custom Logo Design</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Original logos crafted specifically for your brand, reflecting your values and resonating with your target audience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" />
                    Multiple concept iterations
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" />
                    Unlimited revisions
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" />
                    Industry research & analysis
                  </li>
                </ul>
              </div>

              {/* Logo Variations */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3b82f6]/20 to-[#60a5fa]/20 flex items-center justify-center text-[#3b82f6] mb-6 group-hover:scale-110 transition-transform">
                  <Layers className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Logo Variations</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Multiple logo versions optimized for different use cases, from social media avatars to large-scale prints.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                    Primary, secondary & icon marks
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                    Light & dark versions
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                    Monochrome & color variations
                  </li>
                </ul>
              </div>

              {/* File Formats */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f472b6]/20 to-[#fb7185]/20 flex items-center justify-center text-[#f472b6] mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">All File Formats</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Your logo delivered in every format you'll need, from print-ready vector files to web-optimized formats.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#f472b6] mt-0.5 flex-shrink-0" />
                    Vector files (AI, EPS, SVG)
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#f472b6] mt-0.5 flex-shrink-0" />
                    Raster files (PNG, JPG, PDF)
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#f472b6] mt-0.5 flex-shrink-0" />
                    Social media ready sizes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="w-full border-t border-white/5 py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Our <span className="cotton-candy-gradient">Design Process</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                A collaborative, strategic approach to building your brand from the ground up.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#a855f7]/20 to-[#c084fc]/20 flex items-center justify-center text-[#a855f7] mb-4 mx-auto">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">1. Discovery</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We dive deep into your business, audience, and industry to understand what makes you unique.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3b82f6]/20 to-[#60a5fa]/20 flex items-center justify-center text-[#3b82f6] mb-4 mx-auto">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">2. Concept Development</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Multiple design concepts are created based on our research and your brand vision.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f472b6]/20 to-[#fb7185]/20 flex items-center justify-center text-[#f472b6] mb-4 mx-auto">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">3. Refinement</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We refine your chosen direction through collaborative feedback until it's perfect.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#10b981]/20 to-[#34d399]/20 flex items-center justify-center text-[#10b981] mb-4 mx-auto">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">4. Delivery</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Complete brand package delivered with all files, guidelines, and support you need.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Identity Section */}
        <section className="w-full border-t border-white/5 bg-black/40 py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-wider mb-6">
                <Award className="w-3 h-3" />
                Brand Identity
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Complete <span className="cotton-candy-gradient">Brand Identity</span> Systems
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Beyond logos, we create comprehensive brand systems that ensure consistency across every customer touchpoint.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Brand Style Guide */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#a855f7]/20 to-[#c084fc]/20 flex items-center justify-center text-[#a855f7] mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Brand Style Guide</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Comprehensive documentation that defines your brand's visual language and ensures consistent application.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" />
                    Logo usage guidelines
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" />
                    Color palette specifications
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" />
                    Typography system
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" />
                    Design element library
                  </li>
                </ul>
              </div>

              {/* Color & Typography */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3b82f6]/20 to-[#60a5fa]/20 flex items-center justify-center text-[#3b82f6] mb-6 group-hover:scale-110 transition-transform">
                  <Type className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Color Palette & Typography</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Custom color schemes and typography systems that reflect your brand personality and ensure visual harmony.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                    Primary & secondary colors
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                    Accent color recommendations
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                    Font pairing & hierarchy
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                    Web & print font licenses
                  </li>
                </ul>
              </div>

              {/* Brand Collateral */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f472b6]/20 to-[#fb7185]/20 flex items-center justify-center text-[#f472b6] mb-6 group-hover:scale-110 transition-transform">
                  <Layout className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Brand Collateral Design</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Apply your brand identity across business cards, letterheads, presentations, and marketing materials.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#f472b6] mt-0.5 flex-shrink-0" />
                    Business card design
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#f472b6] mt-0.5 flex-shrink-0" />
                    Letterhead & email signatures
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#f472b6] mt-0.5 flex-shrink-0" />
                    Presentation templates
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#f472b6] mt-0.5 flex-shrink-0" />
                    Social media templates
                  </li>
                </ul>
              </div>

              {/* Visual Assets */}
              <div className="widget-card p-8 rounded-2xl group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#10b981]/20 to-[#34d399]/20 flex items-center justify-center text-[#10b981] mb-6 group-hover:scale-110 transition-transform">
                  <Shapes className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Custom Visual Assets</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Unique patterns, icons, and graphic elements that enhance your brand's visual identity.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                    Custom icon library
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                    Brand patterns & textures
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                    Illustration style guide
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                    Photography direction
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
                Why Choose <span className="cotton-candy-gradient">Plip</span> for Your Branding?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#a855f7]/20 to-[#c084fc]/20 flex items-center justify-center text-[#a855f7] mb-4 mx-auto">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">8+ Years Experience</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Building brands from scratch and revising existing ones with proven design strategies.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3b82f6]/20 to-[#60a5fa]/20 flex items-center justify-center text-[#3b82f6] mb-4 mx-auto">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Strategic Approach</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Every design decision is backed by research and aligned with your business goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f472b6]/20 to-[#fb7185]/20 flex items-center justify-center text-[#f472b6] mb-4 mx-auto">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Unlimited Revisions</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We work until you're 100% satisfied with your brand identity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full border-t border-white/5 bg-black/40 py-24 px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Build Your <span className="cotton-candy-gradient">Brand?</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Let's create a brand identity that captures your vision and resonates with your audience. Get started with a free consultation today.
            </p>
            <Link to="/contact">
              <GradientButton className="px-10 py-5 text-xl flex items-center gap-2 group mx-auto w-fit">
                Get Your Free Brand Consultation
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
