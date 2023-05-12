import { CoffeeList } from "../components/CoffeeList";
import { Intro } from "../components/Intro";
import { Navbar } from "../components/Navbar";

export function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <CoffeeList/>
    </>
  );
}
