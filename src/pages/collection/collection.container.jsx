import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionLoading } from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/with-spinner/with-spinner";
import CollectionPage from "../collection/collection.page";

const mapStateToProps = createStructuredSelector({
  isCollectionLoading: state => !selectIsCollectionLoading(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
