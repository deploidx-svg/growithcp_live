import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Creative Portfolio Platform',
    category: 'Portfolio Website',
    description: 'A stunning portfolio website for a freelance designer showcasing 30+ projects with detailed case studies.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=600&h=400&fit=crop',
    services: ['Design', 'Development', 'SEO'],
    results: ['90+ projects displayed', 'Mobile responsive', 'Fast loading (PageSpeed 95+)']
  },
  {
    title: 'Tech Startup Website',
    category: 'Business Website',
    description: 'Professional business website for a SaaS startup with product demos, pricing, and lead generation.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?w=600&h=400&fit=crop',
    services: ['Design', 'Development', 'Branding'],
    results: ['40% increase in leads', 'Professional appearance', 'SEO rankings improved']
  },
  {
    title: 'Online Fashion Store',
    category: 'E-Commerce Website',
    description: 'Full-featured e-commerce site for a fashion brand with 200+ products, secure checkout, and analytics.',
    image: 'https://images.pexels.com/photos/5632401/pexels-photo-5632401.jpeg?w=600&h=400&fit=crop',
    services: ['E-Commerce', 'Payment Integration', 'Inventory'],
    results: ['200+ products', 'Secure payments', '$50K+ in first month']
  },
  {
    title: 'Restaurant Website with Booking',
    category: 'Business Website',
    description: 'Beautiful restaurant website with online menu, table booking system, and location integration.',
    image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?w=600&h=400&fit=crop',
    services: ['Design', 'Booking System', 'SEO'],
    results: ['Online bookings', 'Local SEO optimized', 'Mobile bookings']
  },
  {
    title: 'Real Estate Listing Platform',
    category: 'Business Website',
    description: 'Comprehensive real estate website with property listings, virtual tours, and agent profiles.',
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?w=600&h=400&fit=crop',
    services: ['Development', 'Database', 'Admin Panel'],
    results: ['500+ properties', 'Search filters', 'Agent dashboard']
  },
  {
    title: 'Digital Products Shop',
    category: 'E-Commerce Website',
    description: 'E-commerce platform for digital products with instant delivery and customer licensing.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?w=600&h=400&fit=crop',
    services: ['E-Commerce', 'Digital Delivery', 'Licensing'],
    results: ['Instant delivery', 'License management', '1000+ sales']
  }
];

function Portfolio() {
  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Explore websites we've built for creators, businesses, and enterprises. Each project showcases our commitment to quality and results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl bg-white border border-slate-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden h-64 bg-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>

                <div className="p-8">
                  <div className="mb-3">
                    <span className="inline-flex px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-200">
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Services</p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Key Results</p>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="text-slate-700 text-sm">
                          ✓ {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's create something remarkable together. Share your vision and we'll bring it to life.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
