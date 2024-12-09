import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { setUser } from "./redux/slices/authSlice";
import { useEffect } from "react";
import { fetchUserRole } from "./redux/slices/roleSlice";



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser){
        dispatch(setUser(currentUser.providerData[0]));
        dispatch(fetchUserRole(currentUser.uid));
      }else{
        dispatch(setUser(null));
      }
        
     })
     return () => unsubscribe()
 }, [dispatch])



  return (
    <div>
    <RouterProvider router={router} />
    <Toaster position="top-right"/>
  </div>
  )
}

export default App;
