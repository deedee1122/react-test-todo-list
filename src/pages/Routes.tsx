import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import { Error } from "./Error";
import { LoadingUI } from "../components/Skeleton";
const LazyHome = lazy(() =>
  import("./index").then((module) => ({ default: module.Home })),
);

export const validRoutes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingUI />}>
        <LazyHome />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <Error />,
  },
];
