import React, { useEffect } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shop";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import checkoutPage from "./pages/checkout/checkout";

import {
  auth,
  createUserProfileDocument,
  addCollectionAndItems
} from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";

// import { selectCollectionsForPreview } from "./redux/shop/shop.selector";

import "./App.css";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout";

const App = ({ currentUser, checkUserSession }) => {
  // const unsubscribeFromAuth = null;
  useEffect(() => {
    checkUserSession();
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // Used to send data to fire base
  // collectionArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
