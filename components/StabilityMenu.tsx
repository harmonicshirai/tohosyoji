export default function StabilityMenu() {
    return (
        <section className="py-16 sm:py-24 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        価格と供給の“読みやすさ”が、<br className="sm:hidden" />
                        調達の安心につながる。
                    </h2>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        為替や物流の変動があっても、取引条件を整理することで“急なブレ”を小さくできます。<br />
                        お客様の調達方針に合わせた提示方法をご相談ください。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">円建て提示</h3>
                        <p className="text-sm text-slate-500">
                            輸入リスクを当社が吸収し、国内取引として円建てでご提示（条件によります）。
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">価格レンジ提示</h3>
                        <p className="text-sm text-slate-500">
                            為替等の変動幅をあらかじめ共有し、想定内の予算管理をサポートします。
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">価格スライド条項</h3>
                        <p className="text-sm text-slate-500">
                            原料高騰時などのルールを透明化し、納得感のある価格調整を行います。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
