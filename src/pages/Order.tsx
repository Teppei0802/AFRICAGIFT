import { Link } from 'react-router-dom';
import { teams } from '../data/teams';
import { useLanguage } from '../context/LanguageContext';

export default function Order() {
  const { language } = useLanguage();

  const t = {
    ja: {
      titleEn: 'CHOOSE YOUR TEAM',
      titleJa: 'チームを選ぶ',
      desc: '個性豊かなパフォーマーたちが、あなたの想いを全力で届けます。\nお好みのチームを選んで、動画の注文へ進んでください。',
      chooseTeamBtn: 'このチームを選ぶ',
      optionsTitle: 'Options',
      optMusic: '音楽指定 (YouTube等)',
      optMusicDesc: '思い出の曲や好きな曲を指定して、オリジナルのダンス動画を作成します。',
      optBday: 'バースデーソング',
      optBdayDesc: '定番の「Happy Birthday to You」をパフォーマーが歌ってお祝いします。',
      optPhoto: '写真プリントアウト',
      optPhotoDesc: '主役の方の写真をA4サイズで印刷し、パフォーマーが手に持って動画に登場します。',
      optKiss: '写真へのキス',
      optKissDesc: 'プリントアウトした写真にパフォーマーが熱いキスを贈る、笑いを取れるオプションです。',
      optCake: 'ケーキを寄付',
      optCakeDesc: 'パフォーマーたちにケーキをプレゼントし、一緒に食べる様子を動画に収めます。',
    },
    en: {
      titleEn: 'CHOOSE YOUR TEAM',
      titleJa: 'Select a Team',
      desc: 'Our unique performers will deliver your feelings with all their might.\nChoose your favorite team and proceed to order your video.',
      chooseTeamBtn: 'Select this team',
      optionsTitle: 'Options',
      optMusic: 'Specify Music (YouTube, etc.)',
      optMusicDesc: 'Specify a memorable or favorite song to create an original dance video.',
      optBday: 'Birthday Song',
      optBdayDesc: 'Performers will sing the classic "Happy Birthday to You" to celebrate.',
      optPhoto: 'Photo Printout',
      optPhotoDesc: 'Print a photo of the main person in A4 size, and the performers will hold it in the video.',
      optKiss: 'Kiss on Photo',
      optKissDesc: 'A funny option where performers give a passionate kiss to the printed photo.',
      optCake: 'Donate a Cake',
      optCakeDesc: 'Gift a cake to the performers and record them eating it together.',
    }
  }[language];

  return (
    <main className="max-w-6xl mx-auto px-4 text-center pb-24">
      {/* ヒーローセクション */}
      <section className="py-8 md:py-16 spring-in">
        <h1 className="pop-heading mb-2 md:mb-4 leading-none">
          <span className="text-lg md:text-3xl block text-black whitespace-nowrap">{t.titleEn}</span>
          <span className="text-sm md:text-2xl">{t.titleJa}</span>
        </h1>
        <p className="text-[10px] md:text-lg font-bold mt-2 md:mt-4 mb-4 md:mb-8 leading-tight md:leading-normal whitespace-pre-line">
          {t.desc}
        </p>
      </section>

      {/* チーム一覧 */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-left">
        {teams.map((team) => (
          <Link 
            key={team.id} 
            to={`/order/${team.id}`} 
            className="pop-card p-2 md:p-6 flex flex-col hover:-translate-y-2 transition-transform group cursor-pointer"
          >
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden border-2 md:border-4 border-black mb-2 md:mb-4 relative">
              <img 
                src={team.image} 
                alt={language === 'en' ? team.nameEn || team.name : team.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute top-1 left-1 md:top-2 md:left-2">
                <span className={`${team.tagColor} text-white px-1.5 py-0.5 md:px-3 md:py-1 text-[8px] md:text-sm font-black border md:border-2 border-black shadow-[1px_1px_0_0_#000] md:shadow-[2px_2px_0_0_#000]`}>
                  {language === 'en' ? team.tagEn || team.tag : team.tag}
                </span>
              </div>
            </div>
            
            <div className="flex-grow flex flex-col">
              <h4 className="text-sm md:text-lg font-black uppercase mb-1 md:mb-2 line-clamp-1 group-hover:text-red-500 transition-colors">{language === 'en' ? team.nameEn || team.name : team.name}</h4>
              <p className="text-[7px] sm:text-[8px] md:text-xs leading-tight md:leading-relaxed text-gray-700 mb-1 md:mb-4 flex-grow line-clamp-2 md:line-clamp-none">
                {language === 'en' ? team.descriptionEn || team.description : team.description}
              </p>
              
              <div className="flex flex-row items-end justify-between mb-2 md:mb-4">
                <div className="flex items-end gap-1 md:gap-2 whitespace-nowrap">
                  <span className="text-gray-400 line-through font-bold text-xs md:text-sm">¥{Math.floor(team.basePrice * 1.3).toLocaleString()}</span>
                  <p className="text-sm md:text-lg font-black text-red-500">¥{team.basePrice.toLocaleString()} <span className="text-[10px] md:text-xs font-bold text-black">〜</span></p>
                </div>
              </div>
              
              <div className="w-full bg-black text-white font-black py-1.5 md:py-2 text-[10px] md:text-sm rounded-full uppercase transition-transform group-hover:scale-105 group-active:scale-95 border md:border-2 border-black shadow-[2px_2px_0_0_#ef4444] md:shadow-[4px_4px_0_0_#ef4444] text-center block">
                {t.chooseTeamBtn}
              </div>
            </div>
          </Link>
        ))}
      </section>
      
      {/* オプション説明 */}
      <section className="mt-8 md:mt-16 bg-white border-4 border-black rounded-3xl p-4 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-left">
        <h2 className="text-xl md:text-2xl font-black mb-4 md:mb-6 uppercase italic border-b-4 border-black pb-2 inline-block">{t.optionsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <h4 className="font-black text-[10px] sm:text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-1 md:gap-2 whitespace-nowrap">
              <span className="text-sm md:text-2xl">🎵</span> {t.optMusic} (+¥1,200)
            </h4>
            <p className="text-[8px] sm:text-[10px] md:text-sm text-gray-700">{t.optMusicDesc}</p>
          </div>
          <div>
            <h4 className="font-black text-[10px] sm:text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-1 md:gap-2 whitespace-nowrap">
              <span className="text-sm md:text-2xl">🎂</span> {t.optBday} (+¥500)
            </h4>
            <p className="text-[8px] sm:text-[10px] md:text-sm text-gray-700">{t.optBdayDesc}</p>
          </div>
          <div>
            <h4 className="font-black text-[10px] sm:text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-1 md:gap-2 whitespace-nowrap">
              <span className="text-sm md:text-2xl">📸</span> {t.optPhoto} (+¥1,000)
            </h4>
            <p className="text-[8px] sm:text-[10px] md:text-sm text-gray-700">{t.optPhotoDesc}</p>
          </div>
          <div>
            <h4 className="font-black text-[10px] sm:text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-1 md:gap-2 whitespace-nowrap">
              <span className="text-sm md:text-2xl">💋</span> {t.optKiss} (+¥200)
            </h4>
            <p className="text-[8px] sm:text-[10px] md:text-sm text-gray-700">{t.optKissDesc}</p>
          </div>
          <div>
            <h4 className="font-black text-[10px] sm:text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-1 md:gap-2 whitespace-nowrap">
              <span className="text-sm md:text-2xl">🍰</span> {t.optCake} (+¥2,500)
            </h4>
            <p className="text-[8px] sm:text-[10px] md:text-sm text-gray-700">{t.optCakeDesc}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
