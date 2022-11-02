import { RouterProvider } from "react-router-dom";

import {
  DirectusContextProvider,
  useInitDirectusContext,
} from "~/src/app/contexts";
import { router } from "~/src/app/routes";

import "swiper/css/bundle";

export const App = () => (
  <DirectusContextProvider value={useInitDirectusContext()}>
    <RouterProvider router={router} />
  </DirectusContextProvider>
);
