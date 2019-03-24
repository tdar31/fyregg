import React from "react";
import { Col, Row, Container } from "../components/Grid";
import ProfileContainer from "../components/ProfileContainer";
import Nav from "../components/Nav";
import ProfileBody from "../components/ProfileBody";

function Spells() {
  return (
    <div>
      <ProfileContainer>
        <Nav />
        <ProfileBody>
          <div className="box pageBuffer">
            <article className="media">
              <div className="media-content userNotFoundContent">
                <p className="userNotFoundText">
                  Spells
                  <br />
                </p>
              </div>
            </article>
          </div>
        </ProfileBody>
      </ProfileContainer>
    </div>
  );
}

export default Spells;
