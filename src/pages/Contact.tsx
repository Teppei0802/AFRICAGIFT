import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { language } = useLanguage();

  const t = {
    ja: {
      title: 'CONTACT US',
      subtitle: 'お問い合わせ',
      desc: 'ご不明な点やご要望がございましたら、お気軽にお問い合わせください。\n通常、2営業日以内にご返信いたします。',
      name: 'お名前',
      namePlaceholder: '山田 太郎',
      email: 'メールアドレス',
      emailPlaceholder: 'your@email.com',
      type: 'お問い合わせ種別',
      typeSelect: '選択してください',
      typeOrder: 'ご注文について',
      typeService: 'サービス内容について',
      typeCorporate: '法人向けのご相談',
      typeOther: 'その他',
      content: 'お問い合わせ内容',
      contentPlaceholder: 'お問い合わせ内容をご記入ください',
      submit: '送信する',
    },
    en: {
      title: 'CONTACT US',
      subtitle: 'Contact',
      desc: 'If you have any questions or requests, please feel free to contact us.\nWe usually reply within 2 business days.',
      name: 'Name',
      namePlaceholder: 'John Doe',
      email: 'Email Address',
      emailPlaceholder: 'your@email.com',
      type: 'Inquiry Type',
      typeSelect: 'Please select',
      typeOrder: 'About your order',
      typeService: 'About our service',
      typeCorporate: 'Corporate consultation',
      typeOther: 'Other',
      content: 'Inquiry Content',
      contentPlaceholder: 'Please enter your inquiry content',
      submit: 'Submit',
    }
  }[language];

  return (
    <main className="max-w-4xl mx-auto px-4 text-center pb-24">
      <section className="py-12 md:py-16 spring-in">
        <h1 className="pop-heading mb-4 leading-none">
          <span className="text-3xl block text-black">{t.title}</span>
          {t.subtitle}
        </h1>
        <p className="text-lg font-bold mt-4 mb-8 whitespace-pre-line">
          {t.desc}
        </p>
      </section>

      <section className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-left max-w-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label className="block font-black text-lg mb-2">
              {t.name} <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              className="w-full border-4 border-black rounded-lg p-3 font-bold focus:outline-none focus:border-red-500 transition-colors" 
              placeholder={t.namePlaceholder} 
              required
            />
          </div>

          <div>
            <label className="block font-black text-lg mb-2">
              {t.email} <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              className="w-full border-4 border-black rounded-lg p-3 font-bold focus:outline-none focus:border-red-500 transition-colors" 
              placeholder={t.emailPlaceholder} 
              required
            />
          </div>

          <div>
            <label className="block font-black text-lg mb-2">
              {t.type} <span className="text-red-500">*</span>
            </label>
            <select className="w-full border-4 border-black rounded-lg p-3 font-bold bg-white focus:outline-none focus:border-red-500 cursor-pointer" required>
              <option value="">{t.typeSelect}</option>
              <option value="order">{t.typeOrder}</option>
              <option value="service">{t.typeService}</option>
              <option value="corporate">{t.typeCorporate}</option>
              <option value="other">{t.typeOther}</option>
            </select>
          </div>

          <div>
            <label className="block font-black text-lg mb-2">
              {t.content} <span className="text-red-500">*</span>
            </label>
            <textarea 
              className="w-full border-4 border-black rounded-lg p-3 font-bold focus:outline-none focus:border-red-500 transition-colors" 
              rows={6} 
              placeholder={t.contentPlaceholder}
              required
            ></textarea>
          </div>

          <button type="button" className="w-full bg-black text-white font-black py-4 rounded-full uppercase text-xl transition-transform hover:scale-105 active:scale-95 border-2 border-black shadow-[4px_4px_0_0_#ef4444]">
            {t.submit}
          </button>
        </form>
      </section>
    </main>
  );
}
