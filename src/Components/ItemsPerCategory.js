import React, { Component } from 'react'

import { Link, withRouter } from 'react-router-dom';

import { connect } from "unistore/react";
import { actions } from "../store";


class ItemsPerCategory extends Component {

    render () {

        const route = '/game/' + this.props.id
        
        return (
            <div className="col-xs-12 col-sm-4 text-center">
                <div className="card mb-3">
                    <img className="imagee mx-auto card-img-top" src={this.props.url_picture}
                        alt="Card cap" />
                    <div className="card-body">
                        <Link to= {route} className="product-title">
                            <h5 className="card-title"><strong>{this.props.title}</strong></h5>
                        </Link>
                        <p className="card-text"><i>Published by</i> {this.props.studio}</p>
                        <p className="card-text"><strong>Rp {this.props.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</strong></p>
                        {/* <p className="card-text">{props.stock} left</p> */}
                        <Link to="#" className="btn btn-outline-info mb-2 my-sm-0 mx-5" onClick={() => this.props.addCart(this.props.id, this.props.token)}>Add Item to Cart</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect("listItems, item, token, type, is_login", actions)(withRouter(ItemsPerCategory))