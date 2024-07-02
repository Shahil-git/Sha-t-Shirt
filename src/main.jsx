import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import LogIn from './Components/LogIn/LogIn';
import Pants from './Components/Pants/Pants';
import Shirt from './Components/Shirt/Shirt';
import Registration from './Components/Registration/Registration';




const router = createBrowserRouter([
   {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/collation",
        element:<Shop></Shop>
      },
      {
        path:"/login",
        element:<LogIn></LogIn>
      },
      {
        path:"/Registration",
        element:<Registration></Registration>
      },
      {
        path:"/t-Shirt",
        element:<Shirt></Shirt>
      },
      {
        path:"/pants",
        element:<Pants></Pants>
      },
      
    
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
