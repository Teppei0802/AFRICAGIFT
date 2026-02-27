import { Link } from 'react-router-dom';
import { teams } from '../data/teams';

export default function Order() {
  return (
    <main className="max-w-4xl mx-auto px-4 text-center pb-24">
      {/* ヒーローセクション */}
      <section className="py-12 md:py-16 spring-in">
        <h1 className="pop-heading mb-4 leading-none">
          <span className="text-3xl block text-black">CHOOSE YOUR TEAM</span>
          チームを選ぶ
        </h1>
        <p className="text-lg font-bold mt-4 mb-8">
          個性豊かなパフォーマーたちが、あなたの想いを全力で届けます。<br className="hidden md:block" />
          お好みのチームを選んで、動画の注文へ進んでください。
        </p>
      </section>

      {/* チーム一覧 */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {teams.map((team) => (
          <Link 
            key={team.id} 
            to={`/order/${team.id}`} 
            className="pop-card flex flex-col hover:-translate-y-2 transition-transform group cursor-pointer"
          >
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden border-4 border-black mb-4 relative">
              <img 
                src={team.image} 
                alt={team.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute top-2 left-2">
                <span className={`${team.tagColor} text-white px-3 py-1 text-sm font-black border-2 border-black shadow-[2px_2px_0_0_#000]`}>
                  {team.tag}
                </span>
              </div>
            </div>
            
            <div className="flex-grow flex flex-col">
              <h4 className="text-2xl font-black uppercase mb-2 line-clamp-1 group-hover:text-red-500 transition-colors">{team.name}</h4>
              <p className="text-sm leading-relaxed text-gray-700 mb-4 flex-grow">
                {team.description}
              </p>
              
              <div className="flex items-end justify-between mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-gray-400 line-through font-bold text-lg">¥{Math.floor(team.basePrice * 1.3).toLocaleString()}</span>
                  <p className="text-2xl font-black text-red-500">¥{team.basePrice.toLocaleString()} <span className="text-sm font-bold text-black">〜</span></p>
                </div>
              </div>
              
              <div className="w-full bg-black text-white font-black py-3 rounded-full uppercase transition-transform group-hover:scale-105 group-active:scale-95 border-2 border-black shadow-[4px_4px_0_0_#ef4444] text-center block">
                このチームを選ぶ
              </div>
            </div>
          </Link>
        ))}
      </section>
      
      {/* オプション説明 */}
      <section className="mt-16 bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-left">
        <h2 className="text-2xl font-black mb-6 uppercase italic border-b-4 border-black pb-2 inline-block">Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-black text-lg mb-2 flex items-center gap-2">
              <span className="text-2xl">🎵</span> 音楽指定 (YouTube等) (+¥1,200)
            </h4>
            <p className="text-sm text-gray-700">思い出の曲や好きな曲を指定して、オリジナルのダンス動画を作成します。</p>
          </div>
          <div>
            <h4 className="font-black text-lg mb-2 flex items-center gap-2">
              <span className="text-2xl">🎂</span> バースデーソング (+¥500)
            </h4>
            <p className="text-sm text-gray-700">定番の「Happy Birthday to You」をパフォーマーが歌ってお祝いします。</p>
          </div>
          <div>
            <h4 className="font-black text-lg mb-2 flex items-center gap-2">
              <span className="text-2xl">📸</span> 写真プリントアウト (+¥1,000)
            </h4>
            <p className="text-sm text-gray-700">主役の方の写真をA4サイズで印刷し、パフォーマーが手に持って動画に登場します。</p>
          </div>
          <div>
            <h4 className="font-black text-lg mb-2 flex items-center gap-2">
              <span className="text-2xl">💋</span> 写真へのキス (+¥200)
            </h4>
            <p className="text-sm text-gray-700">プリントアウトした写真にパフォーマーが熱いキスを贈る、笑いを取れるオプションです。</p>
          </div>
          <div>
            <h4 className="font-black text-lg mb-2 flex items-center gap-2">
              <span className="text-2xl">🍰</span> 誕生日ケーキの寄付（小） (+¥1,500)
            </h4>
            <p className="text-sm text-gray-700">パフォーマーたちに小さなケーキをプレゼントし、一緒に食べる様子を動画に収めます。</p>
          </div>
          <div>
            <h4 className="font-black text-lg mb-2 flex items-center gap-2">
              <span className="text-2xl">🎂</span> 誕生日ケーキの寄付（大） (+¥2,000)
            </h4>
            <p className="text-sm text-gray-700">パフォーマーたちに大きなケーキをプレゼントし、みんなで盛大にお祝いする様子を動画に収めます。</p>
          </div>
        </div>
      </section>
    </main>
  );
}
