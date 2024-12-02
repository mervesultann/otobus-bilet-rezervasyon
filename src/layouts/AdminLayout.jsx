import { Outlet } from "react-router-dom"

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header/Sidebar buraya eklenecek */}
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout 