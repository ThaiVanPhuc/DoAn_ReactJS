import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isValidEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(formData.email);
  };

  const isValidPhoneNumber = () => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(formData.phoneNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail()) {
      setErrorMessage('Email không hợp lệ. Vui lòng kiểm tra lại.');
      return;
    }

    if (!isValidPhoneNumber()) {
      setErrorMessage('Số điện thoại không hợp lệ. Vui lòng nhập đúng 10 số.');
      return;
    }

    alert(`Chào mừng ${formData.username} đã đến với ReactPG. Chúc bạn mua hàng vui vẻ!`);
    navigate('/');
  };

  return (
    <div className="signup-container">
      <h2>Đăng Ký</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Tên người dùng:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Mật khẩu:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Xác nhận mật khẩu:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <label htmlFor="phoneNumber">Số điện thoại:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <button type="submit" className='dangky'>
          Đăng Ký
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>
        Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
      </p>
    </div>
  );
};

export default SignUp;
