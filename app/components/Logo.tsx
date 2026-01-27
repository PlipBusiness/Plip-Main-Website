interface LogoProps {
  className?: string;
  gradientId?: string;
}

export default function Logo({ className = "w-full h-full", gradientId = "logo-gradient" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="45" fill={`url(#${gradientId})`} />
      <path d="M30 35h40M30 50h40M30 65h40" stroke="white" strokeWidth="6" strokeLinecap="round" />
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
