import { useLanguage } from '../context/LanguageContext';

export default function Terms() {
  const { language } = useLanguage();

  const t = {
    ja: {
      title: 'TERMS OF SERVICE',
      subtitle: '利用規約',
      section1Title: '第1条 適用範囲',
      section1Desc: '本利用規約は、AFRICA GIFT（以下「当サービス」）が提供するすべてのサービスに適用されます。ユーザーは、本規約に同意した上で当サービスを利用するものとします。',
      section2Title: '第2条 サービスの利用',
      section2Desc: '当サービスは、ユーザーからの依頼に基づき、アフリカのパフォーマーによるオーダーメイドの動画メッセージを制作・提供するサービスです。ユーザーは、注文時に正確な情報を提供し、指定された料金を支払うものとします。',
      section3Title: '第3条 禁止事項',
      section3Desc: 'ユーザーは、以下の行為を行ってはならないものとします。\n・公序良俗に反する内容、差別的な表現、パフォーマーの尊厳を傷つける内容の依頼\n・法令に違反する行為、またはその恐れのある行為\n・当サービス、他のユーザー、または第三者の権利を侵害する行為\n・虚偽の情報を提供する行為\n・その他、当社が不適切と判断する行為',
      section4Title: '第4条 免責事項',
      section4Desc: '当社は、当サービスの利用によりユーザーに生じた損害について、当社の故意または重大な過失による場合を除き、一切の責任を負いません。また、パフォーマーの都合や現地の通信状況等により、納品が遅延する場合があることをユーザーはあらかじめ了承するものとします。',
      section5Title: '第5条 規約の変更',
      section5Desc: '当社は、必要に応じて本規約を変更することができます。変更後の規約は、本ウェブサイトに掲載した時点から効力を生じるものとします。',
    },
    en: {
      title: '',
      subtitle: 'Terms of Service',
      section1Title: 'Article 1 Scope of Application',
      section1Desc: 'These Terms of Service apply to all services provided by AFRICA GIFT (hereinafter referred to as "this service"). Users shall use this service upon agreeing to these terms.',
      section2Title: 'Article 2 Use of Service',
      section2Desc: 'This service produces and provides custom-made video messages by African performers based on requests from users. Users shall provide accurate information at the time of ordering and pay the specified fees.',
      section3Title: 'Article 3 Prohibited Acts',
      section3Desc: 'Users shall not engage in the following acts:\n- Requests for content that is offensive to public order and morals, discriminatory expressions, or content that harms the dignity of performers\n- Acts that violate laws and regulations, or acts that may violate them\n- Acts that infringe on the rights of this service, other users, or third parties\n- Acts of providing false information\n- Other acts that our company deems inappropriate',
      section4Title: 'Article 4 Disclaimers',
      section4Desc: 'Our company shall not be liable for any damages caused to users through the use of this service, except in cases of intentional or gross negligence by our company. In addition, users shall acknowledge in advance that delivery may be delayed due to the circumstances of the performers or local communication conditions.',
      section5Title: 'Article 5 Changes to Terms',
      section5Desc: 'Our company may change these terms as necessary. The revised terms shall become effective from the time they are posted on this website.',
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
            <p className="text-sm md:text-base text-gray-700 font-bold leading-relaxed">
              {t.section2Desc}
            </p>
          </div>

          <div>
            <h3 className="font-black text-base md:text-2xl mb-2 md:mb-4 border-b-2 md:border-b-4 border-black inline-block pb-1 md:pb-2">{t.section3Title}</h3>
            <p className="text-sm md:text-base text-gray-700 font-bold leading-relaxed whitespace-pre-line">
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
