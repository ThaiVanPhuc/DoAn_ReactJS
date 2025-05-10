import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { FaTruckMoving } from "react-icons/fa";
import "./Header.css";

const Nav = ({ searchbtn }) => {
    const [search, setSearch] = useState("");

    return (
        <>
            {/* Thông báo miễn phí vận chuyển */}
            <div className="free-shipping">
                <FaTruckMoving className="truck-icon" />
                <p>MIỄN PHÍ Vận Chuyển Khi Trên 500 Nghìn Đồng</p>
            </div>

            {/* Header */}
            <header className="main-header">
                <div className="container">
                    {/* Logo + Tên Shop */}
                    <div className="logo-container">
                        <Link to="/" className="logo">
                            <img src="/img/box-Banner/logo.gif" alt="Logo" />
                        </Link>
                        <span className="shop-name">Shop Technology</span>
                    </div>

                    {/* Ô tìm kiếm */}
                    <div className="search-box">
                        <input
                            type="text"
                            value={search}
                            placeholder="Tìm kiếm sản phẩm..."
                            autoComplete="off"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className="search-btn" onClick={() => searchbtn(search)}>
                            🔍
                        </button>
                    </div>

                    {/* Icon menu */}
                    <div className="nav-icons">
                        <Link to="/" className="icon-link">
                            <AiOutlineHeart />
                        </Link>
                        <Link to="/cart" className="icon-link">
                            <BsBagCheck />
                        </Link>
                        <Link to="/login" className="icon-link">
                            <IoPersonOutline />
                        </Link>
                        <Link to="/signup" className="btn">Đăng ký</Link>
                        <Link to="/login" className="btn">Đăng nhập</Link>
                    </div>
                </div>
            </header >

            {/* Navigation */}
            <nav nav className="nav" >
                <div className="container">
                    <ul className="nav-menu">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/product" className="nav-link">Sản phẩm</Link>
                        <Link to="/new" className="nav-link">Giới thiệu</Link>
                        <Link to="/contact" className="nav-link">Liên hệ</Link>
                    </ul>
                </div>
            </nav >
        </>
    );
};

export default Nav;
