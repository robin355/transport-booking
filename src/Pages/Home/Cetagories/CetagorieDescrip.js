import React, { useEffect, useState } from 'react';
import Cetagorie from './Cetagorie';

const CetagorieDescrip = () => {
    const [cetagories, setCetagories] = useState([]);
    useEffect(() => {
        fetch('cetagorieses.json')
            .then(res => res.json())
            .then(data => setCetagories(data))
    }, [])

    console.log(cetagories)
    return (
        <div>
            <h1 className='mt-10 text-orange-600 text-center text-3xl font-bold'>All Cetagories Of Transports</h1>
            <p className='mt-3 lg:ml-[200px] lg:mr-[200px]'>A principle behind transport category design standards is that any element in a bus,car or motor cycle can fail, but the risk of such a failure causing an accident should be acceptable under certain worthiness requirements. Consequently, transport category bus,car and motor cycle have duplicated elements wherever failure of one element is likely to cause an accident.</p>
            <div className='grid  lg:grid-cols-3 gap-3 mt-10'>
                {
                    cetagories?.map(product => <Cetagorie product={product} key={product.id}></Cetagorie>)
                }

            </div>
        </div>
    );
};

export default CetagorieDescrip;