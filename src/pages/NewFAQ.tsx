import { Plus, Zap, Clock, Shield, CreditCard } from 'lucide-react';
import { useState } from 'react';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';

function NewFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    {
      icon: Zap,
      title: 'General Questions',
      faqs: [
        {
          question: 'What is same-day website delivery?',
          answer: 'We build and deploy your website within 24 hours using advanced development tools like Bolt on Replit. You provide requirements, we deliver a fully functional website.',
        },
        {
          question: 'Who builds my website?',
          answer: 'Your website is built by our team of experienced developers using cutting-edge technology. We handle everything from design to deployment.',
        },
        {
          question: 'What types of websites do you build?',
          answer: 'We build landing pages, business websites, e-commerce stores, portfolios, and custom web applications. All subscription tiers include professional design and development.',
        },
        {
          question: 'Can I see examples of your work?',
          answer: 'Yes! Visit our Portfolio page to see websites we\'ve built across different industries and subscription tiers.',
        },
      ],
    },
    {
      icon: Clock,
      title: 'Timeline & Process',
      faqs: [
        {
          question: 'How fast can you really deliver?',
          answer: 'Most websites are delivered within 24 hours. Simple landing pages can be ready in 12-16 hours, while complex e-commerce sites may take up to 48 hours.',
        },
        {
          question: 'What happens after I subscribe?',
          answer: 'After subscribing, you\'ll receive a requirements form. Once completed, our team begins building immediately. You\'ll receive progress updates and a preview link within hours.',
        },
        {
          question: 'Can I request changes?',
          answer: 'Absolutely! Your monthly subscription includes unlimited revision requests. We\'ll make changes within 24-48 hours of your request.',
        },
        {
          question: 'What if I need it faster than 24 hours?',
          answer: 'Pro and Enterprise plans include priority delivery. Contact us for rush projects with 6-12 hour turnaround times.',
        },
      ],
    },
    {
      icon: CreditCard,
      title: 'Pricing & Subscription',
      faqs: [
        {
          question: 'Why monthly subscription instead of one-time payment?',
          answer: 'Subscriptions include ongoing support, updates, hosting, security patches, and maintenance. You always have a professional team backing your website.',
        },
        {
          question: 'Can I cancel anytime?',
          answer: 'Yes, cancel anytime with no penalties. You retain full ownership of your website code and can export everything.',
        },
        {
          question: 'Are there setup fees?',
          answer: 'No setup fees, no hidden costs. What you see in pricing is what you pay monthly.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, debit cards, UPI, and bank transfers. International payments are also supported.',
        },
      ],
    },
    {
      icon: Shield,
      title: 'Technical & Support',
      faqs: [
        {
          question: 'What technology do you use?',
          answer: 'We use React, TypeScript, Tailwind CSS, Supabase, and deploy via Bolt on Replit. All modern, industry-standard technologies.',
        },
        {
          question: 'Is hosting included?',
          answer: 'Yes! All plans include premium cloud hosting with 99.9% uptime, SSL certificates, and global CDN delivery.',
        },
        {
          question: 'Do I own the website code?',
          answer: 'Yes, you have full ownership. You can request the source code anytime and self-host if needed.',
        },
        {
          question: 'What kind of support do you provide?',
          answer: 'All plans include email and chat support. Pro and Enterprise tiers get priority support with faster response times and dedicated account managers.',
        },
      ],
    },
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-br from-maroon-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Everything you need to know about our same-day website delivery service
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {categories.map((category, catIndex) => {
              const Icon = category.icon;
              return (
                <div key={catIndex}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-maroon-700 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                  </div>

                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = catIndex * 10 + faqIndex;
                      return (
                        <GlassCard key={faqIndex} hover={false} className="overflow-hidden">
                          <button
                            onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                            className="w-full text-left flex items-center justify-between gap-4"
                          >
                            <span className="text-lg font-semibold text-white pr-4">
                              {faq.question}
                            </span>
                            <Plus
                              className={`w-6 h-6 text-maroon-400 flex-shrink-0 transition-transform duration-200 ${
                                openIndex === globalIndex ? 'rotate-45' : ''
                              }`}
                            />
                          </button>

                          <div
                            className={`transition-all duration-200 ease-in-out ${
                              openIndex === globalIndex
                                ? 'max-h-48 opacity-100 mt-4'
                                : 'max-h-0 opacity-0 overflow-hidden'
                            }`}
                          >
                            <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                          </div>
                        </GlassCard>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <GlassCard className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-400 mb-6">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <GlassButton variant="primary" href="/contact" icon>
              Contact Support
            </GlassButton>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}

export default NewFAQ;
