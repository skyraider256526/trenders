import React from "react";

import { Route } from "react-router-dom";

import CollectionPage from "../collection/collection.page";

import CollectionsOverview from "../../components/collection-overview/collection-overview";

import { firestore } from "../../firebase/firebase.utils";

class ShopPage extends React.Component {
  unsubscribeFromSnap = null;
  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snaphot => {
      console.log(snaphot);
    });
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

export default ShopPage;
