import { useLanguage } from '../context/LanguageContext';

export default function Voices() {
  const { language } = useLanguage();

  const content = {
    ja: {
      title: '出演者の声',
      subtitle: '現地のチームから届いた、喜びと感謝のメッセージ',
      intro: 'このサービスは単なる動画制作ではなく、国境を越えた「国際交流」であり、現地コミュニティへの「直接的な支援」です。実際にパフォーマンスを行っている現地のチームメンバーから、この活動を通じたポジティブな声が届いています。',
      voices: [
        {
          name: 'マプート・ダンサーズ リーダー',
          text: '「日本の皆さんからのお祝いメッセージを代行することで、私たち自身も毎日ハッピーな気持ちをもらっています。そして何より、この活動のおかげで安定した収入を得ることができ、家族を養い、子供たちを学校に通わせることができています。本当にありがとうございます！」',
          image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=800',
        },
        {
          name: 'サバンナ・スマイルズ メンバー',
          text: '「遠く離れた日本という国の人々の人生の特別な瞬間に、私たちが関われることを誇りに思います。私たちのダンスと笑顔が、誰かの力になっていると知ることは、私たちにとって大きなモチベーションです。これからも最高のパフォーマンスをお届けします！」',
          image: 'https://images.unsplash.com/photo-1523824922771-2281c791c6f4?auto=format&fit=crop&q=80&w=800',
        },
        {
          name: 'キリマンジャロ・ブラザーズ',
          text: '「以前は仕事を見つけるのが難しく、その日暮らしの生活でした。しかし、このプロジェクトに参加してからは、自分たちの特技であるダンスや歌を活かして生活できるようになりました。地域全体が活気づき、若者たちにも希望を与えています。」',
          image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800',
        }
      ],
      conclusion: '皆様からのご依頼が、彼らの笑顔と未来を創り出しています。これからも、世界に一つだけの特別なGIFTを通じて、日本とアフリカの架け橋となれるよう活動を続けてまいります。'
    },
    en: {
      title: 'Voices of Performers',
      subtitle: 'Messages of joy and gratitude from our local teams',
      intro: 'This service is not just about making videos; it is "international exchange" across borders and "direct support" for local communities. We have received positive feedback from the actual team members performing the videos.',
      voices: [
        {
          name: 'Maputo Dancers Leader',
          text: '"By delivering congratulatory messages from people in Japan, we ourselves feel happy every day. Most importantly, thanks to this activity, we can earn a stable income, support our families, and send our children to school. Thank you so much!"',
          image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=800',
        },
        {
          name: 'Savannah Smiles Member',
          text: '"We are proud to be involved in the special moments of people\'s lives in a faraway country like Japan. Knowing that our dance and smiles empower someone is a huge motivation for us. We will continue to deliver the best performances!"',
          image: 'https://images.unsplash.com/photo-1523824922771-2281c791c6f4?auto=format&fit=crop&q=80&w=800',
        },
        {
          name: 'Kilimanjaro Brothers',
          text: '"It used to be hard to find work, and we lived day by day. But since joining this project, we have been able to make a living using our special skills in dancing and singing. The whole community is energized, giving hope to the youth."',
          image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800',
        }
      ],
      conclusion: 'Your requests create their smiles and future. We will continue our activities to act as a bridge between Japan and Africa through unique and special GIFTs.'
    }
  };

  const t = content[language];

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 md:py-16 text-center">
      <h1 className="pop-heading !text-3xl md:!text-6xl mb-4 md:mb-8">{t.title}</h1>
      <p className="text-sm md:text-xl font-bold mb-8 md:mb-12">{t.subtitle}</p>
      
      <div className="bg-white border-2 md:border-4 border-black rounded-2xl p-4 md:p-8 mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-left">
        <p className="text-sm md:text-base leading-relaxed font-bold">{t.intro}</p>
      </div>

      <div className="space-y-8 md:space-y-12">
        {t.voices.map((voice, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-left bg-white border-2 md:border-4 border-black rounded-2xl p-4 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="w-full md:w-1/3 aspect-square rounded-xl overflow-hidden border-2 border-black shrink-0">
              <img src={voice.image} alt={voice.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-lg md:text-2xl font-black mb-2 md:mb-4 text-red-500">{voice.name}</h3>
              <p className="text-sm md:text-base leading-relaxed font-bold italic">{voice.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 md:mt-16 bg-yellow-400 border-2 md:border-4 border-black rounded-2xl p-4 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <p className="text-sm md:text-lg font-black leading-relaxed">{t.conclusion}</p>
      </div>
    </main>
  );
}
