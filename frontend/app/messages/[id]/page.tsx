'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ChatBox } from '@/components/ChatBox';
import type { Message } from '@/types';

const mockConversations: Record<string, { messages: Message[]; otherUser: { name: string } }> = {
  '1': {
    otherUser: { name: 'Bob Smith' },
    messages: [
      { id: 'm1', senderId: '2', receiverId: '1', content: 'Hi! Is the KALLAX shelf still available?', timestamp: new Date(Date.now() - 3600000).toISOString(), read: true },
      { id: 'm2', senderId: '1', receiverId: '2', content: 'Yes it is! Would you like to come see it?', timestamp: new Date(Date.now() - 3500000).toISOString(), read: true },
      { id: 'm3', senderId: '2', receiverId: '1', content: 'Is this still available?', timestamp: new Date(Date.now() - 120000).toISOString(), read: false },
    ],
  },
  '2': {
    otherUser: { name: 'Carol Davis' },
    messages: [
      { id: 'm4', senderId: '3', receiverId: '1', content: 'Hey, interested in the MacBook!', timestamp: new Date(Date.now() - 7200000).toISOString(), read: true },
      { id: 'm5', senderId: '1', receiverId: '3', content: 'Great! What questions do you have?', timestamp: new Date(Date.now() - 7100000).toISOString(), read: true },
      { id: 'm6', senderId: '3', receiverId: '1', content: 'Can you do $600?', timestamp: new Date(Date.now() - 3600000).toISOString(), read: false },
    ],
  },
};

export default function ConversationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const convo = mockConversations[id];
  const [messages, setMessages] = useState<Message[]>(convo?.messages || []);

  if (!convo) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-charcoal/40">Conversation not found.</p>
      </div>
    );
  }

  const handleSend = (content: string) => {
    const newMsg: Message = {
      id: `m${Date.now()}`,
      senderId: '1',
      receiverId: '2',
      content,
      timestamp: new Date().toISOString(),
      read: true,
    };
    setMessages([...messages, newMsg]);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-4 flex flex-col" style={{ height: 'calc(100vh - 64px)' }}>
      <div className="flex items-center gap-3 pb-4 border-b border-charcoal/10">
        <Link href="/messages" className="text-charcoal/60 hover:text-charcoal">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div className="w-8 h-8 rounded-full bg-charcoal/10" />
        <span className="font-medium text-charcoal">{convo.otherUser.name}</span>
      </div>
      <div className="flex-1 min-h-0">
        <ChatBox messages={messages} currentUserId="1" onSend={handleSend} />
      </div>
    </div>
  );
}
