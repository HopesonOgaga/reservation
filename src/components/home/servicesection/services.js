import React, { useState } from "react";
import { serviceItem } from "../../../context/data";
import ServiceProps from "./props";
export default function Service() {
  const [service, setService] = useState(serviceItem);
  return (
    <section>
      <div>
        <div><p className="font-semibold text-2xl capitalize text-center  text-blue-400 ">our services</p></div>
        <div className="grid grid-cols-1 mt-6 md:grid-cols-3 gap-20">
          {service.map((serviceui) => {
            console.log(serviceui);
            return (
              <ServiceProps 
                image={serviceui.image}
                title={serviceui.title}
              ></ServiceProps>
            );
          })}
        </div>
      </div>
    </section>
  );
}
