import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

const mockUsers = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    password: '$2a$10$hashedpassword',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
    location: 'Brooklyn, NY',
    rating: 4.8,
    verified: true,
    joinedAt: '2025-01-15',
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    password: '$2a$10$hashedpassword',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
    location: 'Queens, NY',
    rating: 4.5,
    verified: true,
    joinedAt: '2025-03-20',
  },
  {
    id: '3',
    name: 'Carol Davis',
    email: 'carol@example.com',
    password: '$2a$10$hashedpassword',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carol',
    location: 'Manhattan, NY',
    rating: 4.9,
    verified: false,
    joinedAt: '2025-06-10',
  },
];

// Pre-hashed password for "password123"
const MOCK_PASSWORD_HASH = bcrypt.hashSync('password123', 10);

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const email = credentials?.email as string;
        const password = credentials?.password as string;
        if (!email || !password) return null;

        const user = mockUsers.find((u) => u.email === email);
        if (!user) return null;

        const valid = await bcrypt.compare(password, MOCK_PASSWORD_HASH);
        if (!valid) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.avatar,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        (session.user as any).id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
});
