'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import type { Category } from '@/types';

const categories: Category[] = ['Electronics', 'Furniture', 'Clothing', 'Books', 'Sports', 'Home & Garden', 'Toys', 'Vehicles', 'Other'];
const conditions = ['new', 'like-new', 'good', 'fair'] as const;

export default function SellPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '', description: '', price: '', category: '' as Category | '', condition: 'good' as typeof conditions[number], location: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => router.push('/dashboard'), 500);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-charcoal mb-6">List an Item</h1>
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Title"
              id="title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="e.g., Vintage Leather Jacket"
              required
            />
            <div>
              <label htmlFor="desc" className="block text-sm font-medium text-charcoal mb-1">Description</label>
              <textarea
                id="desc"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Describe your item — condition, age, reason for selling..."
                rows={4}
                className="w-full rounded-lg border border-charcoal/20 bg-white px-3 py-2 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Price ($)"
                id="price"
                type="number"
                min={0}
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                placeholder="0.00"
                required
              />
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">Category</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value as Category })}
                  className="w-full rounded-lg border border-charcoal/20 bg-white px-3 py-2 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                >
                  <option value="">Select...</option>
                  {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">Condition</label>
              <div className="flex gap-3">
                {conditions.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setForm({ ...form, condition: c })}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      form.condition === c ? 'bg-charcoal text-ivory' : 'bg-charcoal/5 text-charcoal hover:bg-charcoal/10'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <Input
              label="Location"
              id="location"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              placeholder="e.g., Brooklyn, NY"
              required
            />
            <div className="border-2 border-dashed border-charcoal/20 rounded-xl p-8 text-center">
              <p className="text-charcoal/40 text-sm">📷 Photo upload (coming soon)</p>
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? 'Listing...' : 'List Item'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
