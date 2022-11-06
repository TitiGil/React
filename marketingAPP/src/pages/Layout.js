import React from 'react';
import {Link, Outlet, useNavigate} from 'react-router-dom';

const Layout = () => {
    const n = useNavigate();
 
    setTimeout(() => {
        console.log('test');
    }, 1000);

    return (
        <> Layout < nav > <Link to="/">Login</Link>
        <Link to="/Home">Home</Link>
        <Link to="/Admin">Admin</Link>
        <Link to="/Bazaryab">Bazaryab</Link>

    </nav>
    <Outlet/>

</>
    )
}

export default Layout;