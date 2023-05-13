import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Success } from "./pages/Success";
import { HeaderLocationCart } from "./layouts/HeaderLocationCart";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HeaderLocationCart />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
