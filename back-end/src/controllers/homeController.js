const HomeProduct = require("../models/home");

// Lấy tất cả sản phẩm
exports.getAllProducts = async (req, res) => {
  try {
    const products = await HomeProduct.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Lấy sản phẩm theo ID
// exports.getProductById = async (req, res) => {
//   try {
//     const productId = req.params.id;
//     const product = await HomeProduct.findById(productId);
//     if (!product) {
//       return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
//     }
//     res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

