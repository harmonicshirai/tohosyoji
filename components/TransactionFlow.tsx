export default function TransactionFlow() {
    const flow = [
        { title: "お問い合わせ", desc: "用途・規格・数量・納期をお知らせください。" },
        { title: "仕様確認・ご提案", desc: "要求スペックに合わせた製品をご提案します。" },
        { title: "お見積", desc: "条件（為替・輸送費等）を含めて提示します。" },
        { title: "サンプル/小ロット評価", desc: "必要に応じてサンプル提供や小ロット試作を行います。" },
        { title: "条件確定", desc: "検収条件・証憑類などを取り決めます。" },
        { title: "納入", desc: "ご指定の場所・納期へお届けします。" },
        { title: "継続供給・改善提案", desc: "安定供給と品質改善を継続します。" },
    ];

    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        初回取引の流れ
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:pl-0 md:border-none md:grid md:grid-cols-1 gap-8">
                        {flow.map((step, index) => (
                            <div key={index} className="mb-10 ml-6 md:ml-0 md:bg-white md:border md:border-slate-100 md:rounded-lg md:p-6 md:shadow-sm md:flex md:items-center relative">
                                {/* Circle Marker */}
                                <span className="absolute -left-[1.6rem] top-1 md:static md:mr-6 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-bold ring-4 ring-white">
                                    {index + 1}
                                </span>

                                <div className="md:flex-1">
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                                    <p className="text-slate-600">{step.desc}</p>
                                </div>

                                {/* Arrow for Desktop */}
                                {index < flow.length - 1 && (
                                    <div className="hidden md:block absolute bottom-[-1.5rem] left-8 transform translate-x-1/2 text-slate-300">
                                        ↓
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
