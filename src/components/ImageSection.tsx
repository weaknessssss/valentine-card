import { Heart } from 'lucide-react';

interface ImageSectionProps {
  imageUrl: string;
  title: string;
  message: string;
  reverse?: boolean;
}

export function ImageSection({ imageUrl, title, message, reverse = false }: ImageSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-white">
      <div className={`max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <div className={`${reverse ? 'md:order-2' : ''}`}>
          <img 
            src={imageUrl}
            alt={title}
            className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
          />
        </div>
        
        <div className={`space-y-6 ${reverse ? 'md:order-1' : ''}`}>
          <div className="flex items-center gap-3">
            <Heart className="w-10 h-10 text-red-500 fill-red-500" />
            <h2 className="text-4xl font-bold text-red-600">{title}</h2>
          </div>
          <p className="text-2xl text-gray-700 leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    </section>
  );
}
