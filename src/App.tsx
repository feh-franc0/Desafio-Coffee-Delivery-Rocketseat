import { CoffeeList } from "./components/CoffeeList";
import { Button } from "./components/Button";
import { Navbar } from "./components/Navbar";
import { Intro } from "./components/Intro";

export function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <CoffeeList />
      {/* <Button variant="danger" />
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button /> */}
    </>
  )
}
