import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./carDetails.css";
import verna from "./img/car1.jpg";
import swift from "./img/swift.jpeg";
import scorpio from "./img/scorpio.webp";
import creta from "./img/creta.jpg";
import i20 from "./img/i20.webp";
import honda from "./img/honda.jpg";
import baleno from "./img/baleno.png";
import ertiga from "./img/Ertiga.webp";
import PayPal from "./components/PayPal";
const CarDetailPage = () => {
  const { id } = useParams();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const [checkout, setCheckOut] = useState(false);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const cars = [
    {
      id: 1,
      name: "Verna",
      imageUrl: verna,
      price: 1500,
      transmission: "Automatic",
      fuelType: "Diesel",
      seats: "5 seater",
      specifications: [],
    },
    {
      id: 2,
      name: "Swift",
      imageUrl: swift,
      price: 2000,
      transmission: "Automatic",
      fuelType: "Petrol",
      seats: "5 seater",
      specifications: [],
    },
    {
      id: 3,
      name: "Scorpio",
      imageUrl: scorpio,
      price: 4000,
      transmission: "Manual",
      fuelType: "Diesel",
      seats: "7 seater",
      specifications: [],
    },
    {
      id: 4,
      name: "Creta",
      imageUrl: creta,
      price: 3000,
      transmission: "Manual",
      fuelType: "Diesel",
      seats: "7 seater",
      specifications: [],
    },
    {
      id: 5,
      name: "i20",
      imageUrl: i20,
      price: 1000,
      transmission: "Automatic",
      fuelType: "Petrol",
      seats: "5 seater",
      specifications: [],
    },
    {
      id: 6,
      name: "Honda city",
      imageUrl: honda,
      price: 1000,
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "5 seater",
      specifications: [],
    },
    {
      id: 7,
      name: "Baleno",
      imageUrl: baleno,
      price: 1500,
      transmission: "Manual",
      fuelType: "Diesel",
      seats: "5 seater",
      specifications: [],
    },
    {
      id: 8,
      name: "ertiga",
      imageUrl: ertiga,
      price: 2000,
      transmission: "Automatic",
      fuelType: "Diesel",
      seats: "7 seater",
      specifications: [],
    },
  ];

  const carDetail = cars.find((c) => c.id === parseInt(id));
  const calculateTotalCost = (startDate, endDate, price) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const totalCost = diffDays * price;
    console.log(totalCost);
    return `${totalCost.toFixed(2)}`;
  };
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchCityName(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          setError("Unable to retrieve your location");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const fetchCityName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=a250838bf4194de68c45d403d065147c`
      );
      const data = await response.json();
      const city =
        data.results[0].components.city ||
        data.results[0].components.town ||
        "Unknown location";
      setLocation(city);
    } catch (error) {
      console.error("Error fetching city name:", error);
      setError("Unable to fetch city name");
    }
  };

  useEffect(() => {
    if (startDate && endDate && carDetail) {
      const calculatedTotalCost = calculateTotalCost(
        startDate,
        endDate,
        carDetail.price
      );
      console.log("Calculated Total Cost:", calculatedTotalCost);
      setTotalCost(calculatedTotalCost);
    }
  }, [startDate, endDate, carDetail.price]);

  if (!carDetail) {
    return <div>Car not found</div>;
  }

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const getMinEndDate = () => {
    if (!startDate) return getTodayDate();
    const start = new Date(startDate);
    start.setDate(start.getDate() + 1);
    return start.toISOString().split("T")[0];
  };

  return (
    <div>
      <h2>
        {carDetail.name}, Price: Rs.{carDetail.price}/day
      </h2>
      <div className="car-detail">
        <div className="car-image-container">
          <img src={carDetail.imageUrl} alt={carDetail.name} />
        </div>
        <div className="booking-details-container">
          <p style={{ fontSize: "30px" }}>
            <strong>
              {carDetail.name}, Price: Rs. {carDetail.price}/day
            </strong>
          </p>
          <label htmlFor="startDate" style={{ fontSize: "30px" }}>
            Start Date & End Date:
          </label>
          <input
            type="date"
            style={{
              width: "29%",
              marginRight: "20px",
              background: "#93e3a8",
              fontSize: "18px",
            }}
            className="startDate"
            id="startDate"
            min={getTodayDate()}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            name="startDate"
          />
          <input
            type="date"
            className="endDate"
            id="endDate"
            min={getMinEndDate()}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{ width: "29%", background: "#93e3a8", fontSize: "18px" }}
            name="endDate"
          />
          <p>Total Cost: {totalCost}</p>
          <label htmlFor="destination" style={{ fontSize: "30px" }}>
            Where to pick-up the car?
          </label>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              width: "23%",
            }}
          >
            <input
              type="text"
              style={{
                width: "100%",
                background: "#93e3a8",
                padding: "9px 10px",
              }}
              name="PickUp"
              value={location || ""}
              readOnly
            />
            <button
              type="button"
              onClick={getLocation}
              style={{
                position: "absolute",
                left: "100px",
                top: "0",
                height: "50%",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              📍
            </button>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
                    
          <br />
          <div className="App">
            {checkout ? (
              <PayPal />
            ) : (
              <button
                onClick={() => {
                  setCheckOut(true);
                }}
                type="submit"
                style={{
                  marginTop: "15px",
                  padding: "10px 20px",
                  backgroundColor: "#93e3a8",
                  fontSize: "20px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Checkout
              </button>
            )}
          </div>
        </div>
        <div className="general-info">
          <h2>Fare Details</h2>
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  {/* <th>Header 1</th>
                  <th>Header 2</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Base fare</td>
                  <td>Rs.{carDetail.price}/day</td>
                </tr>
                <tr>
                  <td>Doorstep delivery & pickup</td>
                  <td>Rs. 500</td>
                </tr>
                <tr>
                  <td>Insurance & GST</td>
                  <td>Included</td>
                </tr>
                <tr>
                  <td>Refundable security deposit</td>
                  <td>Rs. 2000</td>
                </tr>
                <tr>
                  <td>Fuel</td>
                  <td>Excluded</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>{parseFloat(totalCost) + 2000 + 500}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="user-general-info">
        <table className="user-info-table">
          <thead className="user-info-header">
            <tr>
              <th colSpan="2">IMPORTANT POINTS TO REMEMBER</th>
            </tr>
          </thead>
          <tbody className="user-info-body">
            <tr>
              <td>CHANGE IN PRICING PLAN:</td>
              <td>
                The pricing plan (16 kms/hr, without fuel) cannot be changed
                after the booking is made
              </td>
            </tr>
            <tr>
              <td>FUEL:</td>
              <td>
                In case you are returning the car at a lower fuel level than
                what was received, we will charge a flat Rs 500 refuelling
                service charge + actual fuel cost to get the tank to the same
                level as what was received
              </td>
            </tr>
            <tr>
              <td>TOLLS, PARKING, INTER-STATE TAXES</td>
              <td>To be paid by you</td>
            </tr>
            <tr>
              <td>ID VERIFICATION:</td>
              <td>
                Please keep your original Driving License handy. While
                delivering the car to you, our executive will verify your
                original Driving License and ID proof (same as the ones whose
                details were provided while making the booking). This
                verification is mandatory. In the unfortunate case where you
                cannot show these documents, we will not be able to handover the
                car to you, and it will be treated as a late cancellation (100%
                of the fare would be payable). Driving license printed on A4
                sheet of paper (original or otherwise) will not be considered as
                a valid document.
              </td>
            </tr>
            <tr>
              <td>PRE-HANDOVER INSPECTION:</td>
              <td>
                Please inspect the car (including the fuel gauge and odometer)
                thoroughly before approving the checklist.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CarDetailPage;
