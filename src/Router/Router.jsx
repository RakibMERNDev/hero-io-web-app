import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";


import AppDetailPage from "../Pages/AppDetailPage/AppDetailPage";
import AppsPage from "../Pages/Apps/AppsPage";
import ErrorPage from "../Pages/Error/ErrorPage";
import App from "../App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: "apps",
        loader: () => fetch("/appsData.json"),
        Component: AppsPage,
      },
      {
        path: "apps/:appId",
        loader: async ({ params }) => {
          const res = await fetch("/appsData.json");
          const data = await res.json();

          const app = data.find((item) => item.id === Number(params.appId));

          return app;
        },
        element: <AppDetailPage />,
      },
    ],
  },
]);

export default router;
