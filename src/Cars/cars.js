import React from "react";
import { Link } from "react-router-dom";

import verna from "./img/car1.jpg";
import swift from "./img/swift.jpeg";
import scorpio from "./img/scorpio.webp";
import creta from "./img/creta.jpg";
import i20 from "./img/i20.webp";
import honda from "./img/honda.jpg";
import baleno from "./img/baleno.png";
import ertiga from "./img/Ertiga.webp";

import fueltype from "./icons/fuelType.svg";
import transmission from "./icons/transmission.svg";
import seater from "./icons/seats.svg";

import "./cars.css";

const CarsPage = () => {
  const cars = [
    {
      id: 1,
      name: "Verna",
      imageUrl: verna,
      price: "Rs.1500/day",
      transmission: "Automatic",
      fuelType: "Diesel",
      seats: "5 seater",
      specifications: [],
    },
    {
      id: 2,
      name: "Swift",
      imageUrl: swift,
      price: "Rs.2000/day",
      transmission: "Automatic",
      fuelType: "Petrol",
      seats: "5 seater",
      specifications: [],
    },
    {
      id: 3,
      name: "Scorpio",
      imageUrl: scorpio,
      price: "Rs.4000/day",
      transmission: "Manual",
      fuelType: "Diesel",
      seats: "7 seater",
      specifications: [],
    },
    {
      id: 4,
      name: "Creta",
      imageUrl: creta,
      price: "Rs.3000/day",
      transmission: "Manual",
      fuelType: "Diesel",
      seats: "7 seater",
      specifications: [],
    },
    {
      id: 5,
      name: "i20",
      imageUrl: i20,
      price: "Rs.1000/day",
      transmission: "Automatic",
      fuelType: "Petrol",
      seats: "5 seater",
      specifications: [],
    },
    {
      id: 6,
      name: "Honda city",
      imageUrl: honda,
      price: "Rs.1000/day",
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "5 seater",
      specifications: [],
    },
    {
      id: 7,
      name: "Baleno",
      imageUrl: baleno,
      price: "Rs.1500/day",
      transmission: "Manual",
      fuelType: "Diesel",
      seats: "5 seater",
      specifications: [],
    },
    {
      id: 8,
      name: "ertiga",
      imageUrl: ertiga,
      price: "Rs.2000/day",
      transmission: "Automatic",
      fuelType: "Diesel",
      seats: "7 seater",
      specifications: [],
    },
  ];

  return (
    <div>
      <h2>Cars Available for Rent</h2>
      <div className="car-list">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.imageUrl} alt={car.name} className="car-img" />
            <h3>{car.name}</h3>
            <div className="car-type">
              <div className="car-type-info">
                <img src={fueltype} className="car-info-img"></img>
                <p>{car.fuelType}</p>
              </div>

              <div className="car-type-info">
                <img src={transmission} className="car-info-img"></img>
                <p>{car.transmission}</p>
              </div>

              <div className="car-type-info">
                <img src={seater} className="car-info-img"></img>
                <p>{car.seats}</p>
              </div>
            </div>
            <p>Price: {car.price}</p>
            <Link to={`/cars/${car.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsPage;
