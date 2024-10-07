import React from "react";

export default function ServiceProps({ title, image }) {
  return (
    <section className="">
      <div className="">
        <div className="flex flex-col items-center ">
          <img className="w-12 mb-2 cursor-pointer" src={image} alt={title} />
          <p className="text-sm font-normal capitalize hover:text-sky-400 hover:cursor-pointer">
            {title}
          </p>
        </div>
      </div>
    </section>
  );
}
