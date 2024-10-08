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
import ServiceProps from "./components/home/servicesection/props";
import DateInfo from "./components/home/datedata";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="header" element= {<Header></Header>}></Route>
      <Route path="service" element={<Service></Service>}></Route>
      <Route path="date" element ={<DateInfo/>}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}> </RouterProvider>;
}

export default App;
