import Hero from "@/components/hero";
import WeaAzul from "@/components/weaAzul";
import Services from "@/components/services";
import PorqueElegirnos from "@/components/porqueElegirnos";
import Optimiza from "@/components/optimiza";
import Ahorro from "@/components/ahorro";
import Faq from "@/components/Faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="">
      <Hero></Hero>
      <WeaAzul></WeaAzul>
      <Services></Services>
      <PorqueElegirnos></PorqueElegirnos>
      <Optimiza></Optimiza>
      <Ahorro></Ahorro>
      <Faq></Faq>
      <Footer></Footer>
    </main>
  );
}
