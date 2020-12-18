const Router = require("express");
const router = new Router();
const newsController = require("../controller/news.controller");

router.post("/news", newsController.createNews);
router.get("/news", newsController.getNewsByCategory);

module.exports = router;
