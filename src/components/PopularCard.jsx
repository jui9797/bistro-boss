import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useCart from '../hooks/useCart';

const PopularCard = ({item}) => {
    const [,refetch] =useCart()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const {user} =useContext(AuthContext)
    const {_id,image, name, recipe, price} =item || {}

const handleAddToCart=(food)=>{

    
    // console.log(food)
    // user thakle database a data add hbe
   if(user && user.email){
    const cartItem ={
        menuId:_id,
        email:user.email,
        name,
        image,
        price

    }
    // save card data in database
    axiosSecure.post('/carts', cartItem)
    .then(res=>{
        console.log(res.data)
        if (res.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} added to your cart`,   //j card ar data add to cart kora hobe tar name
                showConfirmButton: false,
                timer: 1500
            });
            // refectch the card
            refetch();
        }
       
    })
}
// user na thakle login page a niye jabe
    else{
        Swal.fire({
            title: "You are not Logged In",
            text: "Please login to add to the cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   send the user to the login page
                navigate('/login', { state: { from: location } })
            }
        });
    }
    
  
}

    return (
        <div className=' h-[400px] inter'>
            <div className=" bg-base-100 shadow-xl rounded-none relative">
                <div className="h-[200px]">
                    <img
                        src={image}
                        alt="Shoes"
                        className=" h-full w-full"/>
                </div>
                <p className='absolute p-2 rounded bg-black text-white top-2 right-0'>$ {price}</p>
                <div className="h-[200px] pt-4 flex flex-col items-center text-center bg-gray-200">
                    <div className='h-[100px]'>
                    <h2 className="text-xl fontbold mb-2">{name}</h2>
                    <p className='text-xs mb-1'>{recipe}</p>
                    </div>
                    
                    <button onClick={()=>handleAddToCart(item)} className=" mb-0 btn btn-outline border-0 border-b-4 text-orange-800 border-orange-800 mt-4">add to cart</button>
                    
                </div>
            </div>
        </div>
    );
};

export default PopularCard;