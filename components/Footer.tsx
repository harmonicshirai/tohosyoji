import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="relative h-8 w-8">
                                <Image src="/tohosyoji/images/logo.png" alt="Tohosyoji Logo" fill className="object-contain" />
                            </div>
                            <span className="text-lg font-bold text-white">東方商事株式会社</span>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">
                            安心できる品質と供給で、<br />
                            お客様の調達をサポートします。
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">メニュー</h4>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/" className="text-sm hover:text-white transition-colors">ホーム</Link>
                            </li>
                            <li>
                                <Link href="/quality" className="text-sm hover:text-white transition-colors">品質保証・コンプライアンス</Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-sm hover:text-white transition-colors">取扱製品</Link>
                            </li>
                            <li>
                                <Link href="/company" className="text-sm hover:text-white transition-colors">会社概要</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">お問い合わせ</h4>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/contact" className="text-sm hover:text-white transition-colors">お問い合わせフォーム</Link>
                            </li>
                            {/* Optional: Add phone/email if needed later */}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">法的情報</h4>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/privacy" className="text-sm hover:text-white transition-colors">プライバシーポリシー</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-800 pt-8 text-center">
                    <p className="text-xs text-slate-500">
                        &copy; {new Date().getFullYear()} XML Minerals Trading Co., Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
