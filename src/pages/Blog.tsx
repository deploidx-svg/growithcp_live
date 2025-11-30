import { ArrowRight, Calendar, User } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Why Your Business Needs a Professional Website in 2024',
    excerpt: 'Discover why a professional website is no longer optional but essential for business growth.',
    author: 'Alex Chen',
    date: 'Dec 10, 2024',
    category: 'Business',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Portfolio vs Website Builder: What\'s Right for You?',
    excerpt: 'Comparing DIY builders with professional website creation. Find out which approach suits your needs.',
    author: 'Sarah Williams',
    date: 'Dec 5, 2024',
    category: 'Guide',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'E-Commerce Success: How to Launch Your Online Store',
    excerpt: 'Step-by-step guide to launching a successful online store that converts visitors into customers.',
    author: 'Raj Patel',
    date: 'Nov 28, 2024',
    category: 'Tutorial',
    readTime: '8 min read'
  },
  {
    id: 4,
    title: 'Web Design Trends That Will Dominate 2025',
    excerpt: 'Stay ahead of the curve with the latest web design trends and best practices for 2025.',
    author: 'Emma Rodriguez',
    date: 'Nov 20, 2024',
    category: 'Design',
    readTime: '6 min read'
  },
  {
    id: 5,
    title: 'SEO Fundamentals: Getting Your Website Found Online',
    excerpt: 'Learn the essential SEO principles to improve your website visibility in search results.',
    author: 'Alex Chen',
    date: 'Nov 15, 2024',
    category: 'SEO',
    readTime: '9 min read'
  },
  {
    id: 6,
    title: 'Mobile-First Design: Why It Matters',
    excerpt: 'Understanding the importance of mobile-responsive design and how it impacts user experience.',
    author: 'Sarah Williams',
    date: 'Nov 8, 2024',
    category: 'Design',
    readTime: '5 min read'
  }
];

function Blog() {
  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              Resources & Blog
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Learn about web design, development, and business strategies from our team of experts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-40 flex items-center justify-center text-white text-6xl font-bold">
                  {article.id}
                </div>

                <div className="flex-1 p-8 flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 mb-6 flex-1">
                    {article.excerpt}
                  </p>

                  <div className="border-t border-slate-200 pt-4 mb-4">
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{article.readTime}</span>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get the latest articles, tips, and updates delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Blog;
