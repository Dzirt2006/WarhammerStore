import React from 'react';
import NavBar from './NavBar';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ShowAllGoods from './ShowAllGoods'
import ShoppingCart from './ShoppingCart'
import Login from './Login'

const Routes = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <main>
                    <h1>Welcome to Warhammer store 'Ander Aquilla'!</h1>
                </main>
                <Switch>
                    <Route exact path="/goods" render={() => (<ShowAllGoods />)} />
                    <Route exact path="/shopping_cart" component={ShoppingCart} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </div>
        </Router>
    )
}


export default Routes;