import React, { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    //  const [menu, setMenu] =useState([])
    //  const [loading, setLoading] =useState(true)
        // useEffect(()=>{
        //     fetch('http://localhost:5000/menu')
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log(data)
        //         setMenu(data)
        //         setLoading(false)
        //     })
        // },[])
        // return[menu, loading]
        

        // react query
        const {data: menu = [], isPending: loading, refetch} =useQuery({
            queryKey: ['menu'], 
            queryFn: async() =>{
                const res = await axiosPublic.get('/menu');
                return res.data;
            }
        })
        return [menu, loading, refetch]
};

export default useMenu;