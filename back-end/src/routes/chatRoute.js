const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { message } = req.body;
  let reply = "Cảm ơn bạn đã nhắn tin. Admin sẽ phản hồi sớm!";
  if (message.includes("vận chuyển"))
    reply = "Có, đơn hàng từ 500K sẽ được miễn phí vận chuyển.";
  if (message.includes("giảm giá"))
    reply = "Hiện đang có khuyến mãi lớn cho các sản phẩm laptop.";
  if (message.includes("còn hàng"))
    reply = "Bạn vui lòng cung cấp tên sản phẩm để mình kiểm tra.";

  setTimeout(() => {
    res.json({ reply });
  }, 1000);
});

module.exports = router;
