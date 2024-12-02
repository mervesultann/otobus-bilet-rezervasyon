import TopHeader from "../components/user/header/TopHeader"
import Header from "../components/user/header/Header"
import Footer from "../components/user/footer/Footer"
import { Outlet, useLocation } from "react-router-dom"

const UserLayout = () => {

    const location = useLocation()
    

  return (
    <>
     {!location.pathname.startsWith("/contact") && <TopHeader /> }
      <Header /> 
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default UserLayout 