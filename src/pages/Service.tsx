export default function Service() {
  return (
    <main className="max-w-6xl mx-auto px-4 text-center">
      {/* ヒーローセクション */}
      <section className="py-12 md:py-20 spring-in">
        <h1 className="pop-heading mb-6 leading-none">
          <span className="text-3xl block text-black">OUR SERVICE</span>
          サービス概要
        </h1>
        <div className="max-w-4xl mx-auto text-lg font-bold mt-8 mb-12 leading-relaxed text-left md:text-center">
          <p className="mb-4 md:whitespace-nowrap">
            本サービスは、アフリカの仲間たちがあなたの誕生日を全力でお祝いする、世界をつなぐバースデーサプライズサービスです。
          </p>
          <p className="mb-4 md:whitespace-nowrap">
            距離や国境を越えて、世界共通の合言葉 ―― 「HAPPY BIRTHDAY」 を一緒に届けます。単なる動画メッセージではありません。
          </p>
          <p className="md:whitespace-nowrap">
            現地のダンサーやコミュニティの仲間たちが、あなたや大切な人のためだけに、心を込めてパフォーマンスを行います。
          </p>
        </div>
      </section>

      {/* サービス内容 */}
      <section className="py-12 text-left space-y-12">
        <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-black mb-6 border-b-4 border-black pb-2 flex items-center gap-3">
            <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xl font-black shrink-0">1</span>
            オーダーメイドのバースデー動画
          </h2>
          <ul className="list-disc list-inside space-y-2 font-bold text-gray-800 text-lg ml-4">
            <li>お名前入りメッセージ</li>
            <li>ダンス＆歌によるお祝い</li>
            <li>現地の青空や街並みを背景に撮影</li>
            <li>世界に一つだけの特別な映像</li>
          </ul>
        </div>

        <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-black mb-6 border-b-4 border-black pb-2 flex items-center gap-3">
            <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xl font-black shrink-0">2</span>
            選べるパフォーマンススタイル
          </h2>
          <p className="font-bold mb-4 text-gray-800">あなたの想いに合わせて、世界に一つの演出をお届けします。</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 font-bold text-gray-800 ml-4">
            <div className="flex items-center gap-2 md:whitespace-nowrap"><span className="text-red-500">✔</span> MUSCLE BROTHERS（筋肉系エネルギッシュチーム）</div>
            <div className="flex items-center gap-2 md:whitespace-nowrap"><span className="text-red-500">✔</span> AFRICAN LADIES（華やかな女性ダンサーチーム）</div>
            <div className="flex items-center gap-2 md:whitespace-nowrap"><span className="text-red-500">✔</span> TRADITIONAL DANCERS（伝統的なダンスチーム）</div>
            <div className="flex items-center gap-2 md:whitespace-nowrap"><span className="text-red-500">✔</span> STREET STYLE BOYS（クールなストリート系チーム）</div>
            <div className="flex items-center gap-2 md:whitespace-nowrap"><span className="text-red-500">✔</span> LOVE STYLE BOYS（愛をテーマにしたキュートなチーム）</div>
            <div className="flex items-center gap-2 md:whitespace-nowrap"><span className="text-red-500">✔</span> WILD MUSCLE BROTHERS（野性味あふれるマッスルチーム）</div>
            <div className="flex items-center gap-2 md:whitespace-nowrap"><span className="text-red-500">✔</span> SPORTS BOYS（スポーティなボーイズチーム）</div>
            <div className="flex items-center gap-2 md:whitespace-nowrap"><span className="text-red-500">✔</span> COLORFUL LADIES（色鮮やかなレディースチーム）</div>
          </div>
        </div>

        <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-black mb-6 border-b-4 border-black pb-2 flex items-center gap-3">
            <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xl font-black shrink-0">3</span>
            オプションサービス
          </h2>
          <ul className="space-y-3 font-bold text-gray-800 text-lg ml-4">
            <li className="flex items-center gap-2"><span className="text-2xl">🎵</span> 音楽指定（Youtube等）</li>
            <li className="flex items-center gap-2"><span className="text-2xl">🎤</span> バースデーソング</li>
            <li className="flex items-center gap-2"><span className="text-2xl">📸</span> 写真プリントアウト</li>
            <li className="flex items-center gap-2"><span className="text-2xl">💋</span> 写真へのキス</li>
            <li className="flex items-center gap-2"><span className="text-2xl">🍰</span> 誕生日ケーキの寄付（小）</li>
            <li className="flex items-center gap-2"><span className="text-2xl">🎂</span> 誕生日ケーキの寄付（大）</li>
          </ul>
        </div>

        <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-black mb-6 border-b-4 border-black pb-2 flex items-center gap-2">
            <span className="text-3xl">🤝</span> 現地と密接に関わるリアルなサービス
          </h2>
          <p className="font-bold text-gray-800 leading-relaxed mb-4">
            このプロジェクトは、単なる外注型の動画制作ではありません。<br />
            私たちは現地の仲間と直接つながり、撮影チーム、ダンサー、コミュニティメンバー、地域リーダーと日常的にコミュニケーションを取りながら運営しています。
          </p>
          <p className="font-bold text-gray-800 leading-relaxed mb-4">
            売上の一部は、以下のように現地コミュニティへ還元されています。
          </p>
          <ul className="space-y-2 font-bold text-gray-800 text-lg ml-4 mb-6">
            <li className="flex items-center gap-2"><span className="text-2xl">🎓</span> 教育支援</li>
            <li className="flex items-center gap-2"><span className="text-2xl">🍽</span> 食料支援</li>
            <li className="flex items-center gap-2"><span className="text-2xl">👕</span> 衣類・生活物資支援</li>
            <li className="flex items-center gap-2"><span className="text-2xl">🎂</span> 地域の誕生日イベント開催</li>
          </ul>
          <p className="font-black text-xl text-red-500 mt-4">
            あなたの「おめでとう」が、現地の誰かの笑顔や未来につながります。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-2xl font-black mb-6 border-b-4 border-black pb-2 flex items-center gap-2">
              <span className="text-3xl">🌎</span> このサービスが生まれた想い
            </h2>
            <p className="font-bold text-gray-800 leading-relaxed md:whitespace-nowrap overflow-x-auto">
              世界には距離があります。でも、感情に距離はありません。<br />
              誕生日という世界共通の特別な日を通して、日本とアフリカ、都市と村、子どもと大人をつなぎたい。<br />
              「祝う」という行為は、文化を超えて人をつなぐ力があります。
            </p>
          </div>

          <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-2xl font-black mb-6 border-b-4 border-black pb-2 flex items-center gap-2">
              <span className="text-3xl">💛</span> こんな方におすすめ
            </h2>
            <ul className="space-y-3 font-bold text-gray-800 text-lg ml-4">
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✔</span> 大切な人に忘れられないサプライズをしたい</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✔</span> 海外とのつながりを感じたい</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✔</span> 意味のあるギフトを贈りたい</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✔</span> 社会貢献にも関わりたい</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ビジョン */}
      <section className="py-16 bg-white border-4 border-black rounded-3xl p-8 my-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="pop-heading text-4xl mb-8">Our Vision</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-2xl font-black mb-6 leading-relaxed">
            「笑顔の連鎖で、世界を少しだけ良くする」
          </p>
          <p className="text-left leading-relaxed mb-6">
            私たちのサービスは、単なる「面白い動画」の販売ではありません。<br />
            動画を受け取った人が笑顔になり、その対価がアフリカのパフォーマーの生活を豊かにし、彼らもまた笑顔になる。このポジティブなエネルギーの循環こそが、私たちの事業の核心です。
          </p>
          <div className="inline-block bg-black text-white font-black py-3 px-6 rounded-full uppercase transform rotate-2">
            Make the world smile!
          </div>
        </div>
      </section>
    </main>
  );
}
