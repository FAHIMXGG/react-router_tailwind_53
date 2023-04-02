
import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-gray-300 mt-4 rounded-md p-5 flex flex-col items-center'>
            <h5 className='text-purple-500 text-2xl font-bold'>{price.name}</h5>
            <h6>
            <span className='text-lg font-bold'>{price.price}</span>
            <span className='text-sm font-semibold'>/m</span>
            </h6>
            <p className='underline font-bold'>Features:</p>
            <div className='mb-9'>
            {
                price.features.map((feature, idx) => <Feature
                key={idx}
                feature={feature}
                ></Feature>)
            }
            </div>
            <button className='w-1/4 bg-cyan-400 p-2 rounded-md mt-auto items-center'>Purchase</button>
        </div>
    );
};

export default PriceCard;