import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import axios from "axios";

import { connect } from "unistore/react";
import { actions } from "../store";

import NavBar from "../Components/NavBar";

import "../App.css";

class Log extends Component {

    state = {
        datas: []
    }

    getHistory = (token) => {
        let url = "https://gamesucks.herokuapp.com/api/users/transaction?status=True"
        let auth = "Bearer " + token
        let self = this

        axios
            .get(url, { headers: { "Authorization": auth } })
            .then((response) => {
                self.setState({
                    datas: response.data
                })
                console.log(this.state)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.getHistory(this.props.token)
    }

    render() {

        let datas = this.state.datas

        return (

            <div className="container" style={{ marginTop: 90 }}>
                <NavBar />
                <div className="content text-center" style={{ marginTop: 30, marginBottom: 60 }}>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title"><strong>Your Transactions History</strong></h3>
                        </div>
                    </div>
                </div>

                {
                    datas.map((item, key) => {
                        return (

                            <div key={key} className="card" style={{marginBottom: 30}}>
                                <div className="card-body">
                                    <h5 className="card-title"><strong>Transaction Date: </strong> {item.updatedAt}</h5>
                                    <hr></hr>
                                    <p>Total Payment: Rp {item.total_price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </p>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <p><strong>Item list:</strong></p>
                                        </div>
                                        <div className="col-sm-3">
                                            <p><strong>Qty</strong></p>
                                        </div>
                                        <div className="col-sm-3">
                                            <p><strong>Price</strong></p>
                                        </div>
                                    </div>

         
                                    {
                                        item.datas.map((i,k) => {
                                            
                                            let route = "/game/" + i['game.id']

                                            return (
                                                <div key={k} className="row">

                                                    <div className="col-sm-6">
                                                        <Link to={route} className="history-title">{i['game.title']}</Link>
                                                    </div>

                                                    <div className="col-sm-3">
                                                        {i.qty}
                                                    </div>

                                                    <div className="col-sm-3">
                                                        Rp {parseInt(i.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                                                    </div>
                                                </div>
                                            )

                                        })
                                    }

                                </div>
                            </div>
                        )
                    })
                }


            </div>
        );
    }
}

export default connect("listItems, item, token, type, is_login, cart", actions)(withRouter(Log))