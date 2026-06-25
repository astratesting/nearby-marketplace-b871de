import { NextRequest, NextResponse } from 'next/server';

const mockItems: Record<string, any> = {
  '1': {
    id: '1', title: 'Vintage Leather Jacket', price: 45, category: 'Clothing', condition: 'good',
    description: 'Beautiful brown leather jacket, size M.', images: [],
    seller: { id: '1', name: 'Alice Johnson', email: 'alice@example.com', location: 'Brooklyn, NY', rating: 4.8, verified: true, joinedAt: '2025-01-15' },
    location: 'Brooklyn, NY', createdAt: new Date(Date.now() - 3600000).toISOString(), status: 'available',
  },
  '2': {
    id: '2', title: 'IKEA KALLAX Shelf Unit', price: 30, category: 'Furniture', condition: 'like-new',
    description: 'White 4x2 shelf unit, excellent condition.', images: [],
    seller: { id: '2', name: 'Bob Smith', email: 'bob@example.com', location: 'Queens, NY', rating: 4.5, verified: true, joinedAt: '2025-03-20' },
    location: 'Queens, NY', createdAt: new Date(Date.now() - 7200000).toISOString(), status: 'available',
  },
  '3': {
    id: '3', title: 'MacBook Pro 2019', price: 650, category: 'Electronics', condition: 'good',
    description: '13-inch, 16GB RAM, 512GB SSD.', images: [],
    seller: { id: '3', name: 'Carol Davis', email: 'carol@example.com', location: 'Manhattan, NY', rating: 4.9, verified: false, joinedAt: '2025-06-10' },
    location: 'Manhattan, NY', createdAt: new Date(Date.now() - 86400000).toISOString(), status: 'available',
  },
};

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const item = mockItems[id];
  if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(item);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const existing = mockItems[id];
  if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  const updated = { ...existing, ...body };
  return NextResponse.json(updated);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!mockItems[id]) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ success: true });
}
