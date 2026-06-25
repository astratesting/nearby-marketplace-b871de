'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { Message } from '@/types';

interface ChatBoxProps {
  messages: Message[];
  currentUserId: string;
  onSend: (content: string) => void;
}

export function ChatBox({ messages, currentUserId, onSend }: ChatBoxProps) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input.trim());
    setInput('');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => {
          const isOwn = msg.senderId === currentUserId;
          return (
            <div key={msg.id} className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs rounded-xl px-4 py-2 ${
                isOwn ? 'bg-charcoal text-ivory' : 'bg-ivory text-charcoal border border-charcoal/10'
              }`}>
                <p className="text-sm">{msg.content}</p>
                <p className="text-xs opacity-60 mt-1">
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-4 border-t border-charcoal/10">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 rounded-lg border border-charcoal/20 bg-white px-3 py-2 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <Button onClick={handleSend} size="md">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
