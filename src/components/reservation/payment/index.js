import React from "react";
import Header from "../../header";
import Footer from "../../footer";

export default function Payment() {
  return (
    <section>
      <Header />
      <div className="md:ml-6 md:mr-6 border-2 rounded-md shadow-md border-blue-400 pl-6 pr-6 py-6 w-full h-full md:w-[55vw]">
        {/* User Information Form */}
        <form>
          <div className="w-full h-full">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <input
                type="text"
                id="firstname"
                placeholder="Firstname"
                className="placeholder:text-center placeholder:capitalize placeholder:text-gray-300 placeholder:font-semibold w-full md:w-1/2 h-14 rounded-md border-2 border-blue-400 hover:border-blue-400"
                required
              />
              <input
                type="text"
                id="lastname"
                placeholder="Lastname"
                className="placeholder:text-center placeholder:capitalize placeholder:text-gray-300 placeholder:font-semibold w-full md:w-1/2 h-14 rounded-md border-2 border-blue-400 hover:border-blue-400"
                required
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="placeholder:text-center placeholder:capitalize placeholder:text-gray-300 placeholder:font-semibold w-full md:w-1/2 h-14 rounded-md border-2 border-blue-400 hover:border-blue-400"
                required
              />
              <p className="text-gray-400 font-thin text-sm">
                This is the email we will send your confirmation to.
              </p>
            </div>
          </div>
        </form>

        {/* Payment Section */}
        <div>
          <p className="text-2xl mt-6 mb-6 font-semibold capitalize text-black">
            Payment
          </p>
        </div>

        <form>
          <div className="w-full h-full">
            <div className="flex gap-4 mb-4">
              <img
                className="w-12"
                src="/image/payment/Visa.png"
                alt="Visa"
              />
              <img
                className="w-12"
                src="/image/payment/MasterCard.png"
                alt="MasterCard"
              />
              <img
                className="w-12"
                src="/image/payment/Amex.png"
                alt="American Express"
              />
            </div>

            <div className="flex flex-col gap-4 mb-6">
              <input
                type="text"
                id="cardNumber"
                placeholder="Card Number"
                className="placeholder:text-center placeholder:capitalize placeholder:text-gray-300 placeholder:font-semibold w-full md:w-1/2 h-14 rounded-md border-2 border-blue-400 hover:border-blue-400"
                required
              />
              <input
                type="text"
                id="expiry"
                placeholder="Expiration Date (MM/YY)"
                className="placeholder:text-center placeholder:uppercase placeholder:text-gray-300 placeholder:font-semibold w-full md:w-1/2 h-14 rounded-md border-2 border-blue-400 hover:border-blue-400"
                required
              />
            </div>

            <div className="w-full">
           
              <input
                type="text"
                id="cardName"
                placeholder="Name on Card"
                className="placeholder:text-center placeholder:capitalize placeholder:text-gray-300 placeholder:font-semibold w-full md:w-1/2 h-14 rounded-md border-2 border-blue-400 hover:border-blue-400"
                required
              />
            </div>
          </div>
        </form>

        <div>
          <p className="text-sm font-semibold text-gray-400 mt-4 mb-6">
            Check-in after 2:00 pm, Check-out before 12:00 pm. Room 1: Deluxe Rooms.
            Guarantee Policy: Standard Guarantee Policy. Please refer to the hotel's
            terms & conditions for payment arrangements. Cancel Policy: Reservations
            can be canceled for free before 4pm on the day of arrival.
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
}
