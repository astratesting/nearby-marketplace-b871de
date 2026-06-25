'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { MessageCircle } from 'lucide-react';

const conversations = [
  {
    id: '1',
    otherUser: { name: 'Bob Smith', avatar: '' },
    item: { title: 'IKEA KALLAX Shelf Unit', price: 30 },
    lastMessage: 'Is this still available?',
    timestamp: '2 min ago',
    unread: 2,
  },
  {
    id: '2',
    otherUser: { name: 'Carol Davis', avatar: '' },
    item: { title: 'MacBook Pro 2019', price: 650 },
    lastMessage: 'Can you do $600?',
    timestamp: '1 hr ago',
    unread: 1,
  },
  {
    id: '3',
    otherUser: { name: 'Bob Smith', avatar: '' },
    item: undefined,
    lastMessage: 'Thanks for the jacket!',
    timestamp: '3 days ago',
    unread: 0,
  },
];

export default function MessagesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-charcoal mb-6">Messages</h1>

      {conversations.length === 0 ? (
        <div className="text-center py-16">
          <MessageCircle className="h-12 w-12 text-charcoal/20 mx-auto mb-4" />
          <p className="text-charcoal/40">No messages yet. Start a conversation from an item listing.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {conversations.map((convo) => (
            <Link key={convo.id} href={`/messages/${convo.id}`}>
              <Card hover className="mb-2">
                <div className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 rounded-full bg-charcoal/10 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-charcoal">{convo.otherUser.name}</span>
                      <span className="text-xs text-charcoal/40">{convo.timestamp}</span>
                    </div>
                    {convo.item && (
                      <p className="text-xs text-gold truncate">{convo.item.title} — ${convo.item.price}</p>
                    )}
                    <p className="text-sm text-charcoal/60 truncate">{convo.lastMessage}</p>
                  </div>
                  {convo.unread > 0 && (
                    <span className="w-5 h-5 rounded-full bg-burgundy text-white text-xs flex items-center justify-center flex-shrink-0">
                      {convo.unread}
                    </span>
                  )}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
