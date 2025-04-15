import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='mt-16'>
            <p>
                <small>Thank you for visiting our website</small>
            </p>
            <div className='flex items-center justify-center gap-2'>
            <NavLink to="/">Terms</NavLink>
                <NavLink to="/">Privacy</NavLink>
                <NavLink to="/fb">Facebook</NavLink>
            </div>
        </div>
    );
};

export default Footer;