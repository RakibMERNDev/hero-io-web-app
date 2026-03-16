import { useContext } from "react";
import { AppContext } from "../../Provider/AppContext";

const InstallationPage = () => {
  const { installedApps, handleInstall, handleUninstallApp } =
    useContext(AppContext);
  return <div></div>;
};

export default InstallationPage;
