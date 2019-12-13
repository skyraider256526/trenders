import ShopActionTypes from "./shops.types";

import {
  firestore,
  convertColletionToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = colletionMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: colletionMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FALIURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then(snaphot => {
        const collectionMap = convertColletionToMap(snaphot);
        // console.log("shop mount", collectionMap);
        dispatch(fetchCollectionsSuccess(collectionMap));
        this.setState({ isLoading: false });
      })
      .catch(error => console.log(error));
  };
};
