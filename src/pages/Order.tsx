import { Link } from 'react-router-dom';
import { teams } from '../data/teams';

export default function Order() {
  return (
    <main className="max-w-6xl mx-auto px-4 text-center pb-24">
      {/* ヒーローセクション */}
      <section className="py-8 md:py-16 spring-in">
        <h1 className="pop-heading mb-2 md:mb-4 leading-none">
          <span className="text-lg md:text-3xl block text-black whitespace-nowrap">CHOOSE YOUR TEAM</span>
          <span className="text-sm md:text-2xl">チームを選ぶ</span>
        </h1>
        <p className="text-[10px] md:text-lg font-bold mt-2 md:mt-4 mb-4 md:mb-8 leading-tight md:leading-normal">
          個性豊かなパフォーマーたちが、あなたの想いを全力で届けます。<br />
          お好みのチームを選んで、動画の注文へ進んでください。
        </p>
      </section>

      {/* チーム一覧 */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-left">
        {teams.map((team) => (
          <Link 
            key={team.id} 
            to={`/order/${team.id}`} 
            className="pop-card p-2 md:p-6 flex flex-col hover:-translate-y-2 transition-transform group cursor-pointer"
          >
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden border-2 md:border-4 border-black mb-2 md:mb-4 relative">
              <img 
                src={team.image} 
                alt={team.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute top-1 left-1 md:top-2 md:left-2">
                <span className={`${team.tagColor} text-white px-1.5 py-0.5 md:px-3 md:py-1 text-[8px] md:text-sm font-black border md:border-2 border-black shadow-[1px_1px_0_0_#000] md:shadow-[2px_2px_0_0_#000]`}>
                  {team.tag}
                </span>
              </div>
            </div>
            
            <div className="flex-grow flex flex-col">
              <h4 className="text-sm md:text-lg font-black uppercase mb-1 md:mb-2 line-clamp-1 group-hover:text-red-500 transition-colors">{team.name}</h4>
              <p className="text-[7px] sm:text-[8px] md:text-xs leading-tight md:leading-relaxed text-gray-700 mb-1 md:mb-4 flex-grow line-clamp-2 md:line-clamp-none">
                {team.description}
              </p>
              
              <div className="flex flex-row items-end justify-between mb-2 md:mb-4">
                <div className="flex items-end gap-1 md:gap-2 whitespace-nowrap">
                  <span className="text-gray-400 line-through font-bold text-xs md:text-sm">¥{Math.floor(team.basePrice * 1.3).toLocaleString()}</span>
                  <p className="text-sm md:text-lg font-black text-red-500">¥{team.basePrice.toLocaleString()} <span className="text-[10px] md:text-xs font-bold text-black">〜</span></p>
                </div>
              </div>
              
              <div className="w-full bg-black text-white font-black py-1.5 md:py-2 text-[10px] md:text-sm rounded-full uppercase transition-transform group-hover:scale-105 group-active:scale-95 border md:border-2 border-black shadow-[2px_2px_0_0_#ef4444] md:shadow-[4px_4px_0_0_#ef4444] text-center block">
                このチームを選ぶ
              </div>
            </div>
          </Link>
        ))}
      </section>
      
      {/* オプション説明 */}
      <section className="mt-8 md:mt-16 bg-white border-4 border-black rounded-3xl p-4 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-left">
        <h2 className="text-xl md:text-2xl font-black mb-4 md:mb-6 uppercase italic border-b-4 border-black pb-2 inline-block">Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <h4 className="font-black text-[10px] sm:text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-1 md:gap-2 whitespace-nowrap">
              <span className="text-sm md:text-2xl">🎵</span> 音楽指定 (YouTube等) (+¥1,200)
            </h4>
            <p className="text-[8px] sm:text-[10px] md:text-sm text-gray-700">思い出の曲や好きな曲を指定して、オリジナルのダンス動画を作成します。</p>
          </div>
          <div>
            <h4 className="font-black text-[10px] sm:text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-1 md:gap-2 whitespace-nowrap">
              <span className="text-sm md:text-2xl">🎂</span> バースデーソング (+¥500)
            </h4>
            <p className="text-[8px] sm:text-[10px] md:text-sm text-gray-700">定番の「Happy Birthday to You」をパフォーマーが歌ってお祝いします。</p>
          </div>
          <div>
            <h4 className="font-black text-[10px] sm:text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-1 md:gap-2 whitespace-nowrap">
              <span className="text-sm md:text-2xl">📸</span> 写真プリントアウト (+¥1,000)
            </h4>
            <p className="text-[8px] sm:text-[10px] md:text-sm text-gray-700">主役の方の写真をA4サイズで印刷し、パフォーマーが手に持って動画に登場します。</p>
          </div>
          <div>
            <h4 className="font-black text-[10px] sm:text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-1 md:gap-2 whitespace-nowrap">
              <span className="text-sm md:text-2xl">💋</span> 写真へのキス (+¥200)
            </h4>
            <p className="text-[8px] sm:text-[10px] md:text-sm text-gray-700">プリントアウトした写真にパフォーマーが熱いキスを贈る、笑いを取れるオプションです。</p>
          </div>
          <div>
            <h4 className="font-black text-[10px] sm:text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-1 md:gap-2 whitespace-nowrap">
              <span className="text-sm md:text-2xl">🍰</span> 誕生日ケーキの寄付（小） (+¥1,500)
            </h4>
            <p className="text-[8px] sm:text-[10px] md:text-sm text-gray-700">パフォーマーたちに小さなケーキをプレゼントし、一緒に食べる様子を動画に収めます。</p>
          </div>
          <div>
            <h4 className="font-black text-[10px] sm:text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-1 md:gap-2 whitespace-nowrap">
              <span className="text-sm md:text-2xl">🎂</span> 誕生日ケーキの寄付（大） (+¥2,000)
            </h4>
            <p className="text-[8px] sm:text-[10px] md:text-sm text-gray-700">パフォーマーたちに大きなケーキをプレゼントし、みんなで盛大にお祝いする様子を動画に収めます。</p>
          </div>
        </div>
      </section>
    </main>
  );
}
