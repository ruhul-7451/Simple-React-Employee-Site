import './Header.css';
import React from 'react';

const Header = () => {
    return (
        <div className='container mx-auto bg-dark p-3 rounded'>
            <h1 className='text-center text-warning text-uppercase'>Nitro Solutions</h1>
            <p className='text-center text-light rounded'><small>Nitro Solution is an entrepreneur base software farm, EST: 2021</small></p><hr className='bg-light' />
            <h3 className='text-center bg-info text-dark rounded p-2'>Total Budget: 100M</h3>
        </div>
    );
};

export default Header;