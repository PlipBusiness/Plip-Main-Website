import { ReactNode } from 'react';
import { Link } from 'react-router';
import { Globe, Mail, TrendingUp, Crown } from 'lucide-react';

interface DisplayCardProps {
  className?: string;
  icon?: ReactNode;
  title?: string;
  description?: string;
  status?: string;
  iconBg?: string;
  titleColor?: string;
  borderColor?: string;
  to?: string;
}

function DisplayCard({
  className = '',
  icon,
  title = 'Service',
  description = 'Description',
  status = 'Active',
  iconBg = 'bg-blue-500/20',
  titleColor = 'text-blue-400',
  borderColor = 'border-white/10',
  to,
}: DisplayCardProps) {
  const cardClassName = `relative flex h-44 w-[28rem] -skew-y-[8deg] select-none flex-col justify-between rounded-2xl border bg-[#0d0d18]/90 backdrop-blur-sm px-5 py-5 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-80 after:rounded-r-2xl after:bg-gradient-to-l after:from-[#0a0a0f] after:to-transparent after:content-[''] [&>*]:flex [&>*]:items-center [&>*]:gap-3 hover:border-white/20 ${to ? 'cursor-pointer' : ''} ${borderColor} ${className}`;

  const content = (
    <>
      <div>
        <span className={`relative inline-flex rounded-full p-2 ${iconBg}`}>
          {icon}
        </span>
        <p className={`text-base font-bold ${titleColor}`}>{title}</p>
      </div>
      <p className="text-white/75 text-base whitespace-nowrap">{description}</p>
      <p className="text-white/30 text-sm">{status}</p>
    </>
  );

  if (to) {
    return <Link to={to} className={cardClassName}>{content}</Link>;
  }
  return <div className={cardClassName}>{content}</div>;
}

export default function DisplayCards() {
  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center">

      {/* Card 1 — Brand Identity (back / lower-left, DOM first = lowest z) */}
      <DisplayCard
        className="[grid-area:stack] hover:-translate-y-20 before:absolute before:w-full before:rounded-xl before:h-full before:content-[''] before:bg-[#0a0a0f]/60 grayscale-[80%] hover:before:opacity-0 before:transition-opacity before:z-10 before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
        icon={<Crown className="w-5 h-5 text-purple-400" />}
        title="Brand Identity"
        description="Logo, colors & brand guidelines"
        status="Logo · Colors · Identity"
        iconBg="bg-purple-500/20"
        titleColor="text-purple-400"
        borderColor="border-purple-500/25"
        to="/services/branding"
      />

      {/* Card 2 — Paid Advertising */}
      <DisplayCard
        className="[grid-area:stack] translate-x-12 translate-y-8 hover:-translate-y-10 before:absolute before:w-full before:rounded-xl before:h-full before:content-[''] before:bg-[#0a0a0f]/60 grayscale-[80%] hover:before:opacity-0 before:transition-opacity before:z-10 before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
        icon={<TrendingUp className="w-5 h-5 text-orange-400" />}
        title="Paid Advertising"
        description="Campaigns that drive real results"
        status="Meta · Google · TikTok"
        iconBg="bg-orange-500/20"
        titleColor="text-orange-400"
        borderColor="border-orange-500/25"
        to="/services/advertising"
      />

      {/* Card 3 — Email Automation */}
      <DisplayCard
        className="[grid-area:stack] translate-x-24 translate-y-16 hover:-translate-y-2 before:absolute before:w-full before:rounded-xl before:h-full before:content-[''] before:bg-[#0a0a0f]/60 grayscale-[80%] hover:before:opacity-0 before:transition-opacity before:z-10 before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
        icon={<Mail className="w-5 h-5 text-[#f472b6]" />}
        title="Email Automation"
        description="Sequences that follow up 24/7"
        status="Done-for-you sequences"
        iconBg="bg-[#f472b6]/20"
        titleColor="text-[#f472b6]"
        borderColor="border-[#f472b6]/25"
        to="/services/automation"
      />

      {/* Card 4 — Website Design (front / upper-right, DOM last = highest z) */}
      <DisplayCard
        className="[grid-area:stack] translate-x-36 translate-y-24 hover:translate-y-12"
        icon={<Globe className="w-5 h-5 text-[#60a5fa]" />}
        title="Website Design & Dev"
        description="Built to convert visitors into clients"
        status="Design + Development"
        iconBg="bg-[#3b82f6]/20"
        titleColor="text-[#60a5fa]"
        borderColor="border-[#3b82f6]/25"
        to="/services/website"
      />

    </div>
  );
}
