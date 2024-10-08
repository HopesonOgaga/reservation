import React, { useState } from "react";

// Array with adult numbers
const Number = [1, 2, 3, 4, 5];

export default function DateInfo() {
  const [adult, setAdult] = useState(Number);

  return (
    <section className="flex justify-center w-full h-full">
      <div className=" w-[60vw] h-[12vh] bg-white rounded-md shadow-md flex flex-col justify-center items-center ">
        <div className="flex justify-around w-full h-full items-center  ">
          <div>
            <label htmlFor="adult"></label>
            <select className="" id="adult" name="adult">
              {/* Default option */}
              <option value="" className="font-semibold text-lg capitalize">
                Select Adult
              </option>
              {/* Dynamically create options from the adult array */}
              {adult.map((adultValue, index) => (
                <option
                  key={index}
                  value={adultValue}
                  className="capitalize font-light "
                >
                  {adultValue} <p>adults</p>
                </option>
              ))}
            </select>
          </div>
          <div className="border border-r-2 border-blue-400 h-14"></div>
          {/*  */}
          <div>
            <label htmlFor="adult"></label>
            <select className="" id="adult" name="adult">
              {/* Default option */}
              <option value="" className="font-semibold text-lg capitalize">
                Select Adult
              </option>
              {/* Dynamically create options from the adult array */}
              {adult.map((adultValue, index) => (
                <option
                  key={index}
                  value={adultValue}
                  className="capitalize font-light "
                >
                  {adultValue} <p>adults</p>
                </option>
              ))}
            </select>
          </div>
          <div className="border border-r-2 border-blue-400 h-14"></div>
          <div>
            <label for=""></label>
            <select className="" id="child" name="child">
              <option value="" className="font-semibold text-lg capitalize">
                Select Children
              </option>
              {/* Dynamically create options from the adult array */}
              {adult.map((childvalue, index) => (
                <option
                  key={index}
                  value={childvalue}
                  className="capitalize font-light "
                >
                  {childvalue} <p>child</p>
                </option>
              ))}
            </select>
          </div>
          <div className="border border-r-2 border-blue-400 h-14"></div>
          <div className="">
            <button className="flex gap-4 p-2 justify-center bg-blue-400 capitalize text-lg text-white font-medium rounded-lg shadow-md w-32 h-12 hover:bg-blue-800 active:bg-red-200"><img className="w-6 " src="/image/loupe.png" alt=""></img>search</button>
          </div>
        </div>
      </div>
    </section>
  );
}
