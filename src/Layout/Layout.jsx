import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Nav/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
