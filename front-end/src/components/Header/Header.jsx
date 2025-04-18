import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Button, Form, FormControl } from "react-bootstrap";
import { FaHeart, FaShoppingBag, FaUser, FaSearch } from "react-icons/fa"; 
import { Link } from "react-router-dom";
import logo from "../../assets/box-Banner/logo.gif";

const Header = () => {
  
  const [searchQuery, setSearchQuery] = useState("");

  // Hàm xử lý thay đổi giá trị tìm kiếm
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Hàm xử lý khi người dùng submit tìm kiếm
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Tìm kiếm với từ khóa:", searchQuery);
  };


  return (
    <Navbar expand="lg" style={{ backgroundColor: "#fbdada" }}>
      <Container>

        {/* Logo + Tên ShopShop */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt=""
            width="40px" height="40px"
            className="me-2"
          />
          <span className="fw-bold text-primary">TECHNOLOGY SHOP</span>
        </Navbar.Brand>

        {/* Toggle Navbar */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          <Nav className="mx-auto">
            <Nav.Item>
              <Link to="/" className="nav-link">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/product" className="nav-link">Sản phẩm</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/about" className="nav-link">Giới thiệu</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contact" className="nav-link">Liên hệ</Link>
            </Nav.Item>
          </Nav>    
          <Form className="d-flex align-items-center" onSubmit={handleSearchSubmit} style={{ width: "200px" }}>
            <FormControl
              type="text"
              placeholder="Tìm kiếm sản phẩm"
              className="me-2"
              value={searchQuery}
              onChange={handleSearchChange}
              style={{ width: "100%", padding: "10px", borderRadius: "20px" }} />
             <Button variant="outline-primary" type="submit" style={{ border: "none", backgroundColor: "transparent", padding: "0" }}>
              <FaSearch size={20} color="#007bff" />
            </Button>
          </Form>


          {/* ICON */}
          <div className="d-flex align-items-center gap-3">
            <Link to="/favorites">
              <FaHeart size={20} color="red" />
            </Link>
            <Link to="/cart">
              <FaShoppingBag size={20} color="green" />
            </Link>
            <Link to="/login">
              <FaUser size={20} />
            </Link>
            {/* Đăng ký + Đăng nhập */}
            <Link to="/signup">
              <Button variant="outline-secondary" size="sm">Đăng ký</Button>
            </Link>
            <Link to="/login">
              <Button variant="outline-secondary" size="sm">Đăng nhập</Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
