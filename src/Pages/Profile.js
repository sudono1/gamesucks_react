import React, { Component } from "react";
import axios from "axios"
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'
import {actions} from '../store'

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import CatalogProfile from "../Components/CatalogProfile";

import "../App.css";


class Profile extends Component {

    state = {
        listMe: []
    };

    componentDidMount = () => {
        const url = "https://gamesucks.herokuapp.com/api/users/me"
        const auth = 'Bearer ' + this.props.token
        const self = this;
        axios
            .get(url, {headers:{'Authorization':auth}})
 
            .then(function(response){
                // handle success
                self.setState({
                    listMe: response.data
                });
                console.log("disini", response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
      return (
          <div>
              <NavBar />
              <div style={{marginTop: 160, marginBottom: 175}}>
                <CatalogProfile name={this.state.listMe.name}
                                email={this.state.listMe.email} 
                                phone={this.state.listMe.phone} 
                                address={this.state.listMe.address}/>
              </div>
              <Footer />
          </div>
      );
    }
}

export default connect('is_login, token, type', actions)(withRouter(Profile));