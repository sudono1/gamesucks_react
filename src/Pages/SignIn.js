import React, { Component } from "react";
import { Link, withRouter, Redirect } from 'react-router-dom' 

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import "./SignIn.css";
import { connect } from "unistore/react";
import { actions } from "../store";

class SignIn extends Component {
	
	state = {
		username: '',
		password: ''
	}

	inputChange = (e) => {
		this.setState({ [e.target.name]: e.target.value})
		console.log(e.target.value)
	}

	render() {
		if (this.props.is_login){
			alert('Already Logged in!')
			return <Redirect to={{pathname: "/"}} />
		} 

	  	return (
	  
			<div>
				<NavBar />
				
				<div id='SignIn' class="container">
					
					<div style={{marginTop: 100, marginBottom: 10, textAlign: "center"}}>
						
					</div>

					<div>
						<div className="container" style={{marginBottom: 70}}>
							<div className="row">
								<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
									<div className="card card-signin my-5">
										<div className="card-body">
											<div className="text-center">    
												<h5 className="card-title" style={{marginTop: 10}}>GameSucks</h5>
											</div>
											
											<form className="form-signin" onSubmit={(e) => e.preventDefault()}>
											<div className="form-label-group">
												<input name="username" type="text" id="inputUsername" className="form-control" placeholder="username" required autoFocus onChange={(e) => this.inputChange(e)}></input>
												</div>
											
											<div className="form-label-group">
												<input name="password" type="password" id="inputPassword" className="form-control" placeholder="password" required onChange={(e) => this.inputChange(e)}></input>
											</div>

											<div className="custom-control custom-checkbox mb-3">
												<input type="checkbox" className="custom-control-input" id="customCheck1"></input>
											</div>
											
											<Link to="/" onClick={() => this.props.signInHandle(this.state.username, this.state.password) } className="tombol btn btn-lg btn-primary btn-block text-uppercase">Sign in</Link>
											</form>
										</div>
										<div className="text-center" style={{marginBottom: 20}}>
											<span>Don't have account?<Link to="/signup"> Sign Up here!</Link></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
	  	);
	}
}

export default connect("listItems, token, is_login, type", actions)(withRouter(SignIn))