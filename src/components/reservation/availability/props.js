import React from "react";

export default function HotelPrpps({ image, name, location, price, details }) {
  return (
    <div className="w-[25vw] h-[50vh] p-4 rounded-sm shadow-md flex flex-col gap-4">
      {/* Image */}
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-full h-1/3 object-cover rounded"
        />
      ) : (
        <div className="w-full h-1/3 bg-gray-200 rounded flex items-center justify-center">
          <p className="text-gray-500">No Image Available</p>
        </div>
      )}

      {/* Hotel Info */}
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold text-blue-400 capitalize">{name}</p>
        <p className="text-lg capitalize font-normal">{location}</p>
      </div>

      {/* Hotel Details */}
      <div className="flex-grow">
        <p className="text-gray-700">{details}</p>
      </div>

      {/* Price */}
      <div>
        <p className="text-lg font-semibold text-blue-400 text-center w-full"><span className="text-lg font-medium text-black "> from </span>₦{price}</p>
        <p className="text-center text-sm font-light ">Per Night</p>
        <p className="text-center text-sm font-light">Including taxes and fees</p>
      </div>

      {/* Button */}
      <div className="mt-auto">
        <button className="capitalize text-xl text-white font-semibold rounded-md shadow-lg w-full h-14 hover:bg-blue-500 active:bg-blue-600 bg-blue-400">
          View Rates
        </button>
      </div>
    </div>
  );
}
