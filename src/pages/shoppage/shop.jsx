import React from "react";

import { Route } from "react-router-dom";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import {
  selectIsCollectionFetching,
  selectIsCollectionLoading
} from "../../redux/shop/shop.selector";

import WithSpinner from "../../components/with-spinner/with-spinner";

import CollectionPage from "../collection/collection.page";
import CollectionsOverview from "../../components/collection-overview/collection-overview";
// import collectionOverview from "../../components/collection-overview/collection-overview";
// import collectionPage from "../collection/collection.page";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match, isCollectionFetching, isCollectionLoading } = this.props;
    return (
      <div className="shop">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
          // component={CollectionsOverview}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoading}
              {...props}
            />
          )}
          // component={CollectionPage}
        />
      </div>
    );
  }
}

const mapStateToProps = () =>
  createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoading: selectIsCollectionLoading
  });

const mapDispatchStateToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchStateToProps)(ShopPage);
