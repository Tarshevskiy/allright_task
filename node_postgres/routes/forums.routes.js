const Router = require("express");
const router = new Router();
const forumsController = require("../controller/forums.controller");

router.post("/forums", forumsController.createForums);
router.get("/forums", forumsController.getForumsByCategory);

module.exports = router;
