import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./Layout";
import { listLoader, ObjectList } from "./List";
import { itemLoader, ObjectItem } from "./Item";
import { Home } from "./Home";
import { Contact } from "./Contact";

export const router = createBrowserRouter([
  {
    // errorElement: <ErrorPage />,
    children: [
      { element: <Home />, path: "/" },
      { element: <Contact />, path: "/contact" },
      { element: <ObjectList />, loader: listLoader, path: "objects/" },
      { element: <ObjectList />, path: "objects/tags/:tag" },
      {
        element: <ObjectItem />,
        loader: itemLoader,
        path: "objects/:id",
      },
    ],
    element: <Layout />,
    path: "/",
  },
]);
