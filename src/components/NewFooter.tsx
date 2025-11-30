import { Zap, Mail, Phone, MapPin } from 'lucide-react';
import GlassCard from './GlassCard';

function NewFooter() {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { label: 'Landing Pages', href: '/services' },
      { label: 'Business Websites', href: '/services' },
      { label: 'E-Commerce', href: '/services' },
      { label: 'Custom Solutions', href: '/services' },
    ],
    company: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'FAQ', href: '/faq' },
    ],
    support: [
      { label: 'Contact', href: '/contact' },
      { label: 'Features', href: '/features' },
      { label: 'Subscribe', href: '/subscribe' },
      { label: 'Documentation', href: '#' },
    ],
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-maroon-700 to-maroon-900 rounded-lg flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-bold text-2xl text-white">WebDesign</div>
                <div className="text-sm text-maroon-400">Same-Day Delivery</div>
              </div>
            </a>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Professional websites delivered in 24 hours. Built with Bolt on Replit.
              No setup fees, no long-term contracts.
            </p>

            <div className="space-y-3">
              <a href="mailto:hello@webdesign.com" className="flex items-center gap-3 text-gray-400 hover:text-maroon-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-sm">hello@webdesign.com</span>
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-3 text-gray-400 hover:text-maroon-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">Remote Worldwide</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-maroon-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-maroon-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {links.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-maroon-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} WebDesign. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-maroon-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-maroon-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-maroon-400 transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default NewFooter;
