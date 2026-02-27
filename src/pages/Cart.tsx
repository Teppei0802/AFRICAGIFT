import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const STRIPE_PRICE_MAP: Record<string, string> = {
  'muscle-brothers': 'price_1T4l6DFwh77nhVIteTXocjiE',
  'african-ladies': 'price_1T57g7Fwh77nhVItLSTYrI19',
  'traditional-dancers': 'price_1T57gyFwh77nhVItYzHPNWaY',
  'street-style-boys': 'price_1T57jHFwh77nhVItjsyTIXUN',
  'love-style-boys': 'price_1T57k4Fwh77nhVItW4QMa3Rn',
  'wild-muscle-brothers': 'price_1T57kjFwh77nhVItwCRreUTk',
  'sports-boys': 'price_1T57lPFwh77nhVItx6PVwfo0',
  'colorful-ladies': 'price_1T57mEFwh77nhVItqhW0GU4w',
  'youtube': 'price_1T57nzFwh77nhVItNR1sQtJO',
  'birthday': 'price_1T57odFwh77nhVIt4u16F50h',
  'photoPrint': 'price_1T57pZFwh77nhVIt6JGO8pcj',
  'photoKiss': 'price_1T57qwFwh77nhVItGYgUgo2b',
  'cake1500': 'price_1T57sEFwh77nhVIt4EWuV9jc',
  'cake2000': 'price_1T57tIFwh77nhVIty24zgFd0',
};

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const grandTotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;
    
    setIsCheckingOut(true);
    
    // Stripe Checkoutはiframe内で表示できないため、別タブで開く準備をする
    // ポップアップブロックを防ぐため、fetchの前にwindow.openを実行
    const checkoutWindow = window.open('', '_blank');
    if (checkoutWindow) {
      checkoutWindow.document.write('決済画面を準備中です。少々お待ちください...');
    } else {
      alert('ポップアップがブロックされました。ブラウザのポップアップブロック設定を解除してから再度お試しください。');
      setIsCheckingOut(false);
      return;
    }
    
    // カートの履歴からStripeに送るitemsを構築
    let stripeItems: { price: string; quantity: number }[] = [];
    let orderDetails: string[] = [];
    
    cartItems.forEach(item => {
      let itemDetail = `【${item.team.name}】`;
      let options = [];

      // チームの基本料金
      if (STRIPE_PRICE_MAP[item.team.id]) {
        stripeItems.push({ price: STRIPE_PRICE_MAP[item.team.id], quantity: 1 });
      }
      
      // 音楽オプション
      if (item.musicOption === 'youtube' && STRIPE_PRICE_MAP['youtube']) {
        stripeItems.push({ price: STRIPE_PRICE_MAP['youtube'], quantity: 1 });
        options.push('音楽指定(YouTube)');
      } else if (item.musicOption === 'birthday' && STRIPE_PRICE_MAP['birthday']) {
        stripeItems.push({ price: STRIPE_PRICE_MAP['birthday'], quantity: 1 });
        options.push('バースデーソング');
      }
      
      // 写真オプション
      if (item.photoPrint && STRIPE_PRICE_MAP['photoPrint']) {
        stripeItems.push({ price: STRIPE_PRICE_MAP['photoPrint'], quantity: 1 });
        options.push('写真プリント');
      }
      if (item.photoKiss && STRIPE_PRICE_MAP['photoKiss']) {
        stripeItems.push({ price: STRIPE_PRICE_MAP['photoKiss'], quantity: 1 });
        options.push('写真へのキス');
      }

      // ケーキオプション
      if (item.cakeOption === '1500' && STRIPE_PRICE_MAP['cake1500']) {
        stripeItems.push({ price: STRIPE_PRICE_MAP['cake1500'], quantity: 1 });
        options.push('ケーキ寄付(小)');
      } else if (item.cakeOption === '2000' && STRIPE_PRICE_MAP['cake2000']) {
        stripeItems.push({ price: STRIPE_PRICE_MAP['cake2000'], quantity: 1 });
        options.push('ケーキ寄付(大)');
      }

      if (options.length > 0) {
        itemDetail += ` オプション: ${options.join(', ')}`;
      }
      orderDetails.push(itemDetail);
    });

    if (stripeItems.length === 0) {
      checkoutWindow.close();
      alert('決済可能な商品がカートにありません。');
      setIsCheckingOut(false);
      return;
    }

    try {
      const response = await fetch('https://nextjs-boilerplate-alpha-gray-43.vercel.app/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: stripeItems,
          success_url: `${window.location.origin}/success`,
          cancel_url: `${window.location.origin}/cart`,
          metadata: {
            orderDetails: orderDetails.join(' | '),
            grandTotal: grandTotal
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Checkout failed');
      }

      const data = await response.json();
      if (data.url) {
        checkoutWindow.location.href = data.url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      checkoutWindow.close();
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        alert('決済サーバーとの通信に失敗しました。\n\n【原因の可能性】\nStripeで作成した価格（Price ID）が「継続課金（サブスクリプション）」に設定されている可能性があります。この決済システムは「1回限りの支払い」のみに対応しているため、Stripeダッシュボードで価格を「1回限り」として再作成し、IDを更新してください。');
      } else {
        alert('決済の準備中にエラーが発生しました。もう一度お試しください。');
      }
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 text-center pb-24">
      <section className="py-12 md:py-16 spring-in">
        <h1 className="pop-heading mb-4 leading-none">
          <span className="text-3xl block text-black">SHOPPING CART</span>
          カート
        </h1>
      </section>

      {cartItems.length > 0 ? (
        <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-left">
          <h2 className="text-2xl font-black mb-6 border-b-4 border-black pb-2">ご注文内容の確認</h2>
          
          <div className="space-y-8 mb-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row gap-6 pb-8 border-b-2 border-gray-200 last:border-0 last:pb-0 relative">
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-0 right-0 text-gray-400 hover:text-red-500 font-bold text-sm flex items-center gap-1 transition-colors"
                >
                  <span className="text-lg">×</span> 削除
                </button>
                <img src={item.team.image} alt={item.team.name} className="w-32 h-32 object-cover rounded-lg border-4 border-black" />
                <div className="flex-grow pr-12">
                  <h3 className="text-xl font-black uppercase mb-2">{item.team.name}</h3>
                  <p className="text-gray-700 font-bold mb-1">基本料金: ¥{item.team.basePrice.toLocaleString()}</p>
                  
                  <div className="mt-4 space-y-1 text-sm font-bold text-gray-600">
                    {item.musicOption === 'youtube' && <p>+ 音楽指定 (YouTube等): ¥1,200</p>}
                    {item.musicOption === 'birthday' && <p>+ バースデーソング: ¥500</p>}
                    {item.photoPrint && <p>+ 写真プリントアウト: ¥1,000</p>}
                    {item.photoKiss && <p>+ 写真へのキス: ¥200</p>}
                    {item.cakeOption === '1500' && <p>+ ケーキ寄付（小）: ¥1,500</p>}
                    {item.cakeOption === '2000' && <p>+ ケーキ寄付（大）: ¥2,000</p>}
                  </div>
                </div>
                <div className="text-right md:w-48 flex flex-col justify-end">
                  <p className="text-sm font-bold text-gray-500 mb-1">小計</p>
                  <div className="flex items-end justify-end gap-2">
                    <span className="text-gray-400 line-through font-bold text-lg">¥{Math.floor(item.totalPrice * 1.3).toLocaleString()}</span>
                    <p className="text-2xl font-black text-red-500">¥{item.totalPrice.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t-4 border-black pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link to="/order" className="font-bold underline hover:text-red-500">
              お買い物を続ける
            </Link>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-sm font-bold text-gray-500 mb-1">合計金額</p>
                <div className="flex items-end justify-end gap-3">
                  <span className="text-gray-400 line-through font-bold text-xl">¥{Math.floor(grandTotal * 1.3).toLocaleString()}</span>
                  <p className="text-3xl font-black text-red-500">¥{grandTotal.toLocaleString()}</p>
                </div>
              </div>
              <button 
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="bg-black text-white font-black py-4 px-12 rounded-full uppercase text-xl transition-transform hover:scale-105 active:scale-95 border-2 border-black shadow-[4px_4px_0_0_#ef4444] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {isCheckingOut ? '処理中...' : 'レジへ進む'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white border-4 border-black rounded-3xl p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-xl font-black mb-6">カートに商品がありません。</p>
          <Link to="/order" className="inline-block bg-black text-white font-black py-3 px-8 rounded-full uppercase transition-transform hover:scale-105 active:scale-95 border-2 border-black shadow-[4px_4px_0_0_#ef4444]">
            チームを選ぶ
          </Link>
        </div>
      )}
    </main>
  );
}
