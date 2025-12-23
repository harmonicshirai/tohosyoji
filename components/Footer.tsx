import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative bg-[#050d1a] text-slate-300 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid opacity-10" />
            
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                                    <span className="text-white font-bold text-lg">東</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-lg">東方商事株式会社</span>
                                <span className="text-cyan-400/60 text-xs tracking-wider">TOHO SYOJI CO., LTD.</span>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400 mb-6">
                            安心できる品質と供給で、<br />
                            お客様の調達をサポートします。
                        </p>
                        
                        {/* Social Links Placeholder */}
                        <div className="flex gap-3">
                            {['linkedin', 'twitter'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                                >
                                    {social === 'linkedin' && (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    )}
                                    {social === 'twitter' && (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                        </svg>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {/* Menu */}
                        <div>
                            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                メニュー
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    { href: '/', label: 'ホーム' },
                                    { href: '/quality', label: '品質保証・コンプライアンス' },
                                    { href: '/products', label: '取扱製品' },
                                    { href: '/company', label: '会社概要' },
                                ].map((item) => (
                                    <li key={item.href}>
                                        <Link 
                                            href={item.href} 
                                            className="text-sm text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"
                                        >
                                            <span className="w-0 h-px bg-cyan-400 group-hover:w-3 transition-all" />
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                お問い合わせ
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link 
                                        href="/contact" 
                                        className="text-sm text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-px bg-cyan-400 group-hover:w-3 transition-all" />
                                        お問い合わせフォーム
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                法的情報
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link 
                                        href="/privacy" 
                                        className="text-sm text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-px bg-cyan-400 group-hover:w-3 transition-all" />
                                        プライバシーポリシー
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-slate-800">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-slate-500">
                            &copy; {new Date().getFullYear()} 東方商事株式会社 (Tohosyoji Co., Ltd.) All rights reserved.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                            <span>Powered by Digital Innovation</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
