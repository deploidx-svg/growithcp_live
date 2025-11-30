import { Quote } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      text: 'I just shared my vision, and they built the entire site. I didn\'t have to touch any code or learn complicated tools. Amazing experience!',
      author: 'Sarah M.',
      role: 'Portfolio Website'
    },
    {
      text: 'Super fast delivery and very clean design. They understood exactly what I needed after one conversation. Highly recommended!',
      author: 'Rajesh K.',
      role: 'Business Website'
    },
    {
      text: 'Best decision for my e-commerce store. Professional quality, affordable pricing, and they handle everything. My website is secure, fast, and fully functional.',
      author: 'Priya D.',
      role: 'E-Commerce Store'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Testimonials
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            What our clients say about us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <Quote className="w-10 h-10 text-blue-500 mb-6" />

              <p className="text-lg text-slate-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">{testimonial.author}</p>
                <p className="text-sm text-slate-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Client Examples</h3>
          <div className="flex flex-wrap justify-center gap-4 text-slate-600">
            <span className="bg-white px-4 py-2 rounded-lg border border-slate-200">Personal portfolio for creators and artists</span>
            <span className="bg-white px-4 py-2 rounded-lg border border-slate-200">Corporate sites for service providers</span>
            <span className="bg-white px-4 py-2 rounded-lg border border-slate-200">Small business pages for restaurants & salons</span>
            <span className="bg-white px-4 py-2 rounded-lg border border-slate-200">Online stores for products</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
