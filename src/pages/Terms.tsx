import { useLanguage } from '../context/LanguageContext';

export default function Terms() {
  const { language } = useLanguage();

  const t = {
    ja: {
      title: 'TERMS OF SERVICE',
      subtitle: '利用規約',
      sec1Title: '第1条 適用範囲',
      sec1Text: '本利用規約は、AFRICA GIFT（以下「当サービス」）が提供するすべてのサービスに適用されます。ユーザーは、本規約に同意した上で当サービスを利用するものとします。',
      sec2Title: '第2条 サービスの利用',
      sec2Text: '当サービスは、ユーザーからの依頼に基づき、アフリカのパフォーマーによるオーダーメイドの動画メッセージを制作・提供するサービスです。ユーザーは、注文時に正確な情報を提供し、指定された料金を支払うものとします。',
      sec3Title: '第3条 禁止事項',
      sec3Text: 'ユーザーは、以下の行為を行ってはならないものとします。\n・公序良俗に反する内容、差別的な表現、パフォーマーの尊厳を傷つける内容の依頼\n・法令に違反する行為、またはその恐れのある行為\n・当サービス、他のユーザー、または第三者の権利を侵害する行為\n・虚偽の情報を提供する行為\n・その他、当社が不適切と判断する行為',
      sec4Title: '第4条 免責事項',
      sec4Text: '当社は、当サービスの利用によりユーザーに生じた損害について、当社の故意または重大な過失による場合を除き、一切の責任を負いません。また、パフォーマーの都合や現地の通信状況等により、納品が遅延する場合があることをユーザーはあらかじめ了承するものとします。',
      sec5Title: '第5条 規約の変更',
      sec5Text: '当社は、必要に応じて本規約を変更することができます。変更後の規約は、本ウェブサイトに掲載した時点から効力を生じるものとします。',
    },
    en: {
      title: 'TERMS OF SERVICE',
      subtitle: 'Terms of Service',
      sec1Title: 'Article 1 Scope of Application',
      sec1Text: 'These Terms of Use apply to all services provided by AFRICA GIFT (hereinafter referred to as "this service"). Users shall use this service upon agreeing to these terms.',
      sec2Title: 'Article 2 Use of Service',
      sec2Text: 'This service produces and provides custom-made video messages by African performers based on user requests. Users shall provide accurate information and pay the specified fees when ordering.',
      sec3Title: 'Article 3 Prohibited Acts',
      sec3Text: 'Users shall not engage in the following acts:\n- Requests with content contrary to public order and morals, discriminatory expressions, or content that damages the dignity of performers\n- Acts that violate laws and regulations, or acts that may do so\n- Acts that infringe on the rights of this service, other users, or third parties\n- Acts of providing false information\n- Other acts deemed inappropriate by our company',
      sec4Title: 'Article 4 Disclaimer',
      sec4Text: 'Our company shall not be liable for any damages caused to users by the use of this service, except in cases of intentional or gross negligence by our company. In addition, users shall acknowledge in advance that delivery may be delayed due to the circumstances of performers or local communication conditions.',
      sec5Title: 'Article 5 Changes to Terms',
      sec5Text: 'Our company may change these terms as necessary. The revised terms shall take effect from the time they are posted on this website.',
    },
    zh: {
      title: '服务条款',
      subtitle: '服务条款',
      sec1Title: '第1条 适用范围',
      sec1Text: '本使用条款适用于 AFRICA GIFT（以下简称“本服务”）提供的所有服务。用户在同意本条款后方可使用本服务。',
      sec2Title: '第2条 服务的使用',
      sec2Text: '本服务根据用户的要求，制作并提供由非洲表演者定制的视频信息。用户在订购时应提供准确的信息并支付指定的费用。',
      sec3Title: '第3条 禁止行为',
      sec3Text: '用户不得从事以下行为：\n・提出违反公序良俗、包含歧视性表达或损害表演者尊严内容的请求\n・违反法律法规的行为，或可能违反法律法规的行为\n・侵犯本服务、其他用户或第三方权利的行为\n・提供虚假信息的行为\n・本公司认为不适当的其他行为',
      sec4Title: '第4条 免责声明',
      sec4Text: '除本公司故意或重大过失外，本公司对用户因使用本服务而造成的任何损害不承担责任。此外，用户应事先了解，由于表演者的情况或当地的通信条件，交付可能会延迟。',
      sec5Title: '第5条 条款的变更',
      sec5Text: '本公司可根据需要更改本条款。修订后的条款将从在本网站上发布之日起生效。',
    }
  }[language];

  return (
    <main className="max-w-4xl mx-auto px-4 text-center pb-24">
      <section className="py-12 md:py-16 spring-in">
        <h1 className="pop-heading mb-4 leading-none">
          <span className="text-3xl block text-black">{t.title}</span>
          {t.subtitle}
        </h1>
      </section>

      <section className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-left">
        <div className="space-y-8">
          <div>
            <h3 className="font-black text-2xl mb-4 border-b-4 border-black inline-block pb-2">{t.sec1Title}</h3>
            <p className="text-gray-700 font-bold leading-relaxed whitespace-pre-line">
              {t.sec1Text}
            </p>
          </div>
          
          <div>
            <h3 className="font-black text-2xl mb-4 border-b-4 border-black inline-block pb-2">{t.sec2Title}</h3>
            <p className="text-gray-700 font-bold leading-relaxed whitespace-pre-line">
              {t.sec2Text}
            </p>
          </div>

          <div>
            <h3 className="font-black text-2xl mb-4 border-b-4 border-black inline-block pb-2">{t.sec3Title}</h3>
            <p className="text-gray-700 font-bold leading-relaxed whitespace-pre-line">
              {t.sec3Text}
            </p>
          </div>

          <div>
            <h3 className="font-black text-2xl mb-4 border-b-4 border-black inline-block pb-2">{t.sec4Title}</h3>
            <p className="text-gray-700 font-bold leading-relaxed whitespace-pre-line">
              {t.sec4Text}
            </p>
          </div>

          <div>
            <h3 className="font-black text-2xl mb-4 border-b-4 border-black inline-block pb-2">{t.sec5Title}</h3>
            <p className="text-gray-700 font-bold leading-relaxed whitespace-pre-line">
              {t.sec5Text}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
