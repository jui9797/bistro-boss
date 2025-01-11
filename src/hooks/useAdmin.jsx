import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {data:isAdmin, isPending: isAdminPending} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async ()=>{
            const res =await axiosSecure.get(`/user/admin/${user.email}`)
            console.log(res.data.admin)
            return res.data?.admin
        }
    })
    return[isAdmin, isAdminPending]
};

export default useAdmin;
