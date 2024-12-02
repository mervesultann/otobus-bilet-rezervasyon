import { FaPercent, FaTicket, FaGift } from "react-icons/fa6";

const campaigns = [
  {
    id: 1,
    title: "İlk Yolculuk İndirimi",
    description: "İlk seyahatinizde %20 indirim fırsatı",
    code: "ILKYOLCULUK20",
    expiry: "31.12.2024",
    icon: <FaPercent className="text-4xl text-orange-500" />,
    terms: ["Yeni üyeler için geçerlidir", "Diğer indirimlerle birleştirilemez"]
  },
  {
    id: 2,
    title: "Öğrenci Kampanyası",
    description: "Öğrencilere özel tüm seferlerde %15 indirim",
    code: "OGRENCI15",
    expiry: "Süresiz",
    icon: <FaTicket className="text-4xl text-orange-500" />,
    terms: ["Öğrenci kimliği ibrazı gereklidir", "Tüm hatlarda geçerlidir"]
  },
  {
    id: 3,
    title: "Hafta Sonu Fırsatı",
    description: "Cumartesi-Pazar seferlerinde %10 indirim",
    code: "HAFTASONU10",
    expiry: "31.03.2024",
    icon: <FaGift className="text-4xl text-orange-500" />,
    terms: ["Sadece hafta sonu seferleri için geçerlidir", "30 gün önceden yapılan rezervasyonlarda geçerlidir"]
  }
];

const Fırsatlar = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Güncel Kampanyalar</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
              <div className="flex justify-center items-center h-16">
                {campaign.icon}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center mb-3">
                {campaign.title}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {campaign.description}
              </p>
              
              <div className="bg-orange-50 p-4 rounded-lg mb-4">
                <p className="text-center font-semibold text-orange-600">
                  Kampanya Kodu: {campaign.code}
                </p>
                <p className="text-center text-sm text-gray-500 mt-2">
                  Son Geçerlilik: {campaign.expiry}
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-700">Koşullar:</p>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  {campaign.terms.map((term, index) => (
                    <li key={index}>{term}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fırsatlar;