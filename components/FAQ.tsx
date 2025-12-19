export default function FAQ() {
    const faqs = [
        { q: "COA（分析証明書）は提出できますか？", a: "ロット単位で管理しており、提出可能です（内容は品目・条件により異なります）。" },
        { q: "第三者分析に対応できますか？", a: "ご要望に応じて手配可能です。用途・要求仕様によりご提案します。（要別途費用・期間）" },
        { q: "最小ロット・梱包形態は？", a: "25kg袋／フレコン等。数量条件はご相談ください。初回評価用サンプルは少量から対応可能です。" },
        { q: "タルクの懸念（不純物等）が心配です。", a: "用途・規格に応じた確認項目を設定し、証憑・確認フローを含めてご提案します。" },
    ];

    return (
        <section className="py-16 sm:py-24 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        よくあるご質問
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-6">
                    {faqs.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-start">
                                <span className="text-slate-400 mr-3">Q.</span>
                                {item.q}
                            </h3>
                            <p className="text-slate-600 pl-8 relative">
                                <span className="absolute left-0 top-0 font-bold text-slate-300">A.</span>
                                {item.a}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
