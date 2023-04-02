import React from 'react';

const Link = ({ route }) => {
    return (
        <div className=''>
            <li className='mr-6 hover:bg-orange-300 w-16 rounded-sm'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;