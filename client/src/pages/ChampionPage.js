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
    championTitle: "",
    championLore: "",
    championSpells: [],
    championPassive: {},
    championSpellQ: "",
    championSpellQName: "",
    championSpellQDesc: "",
    championSpellW: "",
    championSpellWName: "", 
    championSpellWDesc: "",
    championSpellE: "",
    championSpellEName: "", 
    championSpellEDesc: "",
    championSpellR: "",
    championSpellRName: "", 
    championSpellRDesc: "",
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
    window.scrollTo(0, 0);
    for (var name in champJsonData.data) {
      let champKeysArr = champJsonData.data[name];
      if (this.state.championName === champKeysArr.name) {
        this.setState(
          {
            championData: champKeysArr,
            championNameId: champKeysArr.id,
            championTitle: champKeysArr.title,
            championSpells: champKeysArr.spells,
            championLore: champKeysArr.lore,
            championPassive: champKeysArr.passive.image.full,
            championPassiveText: champKeysArr.passive.description,
            championPassiveDesc: champKeysArr.passive.name,
            championSpellQ: champKeysArr.spells[0].image.full,
            championSpellQName: champKeysArr.spells[0].name,
            championSpellQDesc: champKeysArr.spells[0].description,
            championSpellW: champKeysArr.spells[1].image.full,
            championSpellWName: champKeysArr.spells[1].name,
            championSpellWDesc: champKeysArr.spells[1].description,
            championSpellE: champKeysArr.spells[2].image.full,
            championSpellEName: champKeysArr.spells[2].name,
            championSpellEDesc: champKeysArr.spells[2].description,
            championSpellR: champKeysArr.spells[3].image.full,
            championSpellRName: champKeysArr.spells[3].name,
            championSpellRDesc: champKeysArr.spells[3].description,
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
          <ChampionBody>
            <ChampPageBody
              championImage={[
                `/images/splash/${this.state.championNameId}_0.jpg`
              ].join(" ")}
              championName={this.state.championName}
              championTitle={this.state.championTitle}
            />
            <ChampPageBio
            championLore={this.state.championLore}
              championPassive={[
                `/images/passive/${this.state.championPassive}`
              ].join(" ")}
              championPassiveText={this.state.championPassiveText}
              championPassiveDesc={this.state.championPassiveDesc}
              championSpellQ={[
                `/images/spell/${this.state.championSpellQ}`
              ].join(" ")}
              championSpellW={[
                `/images/spell/${this.state.championSpellW}`
              ].join(" ")}
              championSpellE={[
                `/images/spell/${this.state.championSpellE}`
              ].join(" ")}
              championSpellR={[
                `/images/spell/${this.state.championSpellR}`
              ].join(" ")}
            />
          </ChampionBody>
        </ProfileContainer>
      </div>
    );
  }
}

export default ChampionPage;
