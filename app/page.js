import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Revolution } from "@/components/Revolution";
import { Audience } from "@/components/Audience";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Revolution />
      <Audience />
      <CTA />
      <Footer />
      <ScrollReveal />
    </>
  );
}
