import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineCloseCircle } from "react-icons/ai";
import Productdetail from "./productdetail";
import "./product.css";
import { AiFillStar } from "react-icons/ai";

const Product = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  addtocart,
}) => {
  const [comments, setComments] = useState([]);
  const filtterproduct = (product) => {
    const update = Productdetail.filter((x) => {
      return x.Cat === product;
    });
    setProduct(update);
  };

  const AllProducts = () => {
    setProduct(Productdetail);
  };

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <>
      {close ? (
        <div className="products_detail">
          <div className="container">
            <button onClick={() => setClose(false)} className="closebtn">
              <AiOutlineCloseCircle />
            </button>
            {detail.map((curElm) => {
              return (
                <div className="productbox" key={curElm.id}>
                  <div className="img_box">
                    <img src={curElm.Img} alt={curElm.Title}></img>
                  </div>
                  <div className="detail">
                    <h4>{curElm.Cat}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>
                      A Screen Everyone Will One: Whether your family is
                      streaming or video chatting with friends table A8...
                    </p>
                    <h3>{curElm.Price}</h3>
                    <button onClick={() => addtocart(curElm)}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="productbox"></div>
            <div className="comments-section">
              <h3>Comments</h3>
              <div className="comments-list">
                {comments.map((comment, index) => (
                  <div className="comment" key={index}>
                    <div className="star-and-details">
                      <div className="star-icon">
                        {[...Array(parseInt(comment.stars))].map(
                          (star, index) => (
                            <AiFillStar className="gold-star" key={index} />
                          )
                        )}
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
                  e.target.elements.name.value = "";
                  e.target.elements.comment.value = "";
                  e.target.elements.stars.value = "";
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
                <li onClick={() => AllProducts()}>All Products</li>
                <li onClick={() => filtterproduct("Tablet")}>Tablet</li>
                <li onClick={() => filtterproduct("Smart Watch")}>
                  Smart Watch
                </li>
                <li onClick={() => filtterproduct("Heaphone")}>Headphone</li>
                <li onClick={() => filtterproduct("Camera")}>Camera</li>
                <li onClick={() => filtterproduct("Gaming")}>Gaming</li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contant">
              {product.map((curElm) => {
                return (
                  <div className="box" key={curElm.id}>
                    <div className="img_box">
                      <img src={curElm.Img} alt={curElm.Title}></img>
                      <div className="icon">
                        <li onClick={() => addtocart(curElm)}>
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
                      <h4>${curElm.Price}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
