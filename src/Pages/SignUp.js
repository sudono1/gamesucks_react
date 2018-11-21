import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import {Link, withRouter} from "react-router-dom";
import "./SignIn.css";

import { connect } from "unistore/react";
import { actions } from "../store";

class SignUp extends Component{
	state = {
        name: '',
        username: '',
        email: '',
        password: '',
        address: '',
        phone: ''
    }

    changeInput = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    render(){
        return (
            <div>
			<NavBar />
			  
			<div id='SignIn' class="container">
				
				<div style={{marginTop: 60, marginBottom: 10, textAlign: "center"}}></div>

				<div>
					<div className="container">
						<div className="row">
							<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
								<div className="card card-signin my-5">
									<div className="card-body">
										<div className="text-center">    
											<h5 className="card-title" style={{marginTop: 10}}>Create Account</h5>
										</div>
										
										<form className="form-signin" onSubmit={e => e.preventDefault()}>
										<div className="form-label-group">
											<input name="name" type="text" id="name" className="form-control" placeholder="name" required autoFocus onChange={(e) => this.changeInput(e)}></input>
											</div>
										
                                        <div className="form-label-group">
											<input name="username" type="text" id="username" className="form-control" placeholder="username" required onChange={(e) => this.changeInput(e)}></input>
										
										</div>

                                        <div className="form-label-group">
											<input name="email" type="email" id="inputEmail" className="form-control" placeholder="email" required onChange={(e) => this.changeInput(e)}></input>
										</div>

										<div className="form-label-group">
											<input name="password" type="password" id="inputPassword" className="form-control" placeholder="password" required onChange={(e) => this.changeInput(e)}></input>
										</div>

                                        <div className="form-label-group">
											<input name="phone" type="phone" id="inputphone" className="form-control" placeholder="phone" required onChange={(e) => this.changeInput(e)}></input>
										</div>

                                        <div className="form-label-group">
											<input name="address" type="address" id="inputaddress" className="form-control" placeholder="address" required onChange={(e) => this.changeInput(e)}></input>
										</div>

										<div className="custom-control custom-checkbox mb-3">
											<input type="checkbox" className="custom-control-input" id="customCheck1"></input>
										</div>
										
										<Link to='/' className="tombol btn btn-lg btn-primary btn-block text-uppercase" onClick={() => this.props.signUpHandle(this.state.name, this.state.username, this.state.email, this.state.password, this.state.address, this.state.phone)}>Sign up</Link >

										</form>
									</div>

									<div className="text-center" style={{marginBottom: 20}}>
                                        <span>Already have an account?<Link to="/signin"> Sign In here!</Link></span>
									</div>

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

export default connect("listItems, token, is_login, type", actions)(withRouter(SignUp))