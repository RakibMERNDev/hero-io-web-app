import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Nav/NavBar";

const Layout = () => {
  const navigation = useNavigation();

  return (
    <div className="max-w-400 mx-auto">
      <NavBar />
      {navigation.state === "loading" && (
        <span className="loading loading-spinner loading-xl min-h-[calc(100vh-24rem)] flex justify-center items-center"></span>
      )}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
