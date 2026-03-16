import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";

import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        Component: App,
      },
    ],
  },
]);

export default router;
