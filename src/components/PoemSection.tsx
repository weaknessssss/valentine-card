import { Sparkles } from 'lucide-react';

export function PoemSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-100 py-20 px-4">
      <div className="max-w-3xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border-4 border-red-200">
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="w-8 h-8 text-pink-500 mr-2" />
            <h2 className="text-4xl font-bold text-red-600">Стихи для тебя</h2>
            <Sparkles className="w-8 h-8 text-pink-500 ml-2" />
          </div>
          
          <div className="space-y-8 text-gray-700">
            <div className="text-center text-xl leading-relaxed">
              <p>В этот день влюблённых всех,</p>
              <p>Хочу сказать тебе я вновь:</p>
              <p>Ты — моё счастье и успех,</p>
              <p>Ты — моя единственная любовь!</p>
            </div>
            
            <div className="text-center text-xl leading-relaxed">
              <p>Пусть розы расцветают ярче,</p>
              <p>Пусть сердце бьётся в унисон,</p>
              <p>С тобой мир кажется богаче,</p>
              <p>Ты — мой любимый, нежный сон!</p>
            </div>
            
            <div className="text-center text-xl leading-relaxed">
              <p>В твоих глазах я вижу звёзды,</p>
              <p>В улыбке — солнечный рассвет,</p>
              <p>С тобой не страшны мне морозы,</p>
              <p>Ты — мой любимый человек на свет!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
