import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="border-2 rounded-xl m-2 p-3 lg:w-1/2 mx-auto lg:my-10 border-orange-200 hover:bg-lime-100">
      <h2 className="text-3xl font-bold m-2 text-center text-purple-700">
        Your payment Saccessfull.
      </h2>
      <Link to="/" className="flex items-center justify-center">
        <button className="btn btn-outline btn-error btn-sm">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default PaymentSuccess;
