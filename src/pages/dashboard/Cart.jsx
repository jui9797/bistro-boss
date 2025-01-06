import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import useCart from '../../hooks/useCart';
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Cart = () => {
    const [cart, refetch] = useCart()
    const axiosSecure =useAxiosSecure()

    // calculate total price
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    const handleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then(result =>{
            if (result.isConfirmed){
                // call delete api 
                axiosSecure.delete(`/carts/${id}`)
                .then(res=>{
                    if(res.data.deletedCount > 0){
                        if (res.data.deletedCount > 0) {
                            refetch();   //update state after deleted data
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    }
                })
            }
        })
    }

    return (
        <div>
            <SectionTitle subHeading={'My Cart'} heading={'WANNA ADD MORE'}></SectionTitle>
            <div className='flex justify-around'>
                <h2 className='font-bold'>Total Orders: {cart.length}</h2>
                <h2 className='font-bold'> Total Price: $ {totalPrice}</h2>
                <button className='btn bg-[#D1A054]'>Pay</button>
            </div>
            {/* cart table */}
            <div className='my-4'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054]'>
                            <tr>
                                <th></th>
                                <th>item image</th>
                                <th>item name</th>
                                <th>price</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((item, index)=>
                                    <tr key={index}>
                                <th>{index+1}</th>
                                <td>
                                <img className='w-10 h-10' src={item.image} alt="image"/></td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={()=>handleDelete(item._id)} className='btn p-2 text-red-600 text-xl'><MdDeleteForever /></button>
                                </td>
                            </tr>
                                )
                            }
                            


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;