import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import ProfileContainer from "../components/ProfileContainer";
import Nav from "../components/Nav";
import ChampionBody from "../components/ChampionBody";
import ChampPageBody from "../components/ChampPageBody";
import ChampPageBio from "../components/ChampPageBio";
const champJsonData = require("../assets/jsonData/en_US/championFull.json");

class ChampionPage extends Component {
  state = {
    championName: "",
    championData: {},
    championNameId: "",
    championTitle: "  "
  };

  componentWillMount() {
    console.log(champJsonData.data);

    //This is just a quick workaround for Nunu's name
    if (this.props.match.params.champId === "Nunu") {
      this.setState({
        championName: "Nunu & Willump"
      });
    } 
    // else if (this.props.match.params.champId === "Vel'koz") {
    //   this.setState({
    //     championName: "Velkoz"
    //   });
    // } 
    else {
      this.setState({
        championName: this.props.match.params.champId
      });
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    for (var name in champJsonData.data) {
      let champKeysArr = champJsonData.data[name];
      if (this.state.championName === champKeysArr.name) {
        this.setState(
          {
            championData: champKeysArr,
            championNameId: champKeysArr.id,
            championTitle: champKeysArr.title
          },
          function update() {
            console.log(this.state);
          }
        );
      }
    }
  }

  render() {
    return (
      <div>
        <ProfileContainer>
          <Nav />
          <ChampionBody>
            <ChampPageBody
              championImage={[
                `/images/splash/${this.state.championNameId}_0.jpg`
              ].join(" ")}
              ChampionName={this.state.championName}
              ChampionTitle={this.state.championTitle}
            />
            <ChampPageBio/>            
          </ChampionBody>
        </ProfileContainer>
      </div>
    );
  }
}

export default ChampionPage;
