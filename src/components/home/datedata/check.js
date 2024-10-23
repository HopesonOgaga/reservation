import React from "react";
import { Link } from "react-router-dom";

export default function CheckButton() {
  return (
    <section className="w-full h-full flex justify-center mt-8 mb-4">
      <div className=" w-full h-full justify-center flex">
        <Link to={"/available"} className="w-full h-full flex justify-center"><button className="font-semibold capitalize text-xl h-14 md:w-1/5 w-full text-white bg-sky-500 rounded-md border-2 hover:bg-sky-600 active:bg-sky-800 ">
          check availabilty{" "}
        </button></Link>
      </div>
    </section>
  );
}
