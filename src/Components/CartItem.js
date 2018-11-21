import React, { Component } from "react";
import "../App.css";

import { withRouter} from 'react-router-dom' 
import { connect } from "unistore/react";
import { actions } from "../store";

class CartItem extends Component {

    addHandle(action){
        if(window.confirm('Are you sure ?')){
            this.props.updateCart(this.props.item_id, this.props.token, action)
            this.props.perubahanQty(this.props.item_id, action)
            console.log(this.props.qty)
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-8">
                    {this.props.title}
                </div>
                <div className="col-sm-4">
                    <a href='#' title="Substract" onClick={() => this.addHandle('substract_qty')} ><i className="fas fa-minus"></i></a> &nbsp;
                    {this.props.qty} &nbsp;
                    <a href='#' title="Add" onClick={() => this.addHandle('add_qty')} ><i className="fas fa-plus"></i></a>
                    &nbsp;&nbsp;

                    Rp {parseInt(this.props.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                    &nbsp;&nbsp;
                    <a href='#' title="delete from cart" onClick={() => this.addHandle('delete')} ><i className="fas fa-trash-alt"></i></a>
                </div>
            </div>
        );
    }
}

export default connect("listItems, item, token, type, is_login, cart", actions)(withRouter(CartItem))