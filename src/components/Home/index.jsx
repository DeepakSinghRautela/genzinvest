import Hero from "./Hero";
// import TrustBar from "../components/TrustBar";
// import ServicesPreview from "../components/ServicesPreview";
import WhyChooseUs from "./WhyChooseUs";
import InvestmentProcess from "./InvestmentProcess";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import CTA from "./CTA";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <TrustBar />
      <ServicesPreview />*/}
      <WhyChooseUs />
      <InvestmentProcess />
      <Testimonials /> 
      <FAQ />
      <CTA />
    </>
  );
}