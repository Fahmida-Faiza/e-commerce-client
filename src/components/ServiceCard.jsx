import React from 'react';

const ServiceCard = ({ service }) => {
    const {title, image, price,description} = service;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p>price : ${price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;