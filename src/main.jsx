import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
import router from "./Router/Router.jsx";
import AppContextProvider from "./Provider/AppContextProvider.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
    <Toaster />
  </StrictMode>,
);
