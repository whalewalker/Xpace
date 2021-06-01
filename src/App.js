import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import ShopPage from "./components/shop/ShopPage";
function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route  exact path="/" component={HomePage}/>
            <Route path="/shop" component={ShopPage} />
        </Switch>
    </BrowserRouter>
  )
}

export default App


