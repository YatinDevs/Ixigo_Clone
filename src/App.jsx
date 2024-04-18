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
import TrainBookPage from "./pages/Trains/TrainBookPage/TrainBookPage";
import BusesBookPage from "./pages/Buses/BusBookPage/BusesBookPage";
import HotelSearchPage from "./pages/Hotels/HotelSearchPage/HotelSearchPage";
import HotelDetailsPage from "./pages/Hotels/HotelDetailsPage/HotelDetailsPage";
import HotelPaymentPage from "./pages/Hotels/HotelPaymentPage/HotelPaymentPage";
import HotelRoomConfim from "./pages/Hotels/HotelPaymentPage/HotelRoomConfim";

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
              <Route path="/trains/booking" element={<TrainBookPage />} />
              <Route path="/buses" element={<Buses />} />
              <Route
                path="/buses/searchBus/:departureDate"
                element={<BusSearchPage />}
              />
              <Route path="/buses/booking" element={<BusesBookPage />} />

              <Route path="/hotels" element={<Hotels />} />
              <Route path="/hotels/:hotelQuery" element={<HotelSearchPage />} />
              <Route
                path="/hotels/:hotelQuery/:hotelId"
                element={<HotelDetailsPage />}
              />
              <Route
                path="/hotels/:hotelQuery/:hotelId/:roomDetails"
                element={<HotelRoomConfim />}
              />
              <Route
                path="/hotels/:hotelQuery/:hotelId/:roomDetails/:priceDetails"
                element={<HotelPaymentPage />}
              />
            </Route>
          </Routes>
        </FlightsDetailProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
