import React from "react";

export default function CheckButton() {
  return (
    <section className="w-full h-full flex justify-center mt-8 mb-4">
      <div className=" w-full h-full justify-center flex">
        <button className="font-semibold capitalize text-xl h-14 w-1/5  text-white bg-sky-500 rounded-md border-2 hover:bg-sky-600 active:bg-sky-800 ">
          check availabilty{" "}
        </button>
      </div>
    </section>
  );
}
