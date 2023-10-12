import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import LandingPage from "../pages/home/LandingPage";
import { VidPage } from "../pages/Detail/VidPage";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/vid",
    element: <VidPage />,
  },
]);
