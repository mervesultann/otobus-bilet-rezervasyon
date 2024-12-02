import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { Toaster } from "react-hot-toast";



function App() {
  return (
    <div>
    <RouterProvider router={router} />
    <Toaster position="top-right"/>
  </div>
  )
}

export default App;
