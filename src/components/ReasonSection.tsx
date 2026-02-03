import { Heart } from 'lucide-react';

export function ReasonSection() {
  const reasons = [
    "Твои глаза освещают мой мир",
    "Ты понимаешь меня без слов",
    "С тобой я чувствую себя дома",
    "Ты делаешь меня лучше",
    "Твоя милота вдохновляет",
    "С тобой жизнь обретает смысл",
    "Ты веришь в меня",
    "Твоя любовь — мой источник силы",
    "Ты принимаешь меня таким, какой я есть",
    "С тобой каждый день — приключение"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-20 px-4">
      <div className="max-w-5xl w-full">
        <h2 className="text-5xl font-bold text-center text-red-600 mb-6">
          10 причин, почему я люблю тебя
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 italic">
          (хотя их намного больше...)
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">{index + 1}</span>
              </div>
              <p className="text-xl text-gray-700 flex items-center gap-2">
                {reason}
                <Heart className="w-5 h-5 text-red-500 fill-red-500 flex-shrink-0" />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
