import { useState, useEffect } from "react";
import { Card, Table, Tag, Empty } from "antd";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { getUserBiletler } from "../../services/biletService";

const Biletlerim = () => {
  const [biletler, setBiletler] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchBiletler = async () => {
      try {
        const data = await getUserBiletler(user.uid);
        setBiletler(data);
      } catch (error) {
        console.error("Hata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBiletler();
  }, [user.uid]);

  const columns = [
    {
      title: "Sefer Bilgileri",
      dataIndex: "seferBilgileri",
      key: "seferBilgileri",
      render: (sefer) => (
        <div>
          <div className="font-semibold">{sefer.kalkis} - {sefer.varis}</div>
          <div className="text-sm text-gray-500">
            {dayjs(sefer.tarih).format("DD.MM.YYYY")} - {sefer.saat}
          </div>
        </div>
      ),
    },
    {
      title: "Yolcu",
      dataIndex: "yolcuBilgileri",
      key: "yolcuBilgileri",
      render: (yolcu) => (
        <div>
          <div>{yolcu.ad} {yolcu.soyad}</div>
          <div className="text-sm text-gray-500">{yolcu.tcno}</div>
        </div>
      ),
    },
    {
      title: "Koltuk",
      dataIndex: "koltukNo",
      key: "koltukNo",
      render: (koltuk) => <Tag color="blue">{koltuk}</Tag>,
    },
    {
      title: "Ücret",
      dataIndex: "seferBilgileri",
      key: "ucret",
      render: (sefer) => <span className="font-semibold">₺{sefer.fiyat}</span>,
    },
  ];

  if (!loading && biletler.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Empty
          description="Henüz satın aldığınız bilet bulunmamaktadır"
          className="my-8"
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card title="Biletlerim" className="shadow-md">
        <Table
          columns={columns}
          dataSource={biletler}
          rowKey="id"
          loading={loading}
          pagination={false}
        />
      </Card>
    </div>
  );
};

export default Biletlerim; 