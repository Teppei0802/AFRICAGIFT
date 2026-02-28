import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ShoppingCart, Globe, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export default function Layout() {
  const { pathname } = useLocation();
  const { cartItems } = useCart();
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [pathname]);

  const t = {
    ja: {
      service: 'Service',
      voices: '出演者の声',
      orderNow: '今すぐ注文',
      footerTitle: '一生忘れないGIFTを！',
      tokushoho: '特定商取引法',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      contact: 'お問い合わせ',
      line: 'LINE相談',
      chooseTeam: 'CHOOSE YOUR TEAM',
      partner: 'パートナー団体紹介',
    },
    en: {
      service: 'Service',
      voices: 'Voices',
      orderNow: 'Order Now',
      footerTitle: 'An Unforgettable GIFT!',
      tokushoho: 'Legal Info',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      contact: 'Contact Us',
      line: 'LINE Chat',
      chooseTeam: 'Choose Your Team',
      partner: 'Partner Organization',
    }
  }[language];

  return (
    <div className="font-bold min-h-screen flex flex-col">
      {/* ナビゲーション */}
      <nav className="sticky top-0 z-50 bg-white border-b-4 border-black px-4 py-2">
        <div className="max-w-4xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <button 
              className="md:hidden p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link to="/" className="font-black text-lg md:text-2xl uppercase italic whitespace-nowrap">
              <span className="text-black">AFRICA</span>
              <span className="text-gray-700">GIFT</span>
            </Link>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <Link to="/service" className="hidden md:block font-black text-[10px] md:text-base uppercase hover:text-red-500 transition-colors">{t.service}</Link>
            <Link to="/voices" className="hidden md:block font-black text-[10px] md:text-base uppercase hover:text-red-500 transition-colors">{t.voices}</Link>
            <Link to="/cart" className="relative font-black uppercase hover:text-red-500 transition-colors flex items-center">
              <ShoppingCart className="w-4 h-4 md:w-6 md:h-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[8px] md:text-[10px] w-3 h-3 md:w-4 md:h-4 flex items-center justify-center rounded-full border border-black">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <Link to="/order" className="bg-black text-white px-2 py-1 md:px-4 md:py-2 rounded-full text-[8px] md:text-sm whitespace-nowrap">{t.orderNow}</Link>
            <button onClick={toggleLanguage} className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full border border-black text-[10px] md:text-xs font-black transition-colors">
              <Globe className="w-3 h-3 md:w-4 md:h-4" />
              {language === 'ja' ? 'EN' : 'JP'}
            </button>
          </div>
        </div>
      </nav>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[52px] bg-white z-40 border-b-4 border-black overflow-y-auto">
          <div className="flex flex-col p-4 gap-4 text-lg font-black">
            <Link to="/service" className="border-b-2 border-gray-200 pb-2 hover:text-red-500">{t.service}</Link>
            <Link to="/order" className="border-b-2 border-gray-200 pb-2 hover:text-red-500">{t.chooseTeam}</Link>
            <Link to="/partner" className="border-b-2 border-gray-200 pb-2 hover:text-red-500">{t.partner}</Link>
            <Link to="/tokushoho" className="border-b-2 border-gray-200 pb-2 hover:text-red-500">{t.tokushoho}</Link>
            <Link to="/privacy" className="border-b-2 border-gray-200 pb-2 hover:text-red-500">{t.privacy}</Link>
            <Link to="/terms" className="border-b-2 border-gray-200 pb-2 hover:text-red-500">{t.terms}</Link>
            <Link to="/contact" className="border-b-2 border-gray-200 pb-2 hover:text-red-500">{t.contact}</Link>
          </div>
        </div>
      )}

      <div className="flex-grow">
        <Outlet />
      </div>

      {/* フッター */}
      <footer className="bg-black text-white pt-8 md:pt-12 pb-24 mt-12 md:mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="pop-heading !text-sm md:!text-4xl mb-4 md:mb-6 italic whitespace-nowrap">{t.footerTitle}</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-[10px] md:text-sm mb-8 md:mb-12">
            <Link to="/tokushoho" className="hover:text-yellow-400 underline">{t.tokushoho}</Link>
            <Link to="/privacy" className="hover:text-yellow-400 underline">{t.privacy}</Link>
            <Link to="/terms" className="hover:text-yellow-400 underline">{t.terms}</Link>
            <Link to="/contact" className="hover:text-yellow-400 underline">{t.contact}</Link>
          </div>
          <p className="text-xs text-gray-500">&copy; 2026 AFRICAGIFT. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

      {/* スマホ固定CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 flex gap-2 z-50 md:max-w-md md:mx-auto">
        <a href="https://lin.ee/9Xr2oy0" target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-500 text-white font-black py-4 rounded-full shadow-[4px_4px_0_0_#000] border-2 border-black text-center">
          {t.line}
        </a>
        <Link to="/order" className="flex-1 bg-red-500 text-white font-black py-4 rounded-full shadow-[4px_4px_0_0_#000] border-2 border-black text-center">
          {t.orderNow}
        </Link>
      </div>
    </div>
  );
}
