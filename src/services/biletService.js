import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import toast from "react-hot-toast";

export const addBilet = async (biletData) => {
  try {
    const docRef = await addDoc(collection(db, "biletler"), {
      ...biletData,
      createdAt: new Date().toISOString()
    });
    
    return { id: docRef.id, ...biletData };
  } catch (error) {
    console.error("Bilet kaydetme hatası:", error);
    toast.error("Bilet kaydedilirken bir hata oluştu");
    throw error;
  }
};

export const getUserBiletler = async (userId) => {
  try {
    const q = query(
      collection(db, "biletler"), 
      where("userId", "==", userId),
      where("aktif", "==", true)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    toast.error("Biletler yüklenirken bir hata oluştu");
    throw error;
  }
};

export const getSeferBiletler = async (seferId) => {
  try {
    const q = query(collection(db, "biletler"), where("seferId", "==", seferId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    toast.error("Sefer biletleri yüklenirken bir hata oluştu");
    throw error;
  }
}; 