import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import "../App.css";


class NotMatch extends Component {
    render() {
      return (
          <div>
              <NavBar />
              <div>
              <h1>THE PAGE YOU'RE LOOKING FOR DOES NOT EXIST</h1>
              </div>
              <Footer />
          </div>
      );
    }
}

export default NotMatch;