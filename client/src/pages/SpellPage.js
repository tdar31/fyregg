import React, { Component } from "react";
import ProfileContainer from "../components/ProfileContainer";
import SpellBody from "../components/SpellBody";
import SpellHeader from "../components/SpellHeader";
import SpellPageBody from "../components/SpellPageBody";
import Nav from "../components/Nav";
const summonerJsonData = require("../assets/jsonData/en_US/summoner.json");

class ChampionPage extends Component {
  state = {
    pageId: "",
    spellId: "",
    spellDesc: ""
  };

  componentWillMount() {
    this.setState({
      pageId: this.props.match.params.spellId
    });

    // //This is just a quick workaround for Nunu's name
    // if (this.props.match.params.champId === "Nunu") {
    //   this.setState({
    //     championName: "Nunu & Willump"
    //   });
    // }
    // // else if (this.props.match.params.champId === "Vel'koz") {
    // //   this.setState({
    // //     championName: "Velkoz"
    // //   });
    // // }
    // else {
    //   this.setState({
    //     championName: this.props.match.params.champId
    //   });
    // }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    //
    //Swap Summoner ID with names
    for (var key in summonerJsonData.data) {
      let summonerKeysName = summonerJsonData.data[key].name;
      if (this.state.pageId === summonerKeysName) {
        // console.log(summonerJsonData.data[key]);

        this.setState(
          {
            spellId: summonerJsonData.data[key].key,
            spellDesc: summonerJsonData.data[key].description
          },
          function update() {
            console.log("this.state: ", this.state);
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
          <SpellBody>
            <SpellHeader spellId={this.state.pageId} />
            <SpellPageBody
              spellDesc={this.state.spellDesc}
              spellImage={[
                `/images/summonerspell/${this.state.spellId}.png`
              ].join(" ")}
            />
          </SpellBody>
        </ProfileContainer>
      </div>
    );
  }
}

export default ChampionPage;
