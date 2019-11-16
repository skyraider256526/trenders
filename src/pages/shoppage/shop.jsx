import React from "react";

import { Route } from "react-router-dom";

import { connect } from "react-redux";

import {
  firestore,
  convertColletionToMap
} from "../../firebase/firebase.utils";

import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner";

import CollectionPage from "../collection/collection.page";
import CollectionsOverview from "../../components/collection-overview/collection-overview";
// import collectionOverview from "../../components/collection-overview/collection-overview";
// import collectionPage from "../collection/collection.page";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    isLoading: true
  };
  unsubscribeFromSnap = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    // console.log(updateCollections, "updateCollections");
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snaphot => {
      const collectionMap = convertColletionToMap(snaphot);
      // console.log("shop mount", collectionMap);
      updateCollections(collectionMap);
      this.setState({ isLoading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
          // component={CollectionsOverview}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={isLoading} {...props} />
          )}
          // component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchStateToProps = dispatch => ({
  updateCollections: collectionMap =>
    dispatch({ type: "UPDATE_COLLECTIONS", payload: collectionMap })
});

export default connect(
  null,
  mapDispatchStateToProps
)(ShopPage);
