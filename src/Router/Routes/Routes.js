import Main from "../../Layout/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import DisplayError from "../../Pages/DisplayError/DisplayError";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/LogIn/LogIn";
import Orders from "../../Pages/Orders/Orders";
import PaymentSuccess from "../../Pages/PayemntSuccess/PaymentSuccess";
import PaymentCancel from "../../Pages/PaymentCancel/PaymentCancel";
import PaymentFail from "../../Pages/PaymentFail/PaymentFail";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "checkout/:id",
        element: (
          <PrivateRoutes>
            <CheckOut></CheckOut>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://react-genius-car-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "orders",
        element: (
          <PrivateRoutes>
            <Orders></Orders>
          </PrivateRoutes>
        ),
      },
      {
        path: "payment/seccess",
        element: (
          <PrivateRoutes>
            <PaymentSuccess></PaymentSuccess>
          </PrivateRoutes>
        ),
      },
      {
        path: "payment/fail",
        element: (
          <PrivateRoutes>
            <PaymentFail></PaymentFail>
          </PrivateRoutes>
        ),
      },
      {
        path: "payment/cancel",
        element: (
          <PrivateRoutes>
            <PaymentCancel></PaymentCancel>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
