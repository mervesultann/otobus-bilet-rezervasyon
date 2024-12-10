import UserLayout from "../layouts/UserLayout"
import AboutPage from "../pages/user/About"
import ContactPage from "../pages/user/Contact"
import ServicesPage from "../pages/user/Services"
import SearchTicket from "../pages/user/SearchTicket"
import PrivacyPage from "../pages/user/Privacy"
import TermsPage from "../pages/user/Terms"
import CookiesPage from "../pages/user/Cookies"
import NotFound from "../pages/NotFound"
import HomePage from "../pages/user/Home"
import LoginPage from "../pages/auth/LoginPage"
import RegisterPage from "../pages/auth/RegisterPage"
import SeferSonuclari from "../pages/user/SeferSonuclari"


const userRoutes = [
    {
        path: "/",
        element: <UserLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "about", element: <AboutPage /> },
          { path: "contact", element: <ContactPage /> },
          { path: "services", element: <ServicesPage /> },
          { path: "search-ticket", element: <SearchTicket /> },
          { path: "privacy", element: <PrivacyPage /> },
          { path: "terms", element: <TermsPage /> },
          { path: "cookies", element: <CookiesPage /> },
          { path: "*", element: <NotFound /> },
          { path: "login", element: <LoginPage /> },
          { path: "register", element: <RegisterPage /> },
          { path: "sefer-sonuclari", element: <SeferSonuclari /> },
        ],
      },
]

export default userRoutes

