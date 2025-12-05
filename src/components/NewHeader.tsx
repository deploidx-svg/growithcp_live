import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

function NewHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Features', href: '/features' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 gradient-maroon rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900">WebDesign</div>
              <div className="text-xs text-maroon-700 font-semibold">Same-Day Delivery</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-maroon-700 transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/subscribe"
              className="bg-maroon-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-maroon-600 transition-all"
            >
              Subscribe Now
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg glass hover:bg-maroon-100/40 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden glass rounded-lg my-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-gray-700 hover:text-maroon-700 hover:bg-maroon-50/50 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-maroon-200 pt-3 px-4">
              <a
                href="/subscribe"
                className="block w-full text-center py-2.5 bg-maroon-700 text-white rounded-lg font-semibold hover:bg-maroon-600 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Subscribe Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default NewHeader;
