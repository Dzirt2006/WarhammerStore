import React from 'react';
import NavBar from './NavBar';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Routes = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <main>
                    <h1>Welcome to Warhammer store 'Ander Aquilla'!</h1>
                    
                </main>
                <Switch>
                   
                </Switch>
            </div>
        </Router>
    )
}


export default Routes;