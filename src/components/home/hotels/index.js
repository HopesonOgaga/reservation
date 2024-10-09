import React from "react";

const hotels = [
  {
    name: "hopeson hotel",
    description: "At hopeson Gardens, the rooms are well appointed and designed to provide comfort and convenience.",
    imageUrl: "/image/bedroom4.jpg",
  },
  {
    name: "hopeson hotel",
    description: "At hopeson Gardens, the rooms are well appointed and designed to provide comfort and convenience.",
    imageUrl: "/image/bedroom4.jpg",
  },
  {
    name: "hopeson hotel",
    description: "At hopeson Gardens, the rooms are well appointed and designed to provide comfort and convenience.",
    imageUrl: "/image/bedroom4.jpg",
  },
  {
    name: "hopeson hotel",
    description: "At hopeson Gardens, the rooms are well appointed and designed to provide comfort and convenience.",
    imageUrl: "/image/bedroom4.jpg",
  },
];

export default function OurHotels() {
  return (
    <section className="ml-4 mr-4 ">
      <div>
        <p className="text-4xl capitalize text-center font-bold">
          <span className="text-blue-400">our</span> hotels
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full items-center justify-center mt-6">
        {hotels.map((hotel, index) => (
          <div key={index} className="mt-6">
            <div
              className="flex flex-col  justify-end w-full h-[55vh] bg-cover bg-center shadow-md border border-solid rounded-sm p-4 "
              style={{ backgroundImage: `url(${hotel.imageUrl})` }}
              aria-label="Hotel Bedroom"
            >
              <p className="text-gray-50 font-bold text-2xl capitalize">
                {hotel.name}
              </p>
              <div className="border border-b-2 border-sky-400 w-full mt-4"></div>
              <div>
                <p className="text-gray-100 text-lg">
                  {hotel.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
