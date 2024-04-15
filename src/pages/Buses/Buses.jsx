import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import BusHeroBanner from "./BusPage/BusHeroBanner";
import BusOffers from "./BusPage/BusOffers";
import WhyBus from "./BusPage/WhyBus";

function Buses() {
  const [source, setSource] = useState("Mumbai, Maharashtra");
  const [destination, setDestination] = useState("Thane, Maharashtra");
  const [departureDate, setDepartureDate] = useState(dayjs(Date.now()));

  const handleSource = (data) => {
    setSource(data);
  };
  const handleDestination = (data) => {
    setDestination(data);
  };
  const handleDepartureDate = (data) => {
    setDepartureDate(data);
  };

  const handleSwap = () => {
    let temp = source;
    setTimeout(() => {
      setSource(destination);
    }, 0);
    setTimeout(() => {
      setDestination(temp);
    }, 0);
  };
  const busProp = {
    departureDate,
    source,
    destination,
    handleDepartureDate,
    handleSource,
    handleDestination,
    handleSwap,
  };

  console.log(departureDate, source, destination);

  const navigate = useNavigate();

  const onSubmitForm = () => {
    // console.log("clicked");
    if (!source || !destination) {
      errorToast("Please enter both Source and Destination");

      return false;
    } else if (!departureDate) {
      errorToast("Please select a Departure Date");
    } else if (source === destination) {
      errorToast(
        "Source and Destination cannot be the same. Please enter different Junction."
      );
    } else {
      const dayParams = dayjs(departureDate).format(
        "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
      );
      navigate(`searchBus/${dayParams}`, {
        state: { source, destination },
      });
    }
  };

  return (
    <div className="mt-16">
      <BusHeroBanner busProp={busProp} onSubmitForm={onSubmitForm} />
      <BusOffers />
      <WhyBus />
    </div>
  );
}

export default Buses;
