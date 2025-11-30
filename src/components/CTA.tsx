import { ArrowRight, Mail } from 'lucide-react';

function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.3))] bg-[size:40px_40px]"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Let's Build Your Professional Website
        </h2>

        <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Share your vision. We'll handle the rest.
        </p>

        <p className="text-lg text-blue-50 mb-12 max-w-2xl mx-auto">
          No technical skills needed. No tools to learn. Just a professional, fully built website delivered to you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:contact@growithcp.com"
            className="group inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            <Mail className="w-6 h-6" />
            Contact Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-800/70 transition-all duration-200 border-2 border-white/20"
          >
            View Pricing
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">Fast</div>
            <div className="text-blue-100">Quick Turnaround</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">Professional</div>
            <div className="text-blue-100">Expert Quality</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">Affordable</div>
            <div className="text-blue-100">Fair Pricing</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
