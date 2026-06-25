import { NextRequest, NextResponse } from 'next/server';

const mockMessages = [
  { id: 'm1', senderId: '2', receiverId: '1', content: 'Hi! Is the KALLAX shelf still available?', timestamp: new Date(Date.now() - 3600000).toISOString(), read: true },
  { id: 'm2', senderId: '1', receiverId: '2', content: 'Yes it is! Would you like to come see it?', timestamp: new Date(Date.now() - 3500000).toISOString(), read: true },
  { id: 'm3', senderId: '2', receiverId: '1', content: 'Is this still available?', timestamp: new Date(Date.now() - 120000).toISOString(), read: false },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  let messages = [...mockMessages];
  if (userId) {
    messages = messages.filter((m) => m.senderId === userId || m.receiverId === userId);
  }

  return NextResponse.json(messages);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newMessage = {
    id: `m${Date.now()}`,
    ...body,
    timestamp: new Date().toISOString(),
    read: false,
  };
  return NextResponse.json(newMessage, { status: 201 });
}
