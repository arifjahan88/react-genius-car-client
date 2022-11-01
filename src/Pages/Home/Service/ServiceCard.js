import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, price, img } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-5 p-4">
      <figure>
        <img className="rounded-xl" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <div className="flex items-center">
          <p className="text-orange-600 font-bold">Price : ${price}</p>
          <Link>
            <FaArrowRight className="text-orange-600"></FaArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
