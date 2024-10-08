import React, { useState } from "react";
import { serviceItem } from "../../../context/data";
import ServiceProps from "./props";
export default function Service() {
  const [service, setService] = useState(serviceItem);
  return (
    <section>
      <div>
        <div><p className="font-bold text-2xl capitalize text-center">our services</p></div>
        <div className="grid grid-cols-3 gap-20">
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
