import { useLanguage } from '../context/LanguageContext';

export default function Tokushoho() {
  const { language } = useLanguage();

  const t = {
    ja: {
      title: 'LEGAL',
      subtitle: '特定商取引法に基づく表記',
      seller: '販売事業者',
      sellerName: 'AFRICA GIFT 運営事務局',
      manager: '運営責任者',
      managerName: '最勝寺 哲平',
      partner: '事業パートナー代表',
      partnerName: '榎本 恵',
      address: '所在地',
      addressText: '神奈川県横浜市青葉区大場町930－61',
      contact: '連絡先',
      contactText: 't.saisho0802@gmail.com\n※お電話でのサポートは現在受け付けておりません。公式LINEもしくは「お問い合わせフォーム」よりご連絡ください。',
      price: '販売価格',
      priceText: '各商品ページに記載された価格（税込）に基づきます。',
      otherFees: '商品代金以外の必要料金',
      otherFeesText: 'インターネット接続料金その他の電気通信回線の通信に関する費用はお客様にてご負担ください。',
      paymentMethod: '支払方法',
      paymentMethodText: 'クレジットカード決済（Visa, MasterCard, JCB, American Express）',
      paymentTiming: '支払時期',
      paymentTimingText: 'ご注文確定時に決済が行われます。',
      delivery: '商品の引渡時期',
      deliveryText: '通常プラン：ご注文完了後、3日前後でデータ（動画URL）を納品いたします。',
      cancel: '返品・キャンセルについて',
      cancelText: '商品の性質上（オーダーメイドのデジタルコンテンツ）、制作開始後のキャンセルはお受けできません。ただし、当方の不備による重大な欠陥があった場合は、全額返金または再制作にて対応いたします。',
    },
    en: {
      title: '',
      subtitle: 'Legal Information',
      seller: 'Seller',
      sellerName: 'AFRICA GIFT Management Office',
      manager: 'Operations Manager',
      managerName: 'Teppei Saishoji',
      partner: 'Business Partner Representative',
      partnerName: 'Megumi Enomoto',
      address: 'Address',
      addressText: '930-61 Oba-cho, Aoba-ku, Yokohama-shi, Kanagawa',
      contact: 'Contact',
      contactText: 't.saisho0802@gmail.com\n* We currently do not accept phone support. Please contact us via official LINE or the "Contact Form".',
      price: 'Selling Price',
      priceText: 'Based on the price (tax included) listed on each product page.',
      otherFees: 'Necessary Fees Other Than Product Price',
      otherFeesText: 'Customers are responsible for internet connection fees and other telecommunication line communication costs.',
      paymentMethod: 'Payment Method',
      paymentMethodText: 'Credit Card Payment (Visa, MasterCard, JCB, American Express)',
      paymentTiming: 'Payment Timing',
      paymentTimingText: 'Payment is made when the order is confirmed.',
      delivery: 'Delivery Time',
      deliveryText: 'Standard Plan: We will deliver the data (video URL) around 3 days after the order is completed.',
      cancel: 'Returns and Cancellations',
      cancelText: 'Due to the nature of the product (custom-made digital content), we cannot accept cancellations after production has started. However, if there is a major defect due to our fault, we will respond with a full refund or reproduction.',
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
        <div className="space-y-4 md:space-y-6">
          <div className="border-b-2 border-gray-200 pb-4">
            <h3 className="font-black text-base md:text-xl mb-1 md:mb-2">{t.seller}</h3>
            <p className="text-sm md:text-base text-gray-700 font-bold">{t.sellerName}</p>
          </div>
          <div className="border-b-2 border-gray-200 pb-4">
            <h3 className="font-black text-base md:text-xl mb-1 md:mb-2">{t.manager}</h3>
            <p className="text-sm md:text-base text-gray-700 font-bold">{t.managerName}</p>
          </div>
          <div className="border-b-2 border-gray-200 pb-4">
            <h3 className="font-black text-base md:text-xl mb-1 md:mb-2">{t.partner}</h3>
            <p className="text-sm md:text-base text-gray-700 font-bold">{t.partnerName}</p>
          </div>
          <div className="border-b-2 border-gray-200 pb-4">
            <h3 className="font-black text-base md:text-xl mb-1 md:mb-2">{t.address}</h3>
            <p className="text-sm md:text-base text-gray-700 font-bold">{t.addressText}</p>
          </div>
          <div className="border-b-2 border-gray-200 pb-4">
            <h3 className="font-black text-base md:text-xl mb-1 md:mb-2">{t.contact}</h3>
            <p className="text-sm md:text-base text-gray-700 font-bold whitespace-pre-line">{t.contactText}</p>
          </div>
          <div className="border-b-2 border-gray-200 pb-4">
            <h3 className="font-black text-base md:text-xl mb-1 md:mb-2">{t.price}</h3>
            <p className="text-sm md:text-base text-gray-700 font-bold">{t.priceText}</p>
          </div>
          <div className="border-b-2 border-gray-200 pb-4">
            <h3 className="font-black text-base md:text-xl mb-1 md:mb-2">{t.otherFees}</h3>
            <p className="text-sm md:text-base text-gray-700 font-bold">{t.otherFeesText}</p>
          </div>
          <div className="border-b-2 border-gray-200 pb-4">
            <h3 className="font-black text-base md:text-xl mb-1 md:mb-2">{t.paymentMethod}</h3>
            <p className="text-sm md:text-base text-gray-700 font-bold">{t.paymentMethodText}</p>
          </div>
          <div className="border-b-2 border-gray-200 pb-4">
            <h3 className="font-black text-base md:text-xl mb-1 md:mb-2">{t.paymentTiming}</h3>
            <p className="text-sm md:text-base text-gray-700 font-bold">{t.paymentTimingText}</p>
          </div>
          <div className="border-b-2 border-gray-200 pb-4">
            <h3 className="font-black text-base md:text-xl mb-1 md:mb-2">{t.delivery}</h3>
            <p className="text-sm md:text-base text-gray-700 font-bold">{t.deliveryText}</p>
          </div>
          <div>
            <h3 className="font-black text-base md:text-xl mb-1 md:mb-2">{t.cancel}</h3>
            <p className="text-sm md:text-base text-gray-700 font-bold">{t.cancelText}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
