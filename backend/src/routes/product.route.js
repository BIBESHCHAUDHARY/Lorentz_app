const express = require("express");
const router = new express.Router();

const { upload } = require("../middleware/upload.middleware");
const product = require("../controllers/product.controller");
const { authMiddleware } = require("../middleware/auth.middleware");

router
  .route("/product")
  .post(
    upload.fields([
      {
        name: "mainimage",
        maxCount: 1,
      },
      {
        name: "images",
        maxCount: 5,
      },
    ]),
    authMiddleware,
    product.addProduct
  )
  .get(product.getProducts);

router
  .route("/product/:id")
  .get(product.getProduct)
  .put(upload.single("image"), product.updateProduct)
  .delete(product.deleteProduct);

router.route("/myProduct").get(authMiddleware, product.myProduct);

// cart
router.post("/add-to-cart", authMiddleware, product.addToCart);
router.post("/remove-to-cart", authMiddleware, product.removeToCart);
router.put("/update-quantity", authMiddleware, product.updateQuantity);

module.exports = router;
