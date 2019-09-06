import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shop";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
