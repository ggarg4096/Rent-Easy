import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./bikeDetails.css";
import PayPal from "./components/PayPal";
import honda from "./img/hondaSP.webp";
import royalenf from "./img/royalenf.webp";
import hero from "./img/hero.webp";
import yamaha from "./img/Yamaha.webp";
import tvs from "./img/tvs.webp";
import bmw from "./img/bmw.webp";
import ducati from "./img/ducati.webp";
import bajaja from "./img/bajaj.webp";

const BikeDetailPage = () => {
  const { id } = useParams();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const [checkout, setCheckOut] = useState(false);
  const bikes = [
    {
      id: 1,
      name: "Honda",
      imageUrl: honda,
      price: 2500,
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "2 seater",
      specifications: [],
    },
    {
      id: 2,
      name: "Royal Enfield",
      imageUrl: royalenf,
      price: 3000,
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "2 seater",
      specifications: [],
    },
    {
      id: 3,
      name: "Hero",
      imageUrl: hero,
      price: 2999,
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "2 seater",
      specifications: [],
    },
    {
      id: 4,
      name: "Yamaha",
      imageUrl: yamaha,
      price: 2500,
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "2 seater",
      specifications: [],
    },
    {
      id: 5,
      name: "TVS",
      imageUrl: tvs,
      price: 2900,
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "2 seater",
      specifications: [],
    },
    {
      id: 6,
      name: "BMW",
      imageUrl: bmw,
      price: 5000,
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "1 seater",
      specifications: [],
    },
    {
      id: 7,
      name: "Ducati",
      imageUrl: ducati,
      price: 2000,
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "2 seater",
      specifications: [],
    },
    {
      id: 8,
      name: "Bajaj",
      imageUrl: bajaja,
      price: 3000,
      transmission: "Manual",
      fuelType: "Petrol",
      seats: "2 seater",
      specifications: [],
    },
  ];

  const bikeDetail = bikes.find((c) => c.id === parseInt(id));

  const calculateTotalCost = (startDate, endDate, price) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const totalCost = diffDays * price;
    console.log(totalCost);
    return `${totalCost.toFixed(2)}`;
  };
  useEffect(() => {
    if (startDate && endDate && bikeDetail) {
      const calculatedTotalCost = calculateTotalCost(
        startDate,
        endDate,
        bikeDetail.price
      );
      console.log("Calculated Total Cost:", calculatedTotalCost);
      setTotalCost(calculatedTotalCost);
    }
  }, [startDate, endDate, bikeDetail.price]);

  if (!bikeDetail) {
    return <div>Bike not found</div>;
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
        {bikeDetail.name}, Price: Rs. {bikeDetail.price}/day
      </h2>
      <div className="bike-detail">
        <div className="bike-image-container">
          <img src={bikeDetail.imageUrl} alt={bikeDetail.name} />
        </div>
        <div className="booking-details-container">
          <p style={{ fontSize: "30px" }}>
            <strong>
              {bikeDetail.name}, Price: Rs. {bikeDetail.price}/day
            </strong>
          </p>
          <h3>Rental Details</h3>

          <label htmlFor="startDate" style={{ fontSize: "30px" }}>
            Start Date & End Date:
          </label>
          <input
            type="date"
            style={{
              width: "23%",
              marginRight: "20px",
              background: "#93e3a8",
            }}
            min={getTodayDate()}
            value={startDate}
            id="startDate"
            name="startDate"
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            id="endDate"
            min={getMinEndDate()}
            value={endDate}
            style={{ width: "23%", background: "#93e3a8" }}
            name="endDate"
            onChange={(e) => setEndDate(e.target.value)}
          />
          <p>Total Cost: {totalCost}</p>
          <label htmlFor="destination" style={{ fontSize: "30px" }}>
            Where to pick-up the bike?
          </label>
          <input
            type="text"
            style={{ width: "18%", background: "#93e3a8" }}
            name="PickUp"
          />
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
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Base fare</td>
                  <td>Rs.{bikeDetail.price}/day</td>
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

export default BikeDetailPage;
