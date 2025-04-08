import React, { useState } from "react";
import Nav from "./components/Header/Header";
import Rout from "./routes/rout";
import { BrowserRouter, useLocation } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Productdetail from "./db/productdetail";

// ⚠️ AppContent phải được gọi bên trong BrowserRouter
const AppContent = () => {
    const location = useLocation();

    const [cart, setCart] = useState([]);
    const [close, setClose] = useState(false);
    const [detail, setDetails] = useState([]);
    const [product, setProduct] = useState(Productdetail);

    const searchbtn = (product) => {
        const change = Productdetail.filter((x) => x.Cat === product);
        setProduct(change);
    };

    const view = (product) => {
        setDetails([{ ...product }]);
        setClose(true);
    };

    const addtocart = (product) => {
        const exsit = cart.find((x) => x.id === product.id);
        if (exsit) {
            alert("Sản phẩm này đã được thêm vào giỏ hàng");
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
            alert("Sản phẩm đã được thêm vào giỏ hàng");
        }
    };

    // 👇 Bổ sung điều kiện cho route admin
    const hideHeaderFooter =
        location.pathname === "/login" ||
        location.pathname === "/signup" ||
        location.pathname.startsWith("/admin");

    return (
        <>
            {!hideHeaderFooter && <Nav searchbtn={searchbtn} />}
            <Rout
                product={product}
                setProduct={setProduct}
                detail={detail}
                view={view}
                close={close}
                setClose={setClose}
                cart={cart}
                setCart={setCart}
                addtocart={addtocart}
            />
            {!hideHeaderFooter && <Footer />}
        </>
    );
};

// 👇 Bọc AppContent bên trong BrowserRouter ở đây
const App = () => {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
};

export default App;
