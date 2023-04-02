import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const Pricelist = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data));
    }, [])

    //console.log(prices)

    return (
        <div className='mx-12'>
            <h2 className='text-5xl text-center text-cyan-200 bg-slate-500'>Awesome boi</h2>
            <div className='grid md:grid-cols-3 gap-3 text-center'>
            {
                prices.map(price => <PriceCard
                key={price.id}
                price={price}
                ></PriceCard>)
            }
            </div>

        </div>
    );
};

export default Pricelist;