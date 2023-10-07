import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home"
import { DesignSinglePage } from "../pages/DesignSinglePage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404</div>,
  },
  {
    path: "designs/:name",
    element: <DesignSinglePage />,
  },
])