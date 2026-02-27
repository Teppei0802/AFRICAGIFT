import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { teams } from '../data/teams';
import { useCart } from '../context/CartContext';

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const team = teams.find(t => t.id === id);

  const [musicOption, setMusicOption] = useState('default');
  const [photoPrint, setPhotoPrint] = useState(false);
  const [photoKiss, setPhotoKiss] = useState(false);
  const [cakeOption, setCakeOption] = useState('0');

  if (!team) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="pop-heading text-4xl mb-4">Team Not Found</h1>
        <Link to="/order" className="pop-button">チーム一覧に戻る</Link>
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
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* 左側：イメージ写真 */}
        <div className="md:w-1/2">
          <div className="sticky top-24">
            <div className="pop-card p-2 mb-6">
              <img 
                src={team.image} 
                alt={team.name} 
                className="w-full aspect-square object-cover rounded-lg border-4 border-black" 
                referrerPolicy="no-referrer" 
              />
            </div>
            
            <div className="bg-white border-4 border-black rounded-xl p-6 shadow-[8px_8px_0_0_#000]">
              <h3 className="font-black text-xl mb-2 uppercase italic">About {team.name}</h3>
              <p className="text-gray-700 leading-relaxed font-bold">{team.description}</p>
            </div>
          </div>
        </div>

        {/* 右側：入力フォーム */}
        <div className="md:w-1/2">
          <h1 className="pop-heading text-4xl mb-2">{team.name}</h1>
          <div className="flex items-end gap-3 mb-8">
            <span className="text-gray-400 line-through font-bold text-2xl">¥{Math.floor(team.basePrice * 1.3).toLocaleString()}</span>
            <p className="text-3xl font-black text-red-500">
              ¥{team.basePrice.toLocaleString()}
            </p>
          </div>

          <form className="space-y-8 text-left">
            
            {/* 読み上げメッセージ */}
            <div className="pop-card p-6">
              <label className="block font-black text-lg mb-2">
                読み上げメッセージ <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-gray-500 mb-3 font-bold">パフォーマーが元気いっぱいに読み上げます（30文字程度推奨）</p>
              <textarea 
                className="w-full border-4 border-black rounded-lg p-3 font-bold focus:outline-none focus:border-red-500 transition-colors" 
                rows={3} 
                placeholder="例：ハッピーバースデー、タカシ！いつもありがとう！"
              ></textarea>
            </div>

            {/* 黒板に書くメッセージ */}
            <div className="pop-card p-6">
              <label className="block font-black text-lg mb-2">
                黒板に書くメッセージ <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-gray-500 mb-3 font-bold">動画内で掲げる黒板に記載します</p>
              <input 
                type="text" 
                className="w-full border-4 border-black rounded-lg p-3 font-bold focus:outline-none focus:border-red-500 transition-colors" 
                placeholder="例：Happy Birthday Takashi" 
              />
            </div>

            {/* 送信先メールアドレス */}
            <div className="pop-card p-6">
              <label className="block font-black text-lg mb-2">
                送信先メールアドレス <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-gray-500 mb-3 font-bold">完成した動画のダウンロードリンクをお送りします</p>
              <input 
                type="email" 
                className="w-full border-4 border-black rounded-lg p-3 font-bold focus:outline-none focus:border-red-500 transition-colors" 
                placeholder="your@email.com" 
              />
            </div>

            {/* 音楽オプション */}
            <div className="pop-card p-6">
              <label className="block font-black text-lg mb-4 border-b-4 border-black pb-2">
                音楽の選択
              </label>
              <div className="space-y-4">
                <label className="flex items-center gap-3 font-bold cursor-pointer p-3 border-2 border-gray-200 rounded-lg hover:border-black transition-colors has-[:checked]:border-black has-[:checked]:bg-yellow-100">
                  <input 
                    type="radio" 
                    name="music" 
                    value="default" 
                    checked={musicOption === 'default'}
                    onChange={(e) => setMusicOption(e.target.value)}
                    className="w-5 h-5 accent-black" 
                  />
                  <span>おまかせ（踊りやすい音楽） <span className="text-gray-500">+¥0</span></span>
                </label>
                
                <label className="flex items-center gap-3 font-bold cursor-pointer p-3 border-2 border-gray-200 rounded-lg hover:border-black transition-colors has-[:checked]:border-black has-[:checked]:bg-yellow-100">
                  <input 
                    type="radio" 
                    name="music" 
                    value="youtube" 
                    checked={musicOption === 'youtube'}
                    onChange={(e) => setMusicOption(e.target.value)}
                    className="w-5 h-5 accent-black" 
                  />
                  <span>音楽指定（YouTube等） <span className="text-red-500">+¥1,200</span></span>
                </label>
                {musicOption === 'youtube' && (
                  <input 
                    type="text" 
                    className="w-full border-4 border-black rounded-lg p-3 font-bold mt-2 text-sm" 
                    placeholder="YouTubeのURLを入力してください" 
                  />
                )}

                <label className="flex items-center gap-3 font-bold cursor-pointer p-3 border-2 border-gray-200 rounded-lg hover:border-black transition-colors has-[:checked]:border-black has-[:checked]:bg-yellow-100">
                  <input 
                    type="radio" 
                    name="music" 
                    value="birthday" 
                    checked={musicOption === 'birthday'}
                    onChange={(e) => setMusicOption(e.target.value)}
                    className="w-5 h-5 accent-black" 
                  />
                  <span>バースデーソング <span className="text-red-500">+¥500</span></span>
                </label>
              </div>
            </div>

            {/* 写真オプション */}
            <div className="pop-card p-6">
              <label className="block font-black text-lg mb-4 border-b-4 border-black pb-2">
                写真オプション
              </label>
              <div className="space-y-4">
                <label className="flex items-center gap-3 font-bold cursor-pointer p-3 border-2 border-gray-200 rounded-lg hover:border-black transition-colors has-[:checked]:border-black has-[:checked]:bg-yellow-100">
                  <input 
                    type="checkbox" 
                    checked={photoPrint}
                    onChange={(e) => setPhotoPrint(e.target.checked)}
                    className="w-5 h-5 accent-black rounded" 
                  />
                  <span>写真プリントアウト <span className="text-red-500">+¥1,000</span></span>
                </label>
                {photoPrint && (
                  <div className="mt-2 pl-8">
                    <input type="file" className="text-sm font-bold file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-black file:bg-black file:text-white hover:file:bg-gray-800 cursor-pointer" />
                  </div>
                )}

                <label className="flex items-center gap-3 font-bold cursor-pointer p-3 border-2 border-gray-200 rounded-lg hover:border-black transition-colors has-[:checked]:border-black has-[:checked]:bg-yellow-100">
                  <input 
                    type="checkbox" 
                    checked={photoKiss}
                    onChange={(e) => setPhotoKiss(e.target.checked)}
                    className="w-5 h-5 accent-black rounded" 
                  />
                  <span>写真へのキス <span className="text-red-500">+¥200</span></span>
                </label>
              </div>
            </div>

            {/* ケーキ寄付 */}
            <div className="pop-card p-6">
              <label className="block font-black text-lg mb-2">
                誕生日ケーキの寄付 ＋ 動画
              </label>
              <p className="text-xs text-gray-500 mb-3 font-bold">パフォーマーたちにケーキをプレゼントし、一緒に食べる様子を動画に収めます</p>
              <select 
                value={cakeOption}
                onChange={(e) => setCakeOption(e.target.value)}
                className="w-full border-4 border-black rounded-lg p-3 font-bold bg-white focus:outline-none focus:border-red-500 cursor-pointer"
              >
                <option value="0">希望しない (+¥0)</option>
                <option value="1500">ケーキ寄付（小） (+¥1,500)</option>
                <option value="2000">ケーキ寄付（大） (+¥2,000)</option>
              </select>
            </div>

            {/* SNS投稿許可 */}
            <div className="pop-card p-6">
              <label className="block font-black text-lg mb-4 border-b-4 border-black pb-2">
                SNSへの投稿許可
              </label>
              <div className="flex flex-col sm:flex-row gap-4">
                <label className="flex-1 flex items-center justify-center gap-2 font-bold cursor-pointer p-3 border-2 border-gray-200 rounded-lg hover:border-black transition-colors has-[:checked]:border-black has-[:checked]:bg-yellow-100">
                  <input type="radio" name="sns" value="yes" className="w-5 h-5 accent-black" defaultChecked />
                  許可する
                </label>
                <label className="flex-1 flex items-center justify-center gap-2 font-bold cursor-pointer p-3 border-2 border-gray-200 rounded-lg hover:border-black transition-colors has-[:checked]:border-black has-[:checked]:bg-yellow-100">
                  <input type="radio" name="sns" value="no" className="w-5 h-5 accent-black" />
                  許可しない
                </label>
              </div>
            </div>

            {/* 合計金額＆送信ボタン */}
            <div className="sticky bottom-4 z-40 bg-white border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0_0_#ef4444]">
              <div className="flex justify-between items-end mb-4">
                <span className="font-black text-xl">合計金額 (税込)</span>
                <div className="flex items-end gap-3">
                  <span className="text-gray-400 line-through font-bold text-2xl">¥{Math.floor(totalPrice * 1.3).toLocaleString()}</span>
                  <span className="font-black text-4xl text-red-500">¥{totalPrice.toLocaleString()}</span>
                </div>
              </div>
              <button 
                type="button" 
                onClick={handleAddToCart}
                className="w-full bg-black text-white font-black py-4 rounded-full uppercase text-xl transition-transform hover:scale-105 active:scale-95"
              >
                カートに入れる
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* レビューセクション */}
      <section className="mt-24 text-left">
        <h2 className="pop-heading text-4xl mb-12 text-center underline decoration-red-500 decoration-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* レビュー1 */}
          <div className="pop-card">
            <div className="text-yellow-400 text-2xl mb-2 tracking-widest">★★★★★</div>
            <h4 className="font-black text-lg mb-2">最高の誕生日になりました！</h4>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              彼氏の誕生日にサプライズで依頼しました。マッチョなお兄さんたちが全力で踊ってくれて、彼も大爆笑！写真へのキスオプションも最高でした（笑）
            </p>
            <div className="flex items-center gap-2 border-t-2 border-gray-100 pt-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-xs">M</div>
              <span className="text-xs font-bold text-gray-500">20代 女性 / {team.name} 利用</span>
            </div>
          </div>

          {/* レビュー2 */}
          <div className="pop-card">
            <div className="text-yellow-400 text-2xl mb-2 tracking-widest">★★★★★</div>
            <h4 className="font-black text-lg mb-2">クオリティが高すぎる</h4>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              友人の結婚式の余興動画として注文。指定したBGMに合わせて完璧に踊ってくれて、会場が大盛り上がりでした。特急納品で翌日には届いたのも助かりました。
            </p>
            <div className="flex items-center gap-2 border-t-2 border-gray-100 pt-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-xs">K</div>
              <span className="text-xs font-bold text-gray-500">30代 男性 / {team.name} 利用</span>
            </div>
          </div>

          {/* レビュー3 */}
          <div className="pop-card">
            <div className="text-yellow-400 text-2xl mb-2 tracking-widest">★★★★★</div>
            <h4 className="font-black text-lg mb-2">ケーキ寄付で笑顔の連鎖</h4>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              母の還暦祝いに。ケーキ寄付オプションを付けたのですが、パフォーマーの方々が本当に嬉しそうにケーキを食べている姿を見て、こちらまで幸せな気持ちになりました。
            </p>
            <div className="flex items-center gap-2 border-t-2 border-gray-100 pt-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-xs">S</div>
              <span className="text-xs font-bold text-gray-500">40代 女性 / {team.name} 利用</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
