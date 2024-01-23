import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Flights from "./pages/Flights/Flights";
import Hotels from "./pages/Hotels/Hotels";
import Buses from "./pages/Buses/Buses";
import Trains from "./pages/Trains/Trains";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Flights />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/trains" element={<Trains />} />
      <Route path="/buses" element={<Buses />} />
      <Route path="/hotels" element={<Hotels />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
