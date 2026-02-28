import { useLanguage } from '../context/LanguageContext';

export default function Service() {
  const { language } = useLanguage();

  const t = {
    ja: {
      title: 'OUR SERVICE',
      subtitle: 'サービス概要',
      intro1: '本サービスは、アフリカの仲間たちがあなたの誕生日を全力でお祝いする、世界をつなぐバースデーサプライズサービスです。',
      intro2: '距離や国境を越えて、世界共通の合言葉 ―― 「HAPPY BIRTHDAY」 を一緒に届けます。単なる動画メッセージではありません。',
      intro3: '現地のダンサーやコミュニティの仲間たちが、あなたや大切な人のためだけに、心を込めてパフォーマンスを行います。',
      sec1Title: 'オーダーメイドのバースデー動画',
      sec1Item1: 'お名前入りメッセージ',
      sec1Item2: 'ダンス＆歌によるお祝い',
      sec1Item3: '現地の青空や街並みを背景に撮影',
      sec1Item4: '世界に一つだけの特別な映像',
      sec2Title: '選べるパフォーマンススタイル',
      sec2Desc: 'あなたの想いに合わせて、世界に一つの演出をお届けします。',
      sec3Title: 'オプションサービス',
      sec3Item1: '音楽指定（Youtube等）',
      sec3Item2: 'バースデーソング',
      sec3Item3: '写真プリントアウト',
      sec3Item4: '写真へのキス',
      sec3Item5: '誕生日ケーキの寄付（小）',
      sec3Item6: '誕生日ケーキの寄付（大）',
      sec4Title: '現地と密接に関わるリアルなサービス',
      sec4Desc1: 'このプロジェクトは、単なる外注型の動画制作ではありません。\n私たちは現地の仲間と直接つながり、撮影チーム、ダンサー、コミュニティメンバー、地域リーダーと日常的にコミュニケーションを取りながら運営しています。',
      sec4Desc2: '売上の一部は、以下のように現地コミュニティへ還元されています。',
      sec4Item1: '教育支援',
      sec4Item2: '食料支援',
      sec4Item3: '衣類・生活物資支援',
      sec4Item4: '地域の誕生日イベント開催',
      sec4Highlight: 'あなたの「おめでとう」が、現地の誰かの笑顔や未来につながります。',
      sec5Title: 'このサービスが生まれた想い',
      sec5Desc: '世界には距離があります。でも、感情に距離はありません。\n誕生日という世界共通の特別な日を通して、日本とアフリカ、都市と村、子どもと大人をつなぎたい。\n\n「誰かを喜ばせたい」というあなたの温かい気持ちが、海を越えて、アフリカのダンサーたちの生活を支え、子どもたちの未来を創る力に変わります。\n\n「祝う」という行為は、文化を超えて人をつなぐ力があります。',
      sec6Title: 'こんな方におすすめ',
      sec6Item1: '大切な人に忘れられないサプライズをしたい',
      sec6Item2: '海外とのつながりを感じたい',
      sec6Item3: '意味のあるギフトを贈りたい',
      sec6Item4: '社会貢献にも関わりたい',
      visionTitle: 'Our Vision',
      visionSubtitle: '「笑顔の連鎖で、世界を少しだけ良くする」',
      visionDesc: '私たちのサービスは、単なる「面白い動画」の販売ではありません。\n動画を受け取った人が笑顔になり、その対価がアフリカのパフォーマーの生活を豊かにし、彼らもまた笑顔になる。このポジティブなエネルギーの循環こそが、私たちの事業の核心です。',
      teams: {
        muscle: 'MUSCLE BROTHERS（筋肉系エネルギッシュチーム）',
        ladies: 'AFRICAN LADIES（華やかな女性ダンサーチーム）',
        traditional: 'TRADITIONAL DANCERS（伝統的なダンスチーム）',
        street: 'STREET STYLE BOYS（クールなストリート系チーム）',
        love: 'LOVE STYLE BOYS（愛をテーマにしたキュートなチーム）',
        wild: 'WILD MUSCLE BROTHERS（野性味あふれるマッスルチーム）',
        sports: 'SPORTS BOYS（スポーティなボーイズチーム）',
        colorful: 'COLORFUL LADIES（色鮮やかなレディースチーム）'
      }
    },
    en: {
      title: 'OUR SERVICE',
      subtitle: 'Service Overview',
      intro1: 'This service is a birthday surprise service that connects the world, where our friends in Africa celebrate your birthday with all their might.',
      intro2: 'Beyond distance and borders, we deliver the universal password ―― "HAPPY BIRTHDAY" together. It\'s not just a video message.',
      intro3: 'Local dancers and community members perform wholeheartedly just for you or your loved ones.',
      sec1Title: 'Custom-made Birthday Video',
      sec1Item1: 'Message with your name',
      sec1Item2: 'Celebration with dance & song',
      sec1Item3: 'Shot against the backdrop of local blue skies and streets',
      sec1Item4: 'A special, one-of-a-kind video in the world',
      sec2Title: 'Selectable Performance Styles',
      sec2Desc: 'We will deliver a one-of-a-kind performance tailored to your feelings.',
      sec3Title: 'Optional Services',
      sec3Item1: 'Music specification (Youtube, etc.)',
      sec3Item2: 'Birthday song',
      sec3Item3: 'Photo printout',
      sec3Item4: 'Kiss on the photo',
      sec3Item5: 'Birthday cake donation (Small)',
      sec3Item6: 'Birthday cake donation (Large)',
      sec4Title: 'A Real Service Closely Connected to the Local Community',
      sec4Desc1: 'This project is not just outsourced video production.\nWe connect directly with our local friends and operate while communicating daily with the filming team, dancers, community members, and local leaders.',
      sec4Desc2: 'A portion of the sales is returned to the local community as follows.',
      sec4Item1: 'Educational support',
      sec4Item2: 'Food support',
      sec4Item3: 'Clothing and daily necessities support',
      sec4Item4: 'Hosting local birthday events',
      sec4Highlight: 'Your "Congratulations" will lead to someone\'s smile and future locally.',
      sec5Title: 'The Thought Behind This Service',
      sec5Desc: 'There is distance in the world. But there is no distance in emotions.\nThrough the universal special day of a birthday, we want to connect Japan and Africa, cities and villages, children and adults.\n\nYour warm feeling of "wanting to make someone happy" crosses the sea, supports the lives of African dancers, and turns into the power to create the future of children.\n\nThe act of "celebrating" has the power to connect people across cultures.',
      sec6Title: 'Recommended for',
      sec6Item1: 'Those who want to give an unforgettable surprise to a loved one',
      sec6Item2: 'Those who want to feel connected to overseas',
      sec6Item3: 'Those who want to give a meaningful gift',
      sec6Item4: 'Those who want to be involved in social contribution',
      visionTitle: 'Our Vision',
      visionSubtitle: '"Make the world a little better with a chain of smiles"',
      visionDesc: 'Our service is not just selling "funny videos".\nThe person who receives the video smiles, and the compensation enriches the lives of African performers, making them smile too. This circulation of positive energy is the core of our business.',
      teams: {
        muscle: 'MUSCLE BROTHERS (Energetic muscle team)',
        ladies: 'AFRICAN LADIES (Gorgeous female dancer team)',
        traditional: 'TRADITIONAL DANCERS (Traditional dance team)',
        street: 'STREET STYLE BOYS (Cool street style team)',
        love: 'LOVE STYLE BOYS (Cute team themed on love)',
        wild: 'WILD MUSCLE BROTHERS (Wild muscle team)',
        sports: 'SPORTS BOYS (Sporty boys team)',
        colorful: 'COLORFUL LADIES (Colorful ladies team)'
      }
    },
    zh: {
      title: '我们的服务',
      subtitle: '服务概述',
      intro1: '这项服务是一个连接世界的生日惊喜服务，我们在非洲的朋友们将全力以赴地庆祝您的生日。',
      intro2: '跨越距离和国界，我们共同传递全世界通用的密码 ―― “HAPPY BIRTHDAY”。这不仅仅是一段视频信息。',
      intro3: '当地的舞者和社区成员将全心全意地为您或您所爱的人表演。',
      sec1Title: '定制生日视频',
      sec1Item1: '带有您名字的信息',
      sec1Item2: '通过舞蹈和歌曲庆祝',
      sec1Item3: '以当地的蓝天和街道为背景拍摄',
      sec1Item4: '世界上独一无二的特别视频',
      sec2Title: '可选的表演风格',
      sec2Desc: '我们将根据您的心意提供独一无二的表演。',
      sec3Title: '可选服务',
      sec3Item1: '指定音乐（Youtube等）',
      sec3Item2: '生日歌',
      sec3Item3: '照片打印',
      sec3Item4: '亲吻照片',
      sec3Item5: '生日蛋糕捐赠（小）',
      sec3Item6: '生日蛋糕捐赠（大）',
      sec4Title: '与当地社区紧密相连的真实服务',
      sec4Desc1: '这个项目不仅仅是外包视频制作。\n我们直接与当地朋友联系，在与拍摄团队、舞者、社区成员和当地领导人进行日常沟通的同时进行运营。',
      sec4Desc2: '部分销售额将通过以下方式回馈当地社区。',
      sec4Item1: '教育支持',
      sec4Item2: '食品支持',
      sec4Item3: '服装和日用品支持',
      sec4Item4: '举办当地生日活动',
      sec4Highlight: '您的“祝贺”将为当地带来某人的笑容和未来。',
      sec5Title: '这项服务背后的想法',
      sec5Desc: '世界上有距离。但情感没有距离。\n通过生日这个全世界通用的特殊日子，我们希望连接日本和非洲，城市和乡村，儿童和成人。\n\n您“想让某人开心”的温暖心意跨越海洋，支持非洲舞者的生活，并转化为创造儿童未来的力量。\n\n“庆祝”的行为具有跨越文化连接人们的力量。',
      sec6Title: '推荐给',
      sec6Item1: '想给所爱的人一个难忘惊喜的人',
      sec6Item2: '想感受与海外联系的人',
      sec6Item3: '想赠送有意义礼物的人',
      sec6Item4: '想参与社会贡献的人',
      visionTitle: '我们的愿景',
      visionSubtitle: '“用微笑的连锁让世界变得更好一点”',
      visionDesc: '我们的服务不仅仅是销售“搞笑视频”。\n收到视频的人笑了，报酬丰富了非洲表演者的生活，让他们也笑了。这种正能量的循环是我们业务的核心。',
      teams: {
        muscle: 'MUSCLE BROTHERS（充满活力的肌肉团队）',
        ladies: 'AFRICAN LADIES（华丽的女性舞者团队）',
        traditional: 'TRADITIONAL DANCERS（传统舞蹈团队）',
        street: 'STREET STYLE BOYS（酷炫的街头风格团队）',
        love: 'LOVE STYLE BOYS（以爱为主题的可爱团队）',
        wild: 'WILD MUSCLE BROTHERS（狂野的肌肉团队）',
        sports: 'SPORTS BOYS（运动男孩团队）',
        colorful: 'COLORFUL LADIES（色彩缤纷的女士团队）'
      }
    }
  }[language];

  return (
    <main className="max-w-6xl mx-auto px-4 text-center">
      {/* ヒーローセクション */}
      <section className="py-8 md:py-20 spring-in">
        <h1 className="pop-heading mb-2 md:mb-6 leading-none">
          <span className="text-lg md:text-3xl block text-black whitespace-nowrap">{t.title}</span>
          <span className="text-sm md:text-2xl">{t.subtitle}</span>
        </h1>
        <div className="max-w-3xl mx-auto text-sm md:text-lg font-bold mt-4 md:mt-8 mb-6 md:mb-12 leading-relaxed text-justify md:text-center px-2 md:px-0">
          <p className="mb-4">
            {t.intro1}
          </p>
          <p className="mb-4">
            {t.intro2}
          </p>
          <p>
            {t.intro3}
          </p>
        </div>
      </section>

      {/* サービス内容 */}
      <section className="py-6 md:py-12 text-left space-y-6 md:space-y-12">
        <div className="bg-white border-4 border-black rounded-3xl p-4 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-lg md:text-2xl font-black mb-4 md:mb-6 border-b-4 border-black pb-2 flex items-center gap-2 md:gap-3">
            <span className="w-6 h-6 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center text-sm md:text-xl font-black shrink-0">1</span>
            {t.sec1Title}
          </h2>
          <ul className="list-disc list-inside space-y-1 md:space-y-2 font-bold text-gray-800 text-sm md:text-lg ml-1 md:ml-4">
            <li>{t.sec1Item1}</li>
            <li>{t.sec1Item2}</li>
            <li>{t.sec1Item3}</li>
            <li>{t.sec1Item4}</li>
          </ul>
        </div>

        <div className="bg-white border-4 border-black rounded-3xl p-4 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-lg md:text-2xl font-black mb-4 md:mb-6 border-b-4 border-black pb-2 flex items-center gap-2 md:gap-3">
            <span className="w-6 h-6 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center text-sm md:text-xl font-black shrink-0">2</span>
            {t.sec2Title}
          </h2>
          <p className="font-bold mb-3 md:mb-4 text-gray-800 text-xs md:text-base">{t.sec2Desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 font-bold text-gray-800 text-xs md:text-base ml-1 md:ml-4">
            <div className="flex items-center gap-1 md:gap-2 lg:whitespace-nowrap"><span className="text-red-500 shrink-0">✔</span> {t.teams.muscle}</div>
            <div className="flex items-center gap-1 md:gap-2 lg:whitespace-nowrap"><span className="text-red-500 shrink-0">✔</span> {t.teams.ladies}</div>
            <div className="flex items-center gap-1 md:gap-2 lg:whitespace-nowrap"><span className="text-red-500 shrink-0">✔</span> {t.teams.traditional}</div>
            <div className="flex items-center gap-1 md:gap-2 lg:whitespace-nowrap"><span className="text-red-500 shrink-0">✔</span> {t.teams.street}</div>
            <div className="flex items-center gap-1 md:gap-2 lg:whitespace-nowrap"><span className="text-red-500 shrink-0">✔</span> {t.teams.love}</div>
            <div className="flex items-center gap-1 md:gap-2 lg:whitespace-nowrap"><span className="text-red-500 shrink-0">✔</span> {t.teams.wild}</div>
            <div className="flex items-center gap-1 md:gap-2 lg:whitespace-nowrap"><span className="text-red-500 shrink-0">✔</span> {t.teams.sports}</div>
            <div className="flex items-center gap-1 md:gap-2 lg:whitespace-nowrap"><span className="text-red-500 shrink-0">✔</span> {t.teams.colorful}</div>
          </div>
        </div>

        <div className="bg-white border-4 border-black rounded-3xl p-4 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-lg md:text-2xl font-black mb-4 md:mb-6 border-b-4 border-black pb-2 flex items-center gap-2 md:gap-3">
            <span className="w-6 h-6 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center text-sm md:text-xl font-black shrink-0">3</span>
            {t.sec3Title}
          </h2>
          <ul className="space-y-2 md:space-y-3 font-bold text-gray-800 text-sm md:text-lg ml-1 md:ml-4">
            <li className="flex items-center gap-2"><span className="text-lg md:text-2xl">🎵</span> {t.sec3Item1}</li>
            <li className="flex items-center gap-2"><span className="text-lg md:text-2xl">🎤</span> {t.sec3Item2}</li>
            <li className="flex items-center gap-2"><span className="text-lg md:text-2xl">📸</span> {t.sec3Item3}</li>
            <li className="flex items-center gap-2"><span className="text-lg md:text-2xl">💋</span> {t.sec3Item4}</li>
            <li className="flex items-center gap-2"><span className="text-lg md:text-2xl">🍰</span> {t.sec3Item5}</li>
            <li className="flex items-center gap-2"><span className="text-lg md:text-2xl">🎂</span> {t.sec3Item6}</li>
          </ul>
        </div>

        <div className="bg-white border-4 border-black rounded-3xl p-4 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-lg md:text-2xl font-black mb-4 md:mb-6 border-b-4 border-black pb-2 flex items-center gap-2">
            <span className="text-xl md:text-3xl">🤝</span> {t.sec4Title}
          </h2>
          <p className="font-bold text-gray-800 leading-relaxed mb-3 md:mb-4 text-xs md:text-base whitespace-pre-line">
            {t.sec4Desc1}
          </p>
          <p className="font-bold text-gray-800 leading-relaxed mb-3 md:mb-4 text-xs md:text-base">
            {t.sec4Desc2}
          </p>
          <ul className="space-y-1 md:space-y-2 font-bold text-gray-800 text-sm md:text-lg ml-1 md:ml-4 mb-4 md:mb-6">
            <li className="flex items-center gap-2"><span className="text-lg md:text-2xl">🎓</span> {t.sec4Item1}</li>
            <li className="flex items-center gap-2"><span className="text-lg md:text-2xl">🍽</span> {t.sec4Item2}</li>
            <li className="flex items-center gap-2"><span className="text-lg md:text-2xl">👕</span> {t.sec4Item3}</li>
            <li className="flex items-center gap-2"><span className="text-lg md:text-2xl">🎂</span> {t.sec4Item4}</li>
          </ul>
          <p className="font-black text-sm md:text-xl text-red-500 mt-2 md:mt-4">
            {t.sec4Highlight}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="bg-white border-4 border-black rounded-3xl p-4 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-lg md:text-2xl font-black mb-4 md:mb-6 border-b-4 border-black pb-2 flex items-center gap-2">
              <span className="text-xl md:text-3xl">🌎</span> {t.sec5Title}
            </h2>
            <p className="font-bold text-gray-800 leading-relaxed text-xs md:text-base whitespace-pre-line">
              {t.sec5Desc}
            </p>
          </div>

          <div className="bg-white border-4 border-black rounded-3xl p-4 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-lg md:text-2xl font-black mb-4 md:mb-6 border-b-4 border-black pb-2 flex items-center gap-2">
              <span className="text-xl md:text-3xl">💛</span> {t.sec6Title}
            </h2>
            <ul className="space-y-2 md:space-y-3 font-bold text-gray-800 text-sm md:text-lg ml-1 md:ml-4">
              <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 shrink-0">✔</span> {t.sec6Item1}</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 shrink-0">✔</span> {t.sec6Item2}</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 shrink-0">✔</span> {t.sec6Item3}</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5 shrink-0">✔</span> {t.sec6Item4}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ビジョン */}
      <section className="py-8 md:py-16 bg-white border-4 border-black rounded-3xl p-4 md:p-8 my-8 md:my-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="pop-heading text-2xl md:text-4xl mb-4 md:mb-8">{t.visionTitle}</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-2xl font-black mb-4 md:mb-6 leading-relaxed">
            {t.visionSubtitle}
          </p>
          <p className="text-left leading-relaxed mb-4 md:mb-6 text-xs md:text-base font-bold text-gray-800 whitespace-pre-line">
            {t.visionDesc}
          </p>
          <div className="inline-block bg-black text-white font-black py-2 md:py-3 px-4 md:px-6 rounded-full uppercase transform rotate-2 text-xs md:text-base">
            Make the world smile!
          </div>
        </div>
      </section>
    </main>
  );
}
