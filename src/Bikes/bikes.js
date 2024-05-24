import React from "react";
import { Link } from "react-router-dom";

//Cars imported
import honda from "./img/hondaSP.webp"; // Import the image
import royalenf from "./img/royalenf.webp";
import hero from "./img/hero.webp";
import yamaha from "./img/Yamaha.webp";
import tvs from "./img/tvs.webp";
import bmw from "./img/bmw.webp";
import ducati from "./img/ducati.webp";
import bajaja from "./img/bajaj.webp";

//icons imported
import fueltype from "./icons/fuelType.svg";
import transmission from "./icons/transmission.svg";
import seater from "./icons/seats.svg";

//css imported
import "./bikes.css";

const BikesPage = () => {
  // Placeholder car data
  const bikes = [
    {
      id: 1,
      name: "Honda",
      imageUrl: honda,
      price: "Rs.2500/day",
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "2 seater",
      specifications: [],
    },
    {
      id: 2,
      name: "Royal Enfield",
      imageUrl: royalenf,
      price: "Rs.3000/day",
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "2 seater",
      specifications: [],
    },
    {
      id: 3,
      name: "Hero",
      imageUrl: hero,
      price: "Rs.2999/day",
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "2 seater",
      specifications: [],
    },
    {
      id: 4,
      name: "Yamaha",
      imageUrl: yamaha,
      price: "Rs.2500/day",
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "2 seater",
      specifications: [],
    },
    {
      id: 5,
      name: "TVS",
      imageUrl: tvs,
      price: "Rs.2900/day",
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "2 seater",
      specifications: [],
    },
    {
      id: 6,
      name: "BMW",
      imageUrl: bmw,
      price: "Rs.5000/day",
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "1 seater",
      specifications: [],
    },
    {
      id: 7,
      name: "Ducati",
      imageUrl: ducati,
      price: "Rs.2000/day",
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "2 seater",
      specifications: [],
    },
    {
      id: 8,
      name: "Bajaj",
      imageUrl: bajaja,
      price: "Rs.3000/day",
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "2 seater",
      specifications: [],
    },
  ];

  return (
    <div>
      <h2>Bikes Available for Rent</h2>
      <div className="bike-list">
        {bikes.map((bike) => (
          <div key={bike.id} className="bike-card">
            <img src={bike.imageUrl} alt={bike.name} className="bike-img" />
            <h3>{bike.name}</h3>
            <div className="bike-type">
              <div className="bike-type-info">
                <img src={fueltype} className="bike-info-img"></img>
                <p>{bike.fuelType}</p>
              </div>

              <div className="bike-type-info">
                <img src={transmission} className="bike-info-img"></img>
                <p>{bike.transmission}</p>
              </div>

              <div className="bike-type-info">
                <img src={seater} className="bike-info-img"></img>
                <p>{bike.seats}</p>
              </div>
            </div>
            <p>Price: {bike.price}</p>
            <Link to={`/bikes/${bike.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BikesPage;
