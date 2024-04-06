import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/error/Error";
import Layout from "./root/Layout";
import Home from "./pages/home/Home";
import Booking from "./pages/booking/Booking";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Destination from "./pages/destination/Destination";

const app = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/booking",
        element:<Booking></Booking>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/destination",
        element:<Destination></Destination>
      }
    ]
  },
]);

export default app;