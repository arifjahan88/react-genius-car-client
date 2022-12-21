import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const CheckOut = () => {
  const { _id, title, price, img } = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleplaceorder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstname.value} ${form.lastname.value}`;
    const email = user?.email || "Uregisterd User";
    const phone = form.phone.value;
    const currency = form.currency.value;
    const postal = form.postal.value;
    const address = form.address.value;

    const order = {
      service: _id,
      servicename: title,
      price,
      customer: name,
      email,
      phone,
      currency,
      postal,
      address,
    };

    if (phone) {
      fetch("https://react-genius-car-server.vercel.app/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("genius-car-token")}`,
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.replace(data.url);
        })
        .catch((err) => console.error(err));
    } else {
      alert("Please Provide phone number");
    }
  };
  return (
    <form onSubmit={handleplaceorder} className="bg-slate-200 p-16 rounded-lg">
      <p className="text-center font-semibold text-orange-600 text-2xl">
        You are about to order : {title}
      </p>
      <p className="text-center font-semibold text-orange-600 text-2xl">
        Price : {price}
      </p>
      <div className="flex justify-center items-center gap-5">
        <div>
          <img className="w-96 rounded-lg" src={img} alt="" />
        </div>
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-5 my-5">
            <input
              name="firstname"
              type="text"
              placeholder="First name"
              className="input w-full"
            />

            <input
              name="lastname"
              type="text"
              placeholder="Last Name"
              className="input w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Phone"
              className="input w-full"
            />
            <input
              name="email"
              type="text"
              placeholder="Your Email"
              className="input w-full"
              defaultValue={user?.email}
              readOnly
            />
            <select
              defaultValue="BDT"
              name="currency"
              className="select select-bordered w-full max-w-xs"
            >
              <option value="BDT">BDT</option>
              <option value="USD">USD</option>
            </select>
            <input
              name="postal"
              type="text"
              placeholder="Your postal Code"
              className="input w-full"
            />
          </div>
          <textarea
            name="address"
            className="textarea mt-2 w-full h-48"
            placeholder="Your Address"
          ></textarea>
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-wide">PAY</button>
      </div>
    </form>
  );
};

export default CheckOut;
