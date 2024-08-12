import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';

const ServiceCard = ({ service }) => {
    const {_id,title, image, price,description} = service;
    const {user} =  useContext(AuthContext);



    /////////////////////////////faiza cart r kaj

    const handleAddToCart = () => {
        const cartname = title;
        
        const email = user.email;

        const cartquantity = price;
        const cartdetails = description;
        const cartphoto = image;
        const newCart = { cartname, email,  cartdetails, cartquantity, cartphoto }
        console.log(newCart);


        //send data to the server cart
        fetch('http://localhost:5000/cart', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Sucess!',
                        text: 'User Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })


    }



    /////////////////////////////////////////////





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
                        {/* <Link to={`/checkout/${_id}`}> */}
                        <Link className=''>
                            <button onClick={handleAddToCart} className="btn btn-primary">Add to cart</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;