import React, { useContext } from "react";
import Header from "../../header";
import Footer from "../../footer";
import { Link } from "react-router-dom";
import UserNumber from "../info";
import UserContext from "../../../context/userContext";

export default function Reservation() {
  const { hotelinfo } = useContext(UserContext);

  return (
    <section>
      <Header />
      <div className="ml-6 mr-6">
        <div className="mb-4">
          <p className="text-2xl font-bold">Select a room</p>
        </div>

        <div className="flex md:flex-row flex-col gap-8 w-full h-full mb-6">
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

        <UserNumber />

        <section className="md:h-[55vh] md:w-[65vw] w-full h-full border border-blue-300 rounded-sm p-4 ">
          <div className="w-full h-full flex md:flex-row flex-col gap-4">
            <img
              className="md:w-1/3 w-full h-[30vh] p-2 border-2 rounded-sm shadow-sm"
              src={hotelinfo.image}
              alt="Bedroom"
            />
            <div className="flex flex-col gap-4 h-full w-full">
              <p className="text-2xl font-bold uppercase text-blue-400">
                {hotelinfo.name}
              </p>
              <p className="text-lg ">1 King bed</p>
              <p className="text-sm">
               {hotelinfo.details}
              </p>
              <p className="underline font-semibold capitalize">Room details</p>
              <div className="flex justify-between w-full h-full pl-2 pr-2 ">
                <p className="underline capitalize font-semibold text-blue-200">
                  Best Availability rate
                </p>
                <div className="">
                  <div className="flex flex-col gap-4 ">
                    <p className="text-xl  font-semibold">
                      {hotelinfo?.price || "price not available"}
                    </p>
                    <p className="text-sm">per night</p>
                    <p className="text-sm">Including taxes and fees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xl font-semibold">Room</p>
            <div className="flex md:gap-4 gap-1">
              <p className="font-semibold text-lg capitalize">1 Bedroom</p>
              <p className="font-semibold text-lg capitalize">1 Bed</p>
              <p className="font-semibold text-lg capitalize">1 Bath</p>
            </div>
            <div className="flex md:flex-row flex-col md:justify-around items-center gap-6 mt-4">
              <div>
                <div className="flex gap-3 items-center">
                  <img src="/image/circle.png" alt="circle" className="w-6" />
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

              <div className="flex flex-col items-center md:items-end gap-4">
                <p className="font-semibold">Best Available Rate</p>
                <div className="text-right">
                  <p className="text-xl font-semibold">
                    <p className="text-lg font-semibold">
                      {hotelinfo?.price || "price not available"}
                    </p>
                  </p>
                  <p className="text-sm">Including taxes and fees</p>
                </div>
                <Link to="/payment">
                  <button className="w-44 h-14 rounded-md shadow-sm border-2 bg-blue-400 hover:bg-blue-600 active:bg-sky-300 font-semibold text-lg capitalize text-white">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
