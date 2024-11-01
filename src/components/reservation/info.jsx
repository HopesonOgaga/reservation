import React from "react";
import { useContext } from "react";
import UserContext from "../../context/userContext";
export default function UserNumber() {
  const { data } = useContext(UserContext);
  return (
    <section>
      <div className="flex gap-6 border border-blue-400 rounded-sm shadow-sm w-full md:w-1/6  h-12 justify-center items-center  mt-8 mb-8">
        <div>
          <img className="w-6" src="/image/user.png" alt="user"></img>
        </div>
        <div className="flex gap-4">
          <p className="font-semibold text-lg capitalize text-blue-300 ">
            <span className="font-semibold text-lg capitalize text-gray-500 ">
              {data ? data.adult : "0"} adults
            </span>
          </p>
          <p className="font-semibold text-lg capitalize text-blue-300 ">
            <span className="font-semibold text-lg capitalize text-gray-500 ">
              {data ? data.child : "0"} children
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
