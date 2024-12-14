import { useLocation, Link } from 'react-router-dom';
import { Result, Button, Card } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const BiletBasariliPage = () => {
  const location = useLocation();
  const { biletDetay } = location.state || {};

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Result
          icon={<CheckCircleOutlined className="text-green-500" />}
          title="Bilet Satın Alma İşlemi Başarılı!"
          subTitle="Bilet detaylarınız aşağıda yer almaktadır."
          extra={[
            <Link to="/search-ticket" key="search">
              <Button type="primary">
                Yeni Sefer Ara
              </Button>
            </Link>,
            <Link to="/biletlerim" key="profile">
              <Button>
                Biletlerim
              </Button>
            </Link>,
          ]}
        />

        <Card title="Bilet Detayları" className="mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Yolcu Adı:</p>
              <p>{biletDetay?.ad} {biletDetay?.soyad}</p>
            </div>
            <div>
              <p className="font-semibold">T.C. Kimlik No:</p>
              <p>{biletDetay?.tcno}</p>
            </div>
            <div>
              <p className="font-semibold">Kalkış:</p>
              <p>{biletDetay?.kalkis}</p>
            </div>
            <div>
              <p className="font-semibold">Varış:</p>
              <p>{biletDetay?.varis}</p>
            </div>
            <div>
              <p className="font-semibold">Tarih:</p>
              <p>{dayjs(biletDetay?.tarih).format('DD.MM.YYYY')}</p>
            </div>
            <div>
              <p className="font-semibold">Saat:</p>
              <p>{biletDetay?.saat}</p>
            </div>
            <div>
              <p className="font-semibold">Koltuk No:</p>
              <p>{biletDetay?.koltukNo}</p>
            </div>
            <div>
              <p className="font-semibold">Ödenen Tutar:</p>
              <p>₺{biletDetay?.fiyat}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BiletBasariliPage; 