import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/app/components/ui/utils';

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    if (variant === 'ghost') {
      return (
        <button
          ref={ref}
          className={cn(
            'inline-flex items-center justify-center gap-2',
            'px-8 py-3 rounded-xl',
            'text-white/80 hover:text-white font-bold text-base',
            'transition-all duration-300 cursor-pointer',
            'border border-white/15 hover:border-white/30',
            'bg-white/5 hover:bg-white/10',
            'hover:scale-[1.02] active:scale-[0.98]',
            className
          )}
          {...props}
        >
          {children}
        </button>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2',
          'px-8 py-3 rounded-xl',
          'text-white font-bold text-base',
          'transition-all duration-300 cursor-pointer',
          'shadow-[0_0_20px_rgba(244,114,182,0.3),0_0_40px_rgba(59,130,246,0.15)]',
          'hover:shadow-[0_0_30px_rgba(244,114,182,0.55),0_0_60px_rgba(59,130,246,0.3)]',
          'hover:scale-[1.02] active:scale-[0.98]',
          className
        )}
        style={{
          background: 'linear-gradient(135deg, #f472b6 0%, #a855f7 50%, #3b82f6 100%)',
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

GradientButton.displayName = 'GradientButton';
export { GradientButton };
