import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import { connect } from "unistore/react";
import { actions } from "../store";
import axios from "axios";

import "./SignIn.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer"

class AddProduct extends Component {
    state = {
        title: '',
        studio: '',
        price: 0,
        stock: 0,
        category: 0,
        url_picture: '',
        description: ''
    }

    changeInput = e => {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state)
    };

    addProduct = () => {
        console.log(this.state)
        const body = {
            title: this.state.title,
            studio: this.state.studio,
            price: parseInt(this.state.price),
            stock: parseInt(this.state.stock),
            category: parseInt(this.state.category),
            url_picture: this.state.url_picture,
            description: this.state.description
        }

        const url = "https://gamesucks.herokuapp.com/api/users/items"
        const auth = "Bearer " + this.props.token
        const header = {
            "Authorization": auth
        }

        console.log(body)
        axios
        .post(url, body, { headers: header })
        .then((response) => {
            alert("Data has been successfully added")
            console.log("Response :", response)
        })
        .catch((err) => {
            alert("Data has not been successfully added")
            console.log(err)
        })
    }

    render(){
        const route = "/dashboard/productlist"
        
        if (this.props.is_login) {

            return (
                <div>
                <NavBar />
                <div className="container text-center">
                    <div className="row" style={{paddingTop: 100, paddingBottom: 60}}>

                        <div className='card col-sm-12 col-xs-12'>
                              
                            <div className="mt-3 mb-3" style={{ height: "100%" }}>
                                <div className="row">
                                    <div className="col-sm-8 offset-sm-2">
                                        <div className="card-body">
                                            <h2><strong>Add Product</strong></h2>
                                            <br></br>
                                            <form className="form-signin" onSubmit={e => e.preventDefault()}>
                                                <div className="form-label-group">
                                                    Title
                                                    <br></br>
                                                    <input name="title" type="text" className="form-control" placeholder="title" required autoFocus onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Studio
                                                    <br></br>
                                                    <input name="studio" type="text" className="form-control" placeholder="studio" required  onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Price
                                                    <br></br>
                                                    <input name="price" type="text" className="form-control" placeholder="price" required onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Stock
                                                    <br></br>
                                                    <input name="stock" type="text" className="form-control" placeholder="stock" required onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Category
                                                    <br></br>
                                                    <select name="category" className="form-control" onChange={(e) => this.changeInput(e)}>
                                                        <option value="">Choose your category</option>
                                                        <option value="1">Action</option>
                                                        <option value="2">RPG</option>
                                                        <option value="3">Sports</option>
                                                    </select>
                                                </div>      
                                                <div className="form-label-group">
                                                    Picture
                                                    <br></br>
                                                    <input name="url_picture" type="text" className="form-control" placeholder="Picture URL" required onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Description
                                                    <br></br>
                                                    <input name="description" type="text" className="form-control" placeholder="Description" required onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <Link to={route} className="btn btn-lg btn-primary text-uppercase" style={{marginTop: 30}} onClick={() => this.addProduct()}> Add Product </Link >
                                            </form>

                                        </div>  
                                        <br/>
                                    </div>
                                        
                                </div>  

                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>

)
}   else {
    return (
        <div>
            <NavBar />
            <h1>UNAUTHORIZED ACCESS</h1>
        </div>
    )
}
    }
}

export default connect("listItems, item, token, type, is_login", actions)(withRouter(AddProduct))