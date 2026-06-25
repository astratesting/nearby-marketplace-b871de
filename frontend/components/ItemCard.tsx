'use client';

import Link from 'next/link';
import { MapPin, Clock } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { TrustBadge } from '@/components/TrustBadge';
import type { Item } from '@/types';

interface ItemCardProps {
  item: Item;
}

const conditionColors = {
  'new': 'bg-green-100 text-green-800',
  'like-new': 'bg-blue-100 text-blue-800',
  'good': 'bg-yellow-100 text-yellow-800',
  'fair': 'bg-orange-100 text-orange-800',
};

export function ItemCard({ item }: ItemCardProps) {
  const timeAgo = getTimeAgo(item.createdAt);

  return (
    <Link href={`/items/${item.id}`}>
      <Card hover className="overflow-hidden h-full">
        <div className="aspect-square relative bg-ivory">
          <div className="absolute inset-0 flex items-center justify-center text-charcoal/30">
            <span className="text-4xl">📦</span>
          </div>
          <span className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-medium ${conditionColors[item.condition]}`}>
            {item.condition}
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-charcoal truncate">{item.title}</h3>
          <p className="text-lg font-bold text-burgundy mt-1">${item.price}</p>
          <div className="flex items-center gap-1 mt-2 text-sm text-charcoal/60">
            <MapPin className="h-3.5 w-3.5" />
            <span>{item.distance || item.location}</span>
          </div>
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-charcoal/10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-charcoal/10" />
              <span className="text-xs text-charcoal/60">{item.seller.name}</span>
              {item.seller.verified && <TrustBadge size="sm" />}
            </div>
            <div className="flex items-center gap-1 text-xs text-charcoal/40">
              <Clock className="h-3 w-3" />
              <span>{timeAgo}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

function getTimeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const hours = Math.floor(diff / 3600000);
  if (hours < 1) return 'Just now';
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return `${Math.floor(days / 7)}w ago`;
}
