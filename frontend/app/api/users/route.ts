import { NextRequest, NextResponse } from 'next/server';

const mockUsers = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', location: 'Brooklyn, NY', rating: 4.8, verified: true, joinedAt: '2025-01-15', avatar: '' },
  { id: '2', name: 'Bob Smith', email: 'bob@example.com', location: 'Queens, NY', rating: 4.5, verified: true, joinedAt: '2025-03-20', avatar: '' },
  { id: '3', name: 'Carol Davis', email: 'carol@example.com', location: 'Manhattan, NY', rating: 4.9, verified: false, joinedAt: '2025-06-10', avatar: '' },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    const user = mockUsers.find((u) => u.id === id);
    if (!user) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(user);
  }

  return NextResponse.json(mockUsers);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newUser = {
    id: String(Date.now()),
    ...body,
    rating: 0,
    verified: false,
    joinedAt: new Date().toISOString(),
  };
  return NextResponse.json(newUser, { status: 201 });
}
