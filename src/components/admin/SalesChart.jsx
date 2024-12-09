import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SalesChart = ({ data }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-lg font-semibold mb-4">Aylık Satış Grafiği</h2>
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
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
);

export default SalesChart; 