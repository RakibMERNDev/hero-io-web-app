import { useState } from "react";
import toast from "react-hot-toast";
import { AppContext } from "./AppContext";

const AppContextProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState(() => {
    try {
      const saved = localStorage.getItem("installedApps");
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      localStorage.removeItem("installedApps");
      return [];
    }
  });

  const handleInstall = (app) => {
    const existingApp = installedApps.find(
      (installedApp) => installedApp.id === app.id,
    );

    if (existingApp) {
      return;
    }

    const newInstalledAppArray = [...installedApps, app];

    setInstalledApps(newInstalledAppArray);
    localStorage.setItem("installedApps", JSON.stringify(newInstalledAppArray));

    toast.success("App installed Successfully");
  };

  const handleUninstallApp = ({ appId }) => {
    const newArr = installedApps.filter((arr) => arr.id !== appId);

    setInstalledApps(newArr);
    localStorage.setItem("installedApps", JSON.stringify(newArr));
    toast.success("App uninstalled Successfully");
  };

  const value = {
    installedApps,
    handleInstall,
    handleUninstallApp,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
