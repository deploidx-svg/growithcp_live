import { Plus } from 'lucide-react';
import { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do I need to learn any tools or software?',
      answer: 'No. You focus on telling us what you want, and we handle everything else. No builders, no platforms to learn, no technical skills required.'
    },
    {
      question: 'What exactly is included in the website?',
      answer: 'You get a fully built, ready-to-use website with professional design, fast performance, security best practices, hosting setup, and admin access. Everything is done for you.'
    },
    {
      question: 'Can I make changes after delivery?',
      answer: 'Absolutely. Contact us for updates and modifications anytime. We\'ll handle all changes—no DIY editor needed.'
    },
    {
      question: 'Do you include hosting?',
      answer: 'Yes. Hosting is included in all plans. Your website is deployed and maintained by our team.'
    },
    {
      question: 'Is my website secure?',
      answer: 'Yes. We build every website with security best practices, performance optimization, and regular maintenance included.'
    },
    {
      question: 'How long until my website is ready?',
      answer: 'Typical timelines: simple portfolios 1-2 weeks, business sites 2-3 weeks, e-commerce sites 3-4 weeks. We provide timelines during initial consultation.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            FAQ
          </h2>
          <p className="text-xl text-slate-600">
            Common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-200 ease-in-out ${
                  openIndex === index
                    ? 'max-h-48 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="px-8 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
