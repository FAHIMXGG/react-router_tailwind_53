import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
const Feature = ({feature}) => {
    return (
        <div className='flex justify-center'>
            <CheckBadgeIcon className="h-6 w-6 text-blue-500" />
            <span className='pl-2'>{feature}</span>
        </div>
    );
};

export default Feature;