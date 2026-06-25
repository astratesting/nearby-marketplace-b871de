'use client';

import { clsx } from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-charcoal text-ivory hover:bg-charcoal/90': variant === 'primary',
            'bg-gold text-charcoal hover:bg-gold/90': variant === 'secondary',
            'border border-charcoal text-charcoal hover:bg-charcoal/5': variant === 'outline',
            'text-charcoal hover:bg-charcoal/10': variant === 'ghost',
            'bg-burgundy text-white hover:bg-burgundy/90': variant === 'danger',
          },
          {
            'text-sm px-3 py-1.5': size === 'sm',
            'text-sm px-4 py-2': size === 'md',
            'text-base px-6 py-3': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
