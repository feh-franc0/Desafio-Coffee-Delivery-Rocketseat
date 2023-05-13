import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { LayoutContainerBody } from "./styles";

export function HeaderLocationCart() {
  return (
    <>
      <Navbar />
      <LayoutContainerBody>
      <Outlet />
      </LayoutContainerBody>
    </>
  );
}
