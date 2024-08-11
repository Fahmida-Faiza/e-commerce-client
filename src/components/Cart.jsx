import { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

import CartCard from "../components/CartCard";
import { AuthContext } from "../Providers/AuthProvider";


const Cart = () => {

    // jwt///////////////////
    const [carts, setCarts] = useState([])
    const { user, loading } = useContext(AuthContext);

    // const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/cart?email=${user?.email}`
    useEffect(() => {
        //axios korley airokom
        // axios.get(url, {withCredentials: true})
        // .then(res => {
        //     setBookings(res.data)
        // })

        fetch(url, { credentials: 'include' })
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [url])

  
    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }


    return (
        <div>

            <h1 className='text-6xl text-center font-extrabold  text-blue-400 my-20'>My All Carts
            </h1>
            <div className='grid md:grid-cols-2 gap-6 '>

                {
                    carts.map(cart => <CartCard
                        key={cart._id}
                        cart={cart}

                        carts={carts}
                        setCarts={setCarts}

                    ></CartCard>)
                }
            </div>
        </div>
    );
};

export default Cart;
