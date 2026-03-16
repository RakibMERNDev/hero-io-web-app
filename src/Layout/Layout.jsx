import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Nav/NavBar";

const Layout = () => {
  return (
    <div className="max-w-400 mx-auto">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
