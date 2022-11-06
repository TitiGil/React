import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import Admin from './Admin';
import Bazaryab from './Bazaryab';
import AT from './MainContext';

class Home extends React.Component {

    render() {

        return (
            <>
                    <div className='row mx-auto  py-3 mb-5 w-100 rounded-2 my-auto shadow'>
            
               
                    <AT.Consumer>
                        {
                            ({userName, kind, lastLogIn}) => {
                                return (  
                                    <div className='d-flex'>
                                     <span className='mx-3' >نام کاربری : {userName}</span>
                                     <span className='mx-3' >سمت  : {kind==='a'?'ادمین':'کاربر فروش'}</span>
                                     <span className='mx-3' >آخرین ورود : {lastLogIn}</span>
                                    </div>   
                                   


                                
                                )

                            }
                        }
                    </AT.Consumer>
                </div>

                <div className='row mx-auto  py-3 mb-5 w-100 rounded-2 my-auto shadow-lg'>
                    <Outlet/>
                </div>
        </>
                           
        )
    }
}

export default Home;