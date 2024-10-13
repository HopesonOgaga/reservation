import React from "react";
import Service from "./servicesection/services";
import Header from "../header";
import DateInfo from "./datedata";
import OurHotels from "./hotels";
import Footer from "../footer";

export default function Home() {
  return (
    <>
      <section className="mr-4 ml-4 ">
        <Header />
        <div className="flex flex-col gap-4 items-center justify-center w-full h-full mb-12 mt-10 ">
          <p className="text-4xl">
            welcome to the{" "}
            <span className="text-sky-500 uppercase font-semibold ">
              hopeson
            </span>{" "}
          </p>
          <div className="border border-b-2 bg-black w-24 rounded-full shadow-sm"></div>
        </div>
        <DateInfo />
        {/* about */}
        <section className="flex w-full h-full mt-12 mb-12 ">
          <div className="">
            <img
              className="w-[40vw] h-[70vh]"
              src="/image/lobby.jpg"
              alt=""
            ></img>
          </div>
          <div className="shadow-md rounded-sm  w-[60vw]  flex flex-col gap-6 p-8 ">
            <p className="text-blue-400 font-semibold capitalize text-2xl">
              About us
            </p>
            <p className="text-2xl font-bold uppercase ">
              The Most Preferred Hotel in West Africa
            </p>
            <p className="font-light ">
              Hopeson Hotels & Suites is the most preferred hotel in West
              Africa, offering the perfect blend of business and leisure.
              Located in the heart of Victoria Island, we provide our guests
              with an exceptional combination of premium amenities, dining, and
              recreational options, all within one remarkable space. Our
              services meet the highest international standards, ensuring a
              world-class experience. With stunning views of the Atlantic Ocean,
              we are just a 10-minute drive from the City Centre and only 45
              minutes away from the Airport. Our hotels are designed for your
              comfort and convenience, with your security as our top priority.
              You'll find our customer care to be unmatched.
            </p>
          </div>
        </section>
        <Service></Service>
        {/* slider willl be here */}
        <div className="mt-6 ">
          <OurHotels />
        </div>
      </section>

      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
