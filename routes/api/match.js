const router = require("express").Router();
const matchController = require("../../controllers/matchController");
console.log("INSIDE matchController ROUTES");

router.route("/:id")
.put(matchController.findByMatchId)
.post(matchController.createMatch)
// .get(rankedDataController.saveMatchData)
// .delete(rankedDataController.remove);

module.exports = router;
