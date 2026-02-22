import { useState } from 'react';

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
            Every service works independently. Combined, they form a system. Pick a plan to see how we'd approach it.
          </p>
        </div>

        {/* Plan Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {PLANS.map(p => {
            const isActive = p.id === activeId;
            return (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className="flex items-center gap-2.5 rounded-full px-6 py-3 border text-sm font-bold transition-all duration-300 cursor-pointer"
                style={isActive ? {
                  background: `${p.color}22`,
                  borderColor: p.color,
                  color: '#fff',
                  boxShadow: `0 0 24px ${p.color}28`,
                } : {
                  background: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.4)',
                }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-300"
                  style={{ backgroundColor: isActive ? p.color : 'rgba(255,255,255,0.18)' }}
                />
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Main Card */}
        <div className="rounded-3xl border border-white/[0.07] overflow-hidden" style={{ background: 'rgba(255,255,255,0.018)' }}>
          <div
            key={activeId}
            className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.07]"
            style={{ animation: 'planFadeIn 0.25s ease forwards' }}
          >

            {/* Left: Service Blocks */}
            <div className="p-8 lg:p-10">
              <p className="text-white/25 text-[10px] font-bold uppercase tracking-[0.25em] mb-5">
                Services in this plan
              </p>
              <div className="grid grid-cols-2 gap-2">
                {ALL_BLOCKS.map(block => {
                  const isActive = plan.blocks.includes(block);
                  return (
                    <div
                      key={block}
                      className="flex items-center gap-2 rounded-xl px-3 py-2.5 border text-xs font-semibold transition-all duration-300"
                      style={isActive ? {
                        background: `${plan.color}12`,
                        borderColor: `${plan.color}38`,
                        color: 'rgba(255,255,255,0.9)',
                      } : {
                        background: 'rgba(255,255,255,0.02)',
                        borderColor: 'rgba(255,255,255,0.04)',
                        color: 'rgba(255,255,255,0.18)',
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300"
                        style={{ backgroundColor: isActive ? plan.color : 'rgba(255,255,255,0.1)' }}
                      />
                      <span className="leading-tight">{block}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Roadmap */}
            <div className="p-8 lg:p-10">
              <p className="text-white/25 text-[10px] font-bold uppercase tracking-[0.25em] mb-5">
                Sample roadmap
              </p>

              <div className="relative pl-1">
                {/* Vertical connector line */}
                <div
                  className="absolute left-[19px] top-4 w-px"
                  style={{
                    height: `calc(100% - 2.5rem)`,
                    background: `linear-gradient(to bottom, ${plan.color}50, ${plan.color}08)`,
                  }}
                />

                <div className="space-y-3">
                  {plan.roadmap.map((step, i) => {
                    const isFirst = i === 0;
                    return (
                      <div key={i} className="flex items-center gap-4 relative">
                        {/* Step number circle */}
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black flex-shrink-0 relative z-10 transition-all duration-300"
                          style={{
                            background: isFirst ? plan.color : `${plan.color}22`,
                            border: `2px solid ${isFirst ? plan.color : `${plan.color}45`}`,
                            color: isFirst ? '#fff' : plan.color,
                          }}
                        >
                          {i + 1}
                        </div>

                        {/* Step label */}
                        <div
                          className="flex-1 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300"
                          style={{
                            background: isFirst ? `${plan.color}14` : `${plan.color}07`,
                            borderColor: isFirst ? `${plan.color}38` : `${plan.color}16`,
                            color: isFirst ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.58)',
                          }}
                        >
                          {step}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="mt-6 text-white/18 text-xs leading-relaxed pl-1">
                Roadmaps are illustrative — your actual plan is built around your specific goals.
              </p>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @keyframes planFadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
