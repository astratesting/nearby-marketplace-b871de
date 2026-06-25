'use client';

import { use } from 'react';
import { Star, MapPin, Calendar, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { ItemCard } from '@/components/ItemCard';
import type { Item, User } from '@/types';

const mockUsers: Record<string, User & { items: Item[] }> = {
  '1': {
    id: '1', name: 'Alice Johnson', email: 'alice@example.com', location: 'Brooklyn, NY',
    rating: 4.8, verified: true, joinedAt: '2025-01-15', avatar: '',
    items: [
      { id: '1', title: 'Vintage Leather Jacket', price: 45, category: 'Clothing', condition: 'good', description: '', images: [],
        seller: { id: '1', name: 'Alice J.', email: 'a@x.com', location: 'Brooklyn', rating: 4.8, verified: true, joinedAt: '2025-01-15', avatar: '' },
        location: 'Brooklyn, NY', createdAt: new Date(Date.now() - 3600000).toISOString(), status: 'available' },
      { id: '4', title: 'Trek Mountain Bike', price: 280, category: 'Sports', condition: 'good', description: '', images: [],
        seller: { id: '1', name: 'Alice J.', email: 'a@x.com', location: 'Brooklyn', rating: 4.8, verified: true, joinedAt: '2025-01-15', avatar: '' },
        location: 'Brooklyn, NY', createdAt: new Date(Date.now() - 172800000).toISOString(), status: 'available' },
    ],
  },
  '2': {
    id: '2', name: 'Bob Smith', email: 'bob@example.com', location: 'Queens, NY',
    rating: 4.5, verified: true, joinedAt: '2025-03-20', avatar: '',
    items: [
      { id: '2', title: 'IKEA KALLAX Shelf Unit', price: 30, category: 'Furniture', condition: 'like-new', description: '', images: [],
        seller: { id: '2', name: 'Bob S.', email: 'b@x.com', location: 'Queens', rating: 4.5, verified: true, joinedAt: '2025-03-20', avatar: '' },
        location: 'Queens, NY', createdAt: new Date(Date.now() - 7200000).toISOString(), status: 'available' },
    ],
  },
  '3': {
    id: '3', name: 'Carol Davis', email: 'carol@example.com', location: 'Manhattan, NY',
    rating: 4.9, verified: false, joinedAt: '2025-06-10', avatar: '',
    items: [
      { id: '3', title: 'MacBook Pro 2019', price: 650, category: 'Electronics', condition: 'good', description: '', images: [],
        seller: { id: '3', name: 'Carol D.', email: 'c@x.com', location: 'Manhattan', rating: 4.9, verified: false, joinedAt: '2025-06-10', avatar: '' },
        location: 'Manhattan, NY', createdAt: new Date(Date.now() - 86400000).toISOString(), status: 'available' },
    ],
  },
};

export default function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const user = mockUsers[id];

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-charcoal/40 text-lg">User not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-charcoal/10 flex-shrink-0" />
          <div className="text-center md:text-left flex-1">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <h1 className="text-2xl font-bold text-charcoal">{user.name}</h1>
              {user.verified && <ShieldCheck className="h-5 w-5 text-gold" />}
            </div>
            <div className="flex items-center gap-4 mt-2 text-sm text-charcoal/60 justify-center md:justify-start">
              <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{user.location}</span>
              <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-gold text-gold" />{user.rating}</span>
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />Joined {new Date(user.joinedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-xl font-semibold text-charcoal mb-4">Listings by {user.name}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {user.items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
