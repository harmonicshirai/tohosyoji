import Hero from "@/components/Hero";
import TrustBlock from "@/components/TrustBlock";
import ProductShelf from "@/components/ProductShelf";
import Strengths from "@/components/Strengths";
import QAProcess from "@/components/QAProcess";
import StabilityMenu from "@/components/StabilityMenu";
import TransactionFlow from "@/components/TransactionFlow";
import FAQ from "@/components/FAQ";
import CompanyShort from "@/components/CompanyShort";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <TrustBlock />
      <ProductShelf />
      <Strengths />
      <QAProcess />
      <StabilityMenu />
      <TransactionFlow />
      <FAQ />
      <CompanyShort />
      <ContactCTA />
    </div>
  );
}
