import React, { useContext, useState } from "react";
import UserContext from "../../../context/userContext";

const Number = [1, 2, 3, 4, 5];

export default function DateInfo() {
  const { setData } = useContext(UserContext);

  function handleSelectChange(event) {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const renderSelect = (name, label) => (
    <div className="w-full">
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <select
        className="w-full border border-gray-300 rounded-md h-12 px-3 text-lg capitalize"
        id={name}
        name={name}
        onChange={handleSelectChange}
      >
        <option value="" className="font-semibold">
          Select {label}
        </option>
        {Number.map((value, index) => (
          <option key={index} value={value} className="font-light">
            {value} {label.toLowerCase()}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <section className="flex justify-center items-center w-full h-full p-4">
      <div className="w-full h-full md:w-[60vw] md:h-[12vh] bg-white rounded-md shadow-md flex flex-col gap-6 justify-center items-center">
        <div className="flex flex-col md:flex-row md:justify-around w-full items-center gap-4">
          {renderSelect("adult", "Adults")}
          <div className="hidden md:block border-r-2 border-blue-400 h-14"></div>
          <div className="md:hidden border-b-2 bg-black w-24 rounded-full shadow-sm"></div>
          {renderSelect("child", "Children")}
        </div>
      </div>
    </section>
  );
}
