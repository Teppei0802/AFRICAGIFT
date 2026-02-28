import { useLanguage } from '../context/LanguageContext';

export default function Partner() {
  const { language } = useLanguage();

  const t = {
    ja: {
      title: 'OFFICIAL PARTNER',
      subtitle: 'モザンビークのいのちをつなぐ会',
      aboutTitle: '団体概要',
      aboutDesc: '「モザンビークのいのちをつなぐ会」は、アフリカ南東部に位置するモザンビーク共和国において、医療、教育、そして雇用創出の支援を行う一般社団法人です。現地の人々が自立して生活できる社会の実現を目指し、草の根の活動を続けています。',
      activitiesTitle: '主な活動内容',
      medicalTitle: '医療支援',
      medicalDesc: '現地の診療所への医療物資の提供や、衛生教育を通じた感染症予防活動を行っています。',
      eduTitle: '教育支援',
      eduDesc: '子どもたちが安全に学べる学校の建設や、学用品の寄付、奨学金制度の運営を行っています。',
      jobTitle: '雇用創出（当サービスとの連携）',
      jobDesc: '現地の若者たちをパフォーマーとして雇用し、正当な報酬を支払うことで、彼らの生活向上と経済的自立を直接的に支援しています。',
      collabTitle: 'AFRICA GIFTとの連携について',
      collabDesc1: '当サービス（AFRICA GIFT）は、サプライズ動画の制作を単なるエンターテインメントとして終わらせず、現地の確かな支援へと繋げるため、「モザンビークのいのちをつなぐ会」と公式にパートナーシップを結んでいます。',
      collabDesc2: '動画の売上の一部は、パフォーマーへの正当な報酬として支払われるだけでなく、同団体を通じて現地の医療・教育支援活動に直接寄付されます。お客様の「誰かを喜ばせたい」という温かい気持ちが、海を越えてアフリカの未来を創る力に変わります。',
      websiteBtn: '公式サイトで詳しく見る',
    },
    en: {
      title: 'OFFICIAL PARTNER',
      subtitle: 'Mozambique Inochi wo Tsunagu Kai',
      aboutTitle: 'About the Organization',
      aboutDesc: '"Mozambique Inochi wo Tsunagu Kai" is a general incorporated association that supports medical care, education, and job creation in the Republic of Mozambique, located in southeastern Africa. We continue grassroots activities aiming to realize a society where local people can live independently.',
      activitiesTitle: 'Main Activities',
      medicalTitle: 'Medical Support',
      medicalDesc: 'We provide medical supplies to local clinics and conduct infectious disease prevention activities through hygiene education.',
      eduTitle: 'Educational Support',
      eduDesc: 'We build schools where children can learn safely, donate school supplies, and operate scholarship programs.',
      jobTitle: 'Job Creation (Collaboration with our service)',
      jobDesc: 'By employing local youth as performers and paying them fair compensation, we directly support their livelihood improvement and economic independence.',
      collabTitle: 'About Collaboration with AFRICA GIFT',
      collabDesc1: 'Our service (AFRICA GIFT) has officially partnered with "Mozambique Inochi wo Tsunagu Kai" to ensure that the production of surprise videos does not end as mere entertainment, but leads to solid support for the local community.',
      collabDesc2: 'A portion of the video sales is not only paid as fair compensation to the performers, but also directly donated to local medical and educational support activities through the organization. Your warm feeling of "wanting to make someone happy" turns into the power to create the future of Africa across the sea.',
      websiteBtn: 'See details on the official website',
    },
    zh: {
      title: '官方合作伙伴',
      subtitle: '莫桑比克生命相连会',
      aboutTitle: '组织简介',
      aboutDesc: '“莫桑比克生命相连会”是一家在位于非洲东南部的莫桑比克共和国提供医疗、教育和创造就业支持的综合社团法人。我们继续开展基层活动，旨在实现当地人民能够独立生活的社会。',
      activitiesTitle: '主要活动',
      medicalTitle: '医疗支持',
      medicalDesc: '我们向当地诊所提供医疗用品，并通过卫生教育开展传染病预防活动。',
      eduTitle: '教育支持',
      eduDesc: '我们建设儿童可以安全学习的学校，捐赠学习用品，并运营奖学金计划。',
      jobTitle: '创造就业（与我们服务合作）',
      jobDesc: '通过雇佣当地青年作为表演者并支付他们公平的报酬，我们直接支持他们改善生计和实现经济独立。',
      collabTitle: '关于与AFRICA GIFT的合作',
      collabDesc1: '我们的服务（AFRICA GIFT）已与“莫桑比克生命相连会”正式合作，以确保惊喜视频的制作不仅停留在娱乐层面，还能为当地社区带来实质性的支持。',
      collabDesc2: '视频销售的一部分不仅作为公平的报酬支付给表演者，还通过该组织直接捐赠给当地的医疗和教育支持活动。您“想让某人开心”的温暖心意，将跨越海洋，转化为创造非洲未来的力量。',
      websiteBtn: '在官方网站上查看详情',
    }
  }[language];

  return (
    <main className="max-w-4xl mx-auto px-4 text-center pb-24">
      <section className="py-12 md:py-16 spring-in">
        <h1 className="pop-heading mb-4 leading-none">
          <span className="text-3xl block text-black">{t.title}</span>
          {t.subtitle}
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
            <h3 className="font-black text-2xl mb-4 border-b-4 border-black inline-block pb-2">{t.aboutTitle}</h3>
            <p className="text-gray-700 font-bold leading-relaxed">
              {t.aboutDesc}
            </p>
          </div>
          
          <div>
            <h3 className="font-black text-2xl mb-4 border-b-4 border-black inline-block pb-2">{t.activitiesTitle}</h3>
            <ul className="space-y-4 text-gray-700 font-bold">
              <li className="flex items-start gap-2">
                <span className="text-xl">🏥</span>
                <div>
                  <h4 className="text-black text-lg">{t.medicalTitle}</h4>
                  <p>{t.medicalDesc}</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">📚</span>
                <div>
                  <h4 className="text-black text-lg">{t.eduTitle}</h4>
                  <p>{t.eduDesc}</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">💼</span>
                <div>
                  <h4 className="text-black text-lg">{t.jobTitle}</h4>
                  <p>{t.jobDesc}</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-2xl mb-4 border-b-4 border-black inline-block pb-2">{t.collabTitle}</h3>
            <p className="text-gray-700 font-bold leading-relaxed mb-4">
              {t.collabDesc1}
            </p>
            <p className="text-gray-700 font-bold leading-relaxed">
              {t.collabDesc2}
            </p>
          </div>

          <div className="text-center pt-8 border-t-4 border-black">
            <a 
              href="https://tsunagukai.com/information/konnatokoro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-black text-white font-black py-4 px-12 rounded-full uppercase text-xl transition-transform hover:scale-105 active:scale-95 border-2 border-black shadow-[4px_4px_0_0_#ef4444]"
            >
              {t.websiteBtn}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
