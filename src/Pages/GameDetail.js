import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import { connect } from "unistore/react";
import { actions } from "../store";
import axios from "axios";

import "./SignIn.css";
import NavBar from "../Components/NavBar";

class GameDetail extends Component {

    // state = {
    //     title: '',
    //     studio: '',
    //     price: '',
    //     stock: '',
    //     description: '',
    //     url_picture: ''
    // }

    // componentDidMount = () => {
    //     let id = this.props.match.params.id
    //     const self = this;
    //     axios
    //         .get("https://gamesucks.herokuapp.com/api/public/items/" + id)
    //         .then(function (response) {
    //             // handle success
    //             self.setState({
    //                 title: response.data.data.title,
    //                 studio: response.data.data.studio,
    //                 price: response.data.data.price,
    //                 stock: response.data.data.stock,
    //                 description: response.data.data.description,
    //                 url_picture: response.data.data.url_picture
    //             })
                
    //             console.log("disini", response.data);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    // };    
    

    componentWillMount = () => {
        let id = this.props.match.params.id
        this.props.getItem(id)
        console.log(this.props)
    }

    render() {

        const route = '/game/' + this.props.match.params.id
        const item = this.props.item
        
        return (
            <div>
                <NavBar />
                <div className = "container" style={{marginTop: 90}}>
                    <div className = "row">

                        <div className="col-xs-12 col-sm-4">
                            <div className="card mb-3">
                                <img className="imagee mx-auto card-img-top" src={item.url_picture}
                                    alt="Card cap" />
                            </div>
                        </div>

                        <div className= "col-sm-6">

                                <div className="card-body">
                                    <h4 className="card-title"><strong>{item.title}</strong></h4>
                                    <hr></hr>
                                    <p className="card-text"><i>Published by</i> {item.studio}</p>
                                    <p className="card-text">Price: <strong>Rp {item.price}</strong></p>
                                    <p className="card-text">Stock: {item.stock}</p>
                                    <br></br>
                                    <h5><strong>Description</strong></h5>
                                    <hr></hr>
                                    <p className="card-text">{item.description} </p>
                                </div>
                                <div className = "text-center" style={{marginTop: 60, marginBottom: 60}}>
                                    <Link to={route} className="btn btn-outline-info mb-2 my-sm-0 mx-5" onClick={() => this.props.addCart(this.props.match.params.id, this.props.token)}>Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
    
    
export default connect("listItems, item, token, type, is_login", actions)(withRouter(GameDetail))