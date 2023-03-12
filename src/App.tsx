import { CoffeeList } from "./components/CoffeeList";
import { Navbar } from "./components/Navbar";
import { Intro } from "./components/Intro";

export function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <CoffeeList />
    </>
  )
}
