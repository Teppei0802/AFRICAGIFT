import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function Success() {
  const { clearCart } = useCart();

  useEffect(() => {
    // 決済完了ページに到達したらカートを空にする
    clearCart();
  }, [clearCart]);

  return (
    <main className="max-w-3xl mx-auto px-4 py-20 text-center">
      <div className="bg-white border-4 border-black rounded-3xl p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] spring-in">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="pop-heading text-4xl mb-6 text-red-500">
          お支払いが完了しました！
        </h1>
        <p className="text-xl font-bold mb-8 leading-relaxed text-gray-800">
          ご注文ありがとうございます。<br />
          アフリカの仲間たちが、あなたの大切な人へ<br className="hidden md:block" />
          最高のサプライズをお届けする準備を始めます！
        </p>
        <div className="bg-yellow-100 border-2 border-black rounded-xl p-6 mb-8 text-left">
          <h2 className="font-black text-lg mb-2">今後の流れ</h2>
          <ul className="list-disc list-inside space-y-2 font-bold text-gray-700">
            <li>ご登録いただいたメールアドレス宛に、注文内容の確認メールが送信されます。（※システムの都合上、メールが届かない場合はお問い合わせください）</li>
            <li>通常2〜4日程度で、完成した動画のダウンロードリンクをメールでお送りいたします。</li>
            <li>動画が完成するまで、楽しみにお待ちください！</li>
          </ul>
        </div>
        <Link 
          to="/" 
          className="inline-block bg-black text-white font-black py-4 px-12 rounded-full uppercase text-xl transition-transform hover:scale-105 active:scale-95 border-2 border-black shadow-[4px_4px_0_0_#ef4444]"
        >
          トップページへ戻る
        </Link>
      </div>
    </main>
  );
}
