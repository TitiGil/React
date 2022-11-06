import React from 'react';
import {NavLink,Outlet} from 'react-router-dom';


const Bazaryab = () => {
return(
    <div>
        <nav className='navbar navbar-expand-sm navbar-nav navbar-light'>
            <ul className='navbar-nav  ms-3 ms-sm-2 mb-3'>
                <li className='nav-item ms-md-5 ms-sm-3 ms-0'>
                    <NavLink className="nav-link mb-3 "  to='/Home/Bazaryab/Basket'>ثبت سفارش</NavLink>
                </li>
                <li className='nav-item ms-md-5 ms-sm-3 ms-0'>
                        
                    <NavLink className="nav-link mb-3 "  to='/Home/Bazaryab/Factors'>فاکتورهای قبلی</NavLink>
         
                </li>
            </ul>
           
        </nav>
        <div className='container-fluid border p-1 p-sm-5 border-2 border-bg-secondary rounded-2'>
        <Outlet />
        </div>
    </div>
)
}

export default Bazaryab;