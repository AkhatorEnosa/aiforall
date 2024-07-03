import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Goals from "./components/Goals";
import Volunteers from "./components/Volunteers";
import Onboarding from "./components/Onboarding";
import Values from "./components/Values";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Goals />
      <Volunteers />
      <Onboarding />
      <Values />
    </main>
  );
}
