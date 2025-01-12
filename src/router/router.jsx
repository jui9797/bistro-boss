import { createBrowserRouter } from "react-router-dom";

import Error from "./error/Error ";

import Main from "../main/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import MyOrder from "../pages/myOrder/MyOrder";
import Dashboard from "../pages/dashboard/Dashboard";
import Cart from "../pages/dashboard/Cart";
import Allusers from "../pages/dashboard/Allusers";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/dashboard/AddItems";
import ManageItems from "../components/ManageItems";
import UpdateItem from "../components/UpdateItem";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'/order',
          element:<Order></Order>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/myOrder',
          element:<PrivateRoute><MyOrder></MyOrder></PrivateRoute>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'/dashboard/cart',
          element:<Cart></Cart>
        },
        // admin routes
        {
          path: '/dashboard/users',
          element:<AdminRoute><Allusers></Allusers></AdminRoute>
        },
        {
          path:'/dashboard/addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path:'manageItems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
        }
      ]
    }
  ]);