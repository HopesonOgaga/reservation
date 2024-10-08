import React, { useState } from "react";

// Array with adult numbers
const Number = [1, 2, 3, 4, 5];

export default function DateInfo() {
  const [adult, setAdult] = useState(Number);

  return (
    <section>
      <div>
        <div>
          <label htmlFor="adult"></label>
          <select className="" id="adult" name="adult">
            {/* Default option */}
            <option value="" className="fonte-semibold text-lg capitalize">Select Adult</option>
            {/* Dynamically create options from the adult array */}
            {adult.map((adultValue, index) => (
              <option key={index} value={adultValue} className="capitalize font-light ">
                {adultValue} <p >adults</p>
              </option>
            ))}
          </select>
        </div>
        <div>
            <label for=""></label>
             <select className="" id="child" name="child">
                <option value="" className="fonte-semibold text-lg capitalize">Select Children</option>
                  {/* Dynamically create options from the adult array */}
                {adult.map((childvalue, index)=>(
                    <option key={index} value={childvalue} className="capitalize font-light ">
                        {childvalue} <p>child</p>
                    </option>
                ))}
             </select>
        </div>
      </div>
    </section>
  );
}
