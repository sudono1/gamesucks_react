import React, { Component } from "react";
import { Link } from 'react-router-dom';

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import "../App.css";

class Dashboard extends Component {
    render() {
        return (
            <div >
                <NavBar />

                <div className="dashboard-page container" style={{marginBottom: 20}}>

                    <div class="content" style={{ marginTop: 30 }}>
                        <div class="card flex-row">
                            <div class="card-header border-0">
                                <img src="https://cdn4.iconfinder.com/data/icons/e-commerce-icon-set/48/Cart-512.png" alt="image" class="content-image"></img>
                            </div>
                            <div class="card-block px-4">
                                <br></br>
                                <h4 class="card-title">Products</h4>
                                <p class="card-text">Here are list of your products. You can add, edit, or even delete your existing products</p>
                                <br></br>
                                <Link to="/dashboard/productlist"><button type='button' className='btn bg-info text-white' style={{marginBottom: 20}}>See Your Products</button></Link>
                            </div>
                        </div>
                    </div>

                    <div class="content" style={{ marginTop: 30 }}>
                        <div class="card flex-row">
                            <div class="card-header border-0">
                                <img src="https://cdn3.iconfinder.com/data/icons/business-and-finance-icons/512/Business_Man-512.png" alt="image" class="content-image"></img>
                            </div>
                            <div class="card-block px-4">
                                <br></br>
                                <h4 class="card-title">Profile</h4>
                                <p class="card-text">This is your profile page</p>
                                <br></br>
                                <Link to="/dashboard/profile">
                                    <button type='button' className='btn bg-info text-white' style={{marginBottom: 20}}>See Your Profile</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div class="content" style={{ marginTop: 30 }}>
                        <div class="card flex-row">
                            <div class="card-header border-0">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Simpleicons_Interface_arrow-pointing-to-right-1.svg/2000px-Simpleicons_Interface_arrow-pointing-to-right-1.svg.png" alt="image" class="content-image"></img>
                            </div>
                            <div class="card-block px-4">
                                <br></br>
                                <h4 class="card-title">History</h4>
                                <p class="card-text">This page show your transactions history</p>
                                <br></br>
                                <Link to="/dashboard/log">
                                    <button type='button' className='btn bg-info text-white' style={{marginBottom: 20}}>See Transactions</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

export default Dashboard;