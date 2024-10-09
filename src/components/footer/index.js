import React from "react";

export default function Footer() {
  return (
    <section className="bg-sky-900 w-full md:h-[35vh] h-full">
      <div className="flex md:flex-row md:justify-around py-6 flex-col gap-6 pl-4 pr-4 w-full   ">
        <div>
          <p className="text-sky-500 uppercase font-semibold text-2xl">
            hopeson
          </p>
        </div>
        <div className="">
          <p className="text-gray-50 font-semibold text-xl   capitalize ">
            useful links
          </p>
          <ul className="  flex flex-col gap-4 mt-4">
            {["explore", "reservation", "night life", "dining", "reviews"].map(
              (item) => (
                <React.Fragment key={item}>
                  <li className=" text-gray-50 text-sm  w-full h-full capitalize hover:text-sky-300 active:text-red-200 ">
                    <a href="www" target="_blank">
                      {item}
                    </a>
                  </li>
                </React.Fragment>
              )
            )}
          </ul>
        </div>
        <div className="flex flex-col gap-6 ">
          <div>
          <p className="text-gray-50 uppercase font-semibold text-lg">newsletter</p>
          <p className="text-gray-50 text-sm  capitalize ">Subscribe to our email newsletter to receive updates and news.</p>
          </div>
          <div>
            <form>
              <label for="newsletter" className=""></label>
              <input type="email" className="w-64 h-11 rounded-md shadow-sm border-none active:border-none " ></input>
            </form>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
