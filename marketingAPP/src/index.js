import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bazaryab from './pages/Bazaryab';
import Home from './pages/Home';
import {BrowserRouter, Navigate, Route, Router, Routes,Redirect} from 'react-router-dom'
import AT from './pages/MainContext';
import Login from './pages/Login';
import Admin from './pages/Admin';
import AddProduct from './pages/AdminPage/AddProduct';
import AddUser from  './pages/AdminPage/AddUser';
import Pricing from './pages/AdminPage/Pricing';
import Factors from './pages/Factors';
import Basket from './pages/BazaryabPage/Basket';
import './../dist/css/bootstrap.rtl.min.css';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
            Token: 1,
            setToken: this.setToken,
            logedIn: true,
            kind : 'b',
            userName : 'Amin MO',
            lastLogIn : new Date().toLocaleString(),

           
            setLI: this.setLI,
            setKind: this.setKind
        }
           
        this.setKind=this.setKind.bind(this);
        this.setLI = this.setLI.bind(this);
        this.setToken = this.setToken.bind(this);
    }


    // set token taken from server
    setToken = (Token) => {
        this.setState({
            Token: this.state.Token + '1'
        });
    }

    setLI = (c) => {
        console.log('setli');
        this.setState({
            logedIn: !this.state.logedIn
        });
    }

    setKind =(k) =>{
        console.log('login with : '+k)
        this.setState({
            kind:k
        })
    }
    render() {
        return (
            <div >              
                       
            <AT.Provider value={this.state}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route index element={
                                this.state.logedIn?( this.state.kind==='a'?<Navigate to="/Home/Admin" replace={true} />:<Navigate to="/Home/Bazaryab" replace={true} /> ): <Navigate to="Login" />} />
                            
                            <Route path='Home' element={<Home />} >
                                <Route path='Admin' element={<Admin /> } >
                                    <Route index element={<Pricing />} />
                                    <Route path='AddProduct' element={<AddProduct />} />
                                    <Route path='AddUser' element={<AddUser />} />
                                    <Route path='Pricing'  element={<Pricing />} />
                                    <Route path='Factors'  element={<Factors />} />
                                </Route>
                               
                                <Route path='Bazaryab' element={<Bazaryab />} >
                                        <Route index element={<Basket />} />
                                        <Route path="Basket" element={<Basket />} />
                                        <Route path="Factors" element={<Factors />} />
                                </Route>
                            </Route>
                                
                               
                            
                            <Route path="Login" element={<Login />} />
     
                            
                        </Route>

                    </Routes>
                </BrowserRouter>

            </AT.Provider>

        </div>
    )
}

}


    ReactDOM.render( <Index /> , document.getElementById("root"));

