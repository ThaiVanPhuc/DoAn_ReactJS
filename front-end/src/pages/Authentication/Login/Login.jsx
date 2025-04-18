import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isValidEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(formData.email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail()) {
      alert('Email không hợp lệ. Vui lòng kiểm tra lại.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        const { token, user } = data;

        // Lưu token và thông tin người dùng vào localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        alert('Đăng nhập thành công!');

        // Điều hướng dựa trên vai trò
        if (user.role === 'admin') {
          navigate('/admin');
        } else {

          navigate('/');
        }
      } else {
        alert(`Đăng nhập thất bại: ${data.message || 'Sai thông tin đăng nhập'}`);
      }
    } catch (error) {
      console.error('Lỗi khi gọi API đăng nhập:', error);
      alert('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
    }
  };

  return (
    <div className="login-container">
      {/* Bên trái: ảnh */}
      <div className="login-image" />

      {/* Bên phải: form */}
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p>
          <span className="text-gray">Don't have an account? </span>
          <Link to="/signup" className="text-blue">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
