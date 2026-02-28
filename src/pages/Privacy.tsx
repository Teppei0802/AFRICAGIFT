import { useLanguage } from '../context/LanguageContext';

export default function Privacy() {
  const { language } = useLanguage();

  const t = {
    ja: {
      title: 'PRIVACY POLICY',
      subtitle: 'プライバシーポリシー',
      section1Title: '1. 個人情報の収集について',
      section1Desc: '当サービスでは、お客様がサービスをご利用いただく際に、お名前、メールアドレス、電話番号、決済情報、および動画制作に必要な情報（メッセージ内容や写真など）を収集いたします。',
      section2Title: '2. 個人情報の利用目的',
      section2Desc: '収集した個人情報は、以下の目的で利用いたします。\n・動画の制作および納品のため\n・お客様からのお問い合わせへの対応のため\n・サービスの改善および新サービスのお知らせのため\n・決済処理および不正利用防止のため',
      section3Title: '3. 個人情報の第三者への提供',
      section3Desc: '当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。ただし、動画制作に必要な範囲内で、現地のパフォーマーや制作スタッフに対して必要最小限の情報（メッセージ内容や写真）を共有いたします。',
      section4Title: '4. 個人情報の管理',
      section4Desc: 'お客様の個人情報は、不正アクセス、紛失、破壊、改ざん、および漏洩を防止するための適切なセキュリティ対策を講じて管理いたします。',
      section5Title: '5. プライバシーポリシーの変更',
      section5Desc: '当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、本ウェブサイトに掲載した時点から効力を生じるものとします。',
    },
    en: {
      title: '',
      subtitle: 'Privacy Policy',
      section1Title: '1. Collection of Personal Information',
      section1Desc: 'When you use our service, we collect your name, email address, phone number, payment information, and information necessary for video production (such as message content and photos).',
      section2Title: '2. Purpose of Use of Personal Information',
      section2Desc: 'The collected personal information will be used for the following purposes:\n- For video production and delivery\n- To respond to customer inquiries\n- To improve services and announce new services\n- For payment processing and prevention of fraudulent use',
      section3Title: '3. Provision of Personal Information to Third Parties',
      section3Desc: 'We will not provide your personal information to third parties without your consent, except as required by law. However, we will share the minimum necessary information (message content and photos) with local performers and production staff within the scope necessary for video production.',
      section4Title: '4. Management of Personal Information',
      section4Desc: 'Your personal information will be managed with appropriate security measures to prevent unauthorized access, loss, destruction, falsification, and leakage.',
      section5Title: '5. Changes to the Privacy Policy',
      section5Desc: 'We may change this Privacy Policy as necessary. The revised Privacy Policy shall become effective from the time it is posted on this website.',
    }
  }[language];

  return (
    <main className="max-w-4xl mx-auto px-4 text-center pb-24">
      <section className="py-12 md:py-16 spring-in">
        <h1 className="pop-heading !text-2xl md:!text-5xl mb-4 leading-none">
          {t.title && <span className="text-lg md:text-3xl block text-black">{t.title}</span>}
          {t.subtitle}
        </h1>
      </section>

      <section className="bg-white border-4 border-black rounded-3xl p-4 md:p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-left">
        <div className="space-y-6 md:space-y-8">
          <div>
            <h3 className="font-black text-base md:text-2xl mb-2 md:mb-4 border-b-2 md:border-b-4 border-black inline-block pb-1 md:pb-2">{t.section1Title}</h3>
            <p className="text-sm md:text-base text-gray-700 font-bold leading-relaxed">
              {t.section1Desc}
            </p>
          </div>
          
          <div>
            <h3 className="font-black text-base md:text-2xl mb-2 md:mb-4 border-b-2 md:border-b-4 border-black inline-block pb-1 md:pb-2">{t.section2Title}</h3>
            <p className="text-sm md:text-base text-gray-700 font-bold leading-relaxed whitespace-pre-line">
              {t.section2Desc}
            </p>
          </div>

          <div>
            <h3 className="font-black text-base md:text-2xl mb-2 md:mb-4 border-b-2 md:border-b-4 border-black inline-block pb-1 md:pb-2">{t.section3Title}</h3>
            <p className="text-sm md:text-base text-gray-700 font-bold leading-relaxed">
              {t.section3Desc}
            </p>
          </div>

          <div>
            <h3 className="font-black text-base md:text-2xl mb-2 md:mb-4 border-b-2 md:border-b-4 border-black inline-block pb-1 md:pb-2">{t.section4Title}</h3>
            <p className="text-sm md:text-base text-gray-700 font-bold leading-relaxed">
              {t.section4Desc}
            </p>
          </div>

          <div>
            <h3 className="font-black text-base md:text-2xl mb-2 md:mb-4 border-b-2 md:border-b-4 border-black inline-block pb-1 md:pb-2">{t.section5Title}</h3>
            <p className="text-sm md:text-base text-gray-700 font-bold leading-relaxed">
              {t.section5Desc}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
