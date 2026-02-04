import { Quote } from 'lucide-react';

export function QuotesSection() {
  const quotes = [
    {
      text: "Любовь — это не только смотреть друг на друга, но и смотреть в одном направлении.",
      author: "Антуан де Сент-Экзюпери"
    },
    {
      text: "Любить — значит видеть человека таким, каким его задумал Бог.",
      author: "Фёдор Достоевский"
    },
    {
      text: "В любви нет ничего случайного. Это всегда судьба.",
      author: "Народная мудрость"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-red-50 to-rose-100 py-20 px-4">
      <div className="max-w-5xl w-full">
        <h2 className="text-5xl font-bold text-center text-red-600 mb-16">
          О любви
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-red-400"
            >
              <Quote className="w-12 h-12 text-red-400 mb-4" />
              <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                "{quote.text}"
              </p>
              <p className="text-right text-gray-500 font-medium">
                — {quote.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
