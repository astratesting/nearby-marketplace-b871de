import Link from 'next/link';
import { MapPin, Shield, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const features = [
  {
    icon: MapPin,
    title: 'Hyperlocal',
    description: 'Find items in your neighborhood. See what\'s available within walking distance.',
  },
  {
    icon: Shield,
    title: 'Trusted Sellers',
    description: 'Verified seller badges and community ratings keep you safe.',
  },
  {
    icon: MessageCircle,
    title: 'In-App Chat',
    description: 'Negotiate, ask questions, and arrange meetups — all in one place.',
  },
];

const categories = [
  { name: 'Electronics', emoji: '📱', count: 142 },
  { name: 'Furniture', emoji: '🛋️', count: 89 },
  { name: 'Clothing', emoji: '👕', count: 203 },
  { name: 'Books', emoji: '📚', count: 67 },
  { name: 'Sports', emoji: '⚽', count: 54 },
  { name: 'Home & Garden', emoji: '🏠', count: 78 },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-charcoal text-ivory py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Buy & Sell <span className="text-gold">Locally</span>
          </h1>
          <p className="text-xl text-ivory/70 mb-8 max-w-2xl mx-auto">
            Your neighborhood marketplace. Find great deals on used goods from people you trust — just around the corner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/browse">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Browse Items <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-ivory text-ivory hover:bg-ivory/10">
                Start Selling
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Why NearBy?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">{feature.title}</h3>
                <p className="text-charcoal/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-charcoal mb-12">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/browse?category=${encodeURIComponent(cat.name)}`}
                className="p-4 rounded-xl border border-charcoal/10 hover:border-gold hover:shadow-md transition-all text-center"
              >
                <span className="text-3xl block mb-2">{cat.emoji}</span>
                <h3 className="font-medium text-charcoal text-sm">{cat.name}</h3>
                <p className="text-xs text-charcoal/40 mt-1">{cat.count} items</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-burgundy text-ivory">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to declutter?</h2>
          <p className="text-ivory/80 mb-8 text-lg">
            Turn your unused items into cash. List your first item in under a minute.
          </p>
          <Link href="/sell">
            <Button variant="secondary" size="lg">
              List an Item
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
