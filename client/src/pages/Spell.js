import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import ProfileContainer from "../components/ProfileContainer";
import Nav from "../components/Nav";
import ProfileBody from "../components/ProfileBody";
import SpellItem from "../components/SpellItem";
const summonerJsonData = require("../assets/jsonData/en_US/summoner.json");

class Spell extends Component {
  state = {
    summonerKeyPairs: []
  };

  componentWillMount() {
    //
    //Swap Summoner ID with names
    for (var key in summonerJsonData.data) {
      let summonerKeysArr = summonerJsonData.data[key].key.toString();
      let summonerKeysName = summonerJsonData.data[key].name;
      let summonerKeyDesc = summonerJsonData.data[key].description;

      let sums = {
        id: summonerKeysArr,
        name: summonerKeysName,
        desc: summonerKeyDesc
      };
      // console.log("sums: ", sums.id);

      this.setState(state => {
        //Pushing found match stats specific to player to new array which is passed down as props to game item
        const summonerKeyPairs = [...state.summonerKeyPairs, sums];
        return {
          summonerKeyPairs
        };
      });
    }
  }

  render() {
    return (
      <div>
        <ProfileContainer>
          <Nav />
          <ProfileBody>
            <div className="box pageBuffer">
              <article className="media">
                <div className="media-content userNotFoundContent">
                  <p className="userNotFoundText">
                    Summoner Spells
                    <br />
                  </p>
                </div>
              </article>
            </div>
            {this.state.summonerKeyPairs.map((summonerData, index) => (
              <SpellItem
                key={index}
                ItemIdRAW={summonerData.name.toString()}
                ItemId={[`/images/summonerspell/${summonerData.id}.png`].join(
                  " "
                )}
                linkToPage={[
                  `/spells/${summonerData.name.toString()}`
                ].join(" ")}
              />
            ))}
          </ProfileBody>
        </ProfileContainer>
      </div>
    );
  }
}

export default Spell;
