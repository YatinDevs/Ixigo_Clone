import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import Flights from "./pages/Flights/Flights";
import Buses from "./pages/Buses/Buses";
import Trains from "./pages/Trains/Trains";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import FlightsDetailProvider from "./context/FlightsDetailProvider";
import FlightSearchPage from "./pages/Flights/FlightsSearchPage/FlightSearchPage";
import FlightBookingPage from "./pages/Flights/FlightBookingPage/FlightBookingPage";
import TrainSearchPage from "./pages/Trains/TrainSearchPage/TrainSearchPage";
import Hotels from "./pages/Hotels/Hotels";
import BusSearchPage from "./pages/Buses/BusSearchPage/BusSearchPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <FlightsDetailProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Flights />} />
              <Route path="/flight" element={<Flights />} />
              <Route
                path="/flight/:searchQuery"
                element={<FlightSearchPage />}
              />
              <Route
                path="/flight/:searchQuery/:bookingInfo"
                element={<FlightBookingPage />}
              />

              <Route path="/trains" element={<Trains />} />
              <Route
                path="/trains/searchTrains/:departureDate"
                element={<TrainSearchPage />}
              />
              <Route path="/buses" element={<Buses />} />
              <Route
                path="/buses/searchBus/:departureDate"
                element={<BusSearchPage />}
              />
              <Route path="/hotels" element={<Hotels />} />
            </Route>
          </Routes>
        </FlightsDetailProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
