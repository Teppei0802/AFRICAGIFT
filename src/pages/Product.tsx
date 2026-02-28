import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { teams } from '../data/teams';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { language } = useLanguage();
  const team = teams.find(t => t.id === id);

  const [musicOption, setMusicOption] = useState('default');
  const [photoPrint, setPhotoPrint] = useState(false);
  const [photoKiss, setPhotoKiss] = useState(false);
  const [cakeOption, setCakeOption] = useState('0');

  const t = {
    ja: {
      teamNotFound: 'Team Not Found',
      backToTeams: 'チーム一覧に戻る',
      aboutTeam: 'About',
      readMsg: '読み上げメッセージ',
      readMsgDesc: 'パフォーマーが元気いっぱいに読み上げます（30文字程度推奨）',
      readMsgPlaceholder: '例：ハッピーバースデー、タカシ！いつもありがとう！',
      boardMsg: '黒板に書くメッセージ',
      boardMsgDesc: '動画内で掲げる黒板に記載します',
      boardMsgPlaceholder: '例：Happy Birthday Takashi',
      musicOpt: '音楽オプション',
      musicDefault: 'おまかせ (無料)',
      musicYoutube: '音楽指定 (YouTube等) (+¥1,200)',
      musicBday: 'バースデーソング (+¥500)',
      photoOpt: '写真オプション',
      photoPrint: '写真プリントアウト (+¥1,000)',
      photoKiss: '写真へのキス (+¥200)',
      cakeOpt: 'ケーキ寄付オプション',
      cakeNone: 'なし',
      cakeSmall: '誕生日ケーキの寄付（小） (+¥1,500)',
      cakeLarge: '誕生日ケーキの寄付（大） (+¥2,000)',
      total: '合計',
      addToCart: 'カートに追加する',
      customerReviews: 'CUSTOMER REVIEWS',
      review1Name: 'T.Kさん（20代女性）',
      review1Text: '彼氏の誕生日にサプライズでプレゼントしました！予想以上のクオリティと熱量で、彼も大爆笑。一生の思い出になりました！',
      review2Name: 'S.Mさん（30代男性）',
      review2Text: '会社の同僚の送別会で使用。会場が一体となって盛り上がりました。現地の雇用支援にも繋がるというストーリーも素敵です。',
      review3Name: 'Y.Aさん（40代女性）',
      review3Text: '両親の結婚記念日に。遠く離れたアフリカからのお祝いメッセージに、母は感動して泣いていました。本当にありがとうございました。',
    },
    en: {
      teamNotFound: 'Team Not Found',
      backToTeams: 'Back to Teams',
      aboutTeam: 'About',
      readMsg: 'Message to be Read Aloud',
      readMsgDesc: 'Performers will read it energetically (around 30 characters recommended)',
      readMsgPlaceholder: 'e.g., Happy Birthday Takashi! Thank you always!',
      boardMsg: 'Message on the Board',
      boardMsgDesc: 'Written on the board held in the video',
      boardMsgPlaceholder: 'e.g., Happy Birthday Takashi',
      musicOpt: 'Music Options',
      musicDefault: 'Leave it to us (Free)',
      musicYoutube: 'Specify Music (YouTube, etc.) (+¥1,200)',
      musicBday: 'Birthday Song (+¥500)',
      photoOpt: 'Photo Options',
      photoPrint: 'Photo Printout (+¥1,000)',
      photoKiss: 'Kiss on Photo (+¥200)',
      cakeOpt: 'Cake Donation Options',
      cakeNone: 'None',
      cakeSmall: 'Donate Birthday Cake (Small) (+¥1,500)',
      cakeLarge: 'Donate Birthday Cake (Large) (+¥2,000)',
      total: 'Total',
      addToCart: 'Add to Cart',
      customerReviews: 'CUSTOMER REVIEWS',
      review1Name: 'T.K (Female, 20s)',
      review1Text: 'I gave it as a surprise for my boyfriend\'s birthday! The quality and enthusiasm exceeded expectations, and he laughed out loud. It became a lifelong memory!',
      review2Name: 'S.M (Male, 30s)',
      review2Text: 'Used it for a colleague\'s farewell party. The whole venue was excited. The story that it also leads to local employment support is wonderful.',
      review3Name: 'Y.A (Female, 40s)',
      review3Text: 'For my parents\' wedding anniversary. My mother cried with emotion at the congratulatory message from far away Africa. Thank you very much.',
    }
  }[language];

  if (!team) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="pop-heading text-4xl mb-4">{t.teamNotFound}</h1>
        <Link to="/order" className="pop-button">{t.backToTeams}</Link>
      </div>
    );
  }

  // Calculate total price
  let totalPrice = team.basePrice;
  if (musicOption === 'youtube') totalPrice += 1200;
  if (musicOption === 'birthday') totalPrice += 500;
  if (photoPrint) totalPrice += 1000;
  if (photoKiss) totalPrice += 200;
  totalPrice += parseInt(cakeOption, 10);

  const handleAddToCart = () => {
    addToCart({
      id: Date.now().toString(),
      team,
      totalPrice,
      musicOption,
      photoPrint,
      photoKiss,
      cakeOption
    });
    navigate('/cart');
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-6 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        
        {/* 左側：イメージ写真 */}
        <div className="md:w-1/2">
          <div className="sticky top-24">
            <div className="pop-card p-2 mb-4 md:mb-6">
              <img 
                src={team.image} 
                alt={team.name} 
                className="w-full aspect-square object-cover rounded-lg border-2 md:border-4 border-black" 
                referrerPolicy="no-referrer" 
              />
            </div>
            
            <div className="bg-white border-2 md:border-4 border-black rounded-xl p-4 md:p-6 shadow-[4px_4px_0_0_#000] md:shadow-[8px_8px_0_0_#000]">
              <h3 className="font-black text-lg md:text-xl mb-2 uppercase italic">{t.aboutTeam} {language === 'en' ? team.nameEn || team.name : team.name}</h3>
              <p className="text-xs md:text-base text-gray-700 leading-relaxed font-bold">{language === 'en' ? team.descriptionEn || team.description : team.description}</p>
            </div>
          </div>
        </div>

        {/* 右側：入力フォーム */}
        <div className="md:w-1/2">
          <h1 className="pop-heading text-lg md:text-4xl mb-2">{language === 'en' ? team.nameEn || team.name : team.name}</h1>
          <div className="flex items-end gap-2 md:gap-3 mb-4 md:mb-8">
            <span className="text-gray-400 line-through font-bold text-sm md:text-2xl">¥{Math.floor(team.basePrice * 1.3).toLocaleString()}</span>
            <p className="text-lg md:text-3xl font-black text-red-500">
              ¥{team.basePrice.toLocaleString()}
            </p>
          </div>

          <form className="space-y-3 md:space-y-8 text-left">
            
            {/* 読み上げメッセージ */}
            <div className="pop-card p-3 md:p-6">
              <label className="block font-black text-xs md:text-lg mb-1 md:mb-2">
                {t.readMsg} <span className="text-red-500">*</span>
              </label>
              <p className="text-[8px] md:text-xs text-gray-500 mb-1 md:mb-3 font-bold">{t.readMsgDesc}</p>
              <textarea 
                className="w-full border-2 md:border-4 border-black rounded-lg p-2 md:p-3 text-xs md:text-base font-bold focus:outline-none focus:border-red-500 transition-colors" 
                rows={3} 
                placeholder={t.readMsgPlaceholder}
              ></textarea>
            </div>

            {/* 黒板に書くメッセージ */}
            <div className="pop-card p-3 md:p-6">
              <label className="block font-black text-xs md:text-lg mb-1 md:mb-2">
                {t.boardMsg} <span className="text-red-500">*</span>
              </label>
              <p className="text-[8px] md:text-xs text-gray-500 mb-1 md:mb-3 font-bold">{t.boardMsgDesc}</p>
              <input 
                type="text" 
                className="w-full border-2 md:border-4 border-black rounded-lg p-2 md:p-3 text-xs md:text-base font-bold focus:outline-none focus:border-red-500 transition-colors" 
                placeholder={t.boardMsgPlaceholder}
              />
            </div>

            {/* 送信先メールアドレス */}
            <div className="pop-card p-3 md:p-6">
              <label className="block font-black text-xs md:text-lg mb-1 md:mb-2">
                {language === 'en' ? 'Email Address' : '送信先メールアドレス'} <span className="text-red-500">*</span>
              </label>
              <p className="text-[8px] md:text-xs text-gray-500 mb-1 md:mb-3 font-bold">{language === 'en' ? 'We will send the download link for the completed video' : '完成した動画のダウンロードリンクをお送りします'}</p>
              <input 
                type="email" 
                className="w-full border-2 md:border-4 border-black rounded-lg p-2 md:p-3 text-xs md:text-base font-bold focus:outline-none focus:border-red-500 transition-colors" 
                placeholder="your@email.com" 
              />
            </div>

            {/* 音楽オプション */}
            <div className="pop-card p-3 md:p-6">
              <label className="block font-black text-xs md:text-lg mb-2 md:mb-4 border-b-2 md:border-b-4 border-black pb-1 md:pb-2">
                {t.musicOpt}
              </label>
              <div className="space-y-2 md:space-y-4">
                <label className="flex items-center gap-2 md:gap-3 font-bold cursor-pointer p-2 md:p-3 border-2 border-gray-200 rounded-lg hover:border-black transition-colors has-[:checked]:border-black has-[:checked]:bg-yellow-100">
                  <input 
                    type="radio" 
                    name="music" 
                    value="default" 
                    checked={musicOption === 'default'}
                    onChange={(e) => setMusicOption(e.target.value)}
                    className="w-3 h-3 md:w-5 md:h-5 accent-black" 
                  />
                  <span className="text-[10px] md:text-base">{t.musicDefault}</span>
                </label>
                
                <label className="flex items-center gap-2 md:gap-3 font-bold cursor-pointer p-2 md:p-3 border-2 border-gray-200 rounded-lg hover:border-black transition-colors has-[:checked]:border-black has-[:checked]:bg-yellow-100">
                  <input 
                    type="radio" 
                    name="music" 
                    value="youtube" 
                    checked={musicOption === 'youtube'}
                    onChange={(e) => setMusicOption(e.target.value)}
                    className="w-3 h-3 md:w-5 md:h-5 accent-black" 
                  />
                  <span className="text-[10px] md:text-base">{t.musicYoutube}</span>
                </label>
                {musicOption === 'youtube' && (
                  <input 
                    type="text" 
                    className="w-full border-2 md:border-4 border-black rounded-lg p-2 md:p-3 font-bold mt-1 md:mt-2 text-[10px] md:text-sm" 
                    placeholder={language === 'en' ? 'Enter YouTube URL' : 'YouTubeのURLを入力してください'} 
                  />
                )}

                <label className="flex items-center gap-2 md:gap-3 font-bold cursor-pointer p-2 md:p-3 border-2 border-gray-200 rounded-lg hover:border-black transition-colors has-[:checked]:border-black has-[:checked]:bg-yellow-100">
                  <input 
                    type="radio" 
                    name="music" 
                    value="birthday" 
                    checked={musicOption === 'birthday'}
                    onChange={(e) => setMusicOption(e.target.value)}
                    className="w-3 h-3 md:w-5 md:h-5 accent-black" 
                  />
                  <span className="text-[10px] md:text-base">{t.musicBday}</span>
                </label>
              </div>
            </div>

            {/* 写真オプション */}
            <div className="pop-card p-3 md:p-6">
              <label className="block font-black text-xs md:text-lg mb-2 md:mb-4 border-b-2 md:border-b-4 border-black pb-1 md:pb-2">
                {t.photoOpt}
              </label>
              <div className="space-y-2 md:space-y-4">
                <label className="flex items-center gap-2 md:gap-3 font-bold cursor-pointer p-2 md:p-3 border-2 border-gray-200 rounded-lg hover:border-black transition-colors has-[:checked]:border-black has-[:checked]:bg-yellow-100">
                  <input 
                    type="checkbox" 
                    checked={photoPrint}
                    onChange={(e) => setPhotoPrint(e.target.checked)}
                    className="w-3 h-3 md:w-5 md:h-5 accent-black rounded" 
                  />
                  <span className="text-[10px] md:text-base">{t.photoPrint}</span>
                </label>
                {photoPrint && (
                  <div className="mt-1 md:mt-2 pl-5 md:pl-8">
                    <input type="file" className="text-[8px] md:text-sm font-bold file:mr-2 md:file:mr-4 file:py-1 md:file:py-2 file:px-2 md:file:px-4 file:rounded-full file:border-0 file:text-[8px] md:file:text-sm file:font-black file:bg-black file:text-white hover:file:bg-gray-800 cursor-pointer" />
                  </div>
                )}

                <label className="flex items-center gap-2 md:gap-3 font-bold cursor-pointer p-2 md:p-3 border-2 border-gray-200 rounded-lg hover:border-black transition-colors has-[:checked]:border-black has-[:checked]:bg-yellow-100">
                  <input 
                    type="checkbox" 
                    checked={photoKiss}
                    onChange={(e) => setPhotoKiss(e.target.checked)}
                    className="w-3 h-3 md:w-5 md:h-5 accent-black rounded" 
                  />
                  <span className="text-[10px] md:text-base">{t.photoKiss}</span>
                </label>
              </div>
            </div>

            {/* ケーキ寄付 */}
            <div className="pop-card p-3 md:p-6">
              <label className="block font-black text-xs md:text-lg mb-1 md:mb-2">
                {language === 'en' ? 'Cake Donation + Video' : '誕生日ケーキの寄付 ＋ 動画'}
              </label>
              <p className="text-[8px] md:text-xs text-gray-500 mb-1 md:mb-3 font-bold">{language === 'en' ? 'Gift a cake to the performers and record them eating it together' : 'パフォーマーたちにケーキをプレゼントし、一緒に食べる様子を動画に収めます'}</p>
              <select 
                value={cakeOption}
                onChange={(e) => setCakeOption(e.target.value)}
                className="w-full border-2 md:border-4 border-black rounded-lg p-2 md:p-3 text-[10px] md:text-base font-bold bg-white focus:outline-none focus:border-red-500 cursor-pointer"
              >
                <option value="0">{t.cakeNone}</option>
                <option value="1500">{t.cakeSmall}</option>
                <option value="2000">{t.cakeLarge}</option>
              </select>
            </div>

            {/* SNS投稿許可 */}
            <div className="pop-card p-3 md:p-6">
              <label className="block font-black text-xs md:text-lg mb-2 md:mb-4 border-b-2 md:border-b-4 border-black pb-1 md:pb-2">
                {language === 'en' ? 'Permission to post on SNS' : 'SNSへの投稿許可'}
              </label>
              <div className="flex flex-row gap-2 md:gap-4">
                <label className="flex-1 flex items-center justify-center gap-1 md:gap-2 text-[10px] md:text-base font-bold cursor-pointer p-2 md:p-3 border-2 border-gray-200 rounded-lg hover:border-black transition-colors has-[:checked]:border-black has-[:checked]:bg-yellow-100">
                  <input type="radio" name="sns" value="yes" className="w-3 h-3 md:w-5 md:h-5 accent-black" defaultChecked />
                  {language === 'en' ? 'Allow' : '許可する'}
                </label>
                <label className="flex-1 flex items-center justify-center gap-1 md:gap-2 text-[10px] md:text-base font-bold cursor-pointer p-2 md:p-3 border-2 border-gray-200 rounded-lg hover:border-black transition-colors has-[:checked]:border-black has-[:checked]:bg-yellow-100">
                  <input type="radio" name="sns" value="no" className="w-3 h-3 md:w-5 md:h-5 accent-black" />
                  {language === 'en' ? 'Do not allow' : '許可しない'}
                </label>
              </div>
            </div>

            {/* 合計金額＆送信ボタン */}
            <div className="sticky bottom-4 z-40 bg-white border-2 md:border-4 border-black rounded-2xl p-3 md:p-6 shadow-[4px_4px_0_0_#ef4444] md:shadow-[8px_8px_0_0_#ef4444]">
              <div className="flex justify-between items-end mb-2 md:mb-4">
                <span className="font-black text-xs md:text-xl">{language === 'en' ? 'Total Amount (Tax Included)' : '合計金額 (税込)'}</span>
                <div className="flex items-end gap-1 md:gap-3">
                  <span className="text-gray-400 line-through font-bold text-sm md:text-2xl">¥{Math.floor(totalPrice * 1.3).toLocaleString()}</span>
                  <span className="font-black text-lg md:text-4xl text-red-500">¥{totalPrice.toLocaleString()}</span>
                </div>
              </div>
              <button 
                type="button" 
                onClick={handleAddToCart}
                className="w-full bg-black text-white font-black py-2 md:py-4 rounded-full uppercase text-xs md:text-xl transition-transform hover:scale-105 active:scale-95"
              >
                {t.addToCart}
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* レビューセクション */}
      <section className="mt-8 md:mt-24 text-left">
        <h2 className="pop-heading !text-sm md:!text-4xl mb-4 md:mb-12 text-center underline decoration-red-500 decoration-4 md:decoration-8 whitespace-nowrap">{t.customerReviews}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {/* レビュー1 */}
          <div className="pop-card p-3 md:p-6">
            <div className="text-yellow-400 text-sm md:text-2xl mb-1 md:mb-2 tracking-widest">★★★★★</div>
            <h4 className="font-black text-[10px] md:text-lg mb-1 md:mb-2">{language === 'en' ? 'It was the best birthday!' : '最高の誕生日になりました！'}</h4>
            <p className="text-[8px] md:text-sm text-gray-700 mb-2 md:mb-4 leading-tight md:leading-relaxed">
              {t.review1Text}
            </p>
            <div className="flex items-center gap-1 md:gap-2 border-t border-gray-100 pt-2 md:pt-4">
              <div className="w-4 h-4 md:w-8 md:h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-[8px] md:text-xs">M</div>
              <span className="text-[8px] md:text-xs font-bold text-gray-500">{t.review1Name} / {language === 'en' ? team.nameEn || team.name : team.name} {language === 'en' ? 'Used' : '利用'}</span>
            </div>
          </div>

          {/* レビュー2 */}
          <div className="pop-card p-3 md:p-6">
            <div className="text-yellow-400 text-sm md:text-2xl mb-1 md:mb-2 tracking-widest">★★★★★</div>
            <h4 className="font-black text-[10px] md:text-lg mb-1 md:mb-2">{language === 'en' ? 'Quality is too high' : 'クオリティが高すぎる'}</h4>
            <p className="text-[8px] md:text-sm text-gray-700 mb-2 md:mb-4 leading-tight md:leading-relaxed">
              {t.review2Text}
            </p>
            <div className="flex items-center gap-1 md:gap-2 border-t border-gray-100 pt-2 md:pt-4">
              <div className="w-4 h-4 md:w-8 md:h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-[8px] md:text-xs">K</div>
              <span className="text-[8px] md:text-xs font-bold text-gray-500">{t.review2Name} / {language === 'en' ? team.nameEn || team.name : team.name} {language === 'en' ? 'Used' : '利用'}</span>
            </div>
          </div>

          {/* レビュー3 */}
          <div className="pop-card p-3 md:p-6">
            <div className="text-yellow-400 text-sm md:text-2xl mb-1 md:mb-2 tracking-widest">★★★★★</div>
            <h4 className="font-black text-[10px] md:text-lg mb-1 md:mb-2">{language === 'en' ? 'Chain of smiles with cake donation' : 'ケーキ寄付で笑顔の連鎖'}</h4>
            <p className="text-[8px] md:text-sm text-gray-700 mb-2 md:mb-4 leading-tight md:leading-relaxed">
              {t.review3Text}
            </p>
            <div className="flex items-center gap-1 md:gap-2 border-t border-gray-100 pt-2 md:pt-4">
              <div className="w-4 h-4 md:w-8 md:h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-[8px] md:text-xs">S</div>
              <span className="text-[8px] md:text-xs font-bold text-gray-500">{t.review3Name} / {language === 'en' ? team.nameEn || team.name : team.name} {language === 'en' ? 'Used' : '利用'}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
