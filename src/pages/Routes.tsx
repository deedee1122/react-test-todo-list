import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import { Error } from "./Error";
import { LoadingUI } from "../components/Skeleton";
import {
  Navbar,
  // Footer
} from "../components/Layout";
const LazyHome = lazy(() =>
  import("./index").then((module) => ({ default: module.Home })),
);

export const validRoutes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingUI />}>
        <div className="container max-w-7xl mx-auto">
          <Navbar />
          <LazyHome />
          {/* <Footer /> */}
        </div>
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <Error />,
  },
];
