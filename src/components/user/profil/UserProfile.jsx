import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Form, Input, Button, Upload, message, Spin } from "antd";
import { UserOutlined, LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { getUserById, updateUser, updateProfilePhoto } from "../../../services/userService";
import { storage } from "../../../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import toast from "react-hot-toast";

const UserProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const data = await getUserById(user.uid);
        if (data) {
          setUserData(data);
          form.setFieldsValue({
            fullName: data.fullName || user.displayName,
            email: data.email || user.email,
            tel: data.tel || '',
          });
          setImageUrl(data.photoURL);
        }
      } catch (error) {
        console.error("Kullanıcı bilgileri alınamadı:", error);
        // Firestore'dan veri alınamazsa Auth verilerini kullan
        form.setFieldsValue({
          fullName: user.displayName || '',
          email: user.email || '',
          tel: userData?.tel || '',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user, form, userData?.tel]);

  const handleImageUpload = async (file) => {
    setUploading(true);
    try {
      const storageRef = ref(storage, `profile-photos/${user.uid}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      
      // Fotoğraf URL'sini Firestore'da güncelle
      await updateProfilePhoto(user.uid, url);
      setImageUrl(url);
      return url;
    } catch (error) {
      console.error("Fotoğraf yükleme hatası:", error);
      toast.error("Fotoğraf yüklenirken bir hata oluştu");
      throw error;
    } finally {
      setUploading(false);
    }
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const updateData = {
        ...values,
        photoURL: imageUrl,
        tel: values.tel || userData?.tel,
        updatedAt: new Date().toISOString()
      };
      await updateUser(user.uid, updateData);
      
      const updatedData = await getUserById(user.uid);
      setUserData(updatedData);
      
      toast.success("Profil başarıyla güncellendi");
    } catch (error) {
      console.error("Güncelleme hatası:", error);
      toast.error("Profil güncellenirken bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  const uploadButton = (
    <div>
      {uploading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Fotoğraf Yükle</div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Profil Bilgilerim</h2>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <div className="mb-6 flex justify-center">
            <Upload
              name="avatar"
              listType="picture-card"
              showUploadList={false}
              beforeUpload={async (file) => {
                const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                if (!isJpgOrPng) {
                  toast.error('Sadece JPG/PNG formatında dosya yükleyebilirsiniz!');
                  return false;
                }
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                  toast.error('Dosya boyutu 2MB\'dan küçük olmalıdır!');
                  return false;
                }
                try {
                  const url = await handleImageUpload(file);
                  setImageUrl(url);
                  return false;
                } catch (error) {
                  return false;
                }
              }}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>

          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="fullName"
              label="Ad Soyad"
              rules={[{ required: true, message: "Ad Soyad zorunludur!" }]}
            >
              <Input prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item name="email" label="Email">
              <Input disabled />
            </Form.Item>

            <Form.Item
              name="tel"
              label="Telefon"
              rules={[
                { required: true, message: "Telefon numarası zorunludur!" },
                { len: 10, message: "Telefon numarası 10 haneli olmalıdır!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="w-full"
              >
                Güncelle
              </Button>
            </Form.Item>
          </Form>
        </>
      )}
    </div>
  );
};

export default UserProfile;
