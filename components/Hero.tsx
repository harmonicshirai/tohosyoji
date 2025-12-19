import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-32 lg:pb-32 xl:pb-36">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-slate-900/70 z-10" />
                <Image
                    src="/tohosyoji/images/hero_logistics.png"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-tight">
                        鉱物原料を、<br className="hidden sm:block" />
                        <span className="text-slate-300">“品質と供給の確かさ”</span>で届ける。
                    </h1>

                    <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl max-w-2xl">
                        中国調達 × 国内メーカー向け。<br className="sm:hidden" />
                        ロット管理・証憑・安定供給を軸に、<br className="hidden sm:block" />
                        調達の不確実性を減らします。
                    </p>

                    <div className="mt-4 text-sm text-slate-400">
                        タルクをはじめとする工業用鉱物を、用途・規格に合わせてご提案。<br />
                        初回は小ロット評価から対応可能です。
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                        {/* Trust Badges */}
                        <div className="inline-flex items-center rounded-full bg-slate-800/50 px-3 py-1 text-sm font-medium text-slate-200 border border-slate-700">
                            ロット管理/証憑管理
                        </div>
                        <div className="inline-flex items-center rounded-full bg-slate-800/50 px-3 py-1 text-sm font-medium text-slate-200 border border-slate-700">
                            第三者分析に対応
                        </div>
                        <div className="inline-flex items-center rounded-full bg-slate-800/50 px-3 py-1 text-sm font-medium text-slate-200 border border-slate-700">
                            安定供給体制
                        </div>
                    </div>

                    <div className="mt-10 flex gap-4 flex-col sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-slate-900 shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
                        >
                            見積・在庫を相談する
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-md border border-slate-600 bg-transparent px-8 py-3 text-base font-semibold text-white hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 transition-all"
                        >
                            用途・規格の相談をする
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
