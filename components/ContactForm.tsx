export default function ContactForm() {
    return (
        <section className="py-16 sm:py-24 bg-slate-900 text-white" id="contact">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-white">
                        用途・規格・納期から、<br className="sm:hidden" />
                        まずはご相談ください。
                    </h2>
                    <p className="mt-4 text-slate-300">
                        通常1営業日以内に担当よりご連絡いたします。
                    </p>
                </div>

                <div className="max-w-xl mx-auto bg-white rounded-lg p-8 shadow-xl">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-slate-700">会社名 <span className="text-red-500">*</span></label>
                                <input type="text" id="company" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-3 py-2 border text-slate-900" />
                            </div>
                            <div>
                                <label htmlFor="department" className="block text-sm font-medium text-slate-700">部署名</label>
                                <input type="text" id="department" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-3 py-2 border text-slate-900" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700">氏名 <span className="text-red-500">*</span></label>
                                <input type="text" id="name" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-3 py-2 border text-slate-900" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700">メールアドレス <span className="text-red-500">*</span></label>
                                <input type="email" id="email" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-3 py-2 border text-slate-900" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="product" className="block text-sm font-medium text-slate-700">検討品目 (タルク等) <span className="text-red-500">*</span></label>
                            <input type="text" id="product" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-3 py-2 border text-slate-900" placeholder="例: タルク 〇〇用" />
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="quantity" className="block text-sm font-medium text-slate-700">希望数量</label>
                                <input type="text" id="quantity" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-3 py-2 border text-slate-900" placeholder="例: 月間 5t" />
                            </div>
                            <div>
                                <label htmlFor="date" className="block text-sm font-medium text-slate-700">希望納期</label>
                                <input type="text" id="date" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-3 py-2 border text-slate-900" placeholder="例: 4月頃から" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700">ご相談内容・備考</label>
                            <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-3 py-2 border text-slate-900" placeholder="自由にご記入ください"></textarea>
                        </div>

                        <div className="pt-4">
                            <button type="submit" className="w-full flex justify-center rounded-md border border-transparent bg-slate-900 py-3 px-4 text-sm font-bold text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors">
                                送信する
                            </button>
                        </div>

                        <p className="text-xs text-center text-slate-500 mt-4">
                            ※ これはサンプルLPのため、実際に送信されません。
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
