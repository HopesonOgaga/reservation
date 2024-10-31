import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header";
import Service from "./components/home/servicesection/services";
import DateInfo from "./components/home/datedata";
import OurHotels from "./components/home/hotels";
import Footer from "./components/footer";
import Availability from "./components/reservation/availability";
import Reservation from "./components/reservation/checkout";
import Payment from "./components/reservation/payment";
import MyCalendar from "./ui/calendar/calendar";
import { events } from "./ui/calendar/indes";
import DataInfo from "./components/reservation/info";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="header" element={<Header></Header>}></Route>
      <Route path="service" element={<Service></Service>}></Route>
      <Route path="date" element={<DateInfo />}></Route>
      <Route path="hotel" element={<OurHotels />}></Route>
      <Route path="footer" element={<Footer></Footer>}></Route>
      <Route path="available" element={<Availability></Availability>}></Route>
      <Route path="reserve" element={<Reservation></Reservation>}></Route>
      <Route path="payment" element ={<Payment></Payment>}></Route>
      <Route path="calendar" element={<MyCalendar events={events} />}></Route>
      <Route path="data" element={<DataInfo></DataInfo>}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}> </RouterProvider>;
}

export default App;
