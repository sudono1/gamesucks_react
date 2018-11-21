import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import "../App.css";


class Home extends Component {
    render() {
      return (
          <div >
              <NavBar />
              <div className="testing-purpose">
                Loading ...
              </div>
              <Footer />
          </div>
      );
    }
}

export default Home;