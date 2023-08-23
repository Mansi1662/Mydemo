// import { Navbar } from 'bootstrap5';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Provider } from 'react-redux';
import store from '../store/store';

function RootLayout(props) {
    return (
        <>
        {/* to access the store we need provider */}
        <Provider store={store}> 
            <Navbar / >
            <main>            
                <Outlet />  {/* this will bind all the root that are added in app.js */}
            </main>
        </Provider>
        </>
    );
}

export default RootLayout;