import {
  // useLocation,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { validRoutes } from "./pages/Routes";

export const App = () => {
  return <RouterProvider router={createBrowserRouter(validRoutes)} />;
};
