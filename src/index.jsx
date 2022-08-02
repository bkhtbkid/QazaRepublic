import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Latest from "./pages/latest/Latest";
import Male from "./pages/gender/Male";
import Female from "./pages/gender/Female";
import Kids from "./pages/gender/Kids";
import Souvenirs from "./pages/souvenirs/Souvenirs";
import Accessories from "./pages/accessories/Accessories";
import Cart from "./pages/cart/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/latest" element={<Latest />} />
            <Route path="/male" element={<Male />} />
            <Route path="/female" element={<Female />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/souvenirs" element={<Souvenirs />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </BrowserRouter>
);
