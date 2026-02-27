export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-4 text-center pb-24">
      <section className="py-12 md:py-16 spring-in">
        <h1 className="pop-heading mb-4 leading-none">
          <span className="text-3xl block text-black">CONTACT US</span>
          お問い合わせ
        </h1>
        <p className="text-lg font-bold mt-4 mb-8">
          ご不明な点やご要望がございましたら、お気軽にお問い合わせください。<br className="hidden md:block" />
          通常、2営業日以内にご返信いたします。
        </p>
      </section>

      <section className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-left max-w-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label className="block font-black text-lg mb-2">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              className="w-full border-4 border-black rounded-lg p-3 font-bold focus:outline-none focus:border-red-500 transition-colors" 
              placeholder="山田 太郎" 
              required
            />
          </div>

          <div>
            <label className="block font-black text-lg mb-2">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              className="w-full border-4 border-black rounded-lg p-3 font-bold focus:outline-none focus:border-red-500 transition-colors" 
              placeholder="your@email.com" 
              required
            />
          </div>

          <div>
            <label className="block font-black text-lg mb-2">
              お問い合わせ種別 <span className="text-red-500">*</span>
            </label>
            <select className="w-full border-4 border-black rounded-lg p-3 font-bold bg-white focus:outline-none focus:border-red-500 cursor-pointer" required>
              <option value="">選択してください</option>
              <option value="order">ご注文について</option>
              <option value="service">サービス内容について</option>
              <option value="corporate">法人向けのご相談</option>
              <option value="other">その他</option>
            </select>
          </div>

          <div>
            <label className="block font-black text-lg mb-2">
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <textarea 
              className="w-full border-4 border-black rounded-lg p-3 font-bold focus:outline-none focus:border-red-500 transition-colors" 
              rows={6} 
              placeholder="お問い合わせ内容をご記入ください"
              required
            ></textarea>
          </div>

          <button type="button" className="w-full bg-black text-white font-black py-4 rounded-full uppercase text-xl transition-transform hover:scale-105 active:scale-95 border-2 border-black shadow-[4px_4px_0_0_#ef4444]">
            送信する
          </button>
        </form>
      </section>
    </main>
  );
}
