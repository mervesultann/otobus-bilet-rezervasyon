import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query,
  where,
  orderBy 
} from "firebase/firestore";
import { db } from "../config/firebase";
import toast from "react-hot-toast";

// Kullanıcı oluşturma
export const createUser = async (userData) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      ...userData,
      createdAt: new Date().toISOString(),
    });
    toast.success("Kullanıcı başarıyla oluşturuldu");
    return { id: docRef.id, ...userData };
  } catch (error) {
    toast.error("Kullanıcı oluşturulurken bir hata oluştu");
    throw error;
  }
};

// Tüm kullanıcıları getirme
export const getUsers = async () => {
  try {
    const q = query(collection(db, "users"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    toast.error("Kullanıcılar yüklenirken bir hata oluştu");
    throw error;
  }
};

// Tek kullanıcı getirme
export const getUserById = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()) {
      return { id: userDoc.id, ...userDoc.data() };
    } else {
      toast.error("Kullanıcı bulunamadı");
      throw new Error("Kullanıcı bulunamadı");
    }
  } catch (error) {
    console.error("Kullanıcı bilgileri alma hatası:", error);
    toast.error("Kullanıcı bilgileri alınırken bir hata oluştu");
    throw error;
  }
};

// Kullanıcı güncelleme
export const updateUser = async (userId, userData) => {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      ...userData,
      updatedAt: new Date().toISOString(),
    });
    toast.success("Kullanıcı başarıyla güncellendi");
  } catch (error) {
    toast.error("Kullanıcı güncellenirken bir hata oluştu");
    throw error;
  }
};

// Kullanıcı silme
export const deleteUser = async (userId) => {
  try {
    await deleteDoc(doc(db, "users", userId));
    toast.success("Kullanıcı başarıyla silindi");
  } catch (error) {
    toast.error("Kullanıcı silinirken bir hata oluştu");
    throw error;
  }
};

// Role göre kullanıcı arama
export const getUsersByRole = async (role) => {
  try {
    const q = query(
      collection(db, "users"),
      where("role", "==", role),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    toast.error("Kullanıcılar aranırken bir hata oluştu");
    throw error;
  }
};

// Profil fotoğrafı güncelleme
export const updateProfilePhoto = async (userId, photoURL) => {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      photoURL,
      updatedAt: new Date().toISOString(),
    });
    toast.success("Profil fotoğrafı güncellendi");
    return photoURL;
  } catch (error) {
    toast.error("Profil fotoğrafı güncellenirken bir hata oluştu");
    throw error;
  }
};
