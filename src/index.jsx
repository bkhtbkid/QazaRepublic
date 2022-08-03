import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Latest from "./pages/latest/Latest";
import Male from "./pages/gender/Male";
import Female from "./pages/gender/Female";
import Kids from "./pages/gender/Kids";
import Accessories from "./pages/accessories/Accessories";
import Cart from "./pages/cart/Cart";
import Boxes from "./pages/boxes/Boxes";
import Item from "./pages/Item/Item";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/latest" element={<Latest />} />
            <Route path="/male" element={<Male />} />
            <Route path="/female" element={<Female />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/boxes" element={<Boxes />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/item/:id" element={<Item />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </BrowserRouter>
);
