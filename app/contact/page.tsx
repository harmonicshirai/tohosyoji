import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
    title: 'お問い合わせ - 東方商事株式会社',
    description: '用途・規格・納期のご相談はこちらから。通常1営業日以内にご連絡いたします。',
};

export default function ContactPage() {
    return (
        <main>
            <div className="bg-slate-900 py-12 sm:py-20 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">お問い合わせ</h1>
                <p className="mt-4 text-lg text-slate-300">
                    製品のお見積り、在庫確認、カタログ請求など、<br className="sm:hidden" />お気軽にご相談ください。
                </p>
            </div>
            <ContactForm />
        </main>
    );
}
