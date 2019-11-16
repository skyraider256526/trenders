import ShopActionTypes from "./shops.types";

export const updateCollections = collectionsMap => ({
  types: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
