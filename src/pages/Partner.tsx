export default function Partner() {
  return (
    <main className="max-w-4xl mx-auto px-4 text-center pb-24">
      <section className="py-12 md:py-16 spring-in">
        <h1 className="pop-heading mb-4 leading-none">
          <span className="text-3xl block text-black">OFFICIAL PARTNER</span>
          モザンビークのいのちをつなぐ会
        </h1>
      </section>

      <section className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-left">
        <div className="aspect-video bg-gray-200 rounded-xl border-4 border-black mb-8 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80" 
            alt="モザンビークの支援活動" 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-black text-2xl mb-4 border-b-4 border-black inline-block pb-2">団体概要</h3>
            <p className="text-gray-700 font-bold leading-relaxed">
              「モザンビークのいのちをつなぐ会」は、アフリカ南東部に位置するモザンビーク共和国において、医療、教育、そして雇用創出の支援を行う一般社団法人です。現地の人々が自立して生活できる社会の実現を目指し、草の根の活動を続けています。
            </p>
          </div>
          
          <div>
            <h3 className="font-black text-2xl mb-4 border-b-4 border-black inline-block pb-2">主な活動内容</h3>
            <ul className="space-y-4 text-gray-700 font-bold">
              <li className="flex items-start gap-2">
                <span className="text-xl">🏥</span>
                <div>
                  <h4 className="text-black text-lg">医療支援</h4>
                  <p>現地の診療所への医療物資の提供や、衛生教育を通じた感染症予防活動を行っています。</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">📚</span>
                <div>
                  <h4 className="text-black text-lg">教育支援</h4>
                  <p>子どもたちが安全に学べる学校の建設や、学用品の寄付、奨学金制度の運営を行っています。</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">💼</span>
                <div>
                  <h4 className="text-black text-lg">雇用創出（当サービスとの連携）</h4>
                  <p>現地の若者たちをパフォーマーとして雇用し、正当な報酬を支払うことで、彼らの生活向上と経済的自立を直接的に支援しています。</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-2xl mb-4 border-b-4 border-black inline-block pb-2">AFRICA GIFTとの連携について</h3>
            <p className="text-gray-700 font-bold leading-relaxed mb-4">
              当サービス（AFRICA GIFT）は、サプライズ動画の制作を単なるエンターテインメントとして終わらせず、現地の確かな支援へと繋げるため、「モザンビークのいのちをつなぐ会」と公式にパートナーシップを結んでいます。
            </p>
            <p className="text-gray-700 font-bold leading-relaxed">
              動画の売上の一部は、パフォーマーへの正当な報酬として支払われるだけでなく、同団体を通じて現地の医療・教育支援活動に直接寄付されます。お客様の「誰かを喜ばせたい」という温かい気持ちが、海を越えてアフリカの未来を創る力に変わります。
            </p>
          </div>

          <div className="text-center pt-8 border-t-4 border-black">
            <a 
              href="https://tsunagukai.com/information/konnatokoro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-black text-white font-black py-4 px-12 rounded-full uppercase text-xl transition-transform hover:scale-105 active:scale-95 border-2 border-black shadow-[4px_4px_0_0_#ef4444]"
            >
              公式サイトで詳しく見る
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
