import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

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
  const [donationUnits, setDonationUnits] = useState(0);
  const { language } = useLanguage();
  
  const donationAmount = donationUnits * 500;
  const baseGrandTotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const grandTotal = baseGrandTotal + donationAmount;

  const t = {
    ja: {
      preparingCheckout: '決済画面を準備中です。少々お待ちください...',
      popupBlocked: 'ポップアップがブロックされました。ブラウザのポップアップブロック設定を解除してから再度お試しください。',
      noItemsCheckout: '決済可能な商品がカートにありません。',
      checkoutFailed: '決済画面への遷移に失敗しました。',
      cartTitle: 'YOUR CART',
      emptyCart: 'カートは空です',
      backToTeams: 'チーム一覧に戻る',
      basePrice: '基本料金',
      musicOpt: '音楽オプション',
      musicYoutube: '音楽指定(YouTube)',
      musicBday: 'バースデーソング',
      photoOpt: '写真オプション',
      photoPrint: '写真プリント',
      photoKiss: '写真へのキス',
      cakeOpt: 'ケーキ寄付',
      cakeSmall: '小',
      cakeLarge: '大',
      total: '小計',
      remove: '削除',
      grandTotal: '合計金額 (税込)',
      checkoutBtn: 'レジに進む',
      processing: '処理中...',
    },
    en: {
      preparingCheckout: 'Preparing checkout screen. Please wait...',
      popupBlocked: 'Popup blocked. Please disable your browser popup blocker and try again.',
      noItemsCheckout: 'There are no items in the cart to checkout.',
      checkoutFailed: 'Failed to transition to the checkout screen.',
      cartTitle: 'YOUR CART',
      emptyCart: 'Your cart is empty',
      backToTeams: 'Back to Teams',
      basePrice: 'Base Price',
      musicOpt: 'Music Option',
      musicYoutube: 'Specify Music (YouTube)',
      musicBday: 'Birthday Song',
      photoOpt: 'Photo Option',
      photoPrint: 'Photo Print',
      photoKiss: 'Kiss on Photo',
      cakeOpt: 'Cake Donation',
      cakeSmall: 'Small',
      cakeLarge: 'Large',
      total: 'Subtotal',
      remove: 'Remove',
      grandTotal: 'Total Amount (Tax Included)',
      checkoutBtn: 'Proceed to Checkout',
      processing: 'Processing...',
    }
  }[language];

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;
    
    setIsCheckingOut(true);
    
    // Stripe Checkoutはiframe内で表示できないため、別タブで開く準備をする
    // ポップアップブロックを防ぐため、fetchの前にwindow.openを実行
    const checkoutWindow = window.open('', '_blank');
    if (checkoutWindow) {
      checkoutWindow.document.write(t.preparingCheckout);
    } else {
      alert(t.popupBlocked);
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
      
      // メッセージ情報
      options.push(`【${language === 'en' ? 'Read Msg' : '読み上げ'}】${item.readMsg}`);
      options.push(`【${language === 'en' ? 'Board Msg' : '黒板'}】${item.boardMsg}`);
      options.push(`【${language === 'en' ? 'Email' : 'メール'}】${item.email}`);

      // 音楽オプション
      if (item.musicOption === 'youtube' && STRIPE_PRICE_MAP['youtube']) {
        stripeItems.push({ price: STRIPE_PRICE_MAP['youtube'], quantity: 1 });
        options.push(t.musicYoutube);
      } else if (item.musicOption === 'birthday' && STRIPE_PRICE_MAP['birthday']) {
        stripeItems.push({ price: STRIPE_PRICE_MAP['birthday'], quantity: 1 });
        options.push(t.musicBday);
      }
      
      // 写真オプション
      if (item.photoPrint && STRIPE_PRICE_MAP['photoPrint']) {
        stripeItems.push({ price: STRIPE_PRICE_MAP['photoPrint'], quantity: 1 });
        options.push(t.photoPrint);
      }
      if (item.photoKiss && STRIPE_PRICE_MAP['photoKiss']) {
        stripeItems.push({ price: STRIPE_PRICE_MAP['photoKiss'], quantity: 1 });
        options.push(t.photoKiss);
      }

      // ケーキオプション
      if (item.cakeOption === '1500' && STRIPE_PRICE_MAP['cake1500']) {
        stripeItems.push({ price: STRIPE_PRICE_MAP['cake1500'], quantity: 1 });
        options.push(`${t.cakeOpt}(${t.cakeSmall})`);
      } else if (item.cakeOption === '2000' && STRIPE_PRICE_MAP['cake2000']) {
        stripeItems.push({ price: STRIPE_PRICE_MAP['cake2000'], quantity: 1 });
        options.push(`${t.cakeOpt}(${t.cakeLarge})`);
      }

      if (options.length > 0) {
        itemDetail += ` ${language === 'en' ? 'Options' : 'オプション'}: ${options.join(', ')}`;
      }
      orderDetails.push(itemDetail);
    });

    if (donationUnits > 0) {
      stripeItems.push({ price: 'price_1T5gyMFwh77nhVItnA1SwJ0D', quantity: donationUnits });
      orderDetails.push(`${language === 'en' ? 'Supporting Money (Local Donation)' : 'Supporting Money（現地寄付）'}: ¥${donationAmount.toLocaleString()}`);
    }

    if (stripeItems.length === 0) {
      checkoutWindow.close();
      alert(t.noItemsCheckout);
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
        alert(language === 'en' ? 'Failed to communicate with the payment server.\n\n[Possible Cause]\nThe price (Price ID) created in Stripe might be set to "Recurring (Subscription)". Since this payment system only supports "One-time payments", please recreate the price as "One-time" in the Stripe dashboard and update the ID.' : '決済サーバーとの通信に失敗しました。\n\n【原因の可能性】\nStripeで作成した価格（Price ID）が「継続課金（サブスクリプション）」に設定されている可能性があります。この決済システムは「1回限りの支払い」のみに対応しているため、Stripeダッシュボードで価格を「1回限り」として再作成し、IDを更新してください。');
      } else {
        alert(language === 'en' ? 'An error occurred while preparing for checkout. Please try again.' : '決済の準備中にエラーが発生しました。もう一度お試しください。');
      }
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 text-center pb-24">
      <section className="py-8 md:py-16 spring-in">
        <h1 className="pop-heading mb-2 md:mb-4 leading-none">
          <span className="text-lg md:text-3xl block text-black whitespace-nowrap">{t.cartTitle}</span>
        </h1>
      </section>

      {cartItems.length > 0 ? (
        <div className="bg-white border-2 md:border-4 border-black rounded-3xl p-4 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-left">
          <h2 className="text-lg md:text-2xl font-black mb-4 md:mb-6 border-b-2 md:border-b-4 border-black pb-1 md:pb-2">{language === 'en' ? 'Confirm Your Order' : 'ご注文内容の確認'}</h2>
          
          <div className="space-y-4 md:space-y-8 mb-6 md:mb-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-row gap-3 md:gap-6 pb-4 md:pb-8 border-b-2 border-gray-200 last:border-0 last:pb-0 relative">
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-0 right-0 text-gray-400 hover:text-red-500 font-bold text-[10px] md:text-sm flex items-center gap-1 transition-colors"
                >
                  <span className="text-sm md:text-lg">×</span> {t.remove}
                </button>
                <img src={item.team.image} alt={item.team.name} className="w-16 h-16 md:w-32 md:h-32 object-cover rounded-lg border-2 md:border-4 border-black shrink-0" />
                <div className="flex-grow pr-8 md:pr-12">
                  <h3 className="text-sm md:text-xl font-black uppercase mb-1 md:mb-2 leading-tight">{language === 'en' ? item.team.nameEn || item.team.name : item.team.name}</h3>
                  <p className="text-[10px] md:text-sm text-gray-700 font-bold mb-1">{t.basePrice}: ¥{item.team.basePrice.toLocaleString()}</p>
                  
                  <div className="mt-1 md:mt-4 space-y-1 md:space-y-2 text-[8px] md:text-sm font-bold text-gray-600">
                    <div className="bg-gray-50 p-2 rounded-lg border border-gray-200">
                      <p className="text-black mb-1"><span className="text-gray-500 text-[8px] md:text-xs">【{language === 'en' ? 'Read Message' : '読み上げメッセージ'}】</span><br/>{item.readMsg}</p>
                      <p className="text-black mb-1"><span className="text-gray-500 text-[8px] md:text-xs">【{language === 'en' ? 'Board Message' : '黒板メッセージ'}】</span><br/>{item.boardMsg}</p>
                      <p className="text-black"><span className="text-gray-500 text-[8px] md:text-xs">【{language === 'en' ? 'Email' : '送信先メールアドレス'}】</span><br/>{item.email}</p>
                    </div>
                    {item.musicOption === 'youtube' && <p>+ {t.musicYoutube}: ¥1,200</p>}
                    {item.musicOption === 'birthday' && <p>+ {t.musicBday}: ¥500</p>}
                    {item.photoPrint && <p>+ {t.photoPrint}: ¥1,000</p>}
                    {item.photoKiss && <p>+ {t.photoKiss}: ¥200</p>}
                    {item.cakeOption === '1500' && <p>+ {t.cakeOpt}({t.cakeSmall}): ¥1,500</p>}
                    {item.cakeOption === '2000' && <p>+ {t.cakeOpt}({t.cakeLarge}): ¥2,000</p>}
                  </div>
                </div>
                <div className="text-right flex flex-col justify-end shrink-0">
                  <p className="text-[8px] md:text-sm font-bold text-gray-500 mb-0.5 md:mb-1">{t.total}</p>
                  <div className="flex flex-col md:flex-row items-end justify-end gap-0 md:gap-2">
                    <span className="text-gray-400 line-through font-bold text-[10px] md:text-lg">¥{Math.floor(item.totalPrice * 1.3).toLocaleString()}</span>
                    <p className="text-sm md:text-2xl font-black text-red-500">¥{item.totalPrice.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t-2 md:border-t-4 border-black pt-4 md:pt-6 mb-4 md:mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-left w-full md:w-auto">
                <h3 className="text-sm md:text-lg font-black flex items-center gap-2">
                  <span className="text-xl">🤝</span> {language === 'en' ? 'Supporting Money (Local Donation)' : 'Supporting Money（現地寄付）'}
                </h3>
                <p className="text-[10px] md:text-sm text-gray-600 font-bold mt-1">
                  {language === 'en' ? 'Your donation will be used for medical and educational support in the local community.' : '現地の「医療支援」「教育支援」などに繋がる寄付ができます。'}
                </p>
              </div>
              <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-full border-2 border-black shrink-0">
                <button 
                  onClick={() => setDonationUnits(Math.max(0, donationUnits - 1))}
                  className="w-8 h-8 md:w-10 md:h-10 bg-white border-2 border-black rounded-full flex items-center justify-center font-black text-xl hover:bg-gray-200 transition-colors"
                >
                  -
                </button>
                <div className="w-20 md:w-24 text-center font-black text-sm md:text-lg">
                  ¥{donationAmount.toLocaleString()}
                </div>
                <button 
                  onClick={() => setDonationUnits(donationUnits + 1)}
                  className="w-8 h-8 md:w-10 md:h-10 bg-black text-white border-2 border-black rounded-full flex items-center justify-center font-black text-xl hover:bg-gray-800 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="border-t-2 md:border-t-4 border-black pt-4 md:pt-6 flex flex-row justify-between items-center gap-2 md:gap-4">
            <Link to="/order" className="font-bold underline hover:text-red-500 text-[10px] md:text-base whitespace-nowrap">
              {language === 'en' ? 'Continue Shopping' : 'お買い物を続ける'}
            </Link>
            <div className="flex flex-row items-center gap-2 md:gap-6">
              <div className="text-right">
                <p className="text-[8px] md:text-sm font-bold text-gray-500 mb-0.5 md:mb-1">{t.grandTotal}</p>
                <div className="flex items-end justify-end gap-1 md:gap-3">
                  <span className="text-gray-400 line-through font-bold text-[10px] md:text-xl hidden sm:inline">¥{(Math.floor(baseGrandTotal * 1.3) + donationAmount).toLocaleString()}</span>
                  <p className="text-lg md:text-3xl font-black text-red-500">¥{grandTotal.toLocaleString()}</p>
                </div>
              </div>
              <button 
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="bg-black text-white font-black py-2 px-3 md:py-4 md:px-12 rounded-full uppercase text-[10px] md:text-xl transition-transform hover:scale-105 active:scale-95 border-2 border-black shadow-[2px_2px_0_0_#ef4444] md:shadow-[4px_4px_0_0_#ef4444] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isCheckingOut ? t.processing : t.checkoutBtn}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white border-4 border-black rounded-3xl p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-xl font-black mb-6">{t.emptyCart}</p>
          <Link to="/order" className="inline-block bg-black text-white font-black py-3 px-8 rounded-full uppercase transition-transform hover:scale-105 active:scale-95 border-2 border-black shadow-[4px_4px_0_0_#ef4444]">
            {t.backToTeams}
          </Link>
        </div>
      )}
    </main>
  );
}
