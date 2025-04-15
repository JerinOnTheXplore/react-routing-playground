import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h3>This is header</h3>
            <nav className='flex gap-2 items-center justify-center'>
                <p className='hover:text-fuchsia-900'><NavLink to="/">Home</NavLink></p>
                <p className='hover:text-fuchsia-900'><NavLink to="/mobiles">Mobiles</NavLink></p>
                <p className='hover:text-fuchsia-900'><NavLink to="/laptops">Laptops</NavLink></p>
                <p><NavLink to="/users">Users</NavLink></p>
                <p><NavLink to="/users2">Users2</NavLink></p>
            </nav>
        </div>
    );
};

export default Header;