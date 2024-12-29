import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div>

            <Navbar />
            <main style={{ minHeight: 'calc(100vh - 80px)' }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
