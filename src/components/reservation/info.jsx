import React from "react";

export default function UserNumber() {
  return (
    <section>
      <div className="flex gap-6 border border-blue-400 rounded-sm shadow-sm w-full md:w-1/6  h-12 justify-center items-center  mt-8 mb-8">
        <div>
          <img className="w-6" src="/image/user.png" alt="user"></img>
        </div>
        <div className="flex gap-4">
          <p className="font-semibold text-lg capitalize text-blue-300 ">
            1 <span className="font-semibold text-lg capitalize text-gray-500 ">adults</span>
          </p>
          <p className="font-semibold text-lg capitalize text-blue-300 ">
            0 <span className="font-semibold text-lg capitalize text-gray-500 ">children</span>
          </p>
        </div>
      </div>
    </section>
  );
}
