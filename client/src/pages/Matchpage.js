import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import API from "../utils/API";
import MatchContainer from "../components/MatchContainer";
import MatchBody from "../components/MatchBody";
import MatchPlayerInfo from "../components/MatchPlayerInfo";
import MatchOverviewInfo from "../components/MatchOverviewInfo";
import Nav from "../components/Nav";

class MatchPage extends Component {
  state = {
    matchData: [],
    inputValue: ""
  };

  componentWillMount() {
    let matchData = {
      //Need this inorder to reuse API route
      accountId: "dummyAcc",
      matchData: this.props.match.params.mId
    };

    //Pings DB for match data before making API call
    API.findByMatchId(matchData).then(res =>
      // console.log("findByMatchId =====> res.data: ", res.data[0])
      res.data[0] != undefined
        ? this.setState(
            {
              matchData: res.data[0].matchData
            },
            function ree() {
              // console.log(
              //   "******this.state post gameID DB payload: ******",
              //   this.state
              // );
            }
          )
        : this.getMatchData(matchData)
    );
  }

  //Checks DB for existing match data
  //If it doesn't exist pings api for matchdata and populates page
  //Once populated saves to db for later use

  getMatchData = matchData => {
    // console.log("getMatchData if failed");
    API.getMatchData(matchData)
      .then(res => {
        this.setState(
          {
            matchData: res.data
          },
          function update() {
            this.createMatch();
          }
        );
      })
      .catch(err => console.log(err));
  };

  //Creates new db Profile if user isn't in DB
  createMatch = () => {
    let matchD = Object.assign({}, this.state.matchData);
    let newMatchObj = {
      profile: matchD
    };
    API.createMatch({ newMatchObj }).then(res => {
      // console.log("createMatch: ", res.data);
    });
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { value } = event.target;

    let typedValue = value.split(" ").join("");
    // Updating the input's state
    this.setState(
      {
        inputValue: typedValue
      },
      function onceStateUpdated() {
        // console.log("this.state.inputValue: ", this.state.inputValue);
      }
    );
  };

  handleOnSubmit = event => {
    // console.log("Submit button clicked");
    // event.preventDefault();

    //Take in
    let queryUser = this.state.inputValue.trim().toLowerCase();
    this.setState(
      {
        queryUser: queryUser
      },
      function redirect() {
        // console.log("this.props.location: ", this.props.location)
        this.props.history.replace(
          "/summoner/" + this.state.queryUser + "/NA/"
        );
      }
    );
  };

  render() {
    return (
      <MatchContainer>
        <Nav
        //Disabled for now since react router doesn't force rerender when route
        //is still the same.  Look into this later since it's pretty easy to enable
        // onChange={this.handleInputChange}
        // onClick={this.handleOnSubmit}
        />
        <MatchBody>
          <MatchOverviewInfo
            gameCreation={this.state.matchData.gameCreation}
            gameDuration={this.state.matchData.gameDuration}
            gameId={this.state.matchData.gameId}
            gameMode={this.state.matchData.gameMode}
            gameType={this.state.matchData.gameType}
            mapId={this.state.matchData.mapId}
            queueId={this.state.matchData.queueId}
            platformId={this.state.matchData.platformId}
            seasonId={this.state.matchData.seasonId}
          />
          <MatchPlayerInfo
            gameDuration={this.state.matchData.gameDuration}
            participantIdentities={this.state.matchData.participantIdentities}
            participants={this.state.matchData.participants}
            teams={this.state.matchData.teams}
          />
        </MatchBody>
      </MatchContainer>
    );
  }
}

export default MatchPage;
