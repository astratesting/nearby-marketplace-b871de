'use client';

import { use } from 'react';
import Link from 'next/link';
import { MapPin, ArrowLeft, MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { TrustBadge } from '@/components/TrustBadge';
import type { Item } from '@/types';

const mockItems: Record<string, Item> = {
  '1': {
    id: '1', title: 'Vintage Leather Jacket', price: 45, category: 'Clothing', condition: 'good',
    description: 'Beautiful brown leather jacket, size M. Bought it last year but it doesn\'t fit my style anymore. No tears or damage — just minor wear on the collar.',
    images: [],
    seller: { id: '1', name: 'Alice Johnson', email: 'a@x.com', location: 'Brooklyn, NY', rating: 4.8, verified: true, joinedAt: '2025-01-15', avatar: '' },
    location: 'Brooklyn, NY', distance: '0.3 mi', createdAt: new Date(Date.now() - 3600000).toISOString(), status: 'available',
  },
  '2': {
    id: '2', title: 'IKEA KALLAX Shelf Unit', price: 30, category: 'Furniture', condition: 'like-new',
    description: 'White 4x2 shelf unit. Excellent condition, barely used. Moving and can\'t take it with me.',
    images: [],
    seller: { id: '2', name: 'Bob Smith', email: 'b@x.com', location: 'Queens, NY', rating: 4.5, verified: true, joinedAt: '2025-03-20', avatar: '' },
    location: 'Queens, NY', distance: '1.2 mi', createdAt: new Date(Date.now() - 7200000).toISOString(), status: 'available',
  },
  '3': {
    id: '3', title: 'MacBook Pro 2019', price: 650, category: 'Electronics', condition: 'good',
    description: '13-inch MacBook Pro, 16GB RAM, 512GB SSD. Battery health at 87%. Comes with original charger.',
    images: [],
    seller: { id: '3', name: 'Carol Davis', email: 'c@x.com', location: 'Manhattan, NY', rating: 4.9, verified: false, joinedAt: '2025-06-10', avatar: '' },
    location: 'Manhattan, NY', distance: '2.1 mi', createdAt: new Date(Date.now() - 86400000).toISOString(), status: 'available',
  },
};

export default function ItemDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const item = mockItems[id];

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-charcoal/40 text-lg">Item not found.</p>
        <Link href="/browse"><Button variant="ghost" className="mt-4">Back to Browse</Button></Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/browse" className="inline-flex items-center gap-1 text-sm text-charcoal/60 hover:text-charcoal mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to Browse
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square rounded-xl bg-white border border-charcoal/10 flex items-center justify-center text-6xl text-charcoal/20">
          📦
        </div>

        <div>
          <span className="text-sm text-gold font-medium">{item.category}</span>
          <h1 className="text-3xl font-bold text-charcoal mt-1">{item.title}</h1>
          <p className="text-3xl font-bold text-burgundy mt-2">${item.price}</p>

          <div className="flex items-center gap-3 mt-4 text-sm text-charcoal/60">
            <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{item.location}</span>
            <span>•</span>
            <span>{item.distance}</span>
            <span>•</span>
            <span className="capitalize">{item.condition}</span>
          </div>

          <p className="mt-6 text-charcoal/70 leading-relaxed">{item.description}</p>

          <div className="mt-8 space-y-3">
            <Link href="/messages/1">
              <Button className="w-full" size="lg">
                <MessageCircle className="h-5 w-5 mr-2" /> Message Seller
              </Button>
            </Link>
          </div>

          <Card className="mt-6">
            <CardContent className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-charcoal/10" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-charcoal">{item.seller.name}</span>
                  {item.seller.verified && <TrustBadge size="sm" />}
                </div>
                <div className="flex items-center gap-1 text-sm text-charcoal/60">
                  <Star className="h-3.5 w-3.5 fill-gold text-gold" />
                  <span>{item.seller.rating}</span>
                  <span>• Member since {new Date(item.seller.joinedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
