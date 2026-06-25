'use client';

import Link from 'next/link';
import { Package, MessageCircle, Star, MapPin, Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const stats = [
  { icon: Package, label: 'Active Listings', value: '5', color: 'text-gold' },
  { icon: MessageCircle, label: 'Unread Messages', value: '3', color: 'text-burgundy' },
  { icon: Star, label: 'Avg Rating', value: '4.8', color: 'text-gold' },
  { icon: MapPin, label: 'Location', value: 'Brooklyn', color: 'text-charcoal' },
];

const myListings = [
  { id: '1', title: 'Vintage Leather Jacket', price: 45, status: 'available', category: 'Clothing' },
  { id: '2', title: 'IKEA KALLAX Shelf', price: 30, status: 'available', category: 'Furniture' },
  { id: '3', title: 'MacBook Pro 2019', price: 650, status: 'reserved', category: 'Electronics' },
];

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-charcoal">Dashboard</h1>
          <p className="text-charcoal/60 mt-1">Welcome back, Alice!</p>
        </div>
        <Link href="/sell">
          <Button>
            <Plus className="h-4 w-4 mr-2" /> List Item
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label} className="text-center">
            <CardContent className="py-6">
              <stat.icon className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
              <p className="text-2xl font-bold text-charcoal">{stat.value}</p>
              <p className="text-xs text-charcoal/60 mt-1">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-xl font-semibold text-charcoal mb-4">My Listings</h2>
      <div className="space-y-3">
        {myListings.map((item) => (
          <Card key={item.id} hover>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-ivory flex items-center justify-center text-charcoal/30">
                  📦
                </div>
                <div>
                  <h3 className="font-medium text-charcoal">{item.title}</h3>
                  <p className="text-sm text-charcoal/60">{item.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-burgundy">${item.price}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  item.status === 'available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.status}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
