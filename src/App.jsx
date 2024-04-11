import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import Flights from "./pages/Flights/Flights";
import Hotels from "./pages/Hotels/Hotels";
import Buses from "./pages/Buses/Buses";
import Trains from "./pages/Trains/Trains";
import AuthProvider from "./context/AuthProvider/AuthProvider";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Flights />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/trains" element={<Trains />} />
            <Route path="/buses" element={<Buses />} />
            <Route path="/hotels" element={<Hotels />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
