import Image from "next/image";
import React from "react";
import "@/app/home/home.module.css";
const Destination = ({ dstCard }) => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="destHeading">Main Destination</h1>
      <p className="destSubHeading">
        Search our website for the best destinations in the world, where you can
        enjoy the best vacations.
      </p>
      <div className="grid grid-cols-3 gap-4">
        {dstCard.map((data, index) => (
          <div className="relative" key={index}>
            <Image
              src={data.image}
              alt={`Destination ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div style={{backgroundColor : '#4998BB'}} className="absolute bottom-10 left-5 right-5 p-4 bg-opacity-50">
              <div className="text-white">
                <h2 className="text-xl font-semibold">{data.title}</h2>
                <div className="flex items-center mt-2">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-white">{data.rating}</span>
          </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
