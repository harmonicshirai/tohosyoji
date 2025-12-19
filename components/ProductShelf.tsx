import Link from 'next/link';
import Image from 'next/image';

export default function ProductShelf() {
    return (
        <section className="py-16 sm:py-24 bg-slate-50" id="products">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        取扱製品・用途
                    </h2>
                    <p className="mt-4 text-slate-600">
                        工業用途を中心に、用途・規格・供給形態に合わせてご提案します。
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Key Product: Talc */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-2 bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row">
                        <div className="h-48 md:h-auto md:w-1/3 bg-slate-200 relative">
                            <Image
                                src="/tohosyoji/images/talc_sample.png"
                                alt="Talc Powder"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6 flex-1">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">タルク（工業用）</h3>
                            <dl className="space-y-2 text-sm">
                                <div className="flex flex-col sm:flex-row sm:gap-4">
                                    <dt className="font-semibold text-slate-700 min-w-[4rem]">用途例:</dt>
                                    <dd className="text-slate-600">樹脂（PP/PEコンパウンド）、塗料、紙、セラミック</dd>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:gap-4">
                                    <dt className="font-semibold text-slate-700 min-w-[4rem]">特徴:</dt>
                                    <dd className="text-slate-600">粒度・白色度・不純物管理など、用途別に選定</dd>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:gap-4">
                                    <dt className="font-semibold text-slate-700 min-w-[4rem]">荷姿:</dt>
                                    <dd className="text-slate-600">25kg袋 / フレコン / バルク（応相談）</dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    {/* Secondary: Calcium Carbonate */}
                    <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-32 bg-slate-100 rounded mb-4 relative overflow-hidden">
                            <Image src="/tohosyoji/images/calcium_carbonate.png" alt="Calcium Carbonate" fill className="object-cover" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">炭酸カルシウム</h3>
                        <p className="text-sm text-slate-500">重質・軽質、各種グレードをご提案。</p>
                    </div>

                    {/* Secondary: Barium Sulfate */}
                    <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-32 bg-slate-100 rounded mb-4 relative overflow-hidden">
                            <Image src="/tohosyoji/images/barium_sulfate.png" alt="Barium Sulfate" fill className="object-cover" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">硫酸バリウム</h3>
                        <p className="text-sm text-slate-500">塗料・プラスチック充填材として。</p>
                    </div>
                </div>

                {/* Extended list placeholder */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-32 bg-slate-100 rounded mb-4 relative overflow-hidden">
                            <Image src="/tohosyoji/images/mica_mineral.png" alt="Mica" fill className="object-cover" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">マイカ</h3>
                        <p className="text-sm text-slate-500">絶縁性・耐熱性フィラー。</p>
                    </div>
                    {/* Add more if needed */}
                </div>


                <div className="mt-12 text-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
                    >
                        製品仕様（粒度・白色度・梱包形態）を相談する
                    </Link>
                </div>
            </div>
        </section>
    );
}
