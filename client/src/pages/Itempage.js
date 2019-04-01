import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import ProfileContainer from "../components/ProfileContainer";
import ItemBody from "../components/ItemBody";
import ItemHeader from "../components/ItemHeader";
import ItemPageBody from "../components/ItemPageBody";
import Nav from "../components/Nav";
const itemJsonData = require("../assets/jsonData/en_US/item.json");

class Itempage extends Component {
  state = {
    pageId: "",
    itemId: "",
    itemDesc: ""
  };

  componentWillMount() {
    this.setState({
      pageId: this.props.match.params.itemId
    });

    console.log(itemJsonData.data)
    //
    //Swap Summoner ID with names
    // for (var key in summonerJsonData.data) {
    //   let summonerKeysArr = summonerJsonData.data[key].key;
    //   let summonerKeysName = summonerJsonData.data[key].name;
    //   if (this.state.pageId === summonerKeysName) {
    //     // console.log(summonerJsonData.data[key]);

    //     this.setState(
    //       {
    //         spellId: summonerJsonData.data[key].key,
    //         spellDesc: summonerJsonData.data[key].description
    //       },
    //       function update() {
    //         console.log("this.state: ", this.state);
    //       }
    //     );
    //   }
    // }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    //Finds all items and pairs them with their ID in an array of objects for parsing through
    //For-in loop since json data provided by Riot is a single nested object
    for (var key in itemJsonData.data) {
      console.log("this.state.pageId: ", this.state.pageId);
      let itemKeysName = itemJsonData.data[key].name;
      console.log(itemKeysName)
      if (this.state.pageId === itemKeysName) {
        this.setState(
          {
            itemId: itemJsonData.data[key].image.full,
            itemDesc: itemJsonData.data[key].plaintext
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
          <ItemBody>
            <ItemHeader itemId={this.state.pageId} />
            <ItemPageBody
              itemDesc={this.state.itemDesc}
              itemImage={[`/images/item/${this.state.itemId}`].join(
                " "
              )}
            />
          </ItemBody>
        </ProfileContainer>
      </div>
    );
  }
}

export default Itempage;
