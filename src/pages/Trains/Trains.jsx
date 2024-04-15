import React, { useState } from "react";
import dayjs from "dayjs";
import HeroBannerTrain from "./TrainPage/HeroBanner/HeroBannerTrain";
import TrainPartners from "./TrainPage/TrainPartners/TrainPartners";
import { useNavigate } from "react-router-dom";

function Trains() {
  const [source, setSource] = useState("Kalyan Junction");
  const [destination, setDestination] = useState("Pune Junction");
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

  const trainProp = {
    departureDate,
    source,
    destination,
    handleDepartureDate,
    handleSource,
    handleDestination,
    handleSwap,
  };
  const navigate = useNavigate();

  console.log(departureDate, source, destination);

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
      const dateParams = dayjs(departureDate).format(
        "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
      );

      navigate(`searchTrains/${dateParams}`, {
        state: { source, destination },
      });
    }
  };
  return (
    <div className="mt-16">
      <HeroBannerTrain trainProp={trainProp} onSubmitForm={onSubmitForm} />
      <TrainPartners />
    </div>
  );
}

export default Trains;
