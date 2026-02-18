import { Link, useLocation } from 'react-router';

export default function ServiceTabs() {
  const location = useLocation();

  const tabs = [
    { label: 'Websites', path: '/services/website' },
    { label: 'Paid Advertising', path: '/services/advertising' },
    { label: 'Automation', path: '/services/automation' },
    { label: 'Email Marketing', path: '/services/automation' },
    { label: 'YouTube Management', path: '/services/youtube' },
    { label: 'Branding', path: '/services/branding' },
  ];

  return (
    <div className="w-full border-b border-white/10 bg-[#050505]/80 backdrop-blur-md sticky top-[73px] z-40">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex gap-1 overflow-x-auto justify-center">
          {tabs.map((tab, index) => (
            <Link
              key={`${tab.path}-${index}`}
              to={tab.path}
              className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-all border-b-2 ${
                location.pathname === tab.path
                  ? 'text-white border-[#3b82f6]'
                  : 'text-white/50 border-transparent hover:text-white/80'
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
