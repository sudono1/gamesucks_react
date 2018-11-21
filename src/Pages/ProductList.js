import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import ProductListPelapak from "../Components/ProductListPelapak";

import { Link, withRouter } from 'react-router-dom'
import { connect } from "unistore/react";
import { actions } from "../store";

import "../App.css";

class ProductList extends Component {

    componentDidMount = () => {
        this.props.getUserListItems(this.props.token)
    }

    render() {

        const listItems = this.props.userListItems
        // console.log(listItems)

        return (
            <div className="container" style={{ marginTop: 90 }}>
                <NavBar />

                <div class="content text-center" style={{ marginTop: 30, marginBottom: 60 }}>
                    <div class="card bg-dark">

                        <img class="product-list-banner card-img" src="https://frpnet.net/wp-content/uploads/2015/02/legend-of-zelda-banner.jpg" alt="Card image"/>
                        
                        <div class="card-img-overlay">

                            <div className="card-body">

                                <h3 class="card-title"><strong>Your Products</strong></h3>
                                <br></br>
                                <p class="card-text">Sell Your Product Now !</p>

                                <Link to="/addproduct"><button type='button' className='btn bg-info text-white'>Add Products</button></Link>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        {
                            listItems.map((item, key) => {

                                return <ProductListPelapak
                                    key={key}
                                    id={item.id}
                                    title={item.title}
                                    studio={item.studio}
                                    category={item['category_game.category']}
                                    price={item.price}
                                    stock={item.stock}
                                    url_picture={item.url_picture}
                                    status={item.status}
                                    createdAt={item.createdAt}
                                    updatedAt={item.updatedAt}
                                    pelapak={item['users.name']}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default connect("listItems, userListItems, token, is_login, type", actions)(withRouter(ProductList))