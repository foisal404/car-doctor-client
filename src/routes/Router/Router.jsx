import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import AddBooking from "../../pages/AddBooking/AddBooking";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/booking/:id',
          element:<AddBooking></AddBooking>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);
export default router;