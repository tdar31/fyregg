import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import ProfileContainer from "../components/ProfileContainer";
import Nav from "../components/Nav";
const itemJsonData = require("../assets/jsonData/en_US/item.json");

class Itempage extends Component {
  state = {};

  componentWillMount() {
    console.log(itemJsonData);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <ProfileContainer>
          <Nav />
        </ProfileContainer>
      </div>
    );
  }
}

export default Itempage;
