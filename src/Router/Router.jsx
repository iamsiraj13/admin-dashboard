import { createBrowserRouter } from "react-router-dom";

import StaticWidgets from "../pages/Widgets/StaticWidgets";
import MasterLayout from "../Layout/MasterLayout";
import DataWidgets from "../pages/Widgets/DataWidgets";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        path: "/static-widgets",
        element: <StaticWidgets />,
      },
      {
        path: "/data-widgets",
        element: <DataWidgets />,
      },
    ],
  },
]);

export default router;
