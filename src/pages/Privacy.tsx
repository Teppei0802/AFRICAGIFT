import { useLanguage } from '../context/LanguageContext';

export default function Privacy() {
  const { language } = useLanguage();

  const t = {
    ja: {
      title: 'PRIVACY POLICY',
      subtitle: 'プライバシーポリシー',
      sec1Title: '1. 個人情報の収集について',
      sec1Text: '当サービスでは、お客様がサービスをご利用いただく際に、お名前、メールアドレス、電話番号、決済情報、および動画制作に必要な情報（メッセージ内容や写真など）を収集いたします。',
      sec2Title: '2. 個人情報の利用目的',
      sec2Text: '収集した個人情報は、以下の目的で利用いたします。\n・動画の制作および納品のため\n・お客様からのお問い合わせへの対応のため\n・サービスの改善および新サービスのお知らせのため\n・決済処理および不正利用防止のため',
      sec3Title: '3. 個人情報の第三者への提供',
      sec3Text: '当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。ただし、動画制作に必要な範囲内で、現地のパフォーマーや制作スタッフに対して必要最小限の情報（メッセージ内容や写真）を共有いたします。',
      sec4Title: '4. 個人情報の管理',
      sec4Text: 'お客様の個人情報は、不正アクセス、紛失、破壊、改ざん、および漏洩を防止するための適切なセキュリティ対策を講じて管理いたします。',
      sec5Title: '5. プライバシーポリシーの変更',
      sec5Text: '当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、本ウェブサイトに掲載した時点から効力を生じるものとします。',
    },
    en: {
      title: 'PRIVACY POLICY',
      subtitle: 'Privacy Policy',
      sec1Title: '1. Collection of Personal Information',
      sec1Text: 'When you use our service, we collect your name, email address, phone number, payment information, and information necessary for video production (such as message content and photos).',
      sec2Title: '2. Purpose of Use of Personal Information',
      sec2Text: 'The collected personal information will be used for the following purposes:\n- For video production and delivery\n- To respond to customer inquiries\n- For service improvement and notification of new services\n- For payment processing and prevention of fraudulent use',
      sec3Title: '3. Provision of Personal Information to Third Parties',
      sec3Text: 'We will not provide personal information to third parties without your consent, except as required by law. However, we will share the minimum necessary information (message content and photos) with local performers and production staff within the scope necessary for video production.',
      sec4Title: '4. Management of Personal Information',
      sec4Text: 'Your personal information will be managed with appropriate security measures to prevent unauthorized access, loss, destruction, falsification, and leakage.',
      sec5Title: '5. Changes to the Privacy Policy',
      sec5Text: 'We may change this Privacy Policy as necessary. The revised Privacy Policy will take effect from the time it is posted on this website.',
    },
    zh: {
      title: '隐私政策',
      subtitle: '隐私政策',
      sec1Title: '1. 个人信息的收集',
      sec1Text: '当您使用我们的服务时，我们会收集您的姓名、电子邮件地址、电话号码、支付信息以及视频制作所需的信息（如留言内容和照片）。',
      sec2Title: '2. 个人信息的使用目的',
      sec2Text: '收集的个人信息将用于以下目的：\n・用于视频制作和交付\n・回复客户咨询\n・用于服务改进和新服务通知\n・用于支付处理和防止欺诈使用',
      sec3Title: '3. 向第三方提供个人信息',
      sec3Text: '除法律要求外，未经您的同意，我们不会向第三方提供个人信息。但是，我们将在视频制作所需的范围内，与当地表演者和制作人员共享最低限度的必要信息（留言内容和照片）。',
      sec4Title: '4. 个人信息的管理',
      sec4Text: '您的个人信息将采取适当的安全措施进行管理，以防止未经授权的访问、丢失、破坏、篡改和泄露。',
      sec5Title: '5. 隐私政策的变更',
      sec5Text: '我们可能会根据需要更改本隐私政策。修订后的隐私政策将从在本网站上发布之日起生效。',
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
