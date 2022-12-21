import { useEffect, useState } from "react";

const OrderRow = ({ order, handledelete, handlestatusupdate }) => {
  const { _id, servicename, price, customer, email, message, service, status } =
    order;
  const [orderdata, setorderdata] = useState([]);

  useEffect(() => {
    fetch(`https://react-genius-car-server.vercel.app/services/${service}`, {})
      .then((res) => res.json())
      .then((data) => setorderdata(data));
  }, [service]);

  return (
    <tr>
      <th>
        <button onClick={() => handledelete(_id)} className="btn btn-ghost">
          X
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              {orderdata?.img && (
                <img src={orderdata.img} alt="Avatar Tailwind CSS Component" />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        {servicename}
        <br />
        <span className="badge badge-ghost badge-sm">{price}</span>
      </td>
      <td>{message}</td>
      <th>
        <button
          onClick={() => handlestatusupdate(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "Pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;
