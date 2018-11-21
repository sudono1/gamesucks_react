import React, { Component } from "react";
import axios from "axios";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Categories from "../Components/CategoriesTabs"

import AllItems from "../Components/AllItems"

import "../App.css";


class Home extends Component {

    state = {
        listItems: [],
        term: ""
    };

    componentDidMount = () => {
        const self = this;
        axios
            .get("https://gamesucks.herokuapp.com/api/public/items")
            .then(function (response) {
                // handle success
                self.setState({ listItems: response.data.data });
                console.log("disini", response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    handleSearch = (event) => {
        this.setState({ term: event.target.value })
    }


    render() {

        const { listItems } = this.state;
        console.log("Ini", this.state);

        return (
            <div>
                <NavBar
                    handleSearch={this.handleSearch}
                />
                <AllItems
                    listItems={listItems}
                    searchTerm={this.state.term}
                />

                <Banner />


                <Categories listItems={listItems} />
                <Footer />
            </div>
        );
    }
}

export default Home;