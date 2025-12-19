import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative h-10 w-10">
                            <Image src="/tohosyoji/images/logo.png" alt="Tohosyoji Logo" fill className="object-contain" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900">東方商事株式会社</span>
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                        ホーム
                    </Link>
                    <Link href="/quality" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                        品質保証
                    </Link>
                    <Link href="/products" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                        取扱製品
                    </Link>
                    <Link href="/company" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                        会社概要
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="hidden sm:inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow transition-colors hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
                    >
                        お問い合わせ
                    </Link>
                </div>
            </div>
        </header>
    );
}
