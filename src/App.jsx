import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import Flights from "./pages/Flights/Flights";
import Hotels from "./pages/Hotels/Hotels";
import Buses from "./pages/Buses/Buses";
import Trains from "./pages/Trains/Trains";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import FlightsDetailProvider from "./context/FlightsDetailProvider";
import FlightSearchPage from "./pages/Flights/FlightsSearchPage/FlightSearchPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <FlightsDetailProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Flights />} />
              <Route path="/flights" element={<Flights />} />
              <Route
                path="/flights/:searchQuery"
                element={<FlightSearchPage />}
              />

              <Route path="/trains" element={<Trains />} />
              <Route path="/buses" element={<Buses />} />
              <Route path="/hotels" element={<Hotels />} />
            </Route>
          </Routes>
        </FlightsDetailProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
