import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const Allusers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: user = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/user', 
               
            )
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/user/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is admin now !`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then(result => {
                if (result.isConfirmed) {
                    // call delete api 
                    axiosSecure.delete(`/user/${user._id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
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
            <div className='flex justify-evenly my-4'>
                <h2 className='text-3xl'>All Users</h2>
                <h2 className='text-3xl'>Total Users: {user.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                user.map((item, index) =>

                                    <tr key={item._id}>
                                        <th>{index + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            {
                                                item.role === 'admin'? 'Admin' :
                                                <button onClick={() => handleMakeAdmin(item)} className='btn bg-[#D1A054] text-white'><FaUser></FaUser></button>
                                            }
                                        </td>
                                        <td>
                                            {
                                                item.role === 'admin'?
                                                <button disabled onClick={() =>handleDeleteUser(item)} className='btn text-red-600'><FaTrashAlt></FaTrashAlt></button>
                                                :
                                                <button onClick={() =>handleDeleteUser(item)} className='btn text-red-600'><FaTrashAlt></FaTrashAlt></button>
                                            }
                                            
                                        </td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Allusers;