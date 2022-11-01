import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="w-1/2 relative">
          <img
            src={person}
            className="w-4/5 h-full rounded-lg shadow-2xl"
            alt=""
          />
          <img
            src={parts}
            className="w-2/4 right-5 top-2/3 border-8 border-slate-50 absolute rounded-lg"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <p className="text-xl font-bold text-orange-600">About Us</p>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
