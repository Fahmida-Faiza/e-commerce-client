import React, { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';


const Services = () => {
    const [services, setServices] = useState([]);
    // data load r jonno useEffect
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-4'>
            <div className='text-center'>
                <h1>Services page</h1>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>


                {

                    services.map(service => <ServiceCard
                        key={service.title}
                        service={service}>
                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;