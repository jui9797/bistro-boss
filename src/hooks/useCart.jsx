import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useCart = () => {

const axiosSecure =useAxiosSecure()
const {user} =useContext(AuthContext)

// tan stack query
const { data:cart=[],refetch} =useQuery({
    queryKey:['cart', user?.email],
    queryFn: async ()=>{
        const res =await axiosSecure.get(`/carts?email=${user.email}`)   //email diye data query 
        return res.data;
    }
})
return [cart, refetch]

   
};

export default useCart;