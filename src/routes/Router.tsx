import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home"
import { DesignSinglePage } from "../pages/DesignSinglePage"
import { FrontendSinglePage } from "../pages/FrontendSinglePage"
import Layout from "./Layout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404</div>,
    children: [
      {
      path: "/",
      element: <Home />,
      },
      {
        path: "designs/:name",
        element: <DesignSinglePage />,
      },
      {
        path: "frontend/:name",
        element: <FrontendSinglePage />,
      },
    ],
  },
])