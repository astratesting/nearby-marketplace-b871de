'use client';

import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { ItemCard } from '@/components/ItemCard';
import type { Item, Category } from '@/types';

const mockItems: Item[] = [
  {
    id: '1', title: 'Vintage Leather Jacket', price: 45, category: 'Clothing', condition: 'good',
    description: 'Beautiful brown leather jacket, size M.', images: [],
    seller: { id: '1', name: 'Alice J.', email: 'a@x.com', location: 'Brooklyn', rating: 4.8, verified: true, joinedAt: '2025-01-15', avatar: '' },
    location: 'Brooklyn, NY', distance: '0.3 mi', createdAt: new Date(Date.now() - 3600000).toISOString(), status: 'available',
  },
  {
    id: '2', title: 'IKEA KALLAX Shelf Unit', price: 30, category: 'Furniture', condition: 'like-new',
    description: 'White 4x2 shelf unit, excellent condition.', images: [],
    seller: { id: '2', name: 'Bob S.', email: 'b@x.com', location: 'Queens', rating: 4.5, verified: true, joinedAt: '2025-03-20', avatar: '' },
    location: 'Queens, NY', distance: '1.2 mi', createdAt: new Date(Date.now() - 7200000).toISOString(), status: 'available',
  },
  {
    id: '3', title: 'MacBook Pro 2019', price: 650, category: 'Electronics', condition: 'good',
    description: '13-inch, 16GB RAM, 512GB SSD. Works great.', images: [],
    seller: { id: '3', name: 'Carol D.', email: 'c@x.com', location: 'Manhattan', rating: 4.9, verified: false, joinedAt: '2025-06-10', avatar: '' },
    location: 'Manhattan, NY', distance: '2.1 mi', createdAt: new Date(Date.now() - 86400000).toISOString(), status: 'available',
  },
  {
    id: '4', title: 'Trek Mountain Bike', price: 280, category: 'Sports', condition: 'good',
    description: 'Trek Marlin 5, 29er, barely used.', images: [],
    seller: { id: '1', name: 'Alice J.', email: 'a@x.com', location: 'Brooklyn', rating: 4.8, verified: true, joinedAt: '2025-01-15', avatar: '' },
    location: 'Brooklyn, NY', distance: '0.5 mi', createdAt: new Date(Date.now() - 172800000).toISOString(), status: 'available',
  },
  {
    id: '5', title: 'Nintendo Switch + Games', price: 190, category: 'Electronics', condition: 'like-new',
    description: 'Switch with 4 games and extra controller.', images: [],
    seller: { id: '2', name: 'Bob S.', email: 'b@x.com', location: 'Queens', rating: 4.5, verified: true, joinedAt: '2025-03-20', avatar: '' },
    location: 'Queens, NY', distance: '1.8 mi', createdAt: new Date(Date.now() - 259200000).toISOString(), status: 'available',
  },
  {
    id: '6', title: 'KitchenAid Stand Mixer', price: 120, category: 'Home & Garden', condition: 'fair',
    description: 'Red KitchenAid, works perfectly, some cosmetic wear.', images: [],
    seller: { id: '3', name: 'Carol D.', email: 'c@x.com', location: 'Manhattan', rating: 4.9, verified: false, joinedAt: '2025-06-10', avatar: '' },
    location: 'Manhattan, NY', distance: '3.0 mi', createdAt: new Date(Date.now() - 345600000).toISOString(), status: 'available',
  },
];

const allCategories: Category[] = ['Electronics', 'Furniture', 'Clothing', 'Books', 'Sports', 'Home & Garden', 'Toys', 'Vehicles', 'Other'];

export default function BrowsePage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | ''>('');
  const [maxDistance, setMaxDistance] = useState(5);

  const filtered = mockItems.filter((item) => {
    if (search && !item.title.toLowerCase().includes(search.toLowerCase())) return false;
    if (selectedCategory && item.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-charcoal mb-6">Browse Items</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search items..."
            className="w-full rounded-lg border border-charcoal/20 bg-white pl-10 pr-3 py-2 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value as Category | '')}
          className="rounded-lg border border-charcoal/20 bg-white px-3 py-2 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <option value="">All Categories</option>
          {allCategories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <SlidersHorizontal className="h-4 w-4 text-charcoal/60" />
        <label className="text-sm text-charcoal/60">Max distance: {maxDistance} mi</label>
        <input
          type="range" min={1} max={25} value={maxDistance}
          onChange={(e) => setMaxDistance(Number(e.target.value))}
          className="flex-1 max-w-xs accent-gold"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-charcoal/40 text-lg">No items found. Try adjusting your filters.</p>
        </div>
      )}
    </div>
  );
}
