import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export default function Success() {
  const { clearCart } = useCart();
  const { language } = useLanguage();

  useEffect(() => {
    // 決済完了ページに到達したらカートを空にする
    clearCart();
  }, [clearCart]);

  const t = {
    ja: {
      successTitle: 'お支払いが完了しました！',
      thankYou: 'ご注文ありがとうございます。',
      message: 'アフリカの仲間たちが、あなたの大切な人へ\n最高のサプライズをお届けする準備を始めます！',
      nextSteps: '今後の流れ',
      step1: 'ご登録いただいたメールアドレス宛に、注文内容の確認メールが送信されます。（※システムの都合上、メールが届かない場合はお問い合わせください）',
      step2: '通常2〜4日程度で、完成した動画のダウンロードリンクをメールでお送りいたします。',
      step3: '動画が完成するまで、楽しみにお待ちください！',
      backToHome: 'トップページへ戻る',
    },
    en: {
      successTitle: 'Payment Completed!',
      thankYou: 'Thank you for your order.',
      message: 'Our friends in Africa will start preparing\nto deliver the best surprise to your loved ones!',
      nextSteps: 'Next Steps',
      step1: 'A confirmation email with your order details will be sent to your registered email address. (*If you do not receive the email due to system reasons, please contact us.)',
      step2: 'We will usually send you a download link for the completed video via email within 2-4 days.',
      step3: 'Please look forward to the completed video!',
      backToHome: 'Back to Home',
    },
    zh: {
      successTitle: '付款已完成！',
      thankYou: '感谢您的订购。',
      message: '我们在非洲的朋友们将开始准备\n为您所爱的人送上最棒的惊喜！',
      nextSteps: '后续步骤',
      step1: '包含您订单详情的确认邮件将发送到您注册的电子邮件地址。（*如果由于系统原因您没有收到邮件，请联系我们。）',
      step2: '我们通常会在2-4天内通过电子邮件向您发送完成视频的下载链接。',
      step3: '请期待完成的视频！',
      backToHome: '返回首页',
    }
  }[language];

  return (
    <main className="max-w-3xl mx-auto px-4 py-20 text-center">
      <div className="bg-white border-4 border-black rounded-3xl p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] spring-in">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="pop-heading text-4xl mb-6 text-red-500">
          {t.successTitle}
        </h1>
        <p className="text-xl font-bold mb-8 leading-relaxed text-gray-800 whitespace-pre-line">
          {t.thankYou}<br />
          {t.message}
        </p>
        <div className="bg-yellow-100 border-2 border-black rounded-xl p-6 mb-8 text-left">
          <h2 className="font-black text-lg mb-2">{t.nextSteps}</h2>
          <ul className="list-disc list-inside space-y-2 font-bold text-gray-700">
            <li>{t.step1}</li>
            <li>{t.step2}</li>
            <li>{t.step3}</li>
          </ul>
        </div>
        <Link 
          to="/" 
          className="inline-block bg-black text-white font-black py-4 px-12 rounded-full uppercase text-xl transition-transform hover:scale-105 active:scale-95 border-2 border-black shadow-[4px_4px_0_0_#ef4444]"
        >
          {t.backToHome}
        </Link>
      </div>
    </main>
  );
}
