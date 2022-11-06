import react from 'react';
import React from 'react';
import {useContext} from 'react';
import {Outlet} from 'react-router-dom';

import AT from './MainContext';

class Login extends React.Component {

    render(){
        return (
            <div>
                LOgin 
                <AT.Consumer>
                   
                { 
                 ({logedIn,setLI,setKind})=>(
                     <div>
                     <button onClick={()=>{setLI();setKind('a')}}>admin</button>
                     <button onClick={()=>{setLI();setKind('b')}}>Bazaryab</button>
                     
                    </div>
                 )
                }
                </AT.Consumer>
               
                
            </div>
        )
    }
 
}

export default Login;