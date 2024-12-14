import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Input, Button, Card, Radio } from "antd";
import { CreditCardOutlined, WalletOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { addBilet } from "../../services/biletService";
import { updateSeferKoltuk } from "../../services/seferlerService";

const OdemePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { yolcuBilgileri, koltukNo, seferBilgileri } = location.state || {};
  const user = useSelector((state) => state.auth.user);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      // Önce bilet kaydını oluştur
      const biletData = {
        userId: user.uid,
        seferId: seferBilgileri.id,
        yolcuBilgileri,
        koltukNo,
        seferBilgileri,
        odemeBilgileri: values,
        aktif: true,
        createdAt: new Date().toISOString(),
      };

      const biletRef = await addBilet(biletData);

      // Sonra koltuğu güncelle
      await updateSeferKoltuk(seferBilgileri.id, koltukNo, {
        cinsiyet: yolcuBilgileri.cinsiyet,
        dolu: true,
        biletId: biletRef.id,
      });

      navigate("/bilet-basarili", {
        state: {
          biletDetay: {
            ...yolcuBilgileri,
            koltukNo,
            ...seferBilgileri,
            odemeBilgileri: values,
          },
        },
      });

      toast.success("Ödeme başarıyla tamamlandı");
    } catch (error) {
      console.error("Hata:", error);
      toast.error("Ödeme işlemi sırasında bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Ödeme</h1>

        <Card className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Sefer Bilgileri</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Kalkış-Varış:</p>
              <p>
                {seferBilgileri?.kalkis} - {seferBilgileri?.varis}
              </p>
            </div>
            <div>
              <p className="font-medium">Koltuk No:</p>
              <p>{koltukNo}</p>
            </div>
            <div>
              <p className="font-medium">Yolcu:</p>
              <p>
                {yolcuBilgileri?.ad} {yolcuBilgileri?.soyad}
              </p>
            </div>
            <div>
              <p className="font-medium">Toplam Tutar:</p>
              <p className="text-xl font-bold text-orange-500">
                ₺{seferBilgileri?.fiyat}
              </p>
            </div>
          </div>
        </Card>

        <Form layout="vertical" onFinish={handleSubmit}>
          <div className="mb-6">
            <Radio.Group defaultValue="kart" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Radio.Button
                  value="kart"
                  className="h-20 flex items-center justify-center"
                >
                  <div className="flex items-center">
                    <CreditCardOutlined className="text-xl mr-2" />
                    <span>Kredi/Banka Kartı</span>
                  </div>
                </Radio.Button>
                <Radio.Button
                  value="havale"
                  className="h-20 flex items-center justify-center"
                >
                  <div className="flex items-center">
                    <WalletOutlined className="text-xl mr-2" />
                    <span>Havale/EFT</span>
                  </div>
                </Radio.Button>
              </div>
            </Radio.Group>
          </div>

          <Card title="Kart Bilgileri">
            <Form.Item
              name="cardNumber"
              label="Kart Numaras��"
              rules={[{ required: true, message: "Kart numarası gereklidir" }]}
            >
              <Input maxLength={16} placeholder="1234 5678 9012 3456" />
            </Form.Item>

            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                name="expiry"
                label="Son Kullanma Tarihi"
                rules={[
                  { required: true, message: "Son kullanma tarihi gereklidir" },
                ]}
              >
                <Input placeholder="MM/YY" maxLength={5} />
              </Form.Item>

              <Form.Item
                name="cvv"
                label="CVV"
                rules={[{ required: true, message: "CVV gereklidir" }]}
              >
                <Input maxLength={3} />
              </Form.Item>
            </div>

            <Form.Item
              name="cardHolderName"
              label="Kart Üzerindeki İsim"
              rules={[
                { required: true, message: "Kart sahibinin adı gereklidir" },
              ]}
            >
              <Input placeholder="Ad Soyad" />
            </Form.Item>
          </Card>

          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            block
            size="large"
            className="mt-6"
          >
            Ödemeyi Tamamla
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default OdemePage;
