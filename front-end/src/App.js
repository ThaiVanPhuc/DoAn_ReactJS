import React, { useState } from "react";
import Nav from "./components/Header/Header";
import Rout from "./routes/rout";
import { BrowserRouter, useLocation } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Productdetail from "./db/productdetail";
import 'bootstrap/dist/js/bootstrap.bundle.min';

const AppContent = () => {
  const location = useLocation();

  // add to cart
  const [cart, setCart] = useState([]);
  //product Details
  const [close, setClose] = useState(false);
  const [detail, setDetails] = useState([]);
  //filter product
  const [product, setProduct] = useState(Productdetail);
  const searchbtn = (product) => {
    const change = Productdetail.filter((x) => {
      return x.Cat === product;
    });
    setProduct(change);
  };
  //product detail
  const view = (product) => {
    setDetails([{ ...product }]);
    setClose(true);
  };

  //add to cart
  const addtocart = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    if (exsit) {
      alert("Sản phẩm này đã được thêm vào giỏ hàng");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Sản phẩm đã được thêm vào giỏ hàng");
    }
  };

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

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
