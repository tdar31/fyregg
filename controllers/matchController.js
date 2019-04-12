const db = require("../models");
var axios = require("axios");

module.exports = {
  findByMatchId: function(req, res) {
    console.log("findBMID backend", req.body);
    db.Profile.find({
      "gameId": req.body.matchData
    })
      .then(dbProfile => res.json(dbProfile))
      .catch(err => res.status(422).json(err));
  }
  //   saveMatchData: function(req, res) {
  //     console.log("saveMatchData -> req.body: ", req.body.profile)
  //     db.Profile.findOneAndUpdate(
  //       { 'profile.accountId': req.body.profile.accountId}, req.body
  //     )
  //     .then(dbUser => res.json(dbUser))
  //     .catch(err => res.status(422).json(err));
  //   }
};
