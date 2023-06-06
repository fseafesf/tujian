import { lazy, Suspense } from "react";

const About = lazy(() => import("../pages/About/About"));
const Culture = lazy(() => import("../pages/Culture/Culture"));
const Course = lazy(() => import("../pages/Course/Course"));
const VR = lazy(() => import("../pages/VR/VR"));

const getLazyComponent = (component) => (
  <Suspense fallback={<div>加载中...</div>}>{component}</Suspense>
);

const routes = [
  {
    path: "/about",
    element: getLazyComponent(<About></About>),
  },
  {
    path: "/culture",
    element: getLazyComponent(<Culture></Culture>),
  },
  {
    path: "/course",
    element: getLazyComponent(<Course></Course>),
  },
  {
    path: "/vr",
    element: getLazyComponent(<VR></VR>),
  },
  {
    path: "/",
    element: getLazyComponent(<About></About>),
  },
];

export default routes;
