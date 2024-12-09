import { FaUsers, FaBus, FaMoneyBillWave, FaTicketAlt } from "react-icons/fa";
import StatCard from "../../components/admin/StatCard";
import SalesChart from "../../components/admin/SalesChart";
import UserActivityChart from "../../components/admin/UserActivityChart";
import RecentTransactionsTable from "../../components/admin/RecentTransactionsTable";

const salesData = [
  { name: 'Ocak', satis: 4000 },
  { name: 'Şubat', satis: 3000 },
  { name: 'Mart', satis: 5000 },
  { name: 'Nisan', satis: 4500 },
  { name: 'Mayıs', satis: 6000 },
  { name: 'Haziran', satis: 5500 },
];

const userStats = [
  { name: 'Pzt', aktif: 2400 },
  { name: 'Sal', aktif: 1398 },
  { name: 'Çar', aktif: 3800 },
  { name: 'Per', aktif: 3908 },
  { name: 'Cum', aktif: 4800 },
  { name: 'Cmt', aktif: 3800 },
  { name: 'Paz', aktif: 4300 },
];

const AdminDashboardPage = () => {
  return (
    <>
      <div className="p-2 sm:p-4 md:p-6 max-w-[2000px] mx-auto">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Dashboard</h1>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <StatCard 
              title="Toplam Kullanıcı" 
              value="15,350" 
              percentage="+12%" 
              icon={<FaUsers className="text-orange-500 text-xl" />} 
              color="bg-orange-100" 
            />
            <StatCard 
              title="Aktif Seferler" 
              value="245" 
              percentage="+5%" 
              icon={<FaBus className="text-blue-500 text-xl" />} 
              color="bg-blue-100" 
            />
            <StatCard 
              title="Aylık Gelir" 
              value="₺125,400" 
              percentage="+18%" 
              icon={<FaMoneyBillWave className="text-green-500 text-xl" />} 
              color="bg-green-100" 
            />
            <StatCard 
              title="Satılan Bilet" 
              value="1,240" 
              percentage="+8%" 
              icon={<FaTicketAlt className="text-purple-500 text-xl" />} 
              color="bg-purple-100" 
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="w-full min-h-[400px]">
              <SalesChart data={salesData} />
            </div>
            <div className="w-full min-h-[400px]">
              <UserActivityChart data={userStats} />
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="overflow-hidden">
            <RecentTransactionsTable transactions={[1, 2, 3, 4, 5]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;