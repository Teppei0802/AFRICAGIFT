export default function Terms() {
  return (
    <main className="max-w-4xl mx-auto px-4 text-center pb-24">
      <section className="py-12 md:py-16 spring-in">
        <h1 className="pop-heading mb-4 leading-none">
          <span className="text-3xl block text-black">TERMS OF SERVICE</span>
          利用規約
        </h1>
      </section>

      <section className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-left">
        <div className="space-y-8">
          <div>
            <h3 className="font-black text-2xl mb-4 border-b-4 border-black inline-block pb-2">第1条 適用範囲</h3>
            <p className="text-gray-700 font-bold leading-relaxed">
              本利用規約は、AFRICA GIFT（以下「当サービス」）が提供するすべてのサービスに適用されます。ユーザーは、本規約に同意した上で当サービスを利用するものとします。
            </p>
          </div>
          
          <div>
            <h3 className="font-black text-2xl mb-4 border-b-4 border-black inline-block pb-2">第2条 サービスの利用</h3>
            <p className="text-gray-700 font-bold leading-relaxed">
              当サービスは、ユーザーからの依頼に基づき、アフリカのパフォーマーによるオーダーメイドの動画メッセージを制作・提供するサービスです。ユーザーは、注文時に正確な情報を提供し、指定された料金を支払うものとします。
            </p>
          </div>

          <div>
            <h3 className="font-black text-2xl mb-4 border-b-4 border-black inline-block pb-2">第3条 禁止事項</h3>
            <p className="text-gray-700 font-bold leading-relaxed">
              ユーザーは、以下の行為を行ってはならないものとします。<br />
              ・公序良俗に反する内容、差別的な表現、パフォーマーの尊厳を傷つける内容の依頼<br />
              ・法令に違反する行為、またはその恐れのある行為<br />
              ・当サービス、他のユーザー、または第三者の権利を侵害する行為<br />
              ・虚偽の情報を提供する行為<br />
              ・その他、当社が不適切と判断する行為
            </p>
          </div>

          <div>
            <h3 className="font-black text-2xl mb-4 border-b-4 border-black inline-block pb-2">第4条 免責事項</h3>
            <p className="text-gray-700 font-bold leading-relaxed">
              当社は、当サービスの利用によりユーザーに生じた損害について、当社の故意または重大な過失による場合を除き、一切の責任を負いません。また、パフォーマーの都合や現地の通信状況等により、納品が遅延する場合があることをユーザーはあらかじめ了承するものとします。
            </p>
          </div>

          <div>
            <h3 className="font-black text-2xl mb-4 border-b-4 border-black inline-block pb-2">第5条 規約の変更</h3>
            <p className="text-gray-700 font-bold leading-relaxed">
              当社は、必要に応じて本規約を変更することができます。変更後の規約は、本ウェブサイトに掲載した時点から効力を生じるものとします。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
