import React, { useState } from "react";

const TripSelectionButton = ({ tripType, selectedTrip, onSelect }) => {
  const isSelected = selectedTrip === tripType;

  return (
    <button
      className={`flex items-center relative transition-all min-h-[40px] py-2 border rounded-full px-8 ${
        isSelected
          ? "bg-orange-50 text-orange-400 border border-orange-400 "
          : "text-selection-outline border-selection-outline hover:bg-selection-over hover:bg-orange-50 hover:text-orange-400 hover:border-orange-400"
      }`}
      onClick={() => onSelect(tripType)}
    >
      {tripType}
    </button>
  );
};

const TripSelection = () => {
  const [selectedTrip, setSelectedTrip] = useState("One Way");

  const handleTripSelect = (tripType) => {
    setSelectedTrip(tripType);
  };

  return (
    <div className="flex gap-2">
      <TripSelectionButton
        tripType="One Way"
        selectedTrip={selectedTrip}
        onSelect={handleTripSelect}
      />
      <TripSelectionButton
        tripType="Round Trip"
        selectedTrip={selectedTrip}
        onSelect={handleTripSelect}
      />
    </div>
  );
};

export default TripSelection;
