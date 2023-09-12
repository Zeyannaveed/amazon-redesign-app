const express = require("express");
const router = express.Router();
const Product = require("../models/Products");
const fetchuser = require("../middleware/ferchuser");
const Cart = require("../models/cart");

router.get("/", async (req, res) => {
  try {
    const categories = ["laptop", "phone", "camera"];
    const productsByCategory = await Promise.all(
      categories.map(async (category) => {
        const products = await Product.find({ catagory: category }).limit(3);
        return { products };
      })
    );
    const allProducts = [].concat(...productsByCategory);

    res.json(allProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/cartadd", fetchuser, async (req, res) => {
  try {
    const { productId } = req.body;

    const userId = await req.user.id;

    const result = await Cart.create({
      username: userId,
      products: productId,
    });
    result.save();

    res.json(result);
  } catch {
    res.status(500).json("internal server error");
  }
});

router.post("/cart", fetchuser, async (req, res) => {
  try {
    const userId = await req.user.id;

    const result = await Cart.find({ username: userId })
      .select("-username")
      .populate("products");
    res.json(result);
    console.log(result);
  } catch {
    res.status(500).json("there was a servver error");
  }
});

router.post("/search", async (req, res) => {
  try {
    const { catagory } = req.body || undefined;
    const { search } = req.body || undefined;

    console.log(search);
    if (catagory === undefined) {
      const searchResults = await Product.find({
        $or: [
          { name: { $regex: search, $options: "i" } },
          { catagory: { $regex: search, $options: "i" } },
        ],
      });

      res.json(searchResults);
    } else {
      //catagory serach coode
      const products = await Product.find({ catagory: catagory }).select(
        "-description"
      );
      res.json(products);
    }
  } catch {
    res.status(500).json("internal serverr error");
  }
});

router.get("/:link", async (req, res) => {
  const link = req.params.link;
  try {
    const data = await Product.find({ _id: link });
    res.json(data);
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
