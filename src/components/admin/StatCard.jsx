const StatCard = ({ title, value, percentage, icon, color }) => (
  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-gray-500 text-xs sm:text-sm">{title}</p>
        <p className="text-lg sm:text-2xl font-bold">{value}</p>
      </div>
      <div className={`p-2 sm:p-3 rounded-full ${color}`}>
        {icon}
      </div>
    </div>
    <div className="mt-2 sm:mt-4">
      <span className="text-green-500 text-xs sm:text-sm">{percentage}</span>
      <span className="text-gray-500 text-xs sm:text-sm"> geçen aya göre</span>
    </div>
  </div>
);

export default StatCard; 