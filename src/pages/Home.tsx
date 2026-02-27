import { Link } from 'react-router-dom';
import { teams } from '../data/teams';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 text-center">
      {/* ヒーローセクション */}
      <section className="py-12 md:py-20 spring-in">
        <h1 className="pop-heading mb-6 leading-none">
          <span className="text-3xl block text-black">一生忘れないGIFTを！</span>
          アフリカから<br /><span className="accent-text text-6xl md:text-8xl">HAPPY BIRTHDAY!</span>
        </h1>
        
        <div className="pop-card mb-10 overflow-hidden relative group p-0 border-4 border-black">
          <div className="aspect-video w-full">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/DnHhzI_Hq3U?autoplay=1&mute=1&loop=1&playlist=DnHhzI_Hq3U" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="flex justify-center">
          <Link to="/order" className="pop-button text-xl px-12 py-4">動画を注文する</Link>
        </div>
      </section>

      {/* ベネフィットセクション */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="pop-card">
            <div className="text-4xl mb-2">⚡</div>
            <h3 className="text-xl font-black mb-2 uppercase italic">Speed</h3>
            <p>最短24時間以内に<br />爆速納品！</p>
          </div>
          <div className="pop-card">
            <div className="text-4xl mb-2">💰</div>
            <h3 className="text-xl font-black mb-2 uppercase italic">Guarantee</h3>
            <p>満足いただけなければ<br />全額返金保証</p>
          </div>
          <div className="pop-card">
            <div className="text-4xl mb-2">🌍</div>
            <h3 className="text-xl font-black mb-2 uppercase italic">SDGs</h3>
            <p>現地の雇用創出に<br />直接貢献</p>
          </div>
        </div>
      </section>

      {/* チーム紹介（投稿リスト風） */}
      <section className="py-12 bg-white border-4 border-black rounded-3xl p-8 mb-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="pop-heading text-4xl mb-8">Choose Your Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-8">
          {teams.slice(0, 4).map((team) => (
            <Link key={team.id} to={`/order/${team.id}`} className="border-4 border-black rounded-xl overflow-hidden hover:rotate-1 transition-transform block group cursor-pointer flex flex-col">
              <div className="aspect-square bg-gray-200 overflow-hidden relative">
                <img src={team.image} alt={team.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-4 bg-white border-t-4 border-black flex-grow flex flex-col">
                <div>
                  <span className={`${team.tagColor} text-white px-2 py-1 text-sm mb-2 inline-block font-black border-2 border-black shadow-[2px_2px_0_0_#000]`}>{team.tag}</span>
                </div>
                <h4 className="text-2xl font-black uppercase group-hover:text-red-500 transition-colors line-clamp-1">{team.name}</h4>
                <p className="text-sm mt-2 leading-tight text-gray-700 flex-grow">{team.description}</p>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-gray-400 line-through font-bold text-lg">¥{Math.floor(team.basePrice * 1.3).toLocaleString()}</span>
                  <p className="text-2xl font-black text-red-500">¥{team.basePrice.toLocaleString()} <span className="text-xs text-black">〜</span></p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link to="/order" className="inline-block bg-black text-white font-black py-3 px-8 rounded-full uppercase transition-transform hover:scale-105 active:scale-95 border-2 border-black shadow-[4px_4px_0_0_#ef4444]">
            すべてのチームを見る
          </Link>
        </div>
      </section>

      {/* 注文ステップ */}
      <section className="py-12" id="order">
        <h2 className="pop-heading text-4xl mb-8">How to Order</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-4">1</div>
            <p className="font-black">プランとメッセージを選択</p>
          </div>
          <div className="hidden md:block text-4xl">➡</div>
          <div className="flex-1">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-4">2</div>
            <p className="font-black">決済完了後、現地へ発注</p>
          </div>
          <div className="hidden md:block text-4xl">➡</div>
          <div className="flex-1">
            <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-4">3</div>
            <p className="font-black italic uppercase">Get Video!</p>
          </div>
        </div>
      </section>

      {/* パートナー団体 */}
      <section className="py-12">
        <div className="bg-white border-4 border-black rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-yellow-400 border-b-4 border-l-4 border-black px-6 py-2 font-black italic">
            OFFICIAL PARTNER
          </div>
          <h2 className="pop-heading text-3xl md:text-4xl mb-6 mt-4">一般社団法人 モザンビークのいのちをつなぐ会</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="aspect-square bg-gray-200 rounded-xl border-4 border-black overflow-hidden">
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80" alt="モザンビークの支援活動" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg font-bold mb-4 leading-relaxed">
                私たちは、モザンビーク共和国で医療・教育・雇用支援を行う「モザンビークのいのちをつなぐ会」と公式に連携しています。
              </p>
              <ul className="space-y-2 mb-6 font-bold text-gray-700">
                <li className="flex items-center gap-2"><span>✅</span> 現地に根ざした確かな支援実績</li>
                <li className="flex items-center gap-2"><span>✅</span> パフォーマーへの正当な報酬と生活向上</li>
                <li className="flex items-center gap-2"><span>✅</span> 透明性の高い寄付・売上還元システム</li>
              </ul>
              <p className="text-sm text-gray-600 mb-6 font-bold">
                信頼できる社会貢献団体との連携により、あなたのサプライズが「現地の確かな支援」へと直結する、公益性の高いサービスを実現しています。
              </p>
              <Link to="/partner" className="inline-block bg-black text-white font-black py-3 px-8 rounded-full uppercase transition-transform hover:scale-105 active:scale-95 border-2 border-black shadow-[4px_4px_0_0_#ef4444]">
                詳しく
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* エシカル宣言 */}
      <section className="py-16 bg-black text-white rounded-xl my-12 p-8">
        <h2 className="text-3xl font-black mb-6 italic uppercase">Beyond a Surprise</h2>
        <p className="text-lg leading-relaxed text-center mb-8 max-w-2xl mx-auto">
          私たちは、パフォーマーを「お笑いの対象」ではなく、<br />
          対等なビジネスパートナーとして尊重しています。<br />
          収益の多くは現地の雇用創出と生活改善に充てられ、<br />
          あなたの笑顔がアフリカの未来を支える力になります。
        </p>
        
        <div className="bg-white text-black rounded-xl p-6 border-4 border-black shadow-[8px_8px_0_0_#ef4444]">
          <h3 className="font-black text-xl mb-4 text-center">貢献するSDGsの目標</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-600 text-white font-black flex items-center justify-center text-2xl rounded-lg mb-2">1</div>
              <p className="font-bold text-sm">貧困をなくそう</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-yellow-500 text-white font-black flex items-center justify-center text-2xl rounded-lg mb-2">3</div>
              <p className="font-bold text-sm">すべての人に<br/>健康と福祉を</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-800 text-white font-black flex items-center justify-center text-2xl rounded-lg mb-2">8</div>
              <p className="font-bold text-sm">働きがいも<br/>経済成長も</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-900 text-white font-black flex items-center justify-center text-2xl rounded-lg mb-2">17</div>
              <p className="font-bold text-sm">パートナーシップで<br/>目標を達成しよう</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 text-left">
        <h2 className="pop-heading text-4xl mb-8 text-center underline decoration-red-500 decoration-8">FAQ</h2>
        <div className="space-y-4">
          <details className="pop-card group">
            <summary className="list-none font-black text-xl cursor-pointer flex justify-between items-center">
              Q. 納期はどのくらいですか？
              <span className="transition-transform group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-4 pt-4 border-t-2 border-black text-gray-700 font-bold leading-relaxed">
              A. 通常、ご注文から2〜4日程度で納品いたします。現地の天候や通信状況によって前後する場合がございますので、余裕を持ったご注文をおすすめいたします。
            </p>
          </details>
          <details className="pop-card group">
            <summary className="list-none font-black text-xl cursor-pointer flex justify-between items-center">
              Q. どんなメッセージでも言ってもらえますか？
              <span className="transition-transform group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-4 pt-4 border-t-2 border-black text-gray-700 font-bold leading-relaxed">
              A. お祝いや感謝のメッセージなど、ポジティブな内容であれば基本的に可能です。ただし、公序良俗に反する内容、差別的な表現、政治的・宗教的な主張、パフォーマーの尊厳を傷つける内容は一切お断りしております。不適切と判断した場合はキャンセルとさせていただきます。
            </p>
          </details>
          <details className="pop-card group">
            <summary className="list-none font-black text-xl cursor-pointer flex justify-between items-center">
              Q. 音楽の指定はどのようにすればいいですか？
              <span className="transition-transform group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-4 pt-4 border-t-2 border-black text-gray-700 font-bold leading-relaxed">
              A. 「音楽指定」オプションをお選びいただき、注文フォームにYouTubeなどのURLをご入力ください。指定がない場合は、現地のダンサーが選んだノリの良い音楽を使用します。
            </p>
          </details>
          <details className="pop-card group">
            <summary className="list-none font-black text-xl cursor-pointer flex justify-between items-center">
              Q. 完成した動画はどのように受け取りますか？
              <span className="transition-transform group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-4 pt-4 border-t-2 border-black text-gray-700 font-bold leading-relaxed">
              A. ご注文時にご入力いただいたメールアドレス宛に、動画をダウンロードできるURL（Googleドライブ等のリンク）をお送りいたします。スマートフォンやパソコンに保存してご利用ください。
            </p>
          </details>
          <details className="pop-card group">
            <summary className="list-none font-black text-xl cursor-pointer flex justify-between items-center">
              Q. 支払い方法は何がありますか？
              <span className="transition-transform group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-4 pt-4 border-t-2 border-black text-gray-700 font-bold leading-relaxed">
              A. クレジットカード決済（Visa, Mastercard, American Express, JCB等）をご利用いただけます。決済は安全なStripeのシステムを通じて行われます。
            </p>
          </details>
          <details className="pop-card group">
            <summary className="list-none font-black text-xl cursor-pointer flex justify-between items-center">
              Q. ケーキの寄付オプションとは何ですか？
              <span className="transition-transform group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-4 pt-4 border-t-2 border-black text-gray-700 font-bold leading-relaxed">
              A. 現地のパフォーマーたちに本物のケーキをプレゼントするオプションです。動画の後半で、彼らがケーキを囲んで嬉しそうに食べる様子が収録されます。現地の仲間たちへの直接的なギフトにもなります。
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
