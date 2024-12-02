import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./context/AuthContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(

<AuthProvider>
<App />
</AuthProvider>


);
