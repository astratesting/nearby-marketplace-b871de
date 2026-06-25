export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  location: string;
  rating: number;
  verified: boolean;
  joinedAt: string;
}

export interface Item {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  condition: 'new' | 'like-new' | 'good' | 'fair';
  images: string[];
  seller: User;
  location: string;
  distance?: string;
  createdAt: string;
  status: 'available' | 'sold' | 'reserved';
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  itemId?: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  otherUser: User;
  item?: Item;
  lastMessage: Message;
  unreadCount: number;
}

export type Category =
  | 'Electronics'
  | 'Furniture'
  | 'Clothing'
  | 'Books'
  | 'Sports'
  | 'Home & Garden'
  | 'Toys'
  | 'Vehicles'
  | 'Other';
