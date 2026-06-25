import { ShieldCheck } from 'lucide-react';
import { clsx } from 'clsx';

interface TrustBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

export function TrustBadge({ size = 'md', label }: TrustBadgeProps) {
  return (
    <span className={clsx(
      'inline-flex items-center gap-1 text-gold',
      { 'text-xs': size === 'sm', 'text-sm': size === 'md', 'text-base': size === 'lg' }
    )}>
      <ShieldCheck className={clsx(
        { 'h-3.5 w-3.5': size === 'sm', 'h-4 w-4': size === 'md', 'h-5 w-5': size === 'lg' }
      )} />
      {label || 'Verified'}
    </span>
  );
}
