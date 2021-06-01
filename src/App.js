import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import ShopPage from "./components/shop/ShopPage";
import Header from "./components/header/Header";
import Authentication from "./pages/authenticate/Authentication";
function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route  exact path="/" component={HomePage}/>
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={Authentication} />
        </Switch>
    </BrowserRouter>
  )
}

export default App


