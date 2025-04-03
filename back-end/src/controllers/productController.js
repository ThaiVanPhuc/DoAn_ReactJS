const Product = require("../models/Product");

class ProductController {
  // [GET] /api/products
  getAllProdcut = async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  };

  // [POST] /api/products
  addProduct = async (req, res) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      console.error(500).json({ message: "Failed to add product" });
    }
  };
}

module.exports = new ProductController();
