import React from "react";
import "./BannerItem.css";

const BannerData = ({ slide }) => {
  const { image, prev, id, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="bannerimg">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-2/4 w-2/5">
        <p className="text-white text-xl">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4 w-2/5">
        <button className="btn btn-secondary mr-3">Discover More</button>
        <button className="btn btn-outline btn-secondary">
          Latest Project
        </button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Affordable <br /> Price for <br /> Car Serving
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0 ">
        <a href={`#slide${prev}`} className="btn btn-circle mr-2">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerData;
