export default function QAProcess() {
    const steps = [
        { name: "調達", sub: "サプライヤー選定", desc: "適格性確認" },
        { name: "出荷前", sub: "証憑・確認", desc: "現地確認" },
        { name: "受入", sub: "ロット登録", desc: "必要に応じ検査" },
        { name: "保管", sub: "混載防止", desc: "ロット区分管理" },
        { name: "出荷", sub: "ロット紐づけ", desc: "証憑提示" },
    ];

    return (
        <section className="py-16 sm:py-24 bg-white" id="quality">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        品質を“説明できる形”で届ける。
                    </h2>
                    <p className="mt-4 text-slate-600">
                        用途・規格に応じて確認項目は変化します。<br />
                        要求仕様に合わせて最適な確認方法をご提案します。
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-10 -translate-y-1/2 transform" />

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative bg-white p-6 rounded-lg border border-slate-200 shadow-sm text-center">
                                {/* Step Number Circle */}
                                <div className="w-8 h-8 mx-auto bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-4 z-10 lg:absolute lg:-top-4 lg:left-1/2 lg:-translate-x-1/2">
                                    {index + 1}
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 mb-1">{step.name}</h3>
                                <p className="text-sm font-semibold text-slate-700 mb-2">({step.sub})</p>
                                <p className="text-xs text-slate-500">{step.desc}</p>

                                {/* Mobile Connector */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden absolute bottom-[-2rem] left-1/2 -translate-x-1/2 text-slate-300 text-2xl">
                                        ↓
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="/quality"
                        className="text-slate-900 font-semibold border-b-2 border-slate-900 hover:text-slate-700 hover:border-slate-700 transition-colors"
                    >
                        品質保証の詳細を見る（確認項目例・フロー・証憑サンプル） →
                    </a>
                </div>
            </div>
        </section>
    );
}
