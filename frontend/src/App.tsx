import AlertsMap from "./components/AlertsMap";
import { Route, Routes } from "react-router";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="Login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route element={<ProtectedRoute/>}>
          <Route path="/" element={<Home/>} />
        </Route>
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>

      
    </div>
  )
}
