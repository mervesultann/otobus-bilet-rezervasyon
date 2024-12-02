import AdminLayout from "../layouts/AdminLayout"
import AdminDashboardPage from "../pages/admin/AdminDashboard"
import TripsPage from "../pages/admin/Trips"
import UsersPage from "../pages/admin/Users"
import NotFound from "../pages/NotFound"

const adminRoutes = [
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminDashboardPage /> },
          { path: "trips", element: <TripsPage /> },
          { path: "users", element: <UsersPage /> },
          { path: "*", element: <NotFound /> },
        ],
      },
]



export default adminRoutes