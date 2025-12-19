export default function PrivacyPage() {
    return (
        <div className="bg-white">
            <div className="bg-slate-900 py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-2xl font-bold tracking-tight">プライバシーポリシー</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-3xl mx-auto prose prose-slate">
                    <p className="lead">
                        東方商事株式会社（以下「当社」）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。
                    </p>

                    <h3>1. 個人情報の管理</h3>
                    <p>
                        当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
                    </p>

                    <h3>2. 個人情報の利用目的</h3>
                    <p>
                        お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。
                    </p>

                    <h3>3. 個人情報の第三者への開示・提供の禁止</h3>
                    <p>
                        当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
                    </p>
                    <ul>
                        <li>お客さまの同意がある場合</li>
                        <li>お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合</li>
                        <li>法令に基づき開示することが必要である場合</li>
                    </ul>

                    <h3>4. お問い合せ</h3>
                    <p>
                        当社の個人情報の取扱に関するお問い合せは下記までご連絡ください。
                    </p>
                    <div className="bg-slate-50 p-4 rounded border border-slate-200 not-prose">
                        <p className="font-bold">東方商事株式会社</p>
                        <p>〒100-0000 東京都千代田区〇〇 1-2-3</p>
                        <p>お問い合わせはフォームよりお願い致します。</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
