const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  // patchCar
} = require("../controllers/blogControllers");
 
// GET /cars
router.get("/", getAllBlogs);

// POST /cars
router.post("/", getBlogById);

// GET /cars/:carId
router.get("/:blogId", createBlog);

// PUT /cars/:carId
router.put("/:blogId", updateBlog);

// DELETE /cars/:carId
router.delete("/:blogId", deleteBlog);

// Update car using PATCH 
// router.patch('/:carId', patchCar)

module.exports = router;
