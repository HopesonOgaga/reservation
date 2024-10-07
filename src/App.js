import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="header" element= {<Header></Header>}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}> </RouterProvider>;
}

export default App;
