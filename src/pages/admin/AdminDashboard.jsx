import { FaUsers, FaBus, FaMoneyBillWave, FaTicketAlt, FaUserCircle } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

      {/* İstatistik Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Toplam Kullanıcı</p>
              <p className="text-2xl font-bold">15,350</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <FaUsers className="text-orange-500 text-xl" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-green-500 text-sm">+12%</span>
            <span className="text-gray-500 text-sm"> geçen aya göre</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Aktif Seferler</p>
              <p className="text-2xl font-bold">245</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FaBus className="text-blue-500 text-xl" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-green-500 text-sm">+5%</span>
            <span className="text-gray-500 text-sm"> geçen aya göre</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Aylık Gelir</p>
              <p className="text-2xl font-bold">₺125,400</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FaMoneyBillWave className="text-green-500 text-xl" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-green-500 text-sm">+18%</span>
            <span className="text-gray-500 text-sm"> geçen aya göre</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Satılan Bilet</p>
              <p className="text-2xl font-bold">1,240</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <FaTicketAlt className="text-purple-500 text-xl" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-green-500 text-sm">+8%</span>
            <span className="text-gray-500 text-sm"> geçen aya göre</span>
          </div>
        </div>
      </div>

      {/* Grafikler */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Aylık Satış Grafiği</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="satis" fill="#f97316" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Haftalık Kullanıcı Aktivitesi</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="aktif" stroke="#f97316" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Son İşlemler Tablosu */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Son İşlemler</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İşlem No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kullanıcı
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tarih
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tutar
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Durum
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    #34{item}56
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <FaUserCircle className="text-gray-500" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Kullanıcı {item}
                        </div>
                        <div className="text-sm text-gray-500">
                          user{item}@example.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2024-03-{item + 10}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ₺{item}50.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Tamamlandı
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;