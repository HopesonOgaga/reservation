import React from "react";
import Header from "../../header";
import Footer from "../../footer";
import { Link } from "react-router-dom";

export default function Reservation() {
  return (
    <section>
      <Header />
      <div className="ml-6 mr-6">
        {/* Header Section */}
        <div className="mb-4">
          <p className="text-2xl font-bold">Select a room</p>
        </div>

        {/* Filters Section */}
        <div className="flex md:flex-row flex-col  gap-8 w-full h-full mb-6">
          <select className="p-2 border rounded">
            <option value="rooms">View by: Rooms</option>
            <option value="rate">Rate</option>
          </select>

          <select className="p-2 border rounded">
            <option value="lowest">Lowest Price</option>
            <option value="highest">Highest Price</option>
          </select>

          <select className="p-2 border rounded">
            <option value="ngn">NGN - Nigerian Naira</option>
          </select>
        </div>

        {/* Hotel Details Section */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xl font-semibold">Room</p>
            <div className="flex md:gap-4 gap-1 ">
              <p className="font-semibold text-lg  capitalize">1 Guest</p>
              <p className="font-semibold text-lg capitalize">1 Bedroom</p>
              <p className="font-semibold text-lg  capitalize">1 Bed</p>
              <p className="font-semibold text-lg capitalize">1 Bath</p>
            </div>

            <div className="flex md:flex-row flex-col md:justify-around items-center gap-6 mt-4">
              {/* Left Side: Hotel Info */}
              <div className="">
                <div className="flex gap-3 items-center">
                  <div className="h-full">
                    <img src="/image/circle.png" alt="circle" className="w-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-lg capitalize">
                      Jorgan Hotel
                    </p>
                    <p className="text-sm">
                      Jorgan are experienced, highly rated hosts committed to
                      providing great stays for guests.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="h-full">
                    <img src="/image/circle.png" alt="circle" className="w-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-lg capitalize">
                      Jorgan Hotel
                    </p>
                    <p className="text-sm">
                      Jorgan are experienced, highly rated hosts committed to
                      providing great stays for guests.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="h-full">
                    <img src="/image/circle.png" alt="circle" className="w-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-lg capitalize">
                      Jorgan Hotel
                    </p>
                    <p className="text-sm">
                      Jorgan are experienced, highly rated hosts committed to
                      providing great stays for guests.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: Price & Booking */}
              <div className="flex flex-col items-center md:items-end gap-4 ">
                <p className="font-semibold">Best Available Rate</p>
                <div className="text-right">
                  <p className="text-xl font-semibold">NGN 160,000</p>
                  <p className="text-sm ">Including taxes and fees</p>
                </div>
                <Link to={"/payment"}>
                  {" "}
                  <button className="w-44 h-14 rounded-md shadow-sm border-2 bg-blue-400 hover:bg-blue-600 active:bg-sky-300 font-semibold text-lg capitalize text-white">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Info Section (if any) */}
      <div>{/* Add checkout info here if needed */}</div>

      <Footer />
    </section>
  );
}
