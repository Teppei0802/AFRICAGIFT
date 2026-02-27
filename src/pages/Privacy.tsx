export default function Privacy() {
  return (
    <main className="max-w-4xl mx-auto px-4 text-center pb-24">
      <section className="py-12 md:py-16 spring-in">
        <h1 className="pop-heading mb-4 leading-none">
          <span className="text-3xl block text-black">PRIVACY POLICY</span>
          プライバシーポリシー
        </h1>
      </section>

      <section className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-left">
        <div className="space-y-8">
          <div>
            <h3 className="font-black text-2xl mb-4 border-b-4 border-black inline-block pb-2">1. 個人情報の収集について</h3>
            <p className="text-gray-700 font-bold leading-relaxed">
              当サービスでは、お客様がサービスをご利用いただく際に、お名前、メールアドレス、電話番号、決済情報、および動画制作に必要な情報（メッセージ内容や写真など）を収集いたします。
            </p>
          </div>
          
          <div>
            <h3 className="font-black text-2xl mb-4 border-b-4 border-black inline-block pb-2">2. 個人情報の利用目的</h3>
            <p className="text-gray-700 font-bold leading-relaxed">
              収集した個人情報は、以下の目的で利用いたします。<br />
              ・動画の制作および納品のため<br />
              ・お客様からのお問い合わせへの対応のため<br />
              ・サービスの改善および新サービスのお知らせのため<br />
              ・決済処理および不正利用防止のため
            </p>
          </div>

          <div>
            <h3 className="font-black text-2xl mb-4 border-b-4 border-black inline-block pb-2">3. 個人情報の第三者への提供</h3>
            <p className="text-gray-700 font-bold leading-relaxed">
              当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。ただし、動画制作に必要な範囲内で、現地のパフォーマーや制作スタッフに対して必要最小限の情報（メッセージ内容や写真）を共有いたします。
            </p>
          </div>

          <div>
            <h3 className="font-black text-2xl mb-4 border-b-4 border-black inline-block pb-2">4. 個人情報の管理</h3>
            <p className="text-gray-700 font-bold leading-relaxed">
              お客様の個人情報は、不正アクセス、紛失、破壊、改ざん、および漏洩を防止するための適切なセキュリティ対策を講じて管理いたします。
            </p>
          </div>

          <div>
            <h3 className="font-black text-2xl mb-4 border-b-4 border-black inline-block pb-2">5. プライバシーポリシーの変更</h3>
            <p className="text-gray-700 font-bold leading-relaxed">
              当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、本ウェブサイトに掲載した時点から効力を生じるものとします。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
