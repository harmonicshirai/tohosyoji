import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
    title: 'お問い合わせ - 東方商事株式会社',
    description: '用途・規格・納期のご相談はこちらから。通常1営業日以内にご連絡いたします。',
};

export default function ContactPage() {
    return (
        <main className="bg-[#0a1628]">
            <ContactForm />
        </main>
    );
}
