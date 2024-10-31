import React, { useState } from "react";
import Header from "../../header";
import Footer from "../../footer";
import HotelPrpps from "./props";
import DateInfo from "../../home/datedata";
import UserNumber from "../info";

const data = [
  {
    image: "/image/eko-hotel.jpg",
    name: "Eko Signature",
    location: "Lagos, Nigeria",
    details: "Luxurious hotel with premium services.",
    price: "450,000",
  },
  {
    image: "/image/eko-hotel.jpg",
    name: "Eko Gardens",
    location: "Victoria Island, Nigeria",
    details: "A comfortable stay in a serene environment.",
    price: "125,000",
  },
  {
    image: "/image/eko-hotel.jpg",
    name: "Eko Hotel",
    location: "Victoria Island, Nigeria",
    details: "Modern amenities with excellent hospitality.",
    price: "255,000",
  },
  {
    image: "/image/eko-hotel.jpg",
    name: "Eko Suites",
    location: "Lagos, Nigeria",
    details: "Perfect for business and leisure stays.",
    price: "280,000",
  },
];

export default function Availability() {
  const [hotel, setHotel] = useState(data);

  const handleSort = (e) => {
    const value = e.target.value;
    const sortedHotels = [...hotel];

    if (value === "name-asc") {
      sortedHotels.sort((a, b) => a.name.localeCompare(b.name));
    }
    // Add more sorting logic if needed

    setHotel(sortedHotels);
  };

  return (
    <section className="h-full w-full">
      <Header />
      <div className="ml-8 mr-8">
        {/* calendar api */}
        <div>
          <p className="text-3xl text-blue-400 font-bold uppercase">
            Select a hotel
          </p>
        </div>
        <div>
          <select onChange={handleSort} className="p-2 border rounded mb-6 mt-6 ">
            <option value="relevance">Sort: By relevance</option>
            <option value="name-asc">Hotel name A-Z</option>
          </select>
          <div>
            <UserNumber/>
          </div>
          <div className="grid md:grid-cols-3 gap-2  grid-cols-1">
            {hotel.map((hotelui, index) => (
              <HotelPrpps
                key={index}
                name={hotelui.name}
                location={hotelui.location}
                details={hotelui.details}
                price={hotelui.price}
                image={hotelui.image}
              ></HotelPrpps>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
