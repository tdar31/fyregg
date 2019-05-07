import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import ProfileContainer from "../components/ProfileContainer";
import Nav from "../components/Nav";
import ProfileBody from "../components/ProfileBody";
import ChampItem from "../components/ChampItem";
const champJsonData = require("../assets/jsonData/en_US/championFull.json");

class Champion extends Component {
  state = {
    champKeyPairs: []
  };

  componentWillMount() {
    //
    //Swaps ID of champ to their name
    //For-in loop since json data provided by Riot is a single nested object
    for (var key in champJsonData.keys) {
      // console.log(key);
      let champKeysArr = champJsonData.keys[key];
      // console.log(champKeysArr);
      let item = {
        id: key,
        name: champKeysArr
      };
      // console.log(item);

      this.setState(state => {
        //Pushing found match stats specific to player to new array which is passed down as props to game item
        const champKeyPairs = [...state.champKeyPairs, item];
        return {
          champKeyPairs
        };
      });
    }
  }

  componentDidMount() {
    // for (let i = 0; i < this.state.champKeyPairs.length; i++) {
    //   if (this.state.champKeyPairs[i].id === this.props.championIdRAW) {
    //     this.setState({
    //       champName: this.state.champKeyPairs[i].name
    //     });
    //   }
    // }
  }

  handleOnClick() {}

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
                    Champions
                    <br />
                  </p>
                </div>
              </article>
            </div>
            {this.state.champKeyPairs.map((champData, index) => (
              <ChampItem
                key={index}
                championIdRAW={champData.name.toString()}
                championId={[`http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${champData.name.toString()}_0.jpg`].join(" ")}
                linkToPage={[`/champions/${champData.name.toString()}`].join(" ")}
              />
            ))}
          </ProfileBody>
        </ProfileContainer>
      </div>
    );
  }
}

export default Champion;
