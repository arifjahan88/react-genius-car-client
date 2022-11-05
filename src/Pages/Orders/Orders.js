import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user, logout } = useContext(AuthContext);
  const [orders, setorders] = useState([]);

  useEffect(() => {
    fetch(
      `https://react-genius-car-server.vercel.app/orders?email=${user?.email}`,
      {
        headers: {
          authorization: `bearer ${localStorage.getItem("genius-car-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 && res.status === 403) {
          return logout();
        }
        return res.json();
      })
      .then((data) => setorders(data))
      .catch((err) => console.error(err));
  }, [user?.email, logout]);

  const handledelete = (id) => {
    const proceed = window.confirm("Are you sure to Delete");
    if (proceed) {
      fetch(`https://react-genius-car-server.vercel.app/orders/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("genius-car-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted SuccessFully");
            const remaining = orders.filter((remain) => remain._id !== id);
            setorders(remaining);
          }
        });
    }
  };
  const handlestatusupdate = (id) => {
    fetch(`https://react-genius-car-server.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("genius-car-token")}`,
      },
      body: JSON.stringify({ status: "approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = "Approved";
          const newOrders = [approving, ...remaining];
          setorders(newOrders);
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Delete</th>
              <th>Name</th>
              <th>Job</th>
              <th>Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                handledelete={handledelete}
                handlestatusupdate={handlestatusupdate}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
