import { ArrowRight, Users } from 'lucide-react';

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-[size:40px_40px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="font-semibold">Powered with AI</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Users className="w-4 h-4" />
            Done-For-You Website Service
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            Your Website Built<br />
            <span className="text-blue-600">by Expert Engineers</span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Share your requirements. Our team of engineers designs, builds, and deploys your complete website.
            <span className="block text-slate-500 text-lg mt-4">No tools for you to learn. No builders to manage. Just results.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Your Website Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-50 transition-all duration-200 shadow-md border border-slate-200"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

export default Hero;
