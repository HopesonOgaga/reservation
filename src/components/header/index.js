import React, { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <section>
      <div className="flex justify-between mt-4 mr-6 ml-6">
        <div>
          <p className="text-sky-500 uppercase font-semibold text-2xl">hopeson</p>
        </div>

        <div className="">
          <ul className="flex gap-4 hidden sm:flex-row md:flex">
            {["explore", "reservation", "night life", "dining", "reviews"].map((item) => (
              <li key={item} className="text-sm capitalize font-normal hover:text-sky-600 active:text-red-400">
                <a href="www" target="_blank" rel="noopener noreferrer">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="flex gap-4 h-full w-full items-center hidden md:flex sm:flex-row">
            <li className="-py-0 border-2 rounded-full flex justify-center items-center shadow-sm bg-sky-500 w-10 h-10">
              <img className="w-6" src="/image/rfind.png" alt="find" />
            </li>
            <li>
              <img className="w-6" src="/image/user.png" alt="user profile" />
            </li>
          </ul>
        </div>

        {/* Small Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            <img className="w-10" src={menu ? "/image/menubar.png" : "/image/delete.png"} alt={menu ? "menu" : "close menu"} />
          </button>
        </div>
      </div>

      {/* Small screen menu */}
      {!menu && (
        <div className="mt-4 md:hidden">
          <ul className="flex flex-col w-full h-full items-center text-left gap-6">
            {["explore", "reservation", "night life", "dining", "reviews"].map((item) => (
              <React.Fragment key={item}>
                <li className="text-sm capitalize font-normal hover:text-sky-600 active:text-red-400">
                  <a href="www" target="_blank" rel="noopener noreferrer">{item}</a>
                </li>
                <div className="border border-b-2 bg-black w-32 rounded-full shadow-sm"></div>
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
