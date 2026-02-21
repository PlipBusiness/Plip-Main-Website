import { Link } from 'react-router';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Play, Check, Star, TrendingUp, Maximize2, Mail, Crown, Rocket, Quote } from 'lucide-react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import IntegrationBubbles from '@/app/components/IntegrationBubbles';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export default function HomePage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedTestimonials, setExpandedTestimonials] = useState<Set<number>>(new Set());
  const testimonialScrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const animationFrameRef = useRef<number | null>(null);

  const testimonials = [
    {
      name: 'Wesley K.',
      role: 'Connecticut Realtor', 
      quote: 'After working with Joe Teegarden on my marketing for my business it felt like a natural obligation to share. He has taught me so much and has helped expand my marketing to where it\'s not only helping my business but I actually feel more confident when speaking with new clients.', 
      fullQuote: 'I am not someone who writes reviews or testimonials. But after working with Joe Teegarden on my marketing for my business it felt like a natural obligation. He has taught me so much and has helped expand my marketing to where it\'s not only helping my business but I actually feel more confident when speaking with new clients. My only regret is that I wish I had met Joe earlier to help me with my business. I have been shown and taught so many mind-blowing tools and strategies that have been exciting to learn. If you need any sort of marketing help in any shape or form, Joe is going to be a perfect answer for you. Super reliable, super honest and a genuine guy.',
      service: 'Marketing & Website Design', 
      color: 'from-violet-500 to-purple-500' 
    },
    {
      name: 'Yasmine O.',
      role: 'Florida Realtor',
      quote: 'When I started working with Joe, I had a listing to advertise which was our "test run" to see if he was the real deal. After a short two days, my 950k listing had a serious buyer who was ready to purchase asap! As quick as the listing was put up, we were able to take it down. Our sellers were beyond happy with our turnaround!',
      service: 'Marketing & Advertising',
      color: 'from-rose-500 to-pink-500'
    },
    {
      name: 'Gianluca K.',
      role: 'California Realtor',
      quote: 'For the first few weeks with Plip, we didn\'t see much of a result. Joe communicated with us on everything that was being worked on and, through a lot of effort, everything clicked and we started seeing results faster than we had ever seen.',
      fullQuote: 'For the first few weeks with Plip, we didn\'t see much of a result. Joe communicated with us on everything that was being worked on and, through a lot of effort, everything clicked and we started seeing results faster than we had ever seen. We have been with Plip for 5 months so far, we had 3 closings in our last month that were directly from Plip, and we have 16 more in the pipeline across the next 4 months. Definitely give Plip and Joe a try!',
      service: 'Marketing & Advertising',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Aarav R.',
      role: 'Marketing Agency Owner',
      quote: 'A big thanks to Joe and his team for being straightforward and full of clarity. Without Ripple Effect, my marketing agency would have stayed how it was; stagnant and dying. After learning from Joe, I can now call my agency a business, not just a hobby.',
      service: 'Plip For Business Consulting',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      name: 'Chris R.',
      role: 'Texas Realtor',
      quote: 'The thing I liked about Joe and his company over the others is his willingness to help and genuinely caring about the people he works with. They are very quick to respond when I have questions or want to try something new.',
      fullQuote: 'The thing I liked about Joe and his company over the others is his willingness to help and genuinely caring about the people he works with. They are very quick to respond when I have questions or want to try something new. I always feel like things are under control for all my marketing and now I don\'t have to stress over it all. We recently closed on a 400k deal provided by Plip that was basically 25x my investment for the month. If that sounds good to you, talk to Joe.',
      service: 'Marketing & Advertising',
      color: 'from-amber-500 to-orange-500'
    }
  ];

  // Handle hash navigation for testimonials section
  useEffect(() => {
    if (window.location.hash === '#testimonials') {
      const element = document.getElementById('testimonials');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  const scrollToTestimonial = (index: number) => {
    if (testimonialScrollRef.current) {
      const container = testimonialScrollRef.current;
      const cardWidth = container.scrollWidth / testimonials.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setActiveTestimonial(index);
    }
  };

  const handleTestimonialScroll = () => {
    if (testimonialScrollRef.current) {
      const container = testimonialScrollRef.current;
      const cardWidth = container.scrollWidth / testimonials.length;
      const scrollPosition = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;

      // If scrolled to the end, show last testimonial
      if (scrollPosition >= maxScroll - 10) {
        setActiveTestimonial(testimonials.length - 1);
      } else {
        const newIndex = Math.round(scrollPosition / cardWidth);
        setActiveTestimonial(Math.min(newIndex, testimonials.length - 1));
      }
    }
  };

  const toggleTestimonial = (index: number) => {
    setExpandedTestimonials(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleCardClick = (index: number) => {
    // Only scroll into view if this was a click, not a drag
    // (dragDistance < 5 means minimal movement, likely just a click)
    if (dragDistance < 5 && testimonialScrollRef.current) {
      const container = testimonialScrollRef.current;
      const cards = container.children;
      const card = cards[index] as HTMLElement;

      if (card) {
        // Calculate the position to center the card
        const containerWidth = container.clientWidth;
        const cardWidth = card.offsetWidth;
        const cardLeft = card.offsetLeft;

        // Center the card: scroll to (cardLeft - half of remaining space)
        const scrollPosition = cardLeft - (containerWidth / 2) + (cardWidth / 2);

        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!testimonialScrollRef.current) return;
    setIsDragging(true);
    setDragDistance(0);
    testimonialScrollRef.current.style.scrollSnapType = 'none';
    setStartX(e.pageX - testimonialScrollRef.current.offsetLeft);
    setScrollLeft(testimonialScrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    if (isDragging && testimonialScrollRef.current) {
      testimonialScrollRef.current.style.scrollSnapType = 'x proximity';
    }
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    if (testimonialScrollRef.current) {
      testimonialScrollRef.current.style.scrollSnapType = 'x proximity';
    }
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !testimonialScrollRef.current) return;
    e.preventDefault();

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      if (!testimonialScrollRef.current) return;
      const x = e.pageX - testimonialScrollRef.current.offsetLeft;
      const walk = (x - startX);
      setDragDistance(Math.abs(walk));
      testimonialScrollRef.current.scrollLeft = scrollLeft - walk;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#1a1a2e] text-white overflow-x-hidden">
      {/* Blur Blobs - softer and more organic */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-[500px] h-[500px] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] bg-[#f472b6] blur-[100px] opacity-20 top-[-150px] left-[-150px]"></div>
        <div className="absolute w-[500px] h-[500px] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] bg-[#3b82f6] blur-[100px] opacity-20 bottom-[-150px] right-[-150px]"></div>
        <div className="absolute w-[500px] h-[500px] rounded-[50%_50%_50%_50%_/_50%_50%_50%_50%] bg-purple-600 blur-[100px] opacity-15 top-[30%] right-[20%]"></div>
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="w-full px-6 pt-20 pb-32 lg:pt-32 lg:pb-40">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Column */}
              <div className="flex flex-col gap-8 text-left z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-badge text-white text-xs font-bold uppercase tracking-wider w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
                  </span>
                  Full-Service Marketing Agency
                </div>

                <h1 className="text-white text-5xl lg:text-7xl font-black leading-[1.1] tracking-[-0.02em]">
                  Dominating your <br />
                  <span className="cotton-candy-gradient">real estate market</span>
                </h1>

                <p className="text-white/60 text-lg lg:text-xl font-light leading-relaxed max-w-xl">
                  Stop manual prospecting. Plip automates the entire lifecycle of your leads from first click to closed deal.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <Link to="/solutions">
                    <Button className="h-12 px-8 rounded-xl bg-[#3b82f6] hover:bg-blue-600 text-white font-bold text-base">
                      See Our Services
                    </Button>
                  </Link>
                  <Link to="/architecture">
                    <Button className="h-12 px-8 rounded-xl bg-black border-2 border-white text-white hover:bg-white/10 font-bold text-base">
                      More About Us
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-6 mt-6">
                  <div className="flex items-center gap-3 px-4 py-2 rounded-full glass-badge">
                    <Star className="w-4 h-4 text-[#f472b6] fill-[#f472b6]" />
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-sm">8+ Years</span>
                      <span className="text-white/40 text-[10px] uppercase font-bold tracking-wider">Experience</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 rounded-full glass-badge">
                    <Check className="w-4 h-4 text-[#10b981]" />
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-sm">Free</span>
                      <span className="text-white/40 text-[10px] uppercase font-bold tracking-wider">Strategy Call</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Profile Card */}
              <div className="relative w-full h-full flex items-center justify-center lg:justify-end z-10">
                <div className="relative w-full max-w-md mx-auto lg:mr-0 lg:ml-auto">
                  <motion.div
                    className="glass-card rounded-3xl p-6 lg:p-8 shadow-2xl overflow-hidden"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {/* Profile Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-[2px]">
                            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                              <span className="text-white font-black text-sm">SJ</span>
                            </div>
                          </div>
                          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-black rounded-full"></div>
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg leading-tight">Sarah Jenkins</h3>
                          <p className="text-white/40 text-xs uppercase tracking-wide font-medium mt-1">Home Buyer Lead</p>
                        </div>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                        <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Hot Lead</span>
                      </div>
                    </div>

                    {/* Lead Score */}
                    <div className="mb-8">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-sm text-white/50 font-medium">Lead Score</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-black text-white">94</span>
                          <span className="text-sm text-white/40">/100</span>
                        </div>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-[#f472b6] to-[#3b82f6] h-full w-[94%]"></div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="glass-card glass-card-hover rounded-xl p-4 group">
                        <div className="flex items-center gap-2 mb-2 text-white/40 group-hover:text-[#3b82f6] transition-colors">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-[10px] uppercase font-bold tracking-wider">Last Action Sent</span>
                        </div>
                        <p className="text-white font-bold">18 mins ago</p>
                      </div>
                      <div className="glass-card glass-card-hover rounded-xl p-4 group">
                        <div className="flex items-center gap-2 mb-2 text-white/40 group-hover:text-green-400 transition-colors">
                          <span className="text-[10px] uppercase font-bold tracking-wider">Budget</span>
                        </div>
                        <p className="text-white font-bold">$675k-$950k</p>
                      </div>
                      <div className="glass-card glass-card-hover rounded-xl p-4 group">
                        <div className="flex items-center gap-2 mb-2 text-white/40 group-hover:text-[#f472b6] transition-colors">
                          <span className="text-[10px] uppercase font-bold tracking-wider">Timeframe</span>
                        </div>
                        <p className="text-white font-bold">1-3 Months</p>
                      </div>
                      <div className="glass-card glass-card-hover rounded-xl p-4 group">
                        <div className="flex items-center gap-2 mb-2 text-white/40 group-hover:text-[#60a5fa] transition-colors">
                          <span className="text-[10px] uppercase font-bold tracking-wider">Intent</span>
                        </div>
                        <p className="text-white font-bold">High Buying</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Icons */}
                  <motion.div
                    className="absolute -right-8 top-1/3 glass-card p-3 rounded-xl shadow-xl hidden lg:block"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <Check className="w-6 h-6 text-green-400" />
                  </motion.div>
                  <motion.div
                    className="absolute -left-[21px] bottom-1/4 glass-card p-3 rounded-xl shadow-xl hidden lg:block"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  >
                    <Star className="w-6 h-6 text-[#f472b6] fill-[#f472b6]" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full border-y border-white/5 bg-black/40 backdrop-blur-md py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="flex flex-col gap-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge text-white/60 text-xs font-bold uppercase tracking-wider w-fit mb-4">
                    <Check className="w-3 h-3 text-[#f472b6]" />
                    Trust & Performance
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                    Results that <br /><span className="text-[#60a5fa]">Scale With You</span>
                  </h2>
                  <p className="text-white/60 text-lg max-w-md">
                    We don't just generate leads; we build high-level business workflows so you can focus on what matters most—closing deals.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="glass-card glass-card-hover rounded-2xl p-6">
                    <div className="text-3xl md:text-4xl font-black text-white mb-2">14k+</div>
                    <div className="text-xs text-white/50 font-bold uppercase tracking-widest">Leads Generated</div>
                  </Card>
                  <Card className="glass-card glass-card-hover rounded-2xl p-6">
                    <div className="text-3xl md:text-4xl font-black text-white mb-2">$327k+</div>
                    <div className="text-xs text-white/50 font-bold uppercase tracking-widest">Ad Spend Managed</div>
                  </Card>
                  <Card className="col-span-2 glass-card glass-card-hover rounded-2xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-4xl md:text-5xl font-black text-[#f472b6] mb-2">500+</div>
                        <div className="text-xs text-white/50 font-bold uppercase tracking-widest">Campaigns Executed</div>
                      </div>
                      <div className="h-14 w-14 rounded-full glass-badge flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-[#f472b6]" />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Integrations */}
              <div className="relative w-full">
                <div className="relative glass-card rounded-3xl p-10 flex flex-col h-[420px] overflow-hidden">
                  <div className="flex flex-col gap-2 mb-8 text-center flex-shrink-0">
                    <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest">Seamless Integration Ecosystem</h3>
                  </div>
                  <IntegrationBubbles />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Lifecycle */}
        <section className="w-full max-w-[1200px] mx-auto px-6 py-24 border-t border-white/5">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge text-[#60a5fa] text-xs font-bold uppercase tracking-wider mb-4">
              Continuous Growth
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              System <span className="text-[#60a5fa]">Lifecycle</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A seamless four-step process designed to transform strangers into loyal advocates.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[40px] left-0 right-0 h-[1px] bg-white/10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
              {[
                { icon: Maximize2, title: 'Capture', desc: 'Identify and attract high-intent traffic across multiple channels.', color: '#f472b6', number: '01' },
                { icon: Mail, title: 'Nurture', desc: 'Build trust through personalized content and touchpoints.', color: '#3b82f6', number: '02' },
                { icon: Crown, title: 'Automate', desc: 'Streamline workflows to reclaim time and reduce manual errors.', color: '#8b5cf6', number: '03' },
                { icon: Rocket, title: 'Scale', desc: 'Leverage data insights to expand reach and revenue exponentially.', color: '#10b981', number: '04' }
              ].map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                  {/* Icon Container with Glow */}
                  <div className="relative w-20 h-20 rounded-[24px] bg-black border border-white/10 transition-all duration-500 flex items-center justify-center mb-6 group-hover:scale-[0.96]">
                    {/* Subtle outer glow on hover */}
                    <div 
                      className="absolute -inset-[2px] rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ 
                        boxShadow: `0 0 20px ${step.color}80, 0 0 40px ${step.color}40`,
                        border: `1px solid ${step.color}60`
                      }}
                    ></div>
                    
                    {/* Icon - changes color on hover */}
                    <step.icon 
                      className="w-8 h-8 text-white group-hover:text-[var(--step-color)] relative z-10 transition-colors duration-500"
                      style={{ 
                        '--step-color': step.color
                      } as React.CSSProperties}
                    />
                    
                    {/* Number Badge */}
                    <div 
                      className="absolute -bottom-2.5 bg-black px-2.5 py-1 rounded-lg border border-white/10 text-[9px] font-mono text-white/50 group-hover:text-white group-hover:border-white/30 transition-all duration-500 font-bold"
                    >
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors">{step.title}</h3>
                  <p className="text-xs text-white/50 px-2 leading-relaxed transition-colors max-w-[200px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full max-w-[1200px] mx-auto px-6 py-20 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Trusted by <br /><span className="text-[#f472b6]">Market Leaders</span>
              </h2>
              <p className="text-white/60">See what high-growth teams are saying about their Plip automation infrastructure.</p>
            </div>
          </div>

          <div
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-proximity scrollbar-hide cursor-grab active:cursor-grabbing select-none"
            ref={testimonialScrollRef}
            onScroll={handleTestimonialScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {testimonials.map((testimonial, index) => {
              const isExpanded = expandedTestimonials.has(index);
              const hasFullQuote = testimonial.fullQuote && testimonial.fullQuote !== testimonial.quote;
              
              return (
                <Card
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`snap-center shrink-0 w-[300px] md:w-[450px] glass-card glass-card-hover p-8 rounded-2xl flex flex-col justify-between cursor-pointer ${activeTestimonial === index ? 'active' : ''}`}
                >
                  <div>
                    <div className="flex gap-4 items-start mb-6">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} shadow-lg flex items-center justify-center`}>
                        <span className="text-white font-black text-sm">
                          {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-bold">{testimonial.name}</p>
                        <p className="text-white/40 text-sm">{testimonial.role}</p>
                        {testimonial.service && (
                          <p className="text-[#3b82f6]/70 text-xs mt-1">Uses Plip For {testimonial.service}</p>
                        )}
                      </div>
                      <Quote className="w-6 h-6 text-[#3b82f6]/50 ml-auto shrink-0" />
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">
                      {isExpanded && hasFullQuote ? testimonial.fullQuote : testimonial.quote}
                    </p>
                    {hasFullQuote && (
                      <button 
                        onClick={() => toggleTestimonial(index)}
                        className="text-[#3b82f6] text-sm font-semibold mt-3 hover:text-[#60a5fa] transition-colors"
                      >
                        {isExpanded ? 'See less' : 'See more'}
                      </button>
                    )}
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500" />
                      ))}
                    </div>
                    <span className="text-xs text-white/30 font-bold uppercase tracking-widest">Verified Client</span>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="flex justify-center mt-8">
            <div className="w-32">
              <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="absolute h-full bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] rounded-full transition-all duration-300"
                  style={{ width: `${((activeTestimonial + 1) / testimonials.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 px-6 flex items-center justify-center">
          <div className="w-full max-w-[900px] glass-card rounded-[2rem] p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center" style={{ boxShadow: '0 0 60px rgba(59, 130, 246, 0.15), 0 0 100px rgba(59, 130, 246, 0.08)' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-[#3b82f6]/15 via-[#f472b6]/5 to-transparent blur-[80px] pointer-events-none"></div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight relative z-10 leading-tight text-center">
              Ready to automate your <br />
              <span className="cotton-candy-gradient">market dominance?</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl font-normal mb-10 relative z-10 max-w-2xl mx-auto text-center">
              Stop chasing leads. Let the engine bring them to you.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button className="px-10 py-6 bg-[#3b82f6] text-white text-xl font-bold rounded-xl hover:bg-[#2563eb] transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)] relative z-10">
                  Book Your Strategy Call
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}