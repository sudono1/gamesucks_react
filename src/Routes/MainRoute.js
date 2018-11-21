import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home"*/ "../Pages/Home"),
  loading: () => <Loading />
});

const SignIn = Loadable({
  loader: () => import(/* webpackChunkName: "signin"*/ "../Pages/SignIn"),
  loading: () => <Loading />
});

const Profile = Loadable({
  loader: () => import(/* webpackChunkName: "profile"*/ "../Pages/Profile"),
  loading: () => <Loading />,
  timeout: 1000
});

const NotMatch = Loadable({
  loader: () => import(/* webpackChunkName: "404"*/ "../Pages/NotMatch"),
  loading: () => <Loading />
});

const Dashboard = Loadable({
  loader: () => import(/* webpackChunkName: "dashboard"*/ "../Pages/Dashboard"),
  loading: () => <Loading />
});

const SignUp = Loadable({
  loader: () => import(/* webpackChunkName: "signup"*/ "../Pages/SignUp"),
  loading: () => <Loading />
});

const ProductList = Loadable({
  loader: () => import(/* webpackChunkName: "productlist"*/ "../Pages/ProductList"),
  loading: () => <Loading />
});

const ProductDetail = Loadable({
  loader: () => import(/* webpackChunkName: "productlist"*/ "../Pages/ProductDetail"),
  loading: () => <Loading />
});

const AddProduct = Loadable({
  loader: () => import(/* webpackChunkName: "productlist"*/ "../Pages/AddProduct"),
  loading: () => <Loading />
});

const GameDetail = Loadable({
  loader: () => import(/* webpackChunkName: "productlist"*/ "../Pages/GameDetail"),
  loading: () => <Loading />
});

const Log = Loadable({
  loader: () => import(/* webpackChunkName: "productlist"*/ "../Pages/Log"),
  loading: () => <Loading />
});

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path='/dashboard' component={Dashboard}/>
      <Route exact path='/dashboard/productlist' component={ProductList}/>
      <Route exact path='/dashboard/profile' component={Profile}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/addproduct' component={AddProduct}/>
      <Route path='/product/:id' component={ProductDetail}></Route>
      <Route path='/game/:id' component={GameDetail}></Route>
      <Route path='/dashboard/log' component={Log}></Route>
      <Route component={NotMatch} />
    </Switch>
  );
};
export default MainRoute;