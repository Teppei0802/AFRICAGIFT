import { Link } from 'react-router-dom';
import { teams } from '../data/teams';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { language } = useLanguage();

  const t = {
    ja: {
      heroTitle1: '一生忘れないGIFTを！',
      heroTitle2: 'アフリカから',
      heroTitle3: 'HAPPY BIRTHDAY!',
      orderVideo: '動画を注文する',
      chooseTeam: 'Choose Your Team',
      viewAllTeams: 'すべてのチームを見る',
      benefit1Title: 'ORDER MADE',
      benefit1Text: '世界に一つだけの\nあなただけの\n特別演出',
      benefit2Title: 'GUARANTEE',
      benefit2Text: '満足いただけ\nなければ\n100％返金保証',
      benefit3Title: 'SDGs',
      benefit3Text: '現地の\n雇用創出に\n直接貢献',
      benefitDesc: 'このサービスは単なる「海外外注」ではありません。私たちは現地コミュニティと日常的に連携し、地域コミュニティへリアルに還元しています。\n仲介を挟まないからこそ、あなたの「HAPPY BIRTHDAY」が、現地の雇用と未来に確実かつ直接的につながります。',
      howToOrder: 'How to Order',
      step1: 'チームと\nメッセージを選択',
      step2: '決済完了後、\n現地へ発注',
      step3: 'Get Video!',
      useCasesTitle: 'こんなシーンで使われています！',
      useCases: ['誕生日', 'カップルの記念日', '結婚記念日', '合格祝い', '還暦・長寿のお祝い', '送別・退職祝い', '企業イベント・周年記念', 'その他何でも'],
      partnerTitle: '一般社団法人 モザンビークのいのちをつなぐ会',
      partnerDesc: '私たちは、モザンビークの現地NGOと提携し、売上の一部を現地の教育支援や雇用創出に還元しています。',
      sdgsTitle: '私たちが貢献するSDGs目標',
      sdgs1: '貧困をなくそう',
      sdgs3: 'すべての人に\n健康と福祉を',
      sdgs8: '働きがいも\n経済成長も',
      sdgs17: 'パートナーシップで\n目標を達成しよう',
      faqTitle: 'FAQ',
      faq1Q: 'Q. 納期はどのくらいですか？',
      faq1A: 'A. 通常プランで3〜5日、お急ぎプラン（追加料金）で最短24時間以内に納品いたします。',
      faq2Q: 'Q. メッセージの文字数制限はありますか？',
      faq2A: 'A. ボードに記載するメッセージは、視認性を考慮して20文字以内を推奨しております。',
      faq3Q: 'Q. 動画の形式は何ですか？',
      faq3A: 'A. MP4形式（フルHD画質）で、ダウンロードリンクをメールまたはLINEでお送りします。',
    },
    en: {
      heroTitle1: 'An Unforgettable GIFT!',
      heroTitle2: 'From Africa',
      heroTitle3: 'HAPPY BIRTHDAY!',
      orderVideo: 'Order Video',
      chooseTeam: 'Choose Your Team',
      viewAllTeams: 'View All Teams',
      benefit1Title: 'ORDER MADE',
      benefit1Text: 'A special\nperformance\njust for you',
      benefit2Title: 'GUARANTEE',
      benefit2Text: '100% money-back\nguarantee\nif not satisfied',
      benefit3Title: 'SDGs',
      benefit3Text: 'Directly\ncontributing to\nlocal employment',
      benefitDesc: 'This service is not just "overseas outsourcing." We collaborate daily with local communities and give back to them realistically.\nBecause there are no middlemen, your "HAPPY BIRTHDAY" directly and surely connects to local employment and their future.',
      howToOrder: 'How to Order',
      step1: 'Select Team\n& Message',
      step2: 'Order Placed\nAfter Payment',
      step3: 'Get Video!',
      useCasesTitle: 'Perfect for these occasions',
      useCases: ['Birthday', 'Couple Anniversary', 'Wedding Anniversary', 'Passing Exam', '60th/Longevity Celebration', 'Farewell/Retirement', 'Corporate Event/Anniversary', 'Anything Else!'],
      partnerTitle: 'Mozambique Inochi wo\nTsunagu Kai',
      partnerDesc: 'We partner with local NGOs in Mozambique and donate a portion of our sales to support local education and job creation.',
      sdgsTitle: 'SDGs Goals We Contribute To',
      sdgs1: 'No Poverty',
      sdgs3: 'Good Health\nand Well-being',
      sdgs8: 'Decent Work and\nEconomic Growth',
      sdgs17: 'Partnerships\nfor the Goals',
      faqTitle: 'FAQ',
      faq1Q: 'Q. What is the delivery time?',
      faq1A: 'A. 3-5 days for the standard plan, and within 24 hours for the rush plan (additional fee).',
      faq2Q: 'Q. Is there a character limit for the message?',
      faq2A: 'A. We recommend keeping the message on the board within 20 characters for visibility.',
      faq3Q: 'Q. What is the video format?',
      faq3A: 'A. MP4 format (Full HD). We will send a download link via email or LINE.',
    }
  }[language];

  return (
    <main className="max-w-4xl mx-auto px-4 text-center">
      {/* ヒーローセクション */}
      <section className="py-12 md:py-20 spring-in">
        <h1 className="pop-heading mb-4 md:mb-6 leading-none md:leading-none flex flex-col gap-1 md:gap-0">
          <span className="text-sm md:text-3xl block text-black">{t.heroTitle1}</span>
          <span className="text-base md:text-4xl">{t.heroTitle2}</span><span className="accent-text !text-2xl md:!text-8xl mt-1 md:mt-0">{t.heroTitle3}</span>
        </h1>
        
        <div className="pop-card mb-6 md:mb-10 overflow-hidden relative group p-0 border-2 md:border-4 border-black">
          <div className="aspect-video w-full">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/DnHhzI_Hq3U?autoplay=1&mute=1&loop=1&playlist=DnHhzI_Hq3U" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="flex justify-center">
          <Link to="/order" className="pop-button !text-sm md:!text-xl px-12 py-4">{t.orderVideo}</Link>
        </div>
      </section>

      {/* チーム紹介（投稿リスト風） */}
      <section className="py-10 md:py-12 bg-white border-2 md:border-4 border-black rounded-2xl md:rounded-3xl p-3 md:p-8 mb-10 md:mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="pop-heading !text-lg md:!text-4xl mb-4 md:mb-8 whitespace-nowrap">{t.chooseTeam}</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6 text-left mb-6 md:mb-8">
          {teams.slice(0, 4).map((team) => (
            <Link key={team.id} to={`/order/${team.id}`} className="border-2 md:border-4 border-black rounded-xl overflow-hidden hover:rotate-1 transition-transform block group cursor-pointer flex flex-col md:flex-row">
              <div className="aspect-square md:aspect-auto md:w-2/5 bg-gray-200 overflow-hidden relative">
                <img src={team.image} alt={language === 'en' ? team.nameEn || team.name : team.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-2 md:p-4 bg-white border-t-2 md:border-t-0 md:border-l-4 border-black flex-grow flex flex-col md:w-3/5">
                <div>
                  <span className={`${team.tagColor} text-white px-1.5 py-0.5 md:px-2 md:py-1 text-[10px] md:text-xs mb-1 md:mb-2 inline-block font-black border border-black md:border-2 shadow-[1px_1px_0_0_#000] md:shadow-[2px_2px_0_0_#000]`}>{language === 'en' ? team.tagEn || team.tag : team.tag}</span>
                </div>
                <h4 className="text-sm md:text-lg font-black uppercase group-hover:text-red-500 transition-colors line-clamp-1">{language === 'en' ? team.nameEn || team.name : team.name}</h4>
                <p className="text-[10px] md:text-xs mt-1 md:mt-2 leading-tight text-gray-700 flex-grow line-clamp-2 md:line-clamp-3">{language === 'en' ? team.descriptionEn || team.description : team.description}</p>
                <div className="mt-2 md:mt-4 flex flex-col md:flex-row md:items-end gap-0 md:gap-2">
                  <span className="text-gray-400 line-through font-bold text-xs md:text-sm">¥{Math.floor(team.basePrice * 1.3).toLocaleString()}</span>
                  <p className="text-sm md:text-lg font-black text-red-500">¥{team.basePrice.toLocaleString()} <span className="text-[10px] md:text-xs text-black">〜</span></p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link to="/order" className="inline-block bg-black text-white font-black py-2 md:py-3 px-6 md:px-8 text-sm md:text-base rounded-full uppercase transition-transform hover:scale-105 active:scale-95 border-2 border-black shadow-[4px_4px_0_0_#ef4444]">
            {t.viewAllTeams}
          </Link>
        </div>
      </section>

      {/* 注文ステップ */}
      <section className="py-10 md:py-12" id="order">
        <h2 className="pop-heading !text-lg md:!text-4xl mb-4 md:mb-8 whitespace-nowrap">{t.howToOrder}</h2>
        <div className="flex flex-row items-center justify-between gap-2 md:gap-4">
          <div className="flex-1 text-center">
            <div className="w-8 h-8 md:w-16 md:h-16 bg-black text-white rounded-full flex items-center justify-center text-base md:text-3xl font-black mx-auto mb-2 md:mb-4">1</div>
            <p className="font-black text-xs md:text-base leading-tight whitespace-pre-line">{t.step1}</p>
          </div>
          <div className="text-base md:text-4xl">➡</div>
          <div className="flex-1 text-center">
            <div className="w-8 h-8 md:w-16 md:h-16 bg-black text-white rounded-full flex items-center justify-center text-base md:text-3xl font-black mx-auto mb-2 md:mb-4">2</div>
            <p className="font-black text-xs md:text-base leading-tight whitespace-pre-line">{t.step2}</p>
          </div>
          <div className="text-base md:text-4xl">➡</div>
          <div className="flex-1 text-center">
            <div className="w-8 h-8 md:w-16 md:h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-base md:text-3xl font-black mx-auto mb-2 md:mb-4">3</div>
            <p className="font-black italic uppercase text-xs md:text-base leading-tight">{t.step3}</p>
          </div>
        </div>
      </section>

      {/* ベネフィットセクション */}
      <section className="py-10 md:py-12">
        <div className="grid grid-cols-3 gap-2 md:gap-6 mb-8">
          <div className="pop-card p-2 md:p-6 text-left">
            <div className="text-2xl md:text-4xl mb-1 md:mb-4">✨</div>
            <h3 className="text-xs md:text-xl font-black mb-1 md:mb-2 uppercase italic">Quick Order</h3>
            <p className="text-[10px] md:text-base leading-relaxed font-bold whitespace-pre-line">最短1分で動画を{'\n'}注文</p>
          </div>
          <div className="pop-card p-2 md:p-6 text-left">
            <div className="text-2xl md:text-4xl mb-1 md:mb-4">💰</div>
            <h3 className="text-xs md:text-xl font-black mb-1 md:mb-2 uppercase italic">{t.benefit2Title}</h3>
            <p className="text-[10px] md:text-base leading-relaxed font-bold whitespace-pre-line">{t.benefit2Text}</p>
          </div>
          <div className="pop-card p-2 md:p-6 text-left">
            <div className="text-2xl md:text-4xl mb-1 md:mb-4">🌍</div>
            <h3 className="text-xs md:text-xl font-black mb-1 md:mb-2 uppercase italic">{t.benefit3Title}</h3>
            <p className="text-[10px] md:text-base leading-relaxed font-bold whitespace-pre-line">{t.benefit3Text}</p>
          </div>
        </div>
        <div className="text-left px-2 md:px-8">
          <p className="text-xs md:text-lg font-bold leading-relaxed whitespace-pre-line">
            {t.benefitDesc}
          </p>
        </div>
      </section>

      {/* こんなシーンで使われています */}
      <section className="py-10 md:py-12">
        <h2 className="pop-heading !text-lg md:!text-4xl mb-4 md:mb-8 whitespace-nowrap">{t.useCasesTitle}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {t.useCases.map((scene, index) => (
            <div key={index} className="bg-white border-2 md:border-4 border-black rounded-xl p-3 md:p-4 shadow-[4px_4px_0_0_#000] flex items-center justify-center text-center hover:-translate-y-1 transition-transform">
              <span className="font-black text-[10px] md:text-sm">{scene}</span>
            </div>
          ))}
        </div>
      </section>

      {/* パートナー団体 */}
      <section className="py-10 md:py-12">
        <div className="bg-white border-2 md:border-4 border-black rounded-2xl md:rounded-3xl p-3 md:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-yellow-400 border-b-2 md:border-b-4 border-l-2 md:border-l-4 border-black px-2 py-1 md:px-6 md:py-2 font-black italic text-[8px] md:text-base">
            OFFICIAL PARTNER
          </div>
          <h2 className="pop-heading !text-sm md:!text-4xl mb-3 md:mb-6 mt-5 md:mt-4 leading-tight whitespace-pre-line">{t.partnerTitle}</h2>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            <div className="w-1/2 md:w-1/3">
              <div className="aspect-square bg-gray-200 rounded-xl border-2 md:border-4 border-black overflow-hidden">
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80" alt="モザンビークの支援活動" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-xs md:text-lg font-bold mb-2 md:mb-4 leading-relaxed">
                {t.partnerDesc}
              </p>
              <Link to="/partner" className="inline-block bg-black text-white font-black py-2 px-6 md:py-3 md:px-8 text-xs md:text-base rounded-full uppercase transition-transform hover:scale-105 active:scale-95 border-2 border-black shadow-[2px_2px_0_0_#ef4444] md:shadow-[4px_4px_0_0_#ef4444]">
                {language === 'en' ? 'Learn More' : '詳しく'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* エシカル宣言 */}
      <section className="py-10 md:py-16 bg-black text-white rounded-xl my-10 md:my-12 p-3 md:p-8">
        <h2 className="text-lg md:text-3xl font-black mb-3 md:mb-6 italic uppercase">Beyond a Surprise</h2>
        <p className="text-[10px] md:text-lg leading-relaxed text-center mb-4 md:mb-8 max-w-2xl mx-auto">
          {language === 'en' ? (
            <>
              We respect performers as equal business partners, not just objects of amusement.<br className="hidden md:block"/>
              Much of the revenue goes to local job creation and livelihood improvement.<br className="hidden md:block"/>
              Your smiles will be the power to support Africa's future.
            </>
          ) : (
            <>
              私たちは、パフォーマーを「お笑いの対象」ではなく、<br className="hidden md:block"/>
              対等なビジネスパートナーとして尊重しています。<br className="hidden md:block"/>
              収益の多くは現地の雇用創出と生活改善に充てられ、<br className="hidden md:block"/>
              あなたの笑顔がアフリカの未来を支える力になります。
            </>
          )}
        </p>
        
        <div className="bg-white text-black rounded-xl p-2 md:p-6 border-2 md:border-4 border-black shadow-[2px_2px_0_0_#ef4444] md:shadow-[8px_8px_0_0_#ef4444]">
          <h3 className="font-black text-xs md:text-xl mb-2 md:mb-4 text-center">{t.sdgsTitle}</h3>
          <div className="grid grid-cols-4 gap-1 md:gap-4">
            <div className="flex flex-col items-center text-center">
              <div className="w-5 h-5 md:w-16 md:h-16 bg-red-600 text-white font-black flex items-center justify-center text-[10px] md:text-2xl rounded md:rounded-lg mb-1 md:mb-2">1</div>
              <p className="font-bold text-[6px] md:text-sm leading-tight whitespace-pre-line">{t.sdgs1}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-5 h-5 md:w-16 md:h-16 bg-yellow-500 text-white font-black flex items-center justify-center text-[10px] md:text-2xl rounded md:rounded-lg mb-1 md:mb-2">3</div>
              <p className="font-bold text-[6px] md:text-sm leading-tight whitespace-pre-line">{t.sdgs3}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-5 h-5 md:w-16 md:h-16 bg-red-800 text-white font-black flex items-center justify-center text-[10px] md:text-2xl rounded md:rounded-lg mb-1 md:mb-2">8</div>
              <p className="font-bold text-[6px] md:text-sm leading-tight whitespace-pre-line">{t.sdgs8}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-5 h-5 md:w-16 md:h-16 bg-blue-900 text-white font-black flex items-center justify-center text-[10px] md:text-2xl rounded md:rounded-lg mb-1 md:mb-2">17</div>
              <p className="font-bold text-[6px] md:text-sm leading-tight whitespace-pre-line">{t.sdgs17}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-12 text-left">
        <h2 className="pop-heading !text-lg md:!text-4xl mb-4 md:mb-8 text-center underline decoration-red-500 decoration-4 md:decoration-8">{t.faqTitle}</h2>
        <div className="space-y-2 md:space-y-4">
          <details className="pop-card p-2 md:p-6 group">
            <summary className="list-none font-black text-[10px] md:text-xl cursor-pointer flex justify-between items-center">
              {language === 'en' ? 'Q. What is the delivery time?' : 'Q. 納期はどのくらいですか？'}
              <span className="transition-transform group-open:rotate-180 shrink-0 ml-1 md:ml-2">▼</span>
            </summary>
            <p className="mt-1 md:mt-4 pt-1 md:pt-4 border-t border-black text-gray-700 font-bold leading-relaxed text-[8px] md:text-base">
              {language === 'en' ? 'A. Usually delivered within 2-4 days. It may vary depending on local weather and communication conditions, so we recommend ordering with time to spare.' : 'A. 通常、ご注文から2〜4日程度で納品いたします。現地の天候や通信状況によって前後する場合がございますので、余裕を持ったご注文をおすすめいたします。'}
            </p>
          </details>
          <details className="pop-card p-2 md:p-6 group">
            <summary className="list-none font-black text-[10px] md:text-xl cursor-pointer flex justify-between items-center">
              {language === 'en' ? 'Q. Can you say any message?' : 'Q. どんなメッセージでも言ってもらえますか？'}
              <span className="transition-transform group-open:rotate-180 shrink-0 ml-1 md:ml-2">▼</span>
            </summary>
            <p className="mt-1 md:mt-4 pt-1 md:pt-4 border-t border-black text-gray-700 font-bold leading-relaxed text-[8px] md:text-base">
              {language === 'en' ? 'A. Basically yes, as long as it is positive, such as congratulations or gratitude. However, we strictly refuse content that violates public order and morals, discriminatory expressions, political/religious claims, or content that harms the dignity of performers. If deemed inappropriate, the order will be canceled.' : 'A. お祝いや感謝のメッセージなど、ポジティブな内容であれば基本的に可能です。ただし、公序良俗に反する内容、差別的な表現、政治的・宗教的な主張、パフォーマーの尊厳を傷つける内容は一切お断りしております。不適切と判断した場合はキャンセルとさせていただきます。'}
            </p>
          </details>
          <details className="pop-card p-2 md:p-6 group">
            <summary className="list-none font-black text-[10px] md:text-xl cursor-pointer flex justify-between items-center">
              {language === 'en' ? 'Q. How do I specify the music?' : 'Q. 音楽の指定はどのようにすればいいですか？'}
              <span className="transition-transform group-open:rotate-180 shrink-0 ml-1 md:ml-2">▼</span>
            </summary>
            <p className="mt-1 md:mt-4 pt-1 md:pt-4 border-t border-black text-gray-700 font-bold leading-relaxed text-[8px] md:text-base">
              {language === 'en' ? 'A. Please select the "Music Specification" option and enter a URL such as YouTube in the order form. If not specified, we will use upbeat music chosen by the local dancers.' : 'A. 「音楽指定」オプションをお選びいただき、注文フォームにYouTubeなどのURLをご入力ください。指定がない場合は、現地のダンサーが選んだノリの良い音楽を使用します。'}
            </p>
          </details>
          <details className="pop-card p-2 md:p-6 group">
            <summary className="list-none font-black text-[10px] md:text-xl cursor-pointer flex justify-between items-center">
              {language === 'en' ? 'Q. How will I receive the finished video?' : 'Q. 完成した動画はどのように受け取りますか？'}
              <span className="transition-transform group-open:rotate-180 shrink-0 ml-1 md:ml-2">▼</span>
            </summary>
            <p className="mt-1 md:mt-4 pt-1 md:pt-4 border-t border-black text-gray-700 font-bold leading-relaxed text-[8px] md:text-base">
              {language === 'en' ? 'A. We will send a URL (such as a Google Drive link) to download the video to the email address you entered when ordering. Please save it to your smartphone or computer.' : 'A. ご注文時にご入力いただいたメールアドレス宛に、動画をダウンロードできるURL（Googleドライブ等のリンク）をお送りいたします。スマートフォンやパソコンに保存してご利用ください。'}
            </p>
          </details>
          <details className="pop-card p-2 md:p-6 group">
            <summary className="list-none font-black text-[10px] md:text-xl cursor-pointer flex justify-between items-center">
              {language === 'en' ? 'Q. What payment methods are available?' : 'Q. 支払い方法は何がありますか？'}
              <span className="transition-transform group-open:rotate-180 shrink-0 ml-1 md:ml-2">▼</span>
            </summary>
            <p className="mt-1 md:mt-4 pt-1 md:pt-4 border-t border-black text-gray-700 font-bold leading-relaxed text-[8px] md:text-base">
              {language === 'en' ? 'A. You can use credit card payments (Visa, Mastercard, American Express, JCB, etc.). Payments are processed securely through the Stripe system.' : 'A. クレジットカード決済（Visa, Mastercard, American Express, JCB等）をご利用いただけます。決済は安全なStripeのシステムを通じて行われます。'}
            </p>
          </details>
          <details className="pop-card p-2 md:p-6 group">
            <summary className="list-none font-black text-[10px] md:text-xl cursor-pointer flex justify-between items-center">
              {language === 'en' ? 'Q. What is the cake donation option?' : 'Q. ケーキの寄付オプションとは何ですか？'}
              <span className="transition-transform group-open:rotate-180 shrink-0 ml-1 md:ml-2">▼</span>
            </summary>
            <p className="mt-1 md:mt-4 pt-1 md:pt-4 border-t border-black text-gray-700 font-bold leading-relaxed text-[8px] md:text-base">
              {language === 'en' ? 'A. This is an option to present a real cake to the local performers. In the latter half of the video, you will see them happily eating the cake together. It also serves as a direct gift to our local friends.' : 'A. 現地のパフォーマーたちに本物のケーキをプレゼントするオプションです。動画の後半で、彼らがケーキを囲んで嬉しそうに食べる様子が収録されます。現地の仲間たちへの直接的なギフトにもなります。'}
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
