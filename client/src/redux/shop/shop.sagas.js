import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertColletionToMap
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop.actions";

import ShopActionTypes from "./shops.types";

export function* fetchCollectionsAsync() {
  yield console.log("I am fired");
  try {
    const collectionRef = firestore.collection("collections");
    const snaphot = yield collectionRef.get();
    const collectionMap = yield call(convertColletionToMap, snaphot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    console.log(error);
    yield put(fetchCollectionsFailure(error));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSaga() {
  yield all([call(fetchCollectionsStart)]);
}
