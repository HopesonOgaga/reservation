import React, { useState } from "react";

// Array with adult numbers
const Number = [1, 2, 3, 4, 5];

export default function DateInfo() {
  const [adult, setAdult] = useState(Number);
  const [value, setValue] = useState();

  function handleSubmit(event) {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    localStorage.setItem(event.target.name, selectedValue);

  }
  // Helper function to create select options
  const renderSelect = (name, label) => (
    <div className="w-full">
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <select
        className="w-full border border-gray-300 rounded-md h-12 px-3 text-lg capitalize"
        id={name}
        name={name}
        onChange={handleSubmit}
      >
        <option value="" className="font-semibold">
          Select {label}
        </option>
        {adult.map((value, index) => (
          <option
            key={index}
            value={value}
            className="font-light"
          >
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
          {/* Selects for Adults and Children */}
          {renderSelect("adult", "Adults")}
          <div className="hidden md:block border-r-2 border-blue-400 h-14"></div>
          <div className="md:hidden border-b-2 bg-black w-24 rounded-full shadow-sm"></div>
          {renderSelect("child", "Children")}

          {/* Search Button */}
          <div className="w-full md:w-auto">
            <button className="flex items-center justify-center gap-3 w-full md:w-32 h-12 bg-blue-400 text-white font-medium rounded-lg shadow-md hover:bg-blue-800 active:bg-red-200">
              <img className="w-6" src="/image/loupe.png" alt="search icon" />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
