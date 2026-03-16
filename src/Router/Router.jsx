import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";

import App from "../App";
import ErrorPage from "../Pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement : <ErrorPage/>,
    children: [
      {
        index: true,
        Component: App,
      },
    ],
  },
]);

export default router;
