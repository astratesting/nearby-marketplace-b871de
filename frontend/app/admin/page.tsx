'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Users, Package, MessageCircle, Flag } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Total Users', value: 1247, change: '+23 this week' },
  { icon: Package, label: 'Active Listings', value: 384, change: '+12 today' },
  { icon: MessageCircle, label: 'Messages (24h)', value: 89, change: '-5 from yesterday' },
  { icon: Flag, label: 'Reports', value: 3, change: '1 pending review' },
];

const recentUsers = [
  { name: 'Alice Johnson', email: 'alice@example.com', joined: '2025-01-15', listings: 5, status: 'active' },
  { name: 'Bob Smith', email: 'bob@example.com', joined: '2025-03-20', listings: 3, status: 'active' },
  { name: 'Carol Davis', email: 'carol@example.com', joined: '2025-06-10', listings: 1, status: 'active' },
];

const flaggedItems = [
  { title: 'Suspicious iPhone Listing', seller: 'Unknown User', reason: 'Price too good to be true', status: 'pending' },
];

export default function AdminPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-charcoal mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-charcoal">{stat.value}</p>
                  <p className="text-xs text-charcoal/60">{stat.label}</p>
                </div>
              </div>
              <p className="text-xs text-charcoal/40 mt-2">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-charcoal mb-4">Recent Users</h2>
          <Card>
            <CardContent className="p-0">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-charcoal/10">
                    <th className="text-left p-3 text-charcoal/60 font-medium">User</th>
                    <th className="text-left p-3 text-charcoal/60 font-medium">Listings</th>
                    <th className="text-left p-3 text-charcoal/60 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => (
                    <tr key={user.email} className="border-b border-charcoal/5 last:border-0">
                      <td className="p-3">
                        <p className="font-medium text-charcoal">{user.name}</p>
                        <p className="text-xs text-charcoal/40">{user.email}</p>
                      </td>
                      <td className="p-3 text-charcoal">{user.listings}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded-full text-xs bg-green-100 text-green-800">{user.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-charcoal mb-4">Flagged Items</h2>
          <Card>
            <CardContent className="p-0">
              {flaggedItems.length === 0 ? (
                <p className="p-4 text-charcoal/40 text-sm">No flagged items.</p>
              ) : (
                <div className="divide-y divide-charcoal/5">
                  {flaggedItems.map((item, i) => (
                    <div key={i} className="p-4 flex items-center justify-between">
                      <div>
                        <p className="font-medium text-charcoal">{item.title}</p>
                        <p className="text-xs text-charcoal/40">{item.seller} — {item.reason}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">Dismiss</Button>
                        <Button variant="danger" size="sm">Remove</Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
