import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import { connect } from "unistore/react";
import { actions } from "../store";
import axios from "axios";

import "./SignIn.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer"

class ProductDetail extends Component {
    state = {
        title: '',
        studio: '',
        price: '',
        stock: '',
        description: '',
        category: ''
    }

    updateGame = () => {
        let id = this.props.match.params.id
        this.props.getItem(id)
        this.item = this.props.item
        
        this.setState({
            title: this.item.title,
            studio: this.item.studio,
            price: this.item.price,
            stock: this.item.stock,
            description: this.item.description,
            category: this.item.category,
        })
    
        console.log(this.item)
    }

    componentWillMount = () => {
        this.updateGame()
    }

    changeInput = e => {
        this.setState({[e.target.name]: e.target.value});
        // console.log(this.state)
    };

    saveProduct = (id) => {
        console.log(this.state)
        const body = {
            title: this.state.title,
            studio: this.state.studio,
            price: this.state.price,
            stock: this.state.stock,
            description: this.state.description,
            category: this.state.category,
        }
        const url = "https://gamesucks.herokuapp.com/api/users/items/" + id
        const auth = "Bearer " + this.props.token
        const header = {
            "Authorization": auth,
            "Access-Control-Allow-Origin": "*"
        }

        console.log(body)
        axios
        .patch(url, body, { headers: header })
        .then((response) => {
        
            alert("Update success")
            console.log("Response: ", response)
            this.updateGame()
            this.props.history.push('/dashboard/productlist')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    deleteProduct = (id) => {
        const url = "https://gamesucks.herokuapp.com/api/users/items/" + id
        const auth = "Bearer " + this.props.token
        const header = {
            "Authorization": auth,
            "Access-Control-Allow-Origin": "*"
        }

        axios
        .delete(url, { headers: header })
        .then((response) => {
        
            alert("Delete Success")
            console.log("Response update: ", response)
            this.props.history.push('/dashboard/productlist')
        })
        .catch((err) => {
            console.log(err)
        })
    }
        

    render(){
        // console.log(this.props.match.params.id)
        const route = '/product/' + this.props.match.params.id
        return (
            <div>
                <NavBar />
                <div className="container">
                    <div className="row" style={{paddingTop: 100, paddingBottom: 100}}>

                        <div className='card col-sm-12 col-xs-12'>
                              
                            <div className="mt-3 mb-3" style={{ height: "100%" }}>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img className="card-img-top" src={this.item.url_picture} alt="Card image cap"/>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-body" style={{ padding: 0 }}>

                                            <form className="form-signin" onSubmit={e => e.preventDefault()}>
                                                <div className="form-label-group">
                                                    Title :
                                                    <input name="title" type="text" className="form-control" placeholder="title" value={this.state.title} required autoFocus onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                
                                                <div className="form-label-group">
                                                    Studio : 
                                                    <input name="studio" type="text" className="form-control" placeholder="studio" required value={this.state.studio} onChange={(e) => this.changeInput(e)}/>
                                                </div>

                                                <div className="form-label-group">
                                                    Category :
                                                    
                                                    <select name="category" value={this.state.category} className="form-control" onChange={(e) => this.changeInput(e)}>
                                                        <option value="">Choose your category</option>
                                                        <option value="1">Action</option>
                                                        <option value="2">RPG</option>
                                                        <option value="3">Sports</option>
                                                    </select>
                                                </div>      

                                                <div className="form-label-group">
                                                    Price : 
                                                    <input name="price" type="text" className="form-control" placeholder="price" required value={this.state.price} onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Stock : 
                                                    <input name="stock" type="text" className="form-control" placeholder="stock" required value={this.state.stock} onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Description : 
                                                    <input name="description" type="text" className="form-control" placeholder="description" required value={this.state.description} onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <Link to={route} className="btn btn-primary text-uppercase" style={{marginRight: 30}} onClick={() => this.saveProduct(this.props.match.params.id)}> Save Product </Link >
                                                <Link to={route} className="btn btn-warning text-uppercase" onClick={() => this.deleteProduct(this.props.match.params.id)}> Delete Product</Link >
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
    }
}

export default connect("listItems, item, token, type, is_login", actions)(withRouter(ProductDetail))