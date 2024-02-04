import React, { createContext, useContext, useReducer } from "react";

// Created Context
export const FlightContext = createContext();

// Context Provider
export default function FlightContextProvider({ children }) {
  const [flightsDetails, dipatchFlightsDetails] = useReducer(
    reducerFlights,
    initialState
  );

  return <FlightContext.Provider>{children}</FlightContext.Provider>;
}

// exporting to UseContext
export function useFlightContext() {
  return useContext(FlightContext);
}
