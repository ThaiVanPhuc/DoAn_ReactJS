import React, { useState, useEffect } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineCloseCircle,
  AiFillStar,
} from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./product.css";
import httpRequest from "../../../utils/httpRequest";
import { getImageUrl } from "../../../utils/image";

const Product = ({ detail }) => {
  const [product, setProduct] = useState([]);
  const [originalProduct, setOriginalProduct] = useState([]);
  const [comments, setComments] = useState([]);
  const [close, setClose] = useState(false);
  const navigate = useNavigate();

  const filterProduct = (category) => {
    const filtered = originalProduct.filter((x) => x.Cat === category);
    setProduct(filtered);
  };

  const allProducts = () => {
    setProduct(originalProduct);
  };

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const view = (product) => {
    navigate(`/product/${product._id}`);
  };

  const handleAddToCart = async (item) => {
    try {
      await httpRequest.post("cart", {
        productId: item._id,
        qty: 1,
      });
      alert("Đã thêm vào giỏ hàng");
    } catch (err) {
      alert("Không thể thêm vào giỏ hàng");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await httpRequest.get("products");
        setProduct(response.data);
        setOriginalProduct(response.data);
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {close ? (
        <div className="products_detail mb-4">
          <div className="container">
            <button onClick={() => setClose(false)} className="closebtn">
              <AiOutlineCloseCircle />
            </button>

            {detail.map((curElm) => (
              <div className="productbox mb-3" key={curElm._id}>
                <div className="img_box">
                  <img src={curElm.Img} alt={curElm.Title}></img>
                </div>
                <div className="detail">
                  <h4>{curElm.Cat}</h4>
                  <h2>{curElm.Title}</h2>
                  <h3>{curElm.Price.toLocaleString("vi-VN")} VND</h3>
                  <button onClick={() => handleAddToCart(curElm)}>
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}

            <div className="productbox"></div>

            <div className="comments-section">
              <h3>Comments</h3>
              <div className="comments-list">
                {comments.map((comment, index) => (
                  <div className="comment" key={index}>
                    <div className="star-and-details">
                      <div className="star-icon">
                        {[...Array(parseInt(comment.stars))].map((_, i) => (
                          <AiFillStar className="gold-star" key={i} />
                        ))}
                      </div>
                      <div className="comment-details">
                        <p>
                          <strong>{comment.name}</strong>
                        </p>
                        <p>{comment.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const newComment = {
                    name: e.target.elements.name.value,
                    comment: e.target.elements.comment.value,
                    stars: e.target.elements.stars.value,
                  };
                  addComment(newComment);
                  e.target.reset();
                }}
              >
                <input type="text" name="name" placeholder="Your name..." />
                <input
                  type="text"
                  name="comment"
                  placeholder="Your comment..."
                />
                <select name="stars">
                  <option value="1">1 star</option>
                  <option value="2">2 stars</option>
                  <option value="3">3 stars</option>
                  <option value="4">4 stars</option>
                  <option value="5">5 stars</option>
                </select>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      ) : null}

      <div className="products">
        <h2>Products</h2>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>categories</h3>
              <ul>
                <li onClick={allProducts}>All Products</li>
                <li onClick={() => filterProduct("Tablet")}>Tablet</li>
                <li onClick={() => filterProduct("Smart Watch")}>
                  Smart Watch
                </li>
                <li onClick={() => filterProduct("Laptop")}>Laptop</li>
                <li onClick={() => filterProduct("Headphone")}>Headphone</li>
                <li onClick={() => filterProduct("Camera")}>Camera</li>
                <li onClick={() => filterProduct("Gaming")}>Gaming</li>
              </ul>
            </div>
          </div>

          <div className="productbox">
            <div className="contant">
              {product.map((curElm) => (
                <div className="box" key={curElm._id}>
                  <div className="img_box">
                    <img src={getImageUrl(curElm.Img)} alt={curElm.Title} />
                    <div className="icon">
                      <li onClick={() => handleAddToCart(curElm)}>
                        <AiOutlineShoppingCart />
                      </li>
                      <li onClick={() => view(curElm)}>
                        <BsEye />
                      </li>
                      <li>
                        <AiOutlineHeart />
                      </li>
                    </div>
                  </div>

                  <div className="detail">
                    <p>{curElm.Cat}</p>
                    <h3>{curElm.Title}</h3>
                    <h4>{curElm.Price.toLocaleString("vi-VN")} VND</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
