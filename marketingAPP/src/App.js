import React, {Component} from 'react';
import {
    Routes,
    Route,
    Outlet,
    BrowserRouter,
    Link,
    Navigate
} from 'react-router-dom';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Bazaryab from './pages/Bazaryab';
import Home from './pages/Home';
import Layout from './pages/Layout';
import AT from './pages/MainContext'

export default class App extends React.Component {

    constructor(props){
        super(props);
        
    }
    render() {

        return (
            <div className="container-fluid pt-5">

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/Home">Home</Link>
                    <Link to="/Home/Admin">Admin</Link>
                    <Link to="/Home/Bazaryab">Bazaryab</Link>
                </nav>

                <Outlet/>
               
            </div>
        )
    }

}