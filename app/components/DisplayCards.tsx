import { ReactNode } from 'react';
import { Globe, Mail, TrendingUp } from 'lucide-react';

interface DisplayCardProps {
  className?: string;
  icon?: ReactNode;
  title?: string;
  description?: string;
  status?: string;
  iconBg?: string;
  titleColor?: string;
  borderColor?: string;
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
}: DisplayCardProps) {
  return (
    <div
      className={`relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border bg-[#0d0d18]/90 backdrop-blur-sm px-4 py-3.5 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-72 after:bg-gradient-to-l after:from-[#0a0a0f] after:to-transparent after:content-[''] [&>*]:flex [&>*]:items-center [&>*]:gap-2 hover:border-white/20 ${borderColor} ${className}`}
    >
      <div>
        <span className={`relative inline-flex rounded-full p-1.5 ${iconBg}`}>
          {icon}
        </span>
        <p className={`text-sm font-semibold ${titleColor}`}>{title}</p>
      </div>
      <p className="text-white/75 text-sm whitespace-nowrap">{description}</p>
      <p className="text-white/30 text-xs">{status}</p>
    </div>
  );
}

export default function DisplayCards() {
  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center">
      <DisplayCard
        className="[grid-area:stack] hover:-translate-y-10 before:absolute before:w-full before:rounded-xl before:h-full before:content-[''] before:bg-[#0a0a0f]/60 grayscale-[80%] hover:before:opacity-0 before:transition-opacity before:z-10 before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
        icon={<Globe className="w-4 h-4 text-[#60a5fa]" />}
        title="Website Design & Dev"
        description="Built to convert visitors into clients"
        status="Launched · Live"
        iconBg="bg-[#3b82f6]/20"
        titleColor="text-[#60a5fa]"
        borderColor="border-[#3b82f6]/25"
      />
      <DisplayCard
        className="[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-full before:rounded-xl before:h-full before:content-[''] before:bg-[#0a0a0f]/60 grayscale-[80%] hover:before:opacity-0 before:transition-opacity before:z-10 before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
        icon={<Mail className="w-4 h-4 text-[#f472b6]" />}
        title="Email Automation"
        description="Sequences that follow up 24/7"
        status="Active · Following Up"
        iconBg="bg-[#f472b6]/20"
        titleColor="text-[#f472b6]"
        borderColor="border-[#f472b6]/25"
      />
      <DisplayCard
        className="[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10"
        icon={<TrendingUp className="w-4 h-4 text-orange-400" />}
        title="Paid Advertising"
        description="Campaigns that drive real results"
        status="Running · Converting"
        iconBg="bg-orange-500/20"
        titleColor="text-orange-400"
        borderColor="border-orange-500/25"
      />
    </div>
  );
}
