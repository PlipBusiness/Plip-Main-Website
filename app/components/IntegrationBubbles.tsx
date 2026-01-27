import { useState } from 'react';
import { motion } from 'motion/react';

interface Integration {
  name: string;
  color: string;
  id: string;
}

export default function IntegrationBubbles() {
  // All integrations with category colors
  const allIntegrations: Integration[] = [
    // CRM - #ff7a59
    { name: 'HubSpot', color: '#ff7a59', id: 'hubspot' },
    { name: 'Salesforce', color: '#ff7a59', id: 'salesforce' },
    { name: 'Zoho CRM', color: '#ff7a59', id: 'zoho' },
    { name: 'Pipedrive', color: '#ff7a59', id: 'pipedrive' },
    { name: 'KV Core', color: '#ff7a59', id: 'kvcore' },
    
    // Communication & Collaboration - #60a5fa
    { name: 'Slack', color: '#60a5fa', id: 'slack' },
    { name: 'Microsoft Teams', color: '#60a5fa', id: 'teams' },
    { name: 'Zoom', color: '#60a5fa', id: 'zoom' },
    { name: 'Google Meet', color: '#60a5fa', id: 'meet' },
    { name: 'Discord', color: '#60a5fa', id: 'discord' },
    { name: 'Gmail', color: '#60a5fa', id: 'gmail' },
    { name: 'Outlook', color: '#60a5fa', id: 'outlook' },
    { name: 'Google Calendar', color: '#60a5fa', id: 'gcal' },
    { name: 'Calendly', color: '#60a5fa', id: 'calendly' },
    
    // Marketing & Email Automation - #fbbf24
    { name: 'Mailchimp', color: '#fbbf24', id: 'mailchimp' },
    { name: 'Klaviyo', color: '#fbbf24', id: 'klaviyo' },
    { name: 'ActiveCampaign', color: '#fbbf24', id: 'activecampaign' },
    { name: 'Constant Contact', color: '#fbbf24', id: 'constantcontact' },
    { name: 'Drip', color: '#fbbf24', id: 'drip' },
    { name: 'ConvertKit', color: '#fbbf24', id: 'convertkit' },
    { name: 'GetResponse', color: '#fbbf24', id: 'getresponse' },
    
    // E-commerce & Retail - #f472b6
    { name: 'Shopify', color: '#f472b6', id: 'shopify' },
    { name: 'WooCommerce', color: '#f472b6', id: 'woocommerce' },
    { name: 'BigCommerce', color: '#f472b6', id: 'bigcommerce' },
    { name: 'Magento', color: '#f472b6', id: 'magento' },
    { name: 'Squarespace Commerce', color: '#f472b6', id: 'squarespace' },
    { name: 'Wix Stores', color: '#f472b6', id: 'wix' },
    
    // Accounting, Finance & Payments - #10b981
    { name: 'QuickBooks', color: '#10b981', id: 'quickbooks' },
    { name: 'Xero', color: '#10b981', id: 'xero' },
    { name: 'FreshBooks', color: '#10b981', id: 'freshbooks' },
    { name: 'PayPal', color: '#10b981', id: 'paypal' },
    { name: 'Stripe', color: '#10b981', id: 'stripe' },
    { name: 'Square', color: '#10b981', id: 'square' },
    
    // Project & Task Management - #a855f7
    { name: 'Asana', color: '#a855f7', id: 'asana' },
    { name: 'Trello', color: '#a855f7', id: 'trello' },
    { name: 'Monday.com', color: '#a855f7', id: 'monday' },
    { name: 'ClickUp', color: '#a855f7', id: 'clickup' },
    { name: 'Jira', color: '#a855f7', id: 'jira' },
    { name: 'Notion', color: '#a855f7', id: 'notion' },
    
    // Data & Productivity - #3b82f6
    { name: 'Google Sheets', color: '#3b82f6', id: 'gsheets' },
    { name: 'Google Docs', color: '#3b82f6', id: 'gdocs' },
    { name: 'Microsoft Excel', color: '#3b82f6', id: 'excel' },
    { name: 'Microsoft Word', color: '#3b82f6', id: 'word' },
    { name: 'Airtable', color: '#3b82f6', id: 'airtable' },
    { name: 'Miro', color: '#3b82f6', id: 'miro' },
    
    // Forms, Surveys & Scheduling - #ec4899
    { name: 'Typeform', color: '#ec4899', id: 'typeform' },
    { name: 'SurveyMonkey', color: '#ec4899', id: 'surveymonkey' },
    { name: 'Google Forms', color: '#ec4899', id: 'gforms' },
    { name: 'Jotform', color: '#ec4899', id: 'jotform' },
    
    // Automation & Integration Platforms - #8b5cf6
    { name: 'Zapier', color: '#8b5cf6', id: 'zapier' },
    { name: 'n8n', color: '#8b5cf6', id: 'n8n' },
    
    // Social Media & Advertising - #06b6d4
    { name: 'Meta Ads Manager', color: '#06b6d4', id: 'meta' },
    { name: 'LinkedIn Ads', color: '#06b6d4', id: 'linkedin' },
    { name: 'X', color: '#06b6d4', id: 'x' },
    { name: 'Hootsuite', color: '#06b6d4', id: 'hootsuite' },
    
    // File Storage - #14b8a6
    { name: 'Google Drive', color: '#14b8a6', id: 'gdrive' },
    { name: 'Dropbox', color: '#14b8a6', id: 'dropbox' },
    { name: 'OneDrive', color: '#14b8a6', id: 'onedrive' },
    
    // Developer & Identity - #6366f1
    { name: 'GitHub', color: '#6366f1', id: 'github' },
    { name: 'Auth0', color: '#6366f1', id: 'auth0' },
  ];

  // Shuffle and organize into rows
  const shuffleArray = (array: Integration[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const [shuffledIntegrations] = useState(() => shuffleArray(allIntegrations));
  
  // Organize into 4 rows with varying speeds - duplicate integrations to ensure enough for seamless loop
  const rows = [
    { integrations: [...shuffledIntegrations.slice(0, 18), ...shuffledIntegrations.slice(0, 18)], speed: 180 },
    { integrations: [...shuffledIntegrations.slice(18, 36), ...shuffledIntegrations.slice(18, 36)], speed: 175 },
    { integrations: [...shuffledIntegrations.slice(36, 54), ...shuffledIntegrations.slice(36, 54)], speed: 185 },
    { integrations: [...shuffledIntegrations.slice(54, 72), ...shuffledIntegrations.slice(54, 72)], speed: 178 },
  ];

  return (
    <div className="w-full flex-1 overflow-hidden flex flex-col justify-center gap-5 py-6">
      {rows.map((row, rowIndex) => {
        // Calculate the width needed for one complete set
        const itemWidth = 180; // approximate width of each bubble
        const gapWidth = 12; // gap-3 = 12px
        const totalWidth = (itemWidth + gapWidth) * row.integrations.length / 2; // divided by 2 because we duplicated
        
        return (
          <div key={rowIndex} className="relative overflow-hidden h-[48px]">
            <motion.div
              className="flex gap-3 absolute"
              animate={{
                x: [0, -totalWidth],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: row.speed,
                  ease: "linear",
                },
              }}
            >
              {row.integrations.map((integration, index) => (
                <div
                  key={`${integration.id}-${index}`}
                  className="flex items-center gap-3 bg-[#1a1d21] border border-white/5 rounded-full px-5 py-3 hover:bg-[#23262b] transition-colors cursor-default flex-shrink-0"
                  style={{
                    animation: `float ${3 + (index * 0.2)}s ease-in-out infinite`,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <motion.span 
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: integration.color }}
                    animate={{
                      boxShadow: [
                        `0 0 0px ${integration.color}00`,
                        `0 0 8px ${integration.color}80`,
                        `0 0 0px ${integration.color}00`,
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.2
                    }}
                  />
                  <span className="text-sm font-bold text-white whitespace-nowrap">
                    {integration.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        );
      })}
      
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </div>
  );
}