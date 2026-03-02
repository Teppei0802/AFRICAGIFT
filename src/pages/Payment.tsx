import { useState, useMemo } from 'react';
import { teams } from '../data/teams';

const OPTIONS = [
  { id: 'music', name: '音楽指定', price: 1200 },
  { id: 'birthday', name: 'バースデーソング', price: 500 },
  { id: 'photoPrint', name: '写真プリントアウト', price: 1000 },
  { id: 'photoKiss', name: '写真へのキス', price: 200 },
];

const CAKE_OPTIONS = [
  { id: 'none', name: '希望しない', price: 0 },
  { id: 'cake', name: '誕生日ケーキ', price: 2500 },
];

const STRIPE_PRICE_MAP: Record<string, string> = {
  'muscle-brothers': 'price_1T4l6DFwh77nhVIteTXocjiE',
  'african-ladies': 'price_1T57g7Fwh77nhVItLSTYrI19',
  'traditional-dancers': 'price_1T57gyFwh77nhVItYzHPNWaY',
  'street-style-boys': 'price_1T57jHFwh77nhVItjsyTIXUN',
  'love-style-boys': 'price_1T57k4Fwh77nhVItW4QMa3Rn',
  'wild-muscle-brothers': 'price_1T57kjFwh77nhVItwCRreUTk',
  'sports-boys': 'price_1T57lPFwh77nhVItx6PVwfo0',
  'colorful-ladies': 'price_1T57mEFwh77nhVItqhW0GU4w',
  'music': 'price_1T57nzFwh77nhVItNR1sQtJO',
  'birthday': 'price_1T57odFwh77nhVIt4u16F50h',
  'photoPrint': 'price_1T57pZFwh77nhVIt6JGO8pcj',
  'photoKiss': 'price_1T57qwFwh77nhVItGYgUgo2b',
  'cake': 'price_1T57sEFwh77nhVIt4EWuV9jc', // TODO: Update with actual Stripe price ID for 2500 yen cake
};

export default function Payment() {
  const [selectedPlan, setSelectedPlan] = useState<string>(teams[0].id);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, boolean>>({});
  const [cakeOption, setCakeOption] = useState<string>('none');
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleOptionChange = (id: string) => {
    setSelectedOptions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const currentPlan = teams.find(p => p.id === selectedPlan);
  const currentCake = CAKE_OPTIONS.find(c => c.id === cakeOption);
  const activeOptions = OPTIONS.filter(o => selectedOptions[o.id]);

  const totalPrice = (currentPlan?.basePrice || 0) 
    + activeOptions.reduce((sum, o) => sum + o.price, 0)
    + (currentCake?.price || 0);

  const productName = useMemo(() => {
    if (!currentPlan) return '';
    const parts = [currentPlan.name];
    activeOptions.forEach(o => parts.push(o.name));
    if (currentCake && currentCake.id !== 'none') {
      parts.push(currentCake.name);
    }
    return parts.join(' ＋ ');
  }, [currentPlan, activeOptions, currentCake]);

  const handleCheckout = async () => {
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
    
    let stripeItems: { price: string; quantity: number }[] = [];
    
    if (currentPlan && STRIPE_PRICE_MAP[currentPlan.id]) {
      stripeItems.push({ price: STRIPE_PRICE_MAP[currentPlan.id], quantity: 1 });
    }
    
    activeOptions.forEach(opt => {
      if (STRIPE_PRICE_MAP[opt.id]) {
        stripeItems.push({ price: STRIPE_PRICE_MAP[opt.id], quantity: 1 });
      }
    });

    if (cakeOption === 'cake' && STRIPE_PRICE_MAP['cake']) {
      stripeItems.push({ price: STRIPE_PRICE_MAP['cake'], quantity: 1 });
    }

    if (stripeItems.length === 0) {
      checkoutWindow.close();
      alert('決済可能な商品が選択されていません。');
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
          cancel_url: `${window.location.origin}/payment`,
          // バックエンド側で商品名や合計金額を利用できるように送信
          metadata: {
            productName,
            totalPrice
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
    <main className="max-w-3xl mx-auto px-4 py-12 md:py-20 text-left">
      <h1 className="pop-heading text-4xl mb-8 text-center">
        <span className="text-2xl block text-black mb-2">QUICK CHECKOUT</span>
        クイック決済
      </h1>

      <div className="space-y-8">
        {/* 基本プラン */}
        <div className="bg-white border-4 border-black rounded-2xl p-6 md:p-8 shadow-[8px_8px_0_0_#000]">
          <h2 className="text-2xl font-black mb-4 border-b-4 border-black pb-2">1. 基本プランを選択 (必須)</h2>
          <div className="space-y-3">
            {teams.map(plan => (
              <label key={plan.id} className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-black transition-colors has-[:checked]:border-black has-[:checked]:bg-yellow-100">
                <div className="flex items-center gap-3">
                  <input 
                    type="radio" 
                    name="plan" 
                    value={plan.id}
                    checked={selectedPlan === plan.id}
                    onChange={() => setSelectedPlan(plan.id)}
                    className="w-6 h-6 accent-black"
                  />
                  <span className="font-black text-lg">{plan.name}</span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-gray-400 line-through font-bold text-sm">¥{Math.floor(plan.basePrice * 1.3).toLocaleString()}</span>
                  <span className="font-bold text-lg text-red-500">¥{plan.basePrice.toLocaleString()}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* オプション */}
        <div className="bg-white border-4 border-black rounded-2xl p-6 md:p-8 shadow-[8px_8px_0_0_#000]">
          <h2 className="text-2xl font-black mb-4 border-b-4 border-black pb-2">2. オプションを選択 (複数可)</h2>
          <div className="space-y-3">
            {OPTIONS.map(opt => (
              <label key={opt.id} className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-black transition-colors has-[:checked]:border-black has-[:checked]:bg-yellow-100">
                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    checked={!!selectedOptions[opt.id]}
                    onChange={() => handleOptionChange(opt.id)}
                    className="w-6 h-6 accent-black rounded"
                  />
                  <span className="font-black text-lg">{opt.name}</span>
                </div>
                <span className="font-bold text-lg text-red-500">+¥{opt.price.toLocaleString()}</span>
              </label>
            ))}
          </div>
        </div>

        {/* ケーキオプション */}
        <div className="bg-white border-4 border-black rounded-2xl p-6 md:p-8 shadow-[8px_8px_0_0_#000]">
          <h2 className="text-2xl font-black mb-4 border-b-4 border-black pb-2">3. 誕生日ケーキ</h2>
          <div className="space-y-3">
            {CAKE_OPTIONS.map(cake => (
              <label key={cake.id} className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-black transition-colors has-[:checked]:border-black has-[:checked]:bg-yellow-100">
                <div className="flex items-center gap-3">
                  <input 
                    type="radio" 
                    name="cake" 
                    value={cake.id}
                    checked={cakeOption === cake.id}
                    onChange={() => setCakeOption(cake.id)}
                    className="w-6 h-6 accent-black"
                  />
                  <span className="font-black text-lg">{cake.name}</span>
                </div>
                <span className="font-bold text-lg text-red-500">
                  {cake.price > 0 ? `+¥${cake.price.toLocaleString()}` : '¥0'}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* 確認・決済エリア */}
        <div className="sticky bottom-4 z-40 bg-white border-4 border-black rounded-2xl p-6 md:p-8 shadow-[8px_8px_0_0_#ef4444]">
          <h2 className="text-xl font-black mb-2 text-gray-500">選択中の商品</h2>
          <p className="text-lg md:text-xl font-black mb-6 leading-relaxed border-b-2 border-dashed border-gray-300 pb-4">
            {productName}
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left w-full md:w-auto">
              <p className="text-sm font-bold text-gray-500 mb-1">合計金額 (税込)</p>
              <div className="flex items-end justify-center md:justify-start gap-3">
                <span className="text-gray-400 line-through font-bold text-2xl">¥{Math.floor(totalPrice * 1.3).toLocaleString()}</span>
                <p className="text-4xl md:text-5xl font-black text-red-500">¥{totalPrice.toLocaleString()}</p>
              </div>
            </div>
            
            <button 
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full md:w-auto bg-black text-white font-black py-4 px-12 rounded-full uppercase text-xl transition-transform hover:scale-105 active:scale-95 border-2 border-black shadow-[4px_4px_0_0_#ef4444] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
            >
              {isCheckingOut ? '処理中...' : '決済画面へ進む'}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
