import SHOP_DATA from "./shopdata";

const INITIAL_STATE = {
  collections: SHOP_DATA
};

const shopRducer = (state = INITIAL_STATE, action) => {
  switch (action.types) {
    default:
      return state;
  }
};

export default shopRducer;
