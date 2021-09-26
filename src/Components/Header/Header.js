import './Header.css';
import React from 'react';

const Header = () => {
    return (
        <div className='container mx-auto bg-dark p-3 rounded mb-3'>
            <h1 className='text-center text-warning text-uppercase fw-bold'>Nitro Solutions</h1>
            <p className='text-center text-light rounded text-uppercase'><small>An entrepreneur based software farm, EST: 2021</small></p><hr className='bg-light' />
            <h3 className='text-center bg-primary text-white rounded p-2 fw-bold'>Total Budget: $100,000,000</h3>
        </div>
    );
};

export default Header;