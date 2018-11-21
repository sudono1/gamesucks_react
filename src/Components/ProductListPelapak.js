import React from 'react'

import { Link, withRouter } from 'react-router-dom';

import { connect } from "unistore/react";
import { actions } from "../store";


const ProductListPelapak = props => {

    const route = '/product/' + props.id

    return (
        <div class="col-xs-12 col-sm-4">
            <div class="card mb-3">
                <img class="imagee card-img-top" src={props.url_picture}
                    alt="Card cap" />
                <div class="card-body">
                    <h5 className="card-title"><strong>{props.title}</strong></h5>
                    <p className="card-text"><i>Published by</i> {props.studio}</p>
                    <p className="card-text">Rp {props.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                    <p className="card-text">{props.stock} left</p>
                </div>
                <Link to={route} className="btn btn-outline-primary mb-2 my-sm-0 mx-5">Edit or Delete</Link>
                <br></br>
            </div>
        </div>
    )
}

export default connect("listItems, item, token, type, is_login", actions)(withRouter(ProductListPelapak))