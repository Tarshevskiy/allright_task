const Router = require("express");
const router = new Router();
const blogsController = require("../controller/blogs.controller");

router.post("/blogs", blogsController.createBlogs);
router.get("/blogs", blogsController.getBlogsByCategory);

module.exports = router;
