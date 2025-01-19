import React from 'react';
import { Outlet } from 'react-router';

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";


/*
    This Layout component defines the default look of the web application:
        header, main content as child component via <Outlet />, and then the footer
*/
function Layout() {
    return (<>
        <Header />

        <main>
            <Outlet />
        </main>

        <Footer />
    </>);
}

export default Layout;