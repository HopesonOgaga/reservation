import React from "react";
import Service from "./servicesection/services";
import Header from "../header";

export default function Home() {
  return <section className="mr-4 ml-4 ">
    <Header/>
    <div className="flex flex-col gap-4 items-center justify-center w-full h-full">
      <p className="text-4xl">welcome to the <span className="text-sky-500 uppercase font-semibold ">hopeson</span> </p>
      <div className="border border-b-2 bg-black w-24 rounded-full shadow-sm"></div>
    </div>
    <Service></Service>
    {/* slider willl be here */}
    <div>

    </div>
  </section>;
}
