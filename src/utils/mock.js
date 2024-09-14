import Demo from "../components/Demo/demo";
import { DemoLayout } from "../LayoutWrapper/DemoLayout";

export const routesData = [
  {
    path: "/",
    exact: true,
    component: Demo,
    layout: DemoLayout,
  },

];