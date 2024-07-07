import Hero from "@/components/hero";
import WeaAzul from "@/components/weaAzul";
import Services from "@/components/services";
import PorqueElegirnos from "@/components/porqueElegirnos";
import Footer from "@/components/footer";
import Optimiza from "@/components/optimiza";

export default function Home() {
  return (
    <main className="">
      <Hero></Hero>
      <WeaAzul></WeaAzul>
      <Services></Services>
      <PorqueElegirnos></PorqueElegirnos>
      <Footer></Footer>
      <Optimiza></Optimiza>
    </main>
  );
}
