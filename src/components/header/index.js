import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <section>
       <div className="flex justify-between mt-4">
        <div>
            <p className="text-sky-500 uppercase font-semibold text-2xl">hopeson</p>
        </div>
        <div className="">
                <ul className="flex gap-4 hidden sm:flex-row md:flex ">
                    <li className="text-sm capitalize font-normal hover:text-sky-600 active:text-red-400"> <a href="www"  target="_blank">explore</a></li>
                    <li className="text-sm capitalize font-normal hover:text-sky-600 active:text-red-400"> <a href="www"  target="_blank">reservation</a></li>
                    <li className="text-sm capitalize font-normal hover:text-sky-600 active:text-red-400"> <a href="www"  target="_blank">night life</a></li>
                    <li className="text-sm capitalize font-normal hover:text-sky-600 active:text-red-400"> <a href="www"  target="_blank">dining</a></li>
                    <li className="text-sm capitalize font-normal hover:text-sky-600 active:text-red-400"> <a href="www"  target="_blank">reviews</a></li>
                </ul>
         </div>

        <div>
            <ul className="flex gap-4 h-full w-full items-center ">
                <li className="-py-0 border-2 rounded-full flex justify-center items-center shadow-sm bg-sky-500 w-10 h-10 "><img className="w-6" src="/image/rfind.png" alt="find"></img></li>
                <li><img className="w-6" src="/image/user.png" alt="find"></img></li>
            </ul>
        </div>
        {/* small */}
        <div>
            
        </div>
       </div>
    </section>
  );
}
