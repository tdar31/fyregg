const db = require("../models");
var axios = require("axios");

module.exports = {
  findByMatchId: function(req, res) {
    // console.log("findBMID backend", req.body);
    db.Profile.find({
      "profile.matchData.gameId": req.body.matchData
    })
      .then(dbMatch => res.json(dbMatch))
      .catch(err => res.status(422).json(err));
  },

  //This is broken :(
  //Need to create a second collection and store matches that way
  createMatch: function(req, res) {
    db.Profile.create(req.body.newMatchObj)
      .then(dbMatch => res.json(dbMatch))
      .catch(err => res.status(422).json(err));
  }
};
