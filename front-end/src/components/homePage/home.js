import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { BiHeadphone } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "./home.css";
import Chatbox from "../chatbox";

const Home = ({ detail, view, close, setClose, addtocart }) => {
  const sliderRef = useRef();
  const [currentImage, setCurrentImage] = useState(0);
  const visibleImages = 4;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const images = [
    "./img/product/tv.png",
    "./img/product/watch.png",
    "./img/product/Headphone.png",
    "./img/product/ipad.png",
    "./img/product/hinh2.png",
    "./img/product/hinh1.png",
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products/all");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handlePrev = () => {
    setCurrentImage((prevImage) => prevImage - 1 + images.length);
  };

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImage]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft =
        currentImage * sliderRef.current.offsetWidth;
    }
  }, [currentImage]);

  return (
    <>
      {close && (
        <div className="products_detail">
          <div className="container">
            <button onClick={() => setClose(false)} className="closebtn">
              <AiOutlineCloseCircle />
            </button>
            {detail.map((curElm) => (
              <div className="productbox" key={curElm.id}>
                <div className="img_box">
                  <img src={curElm.Img} alt={curElm.Title} />
                </div>
                <div className="detail">
                  <h4>{curElm.Cat}</h4>
                  <h2>{curElm.Title}</h2>
                  <p>
                    A Screen Everyone Will Want: Whether your family is
                    streaming or video chatting with friends...
                  </p>
                  <h3>${curElm.Price}</h3>
                  <button onClick={() => addtocart(curElm)}>Add To Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2> The Best Note Book Collection 2023</h2>
            <Link to="/product" className="link">
              Shop Now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src="./img/product/ipad.png" alt="Banner" />
          </div>
        </div>
      </div>

      <div className="product_type">
        <div className="container" ref={sliderRef}>
          <button className="prev-btn" onClick={handlePrev}>
            &#8249;
          </button>
          {images.slice(0, visibleImages).map((image, index) => (
            <div className="box" key={index}>
              <div className="img_box">
                <img
                  src={images[(index + currentImage) % images.length]}
                  alt={`Image ${index}`}
                />
              </div>
            </div>
          ))}
          <button className="next-btn" onClick={handleNext}>
            &#8250;
          </button>
        </div>
      </div>

      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FiTruck />
            </div>
            <div className="detail">
              <h3>Free Shipping</h3>
              <p>Orders above $1000</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BsCurrencyDollar />
            </div>
            <div className="detail">
              <h3>Return & Refund</h3>
              <p>Money Back Guarantee</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <CiPercent />
            </div>
            <div className="detail">
              <h3>Member Discount</h3>
              <p>On every Order</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BiHeadphone />
            </div>
            <div className="detail">
              <h3>Customer Support</h3>
              <p>24/7 Call Support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="product">
        <h2> Top Products</h2>
        <div className="container">
          {loading && <p>Loading products...</p>}
          {error && <p>{error}</p>}
          {!loading &&
            !error &&
            products.map((curElm) => (
              <div className="box" key={curElm._id}>
                <div className="img_box">
                  <img src={curElm.Img} alt={curElm.Title} />
                  <div className="icon">
                    <li onClick={() => addtocart(curElm)}>
                      <CiShoppingCart />
                    </li>
                    <li onClick={() => view(curElm)}>
                      <FaEye />
                    </li>
                    <li>
                      <CiHeart />
                    </li>
                  </div>
                </div>
                <div className="detail">
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>${curElm.Price}</h4>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Apple iPad 10.2 9th Gen - 2021</h3>
            <Link to="/product" className="link">
              Shop Now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src="./img/product/ipad.png" alt="iPad" />
          </div>
        </div>
        <Chatbox />
      </div>
    </>
  );
};

export default Home;
