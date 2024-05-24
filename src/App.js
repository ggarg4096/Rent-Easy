import React from "react";
import Navbar from "./Navbar/navbar";
import "./App.css";
import Footer from "./Footer/footer";
import CarsPage from "./Cars/cars";
import CarDetailPage from "./Cars/carDetails";
import BikesPage from "./Bikes/bikes";
import BikeDetailPage from "./Bikes/bikeDetails";
import LandingPage from "./LandingPage/carDiscount";
import OverviewPage from "./LandingPage/overview";
import About from "./About/About.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Signup/Signup.jsx";
import Signin from "./Signin/Signin.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/cars/:id" element={<CarDetailPage />} />
        <Route path="/bikes" element={<BikesPage />} />
        <Route path="/bikes/:id" element={<BikeDetailPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function Main() {
  return (
    <>
      <LandingPage />
      <OverviewPage />
    </>
  );
}
export default App;
