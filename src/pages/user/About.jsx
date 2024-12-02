import { FaBus, FaUserGroup, FaLocationDot, FaClock } from "react-icons/fa6";

const AboutPage = () => {
  const stats = [
    {
      id: 1,
      name: "Aktif Kullanıcı",
      value: "1M+",
      icon: <FaUserGroup className="text-4xl text-orange-500" />,
    },
    {
      id: 2,
      name: "Günlük Sefer",
      value: "500+",
      icon: <FaBus className="text-4xl text-orange-500" />,
    },
    {
      id: 3,
      name: "Şehir",
      value: "81",
      icon: <FaLocationDot className="text-4xl text-orange-500" />,
    },
    {
      id: 4,
      name: "Yıllık Deneyim",
      value: "10+",
      icon: <FaClock className="text-4xl text-orange-500" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Hakkımızda</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          2014 yılından beri Türkiye'nin dört bir yanına güvenli ve konforlu seyahat imkanı sunuyoruz. 
          Müşteri memnuniyeti odaklı hizmet anlayışımızla sektörde öncü konumdayız.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat) => (
          <div key={stat.id} className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">{stat.icon}</div>
            <div className="font-bold text-2xl mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.name}</div>
          </div>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Misyonumuz</h2>
          <p className="text-gray-600">
            Yolcularımıza en güvenli, konforlu ve ekonomik seyahat deneyimini sunmak. 
            Modern filosu ve profesyonel ekibiyle kaliteli hizmet standardını korumak ve 
            sürekli geliştirmek.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Vizyonumuz</h2>
          <p className="text-gray-600">
            Türkiye'nin lider online otobüs bileti platformu olmak. Teknolojik altyapımız ve 
            müşteri odaklı yaklaşımımızla sektöre yön veren bir marka olmaya devam etmek.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Değerlerimiz</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="font-bold text-xl mb-4">Güvenilirlik</h3>
            <p>Yolcularımızın güvenliği ve memnuniyeti bizim için her şeyden önemlidir.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-xl mb-4">Yenilikçilik</h3>
            <p>Sürekli gelişen teknoloji ve değişen ihtiyaçlara uyum sağlarız.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-xl mb-4">Müşteri Odaklılık</h3>
            <p>Müşterilerimizin ihtiyaç ve beklentilerini her zaman ön planda tutarız.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;