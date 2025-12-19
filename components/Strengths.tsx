export default function Strengths() {
    const strengths = [
        {
            title: "品質保証とロット管理",
            desc: "ロットIDで追跡し、COA等の証憑を保管。異常時は隔離・再確認のフローを整えています。",
            icon: "🛡️"
        },
        {
            title: "タルクのリスクに配慮した運用",
            desc: "タルクは用途により懸念が変わるため、当社基準に基づく確認項目を設定。必要に応じ第三者分析の手配も可能です。",
            icon: "🔍"
        },
        {
            title: "中国2拠点の現地ネットワーク",
            desc: "上海事務所・青島事務所が現地で連絡・調整。出荷前確認やトラブル時対応の速度を高めます。",
            icon: "🌏"
        },
        {
            title: "安定供給設計（代替ソース＋在庫）",
            desc: "供給途絶リスクに備え、調達先の分散や在庫設計を実施。納期・数量の確度を上げます。",
            icon: "📦"
        },
        {
            title: "取引条件の標準化",
            desc: "検収条件・再検査・責任範囲などを整理し、双方が納得できる「揉めない取引」を目指します。",
            icon: "🤝"
        }
    ];

    return (
        <section className="py-16 sm:py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-white">
                        “安さ”だけではなく、<br className="sm:hidden" />
                        調達の不安を減らす仕組みがあります。
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {strengths.map((item, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-slate-500 transition-colors"
                        >
                            <div className="text-4xl mb-6">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-slate-300 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
