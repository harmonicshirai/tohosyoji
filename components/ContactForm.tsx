'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        company: '',
        department: '',
        name: '',
        email: '',
        product: '',
        quantity: '',
        date: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#0a1628] to-[#0f1e36]" id="contact">
            {/* Background */}
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4">
                        CONTACT
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        用途・規格・納期から、<br className="sm:hidden" />
                        まずはご相談ください。
                    </h2>
                    <p className="text-slate-400">
                        通常1営業日以内に担当よりご連絡いたします。
                    </p>
                </div>

                {/* Form Card */}
                <div className="max-w-2xl mx-auto">
                    <div className="relative rounded-2xl overflow-hidden">
                        {/* Card Background */}
                        <div className="absolute inset-0 bg-white" />
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />

                        <form className="relative p-8 sm:p-10 space-y-6">
                            {/* Company & Department */}
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                                        会社名 <span className="text-cyan-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        required
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                                        placeholder="株式会社〇〇"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="department" className="block text-sm font-medium text-slate-700 mb-2">
                                        部署名
                                    </label>
                                    <input
                                        type="text"
                                        id="department"
                                        value={formData.department}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                                        placeholder="購買部"
                                    />
                                </div>
                            </div>

                            {/* Name & Email */}
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                        氏名 <span className="text-cyan-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                                        placeholder="山田 太郎"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                        メールアドレス <span className="text-cyan-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                                        placeholder="example@company.co.jp"
                                    />
                                </div>
                            </div>

                            {/* Product */}
                            <div>
                                <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-2">
                                    検討品目 (タルク等) <span className="text-cyan-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="product"
                                    required
                                    value={formData.product}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                                    placeholder="例: タルク 樹脂コンパウンド用"
                                />
                            </div>

                            {/* Quantity & Date */}
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-2">
                                        希望数量
                                    </label>
                                    <input
                                        type="text"
                                        id="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                                        placeholder="例: 月間 5t"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-2">
                                        希望納期
                                    </label>
                                    <input
                                        type="text"
                                        id="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                                        placeholder="例: 4月頃から"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                    ご相談内容・備考
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none"
                                    placeholder="ご要望やご質問があればご記入ください"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full relative group overflow-hidden rounded-xl py-4 px-6 font-bold text-white transition-all"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500" />
                                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="absolute inset-0 overflow-hidden rounded-xl">
                                        <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700" />
                                    </span>
                                    <span className="relative flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        送信する
                                    </span>
                                </button>
                            </div>

                            {/* Note */}
                            <p className="text-xs text-center text-slate-500 pt-2">
                                ※ これはサンプルLPのため、実際に送信されません。
                            </p>
                        </form>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-8 flex flex-wrap justify-center gap-6">
                        {[
                            { icon: '🔒', text: '情報は厳重に管理' },
                            { icon: '⚡', text: '1営業日以内に返信' },
                            { icon: '📋', text: '無料でお見積り' },
                        ].map((badge, index) => (
                            <div key={index} className="flex items-center gap-2 text-slate-400 text-sm">
                                <span>{badge.icon}</span>
                                <span>{badge.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
