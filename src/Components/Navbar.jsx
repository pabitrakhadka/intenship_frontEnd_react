import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const menuList = [
        { title: 'Home', url: '/' },
        { title: 'Package', url: '/package' },
        { title: 'Blog', url: '/blog' },
        { title: 'About US', url: '/about-us' },
        { title: 'Contact US', url: '/contact-us' }
    ];



    return (
        <div>
            <nav className="bg-[#FFD700] text-black font-roboto flex items-center justify-between p-4">
                <div className='flex items-center'>
                    <div className='logo'>
                        <img src="/logo.jpg" alt="Logo" height={50} width={50} />
                    </div>
                    <div>
                        <Link to={'/'}>Mantra Mountain Nepal Treks</Link>
                    </div>
                </div>
                <ul className='flex space-x-6'>
                    {menuList.map((menu, index) => (
                        <li key={index}>
                            <Link

                                className={`text-lg  `}
                                to={menu.url}
                            >
                                {menu.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
