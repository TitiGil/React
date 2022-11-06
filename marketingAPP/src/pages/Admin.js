import React from 'react';
import {NavLink, Navigate, Outlet} from 'react-router-dom';
import './customCss.css';
const Admin = () => {
   
    return (
        <div>
            Admin
            <nav className='navbar navbar-expand-sm navbar-nav navbar-light  '>
                <ul className='navbar-nav  ms-3 ms-sm-2 mb-3'>
                    <li className='nav-item ms-md-5 ms-sm-3 ms-0  '>
                        <NavLink className="nav-link mb-3"  to='/Home/Admin/Pricing'>قیمت گذاری</NavLink>
                    </li>
                    <li className='nav-item  ms-md-5 ms-sm-3 ms-0'>
                        <NavLink className="nav-link mb-3"  to='/Home/Admin/Factors'>فاکتورهای فروش</NavLink>
                    </li>
                    <li className='nav-item  ms-md-5 ms-sm-3 ms-0'>
                        <NavLink className="nav-link mb-3 "  to='/Home/Admin/AddProduct'>افزودن محصول</NavLink>
                    </li>
                    <li className='nav-item ms-md-5 ms-sm-3 ms-0'> 
                        <NavLink className="nav-link mb-3 "  to='/Home/Admin/AddUser'>افزودن کاربر جدید</NavLink>
                    </li>
                    
                </ul>
            </nav>
            <div className='container-fluid border p-1 p-sm-5 border-2 border-bg-secondary rounded-2'>
            <Outlet />
            </div>
           
        </div>
    )
    
}


export default Admin;