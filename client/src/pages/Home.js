import React, { Component } from "react";
import { BrowserRouter as withRouter, Router, Link } from "react-router-dom";
import ReactRotatingText from "react-rotating-text";
// import {
//   NotificationContainer,
//   NotificationManager
// } from "react-notifications";
import HomeContainer from "../components/HomeContainer";
import HomeBody from "../components/HomeBody";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";
// import "react-notifications/lib/notifications.css";

class Home extends Component {
    state = {
        profile: {},
        matches: [],
        selectedButton: 1,
        inputValue: "",
        region: "",
        isOpen: false,
        queryUser: "meteos"
    };

    componentDidMount() {
        this.setSelectedButton = this.setSelectedButton.bind(this);
        // NotificationManager.info(
        //   "",
        //   "Close after 3000msClose after 3000msClose after 3000msClose after 3000msClose after 3000msClose after 3000msClose after 3000ms",
        //   30000
        // );
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

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
        event.preventDefault();

        //Take in
        let queryUser = this.state.inputValue.trim().toLowerCase();

        this.setState(
            {
                queryUser: queryUser
            },
            function redirect() {
                this.props.history.push(
                    "/summoner/" + this.state.queryUser + "/NA/"
                );
            }
        );
        //
        // window.location.assign("summoner/" + queryUser + "/NA/");
    };

    setSelectedButton(id) {
        this.setState({ selectedButton: id }, function() {
            // console.log("selectedBTN: ", this.state.selectedButton);
        });
    }

    createNotification = () => {
        // return () => {
        //   switch (type) {
        //     case "info":
        //       NotificationManager.info("Info message");
        //       break;
        //     case "success":
        //       NotificationManager.success("Success message", "Title here");
        //       break;
        //     case "warning":
        //       NotificationManager.warning(
        //         "Warning message",
        //         "Close after 3000ms",
        //         3000
        //       );
        //       break;
        //     case "error":
        //       NotificationManager.error("", "Click me!", 5000, () => {
        //         alert("callback");
        //       });
        //       break;
        //   }
        // };
    };

    render() {
        return (
            <HomeContainer>
                <Nav />
                <HomeBody>
                    <div>
                        {/* <div className="statusNotification"
              onClick={this.createNotification()}
            /> */}
                        {/* <NotificationContainer /> */}
                    </div>
                    <Banner />
                    <p className="suggest">
                        <i>
                            Try searching{" "}
                            <ReactRotatingText
                                items={["Goldenglue", "NightTalons", "Nercrotic"]}
                            />
                        </i>
                    </p>

                    <SearchBar
                        queryUser={this.queryUser}
                        onChange={this.handleInputChange}
                        onClick={this.handleOnSubmit}
                    />
                </HomeBody>
            </HomeContainer>
        );
    }
}

export default Home;
