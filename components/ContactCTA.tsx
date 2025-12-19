import Link from 'next/link';

export default function ContactCTA() {
    return (
        <section className="py-20 bg-slate-900 text-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    調達の不安を、確かな安心へ。
                </h2>
                <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                    用途・規格に合わせた最適な鉱物原料をご提案します。<br />
                    まずはお見積り・在庫状況からお問い合わせください。
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-slate-900 shadow-lg hover:bg-slate-100 hover:scale-105 transition-all"
                >
                    お問い合わせフォームへ
                </Link>
                <p className="mt-6 text-sm text-slate-400">
                    お急ぎの方もお気軽にご相談ください。
                </p>
            </div>
        </section>
    );
}
