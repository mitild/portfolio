import { Outlet } from "react-router-dom"
import { Footer } from "../components/molecules/Footer"

const Layout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout