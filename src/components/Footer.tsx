import Logo from './Logo';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <Logo size="medium" showText={true} className="mb-4" />
            <p className="text-slate-400 leading-relaxed max-w-md">
              Professional website creation service. We build exceptional websites for businesses and creators.
              Done-for-you. No tools. No builders. Just results.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="/services" className="hover:text-white transition-colors">Portfolio Websites</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Business Websites</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">E-Commerce</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Branding</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} GrowithCP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
