import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const DashBoards = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div class="row">
                <div class="col-4">
                    <Link to='/dashboard'><h1>DashBoards</h1></Link>
                    <li>
                        <Link to='view-products'> View Products</Link>
                    </li>
                    <li>
                        <Link to='manage-products'>Manage Products</Link>
                    </li>
                </div>

            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoards;