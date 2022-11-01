import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./Layout";
import { loader as objectsLoader, ObjectList } from "./List";
import { ObjectItem } from "./Item";
import { Home } from "./Home";

export const router = createBrowserRouter([
  {
    // errorElement: <ErrorPage />,
    children: [
      { element: <Home />, path: "/" },
      { element: <ObjectList />, loader: objectsLoader, path: "objects/" },
      { element: <ObjectList />, path: "objects/tags/:tag" },
      { element: <ObjectItem />, path: "objects/:objectId" },
    ],

    element: <Layout />,

    path: "/",
  },
]);
