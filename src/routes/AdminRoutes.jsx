import Biletler from "../components/admin/biletler/Biletler"
import RequireRole from "../components/form/RequireRole"
import AdminLayout from "../layouts/AdminLayout"
import AdminDashboardPage from "../pages/admin/AdminDashboard"
import GelirPage from "../pages/admin/Gelir"
import SeferlerPage from "../pages/admin/Seferler"
import TripsPage from "../pages/admin/Trips"
import UsersPage from "../pages/admin/Users"
import NotFound from "../pages/NotFound"

const adminRoutes = [
    {
        path: "/admin",
        element:(
          <RequireRole allowedRoles={["admin"]}>
          <AdminLayout />,
        </RequireRole>
        ),
       
        
        children: [
          { index: true, element: <AdminDashboardPage /> },
          { path: "trips", element: <TripsPage /> },
          { path: "users", element: <UsersPage /> },
          { path: "seferler", element: <SeferlerPage /> },
          {path: "biletler", element:<Biletler/>},
          {path:"gelir",element:<GelirPage/>},
          { path: "*", element: <NotFound /> },
        ],
      },
]



export default adminRoutes