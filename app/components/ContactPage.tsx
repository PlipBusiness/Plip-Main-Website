import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import {
  Mail,
  Calendar,
  ArrowRight,
  Globe,
  Lock,
  Headphones,
  Facebook,
  DollarSign,
  Users,
  Rocket,
  Settings,
  X
} from 'lucide-react';
import { useState } from 'react';
import { PopupModal } from 'react-calendly';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    niche: 'Real Estate',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form) as any).toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ fullName: '', email: '', niche: 'Real Estate', message: '' });
      } else {
        alert('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      alert('There was an error submitting your form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Blur Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#f472b6] blur-[80px] opacity-25 top-[-150px] left-[-150px]"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#3b82f6] blur-[80px] opacity-25 bottom-[-150px] right-[-150px]"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-600 blur-[80px] opacity-20 top-[30%] right-[20%]"></div>
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="w-full max-w-[1200px] mx-auto px-6 pt-20 pb-12 lg:pt-32 text-center relative z-10">
          <h1 className="text-white text-5xl lg:text-7xl font-black leading-[1.1] tracking-[-0.02em] mb-6">
            Let's Build Your <br />
            <span className="cotton-candy-gradient">Growth Engine</span>
          </h1>
          <p className="text-white/60 text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Whether you're ready to automate your revenue flow or just have questions about our infrastructure, our team is ready.
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="w-full max-w-[1200px] mx-auto px-6 pb-24 lg:pb-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Form */}
            <div className="glass-pane rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#f472b6]/10 blur-[60px] pointer-events-none rounded-full"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-white/60">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 relative z-10"
              >
                <input type="hidden" name="form-name" value="contact" />
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-white/50 ml-1">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Sarah Jenkins"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#f472b6] transition-colors input-glow"
                    required
                  />
                </div>

                {/* Work Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-white/50 ml-1">
                    Work Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#f472b6] transition-colors input-glow"
                    required
                  />
                </div>

                {/* Your Niche */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-white/50 ml-1">
                    Your Niche
                  </label>
                  <div className="relative">
                    <select
                      name="niche"
                      value={formData.niche}
                      onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                      className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-[#f472b6] transition-colors input-glow appearance-none cursor-pointer"
                      required
                    >
                      <option className="bg-[#0f0f0f] text-white">Real Estate</option>
                      <option className="bg-[#0f0f0f] text-white">Ecommerce</option>
                      <option className="bg-[#0f0f0f] text-white">Retail</option>
                      <option className="bg-[#0f0f0f] text-white">Restaurant</option>
                      <option className="bg-[#0f0f0f] text-white">Lawncare</option>
                      <option className="bg-[#0f0f0f] text-white">Photography/Videography</option>
                      <option className="bg-[#0f0f0f] text-white">Home Repair/Improvement</option>
                      <option className="bg-[#0f0f0f] text-white">Automotive</option>
                      <option className="bg-[#0f0f0f] text-white">Other</option>
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-white/50 ml-1">
                    How can we help?
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your current bottlenecks..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#f472b6] transition-colors input-glow resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col gap-4">
                  <Button
                    type="submit"
                    className="h-12 px-8 rounded-xl bg-[#3b82f6] hover:bg-blue-600 text-white font-bold text-base transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  >
                    Submit Request
                  </Button>

                  <div className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-white/5 border border-white/5 self-center">
                    <Lock className="w-4 h-4 text-[#f472b6] glow-icon" />
                    <span className="text-[11px] font-medium tracking-tight text-white/60 uppercase">
                      100% Confidential & Secure
                    </span>
                  </div>
                </div>

                <p className="text-center text-xs text-white/30">
                  We respect your inbox. No spam, ever.
                </p>
              </form>
              )}
            </div>

            {/* Right Column - Alternative Contact */}
            <div className="flex flex-col gap-10 lg:pt-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-wider w-fit mb-6">
                  <Globe className="w-4 h-4 text-[#60a5fa]" />
                  Global / Remote First
                </div>
                <h3 className="text-3xl font-black text-white mb-2">Prefer to talk live?</h3>
                <p className="text-white/60">Skip the inbox and connect directly with our growth strategists.</p>
              </div>

              {/* Book a Strategy Call Card */}
              <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 hover:border-[#60a5fa]/30 transition-colors group relative overflow-hidden">
                <div className="absolute inset-0 bg-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <div className="bg-[#60a5fa]/20 text-[#60a5fa] p-2 rounded-lg w-fit mb-4">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Book a Strategy Call</h4>
                    <p className="text-sm text-white/50 mb-6 max-w-xs">
                      30-minute discovery session to map out your automation infrastructure.
                    </p>
                    <button
                      onClick={() => setIsCalendlyOpen(true)}
                      className="flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all cursor-pointer"
                    >
                      View Calendar
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6 border-t border-white/5 pt-8">
                {/* Direct Email */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                    <Mail className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-wider mb-0.5">Direct Email</p>
                    <a href="mailto:hello@plipmarketing.com" className="text-white hover:text-[#f472b6] transition-colors font-medium">
                      hello@plipmarketing.com
                    </a>
                  </div>
                </div>

                {/* Socials */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                    <Facebook className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-wider mb-1">Socials</p>
                    <a
                      href="https://www.facebook.com/TeegardenJoe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors text-sm font-medium"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full max-w-[1200px] mx-auto px-6 pb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Before you book...</h2>
            <p className="text-white/50">Make sure our strategy calls are a good fit for your stage of growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Is this call free? */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#f472b6]/10 rounded-full blur-2xl group-hover:bg-[#f472b6]/20 transition-all"></div>
              <div className="flex items-start gap-4">
                <DollarSign className="w-8 h-8 text-[#f472b6] shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Is this call free?</h4>
                  <p className="text-white/60 leading-relaxed text-sm">
                    Yes. This is a complimentary 30-minute strategy session. We'll audit your current setup and identify high-leverage opportunities. No hard selling, just data-driven insights.
                  </p>
                </div>
              </div>
            </div>

            {/* Who will I be talking to? */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#60a5fa]/10 rounded-full blur-2xl group-hover:bg-[#60a5fa]/20 transition-all"></div>
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-[#60a5fa] shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Who will I be talking to?</h4>
                  <p className="text-white/60 leading-relaxed text-sm">
                    You'll speak directly with Joe, the owner of Plip. Not a sales rep—just real, honest conversation about how we can help grow your business.
                  </p>
                </div>
              </div>
            </div>

            {/* Do I need a large team? */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#3b82f6]/10 rounded-full blur-2xl group-hover:bg-[#3b82f6]/20 transition-all"></div>
              <div className="flex items-start gap-4">
                <Rocket className="w-8 h-8 text-[#3b82f6] shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Do you work with solo professionals?</h4>
                  <p className="text-white/60 leading-relaxed text-sm">
                    Absolutely. Many of our clients are independent realtors, agents, and solo entrepreneurs. Whether you're a one-person operation or have a team, we'll build solutions that fit your business.
                  </p>
                </div>
              </div>
            </div>

            {/* What happens after the call? */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
              <div className="flex items-start gap-4">
                <Settings className="w-8 h-8 text-purple-400 shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">What happens after the call?</h4>
                  <p className="text-white/60 leading-relaxed text-sm">
                    You'll receive a custom "Automation Roadmap" PDF within 24 hours. If you choose to partner with us, we can begin implementation immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Calendly Popup Modal */}
      <PopupModal
        url="https://calendly.com/plip/discovery-call"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById('root') as HTMLElement}
      />
    </div>
  );
}