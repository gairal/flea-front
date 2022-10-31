import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./Layout";
import { loader as objectsLoader, ObjectList } from "./List";
import { ObjectItem } from "./Item";
import { Home } from "./Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "objects/", element: <ObjectList />, loader: objectsLoader },
      { path: "objects/:objectId", element: <ObjectItem /> },
    ],
  },
]);
