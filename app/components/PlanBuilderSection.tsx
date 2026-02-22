import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ALL_BLOCKS = [
  'Facebook / Instagram Ads',
  'Google Ads',
  'Email Sequences',
  'SMS Follow-ups',
  'CRM Automation',
  'YouTube Video Editing',
  'Thumbnail Design',
  'Content Calendar',
  'Landing Page Build',
  'Brand Identity',
];

const PLANS = [
  {
    id: 'content',
    label: 'Content Growth',
    color: '#f472b6',
    blocks: ['YouTube Video Editing', 'Thumbnail Design', 'Content Calendar', 'Facebook / Instagram Ads', 'Email Sequences'],
    roadmap: [
      'Build video backlog',
      'Schedule & post content',
      'Run ads to videos',
      'Retarget viewers',
      'Push to email drip',
    ],
  },
  {
    id: 'leadgen',
    label: 'Lead Gen Machine',
    color: '#3b82f6',
    blocks: ['Facebook / Instagram Ads', 'Landing Page Build', 'Email Sequences', 'SMS Follow-ups', 'CRM Automation'],
    roadmap: [
      'Launch ad campaigns',
      'Drive to landing page',
      'Capture leads',
      'SMS follow-up in 60s',
      'Email nurture',
      'Close in CRM',
    ],
  },
  {
    id: 'full',
    label: 'Full System',
    color: '#a855f7',
    blocks: ['Facebook / Instagram Ads', 'Google Ads', 'Email Sequences', 'SMS Follow-ups', 'CRM Automation', 'YouTube Video Editing', 'Thumbnail Design', 'Landing Page Build'],
    roadmap: [
      'Audit & strategy',
      'Build web presence',
      'Launch campaigns',
      'Produce content',
      'Set up automation',
      'Monthly reporting',
    ],
  },
];

export default function PlanBuilderSection() {
  const [activeId, setActiveId] = useState('content');
  const plan = PLANS.find(p => p.id === activeId)!;

  return (
    <section className="w-full border-t border-white/5 py-24 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest mb-6">
            How We Work
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Your Plan. <span className="cotton-candy-gradient">Your Services.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Every service works on its own. Combined, they work as a system. Pick a plan below to see how we'd approach it.
          </p>
        </div>

        {/* Plan Selector Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {PLANS.map(p => {
            const isActive = p.id === activeId;
            return (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className="flex items-center gap-2.5 rounded-full px-5 py-3 border text-sm font-bold transition-all duration-300"
                style={isActive ? {
                  background: `${p.color}20`,
                  borderColor: `${p.color}60`,
                  color: '#fff',
                  boxShadow: `0 0 16px ${p.color}30`,
                } : {
                  background: '#1a1d21',
                  borderColor: 'rgba(255,255,255,0.05)',
                  color: 'rgba(255,255,255,0.4)',
                }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-300"
                  style={{ backgroundColor: isActive ? p.color : 'rgba(255,255,255,0.2)' }}
                />
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Main Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">

          {/* Left: Service Blocks */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-4">Services in this plan</p>
            <div className="flex flex-wrap gap-2">
              {ALL_BLOCKS.map(block => {
                const isActive = plan.blocks.includes(block);
                return (
                  <div
                    key={block}
                    className="flex items-center gap-2 rounded-full px-4 py-2 border text-xs font-bold transition-all duration-300"
                    style={isActive ? {
                      background: `${plan.color}15`,
                      borderColor: `${plan.color}40`,
                      color: 'rgba(255,255,255,0.9)',
                    } : {
                      background: '#1a1d21',
                      borderColor: 'rgba(255,255,255,0.05)',
                      color: 'rgba(255,255,255,0.2)',
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: isActive ? plan.color : 'rgba(255,255,255,0.15)' }}
                    />
                    {block}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:flex lg:col-span-0 lg:flex-col items-center self-stretch justify-center px-2">
            <div className="w-px flex-1 bg-white/5" />
          </div>

          {/* Right: Roadmap */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-4">Sample roadmap</p>
            {plan.roadmap.map((step, i) => (
              <div key={`${plan.id}-${i}`} className="flex items-center gap-3">
                <div
                  className="flex items-center gap-3 flex-1 rounded-xl px-4 py-3 border text-sm font-medium text-white"
                  style={{
                    background: `${plan.color}10`,
                    borderColor: `${plan.color}25`,
                  }}
                >
                  <span
                    className="text-xs font-black w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                    style={{ background: plan.color }}
                  >
                    {i + 1}
                  </span>
                  {step}
                </div>
                {i < plan.roadmap.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: `${plan.color}50` }} />
                )}
              </div>
            ))}
            <p className="pt-2 text-white/20 text-xs leading-relaxed">
              Roadmaps are illustrative — your actual plan is built around your specific goals.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
