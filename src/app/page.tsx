import Model from "@/components/Model";
import Products from "@/components/Products";
import Slider from "@/components/Slider";
import Image from "next/image";



export default function Home() {
  return (
    <section className="home-wrapper">
      <Model />
      <Slider />
      <Products />
    </section>
  );
}
