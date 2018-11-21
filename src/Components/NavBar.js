import React, {Component} from "react";
import { Link, withRouter } from 'react-router-dom' 
import { connect } from "unistore/react";
import { actions } from "../store";
import ModalCart from "./ModalCart"

class NavBar extends Component {

	getCartData(token){
        if(token != ''){
            this.props.getCartData(token)
        }
    }

    componentWillMount(){
        this.getCartData(this.props.token)
    }

	render () {
		if (this.props.is_login) {
			return (
				<div className="container" style={{marginTop: 55}}>
					<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
					<div className="logo-box">
						<Link to="/"><strong>GameSucks</strong></Link>
					</div>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							{/* <li className="nav-item">
								<Link to="/dashboard" className="nav-link"><strong>Dashboard</strong></Link>
							</li>
							<li className="nav-item">
                                <a href="#" data-toggle="modal" data-target="#exampleModal" className="nav-link" onClick={() => this.getCartData(this.props.token)}><strong>Cart</strong></a>
                            </li>
							<li className="nav-item">
								<Link to="/" className="nav-link" onClick={() => this.props.handleLogout()}><strong>Log Out</strong></Link>
							</li> */}
						</ul>
						<ul className="navbar-nav mr-auto">
							<form class="form-inline my-2 my-md-0">
          						<input class="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.props.handleSearch}/>
        					</form>
						</ul>
						<div>
							<ul className="navbar-nav mr-auto">
								
								
								<li className="nav-item">
									<Link to="/dashboard" className="nav-link"><strong>Dashboard</strong></Link>
								</li>
								<li className="nav-item">
									<a href="#" data-toggle="modal" data-target="#exampleModal" className="nav-link" onClick={() => this.getCartData(this.props.token)}><strong>Cart</strong></a>
								</li>
								<li className="nav-item">
									<Link to="/" className="nav-link" onClick={() => this.props.handleLogout()}><strong>Log Out</strong></Link>
								</li>
							</ul>
						</div>
					</div>
					</nav>
					<ModalCart/>
				</div>
				)
			}
	
		else {
			return (
				<div className="container" style={{marginTop: 55}}>
					<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
					<div className="logo-box">
						<Link to="/"><strong>GameSucks</strong></Link>
					</div>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							{/* <li className="nav-item">
								<Link to="/signin" className="nav-link"><strong>Sign In</strong></Link>
							</li>
							<li className="nav-item">
								<Link to="/signup" className="nav-link"><strong>Sign Up</strong></Link>
							</li> */}
						</ul>
						<ul className="navbar-nav mr-auto">
							<form class="form-inline my-2 my-md-0">
          						<input class="form-control" type="text" placeholder="Search"/>
        					</form>
						</ul>
						<div>
							<ul className="navbar-nav mr-auto">
								<li className="nav-item">
									<Link to="/signin" className="nav-link"><strong>Sign In</strong></Link>
								</li>
								<li className="nav-item">
									<Link to="/signup" className="nav-link"><strong>Sign Up</strong></Link>
								</li>
							</ul>
						</div>
					</div>
					</nav>
				</div>
			)	
		}
	}
}

export default connect("listItems, token, is_login, type, cart", actions)(withRouter(NavBar))