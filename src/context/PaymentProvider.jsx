import React, { createContext, useContext, useState } from "react";

const PaymentContext = createContext();

function PaymentProvider({ children }) {
  const [bookingFunction, setBookingFunction] = React.useState({});
  const [paymentIsPending, setPaymentIsPending] = React.useState(false);
  const [amount, setAmount] = useState(0);

  const value = {
    bookingFunction,
    setBookingFunction,
    paymentIsPending,
    setPaymentIsPending,
    amount,
    setAmount,
  };

  return (
    <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>
  );
}
export default PaymentProvider;

export const usePaymentContext = () => {
  return useContext(PaymentContext);
};
