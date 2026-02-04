import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function FinalSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-600 via-pink-600 to-rose-600 py-20 px-4">
      <div className="max-w-4xl text-center text-white">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="mb-8"
        >
          <Heart className="w-32 h-32 mx-auto text-white fill-white" />
        </motion.div>
        
        <h2 className="text-6xl font-bold mb-8">
          Я люблю тебя!
        </h2>
        
        <p className="text-left text-xl mb-12 leading-relaxed">
          Благодарю тебя за каждый взгляд, <br/>
          в котором я тону,<br />
          за жар твоих рук и ту нежность, <br/>
          что сводит меня с ума. <br />
          Ты — мой сладкий яд и моё спасение. <br />
          Спасибо, что ты есть, мой идеал, <br/>
          мой восторг и моя вечная страсть!
        </p>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-10 border-4 border-white/30">
          <p className="text-2xl font-medium mb-4">
            С Днём Святого Валентина!
          </p>
          <p className="text-4xl font-bold">
            14 февраля 2026
          </p>
        </div>
      </div>
    </section>
  );
}
