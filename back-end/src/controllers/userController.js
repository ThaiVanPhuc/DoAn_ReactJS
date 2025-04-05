const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserController {
  async signin(req, res) {
    try {
      const { username, email, password, isAdmin } = req.body;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const trimmedPassword = password.trim(); // Loại bỏ dấu cách thừa
      const hashedPassword = await bcrypt.hash(trimmedPassword, 10); // Mã hóa mật khẩu với 10 rounds
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        isAdmin,
      });
      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Register Error:", error);
      res.status(500).json({ message: "Server error while registering user" });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const trimmedPassword = password.trim(); // Loại bỏ dấu cách thừa trong mật khẩu nhập vào

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const isMatch = bcrypt.compareSync(trimmedPassword, user.password); // Sử dụng compareSync thay vì compare

      if (!isMatch) {
        return res.status(400).json({ message: "Invalid password" });
      }

      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        "secretKey",
        { expiresIn: "1h" }
      );
      res.json({ token });
    } catch (error) {
      console.error("Login Error:", error);
      res.status(500).json({ message: "Server error while logging in" });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error("Get Users Error:", error);
      res.status(500).json({ message: "Server error while getting users" });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json(user);
    } catch (error) {
      console.error("Get User By ID Error:", error);
      res
        .status(500)
        .json({ message: "Server error while getting user by ID" });
    }
  }

  async updateUser(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedUser)
        return res.status(404).json({ message: "User not found" });
      res.json(updatedUser);
    } catch (error) {
      console.error("Update User Error:", error);
      res.status(500).json({ message: "Server error while updating user" });
    }
  }

  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser)
        return res.status(404).json({ message: "User not found" });
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      console.error("Delete User Error:", error);
      res.status(500).json({ message: "Server error while deleting user" });
    }
  }
}

module.exports = new UserController();
