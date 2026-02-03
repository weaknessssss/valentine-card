import { HeroSection } from './components/HeroSection';
import { PoemSection } from './components/PoemSection';
import { ImageSection } from './components/ImageSection';
import { QuotesSection } from './components/QuotesSection';
import { LoveLetterSection } from './components/LoveLetterSection';
import { WishesSection } from './components/WishesSection';
import { ReasonSection } from './components/ReasonSection';
import { FinalSection } from './components/FinalSection';

export default function App() {
  return (
    <div className="w-full">
      <HeroSection />
      
      <PoemSection />
      
      <ImageSection 
        imageUrl="https://images.unsplash.com/photo-1675820999139-ec6cc2989cac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjByb3NlcyUyMHZhbGVudGluZXMlMjBkYXl8ZW58MXx8fHwxNzcwMTUxMjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        title="Для тебя"
        message="Как роза не может жить без солнца, так и я не могу представить свою жизнь без тебя. Ты — мой свет, моя радость, моя любовь. В этот День всех влюблённых я хочу напомнить тебе, как сильно ты нужна мне."
      />
      
      <QuotesSection />
      
      <ImageSection 
        imageUrl="https://images.unsplash.com/photo-1658851866325-49fb8b7fbcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHN1bnNldCUyMGNvdXBsZXxlbnwxfHx8fDE3NzAxMTI3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        title="Вместе навсегда"
        message="Каждый закат с тобой — это новое начало. Каждый рассвет — это новое обещание любить тебя сильнее, чем вчера. Ты — моё всё, и я благодарен за каждую минуту, проведённую рядом с тобой."
        reverse
      />
      
      <LoveLetterSection />
      
      <WishesSection />
      
      <ReasonSection />
      
      <ImageSection 
        imageUrl="https://images.unsplash.com/photo-1487035170094-b76fc43abdf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBsb3ZlJTIwcm9zZXN8ZW58MXx8fHwxNzcwMTUxMjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        title="Наша история"
        message="Наша история любви — это самая прекрасная книга, которую я когда-либо читал. И самое лучшее в ней то, что мы пишем её вместе, страница за страницей, день за днём. Я не могу дождаться следующей главы!"
      />
      
      <FinalSection />
    </div>
  );
}
