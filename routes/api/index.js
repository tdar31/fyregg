const router = require("express").Router();
const bookRoutes = require("./books");
const summonerRoutes = require("./summoner");
const matchDataController = require("./matchdata");
const userCheckController = require("./usercheck");
const rankedDataController = require("./rankeddata");
const matchController = require("./match");

router.use("/summoner", summonerRoutes);
router.use("/matchData", matchDataController);
router.use("/userCheck", userCheckController);
router.use("/rankedData", rankedDataController);
router.use("/match", matchController);
router.use("/books", bookRoutes);

module.exports = router;
