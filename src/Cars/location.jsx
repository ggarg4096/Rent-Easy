import React from "react";

const LocationButton = ({ onClick }) => {
  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
        // You can do more with the coordinates here, like updating state
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  };

  return <button onClick={handleClick}>Get Current Location</button>;
};

export default LocationButton;
