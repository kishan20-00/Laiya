import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/addUser";
import ViewUsers from "./pages/Alluser";
import AddLost from "./pages/addLost";
import ViewLost from "./pages/Viewlost";
import AddLoyalty from "./pages/addLoyalty";
import ViewLoyalty from "./pages/ViewLoyalty";
import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/viewuser" element={<ViewUsers />} />
      <Route path="/addlost" element={<AddLost />} />
      <Route path="/viewlost" element={<ViewLost />} />
      <Route path="/addloyal" element={<AddLoyalty />} />
      <Route path="/viewloyal" element={<ViewLoyalty />} />
      <Route path="/home" element={<Home />} />

      </Routes>
      </BrowserRouter>
  );
}

export default App;
