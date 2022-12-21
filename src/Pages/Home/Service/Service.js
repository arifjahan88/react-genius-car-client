import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setservices] = useState([]);
  useEffect(() => {
    fetch("https://react-genius-car-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, []);

  return (
    <div>
      <div className="text-center my-4">
        <p className="text-xl font-bold text-orange-600">Service</p>
        <p className="text-5xl my-4 font-bold">Our Service Area</p>
        <p className="w-1/2 mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="my-5 text-center">
        <button className="btn btn-outline btn-primary">More Services</button>
      </div>
    </div>
  );
};

export default Service;
