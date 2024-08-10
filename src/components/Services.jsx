import React, { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';


const Services = () => {
    const [services, setServices] = useState([]);
    // data load r jonno useEffect
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h1>Services page</h1>
            </div>


            <div>


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