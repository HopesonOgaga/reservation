import React from "react";

export default function Footer() {
  return (
    <section className="bg-sky-900 w-full h-full mt-6 py-6">
      <div className="flex flex-col md:flex-row md:justify-around md:gap-6 gap-8 w-full px-4">
        <div>
          <p className="text-sky-500 uppercase font-semibold text-2xl md:text-3xl">
            hopeson
          </p>
        </div>
        
        <div>
          <p className="text-gray-50 font-semibold text-xl capitalize">
            useful links
          </p>
          <ul className="flex flex-col gap-4 mt-4">
            {["explore", "reservation", "night life", "dining", "reviews"].map(
              (item) => (
                <li key={item} className="text-gray-50 text-sm capitalize hover:text-sky-300">
                  <a href="www" target="_blank">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-gray-50 uppercase font-semibold text-lg">
              newsletter
            </p>
            <p className="text-gray-50 text-sm capitalize">
              Subscribe to our email newsletter to receive updates and news.
            </p>
          </div>
          <div>
            <form>
              <label htmlFor="newsletter" className="sr-only">Email</label>
              <input
                type="email"
                id="newsletter"
                placeholder="Enter your email"
                className="w-full md:w-64 h-11 px-4 rounded-md shadow-sm border-none focus:ring-2 focus:ring-sky-300"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
