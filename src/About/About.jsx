import React from "react";
import "./About.css";
import person1 from "./person1.jpg";
import person2 from "./person2.jpg";
import person3 from "./person3.jpg";

const About = () => {
  return (
    <div className="about-us-container">
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Welcome to our car and bike purchasing website! We are dedicated to
          providing you with the best selection of vehicles and exceptional
          customer service.
        </p>
        <p>
          Our mission is to make your car and bike buying experience as smooth
          as possible, offering a wide range of vehicles to suit every need and
          budget.
        </p>
        <p>
          Whether you're looking for a sleek sports car, a reliable family SUV,
          or a powerful motorcycle, we've got you covered.
        </p>
        <p>
          Feel free to browse our inventory online or visit our showroom to see
          our vehicles in person. We look forward to helping you find your dream
          ride!
        </p>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-member">
          <img src={person1} alt="Team Member 1" />
          <h3>Gourav Garg</h3>
          <p>CEO</p>
        </div>
        <div className="team-member">
          <img src={person2} alt="Team Member 2" />
          <h3>Eva Aggarwal</h3>
          <p>Sales Manager</p>
        </div>
        <div className="team-member">
          <img src={person3} alt="Team Member 3" />
          <h3>Boomika</h3>
          <p>Founder</p>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <p>
            "The pain itself is important, it will be followed by the education
            system. But I do At such a time they happened that with great labor
            and pain."
          </p>
          <cite>- Gourav Garg</cite>
        </div>
        <div className="testimonial">
          <p>
            "For I will come to the smallest detail, who does not exercise any
            kind of work except that some of it may be useful."
          </p>
          <cite>- Eva Aggarwal</cite>
        </div>
        <div className="testimonial">
          <p>
            "NEVER GIVE UP ON A DREAM JUST BECAUSE OF THE TIME IT WILL TAKE TO
            ACCOMPLISH IT. THE TIME WILL PASS ANYWAY"
          </p>
          <cite>- Bhoomika</cite>
        </div>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Car & Bike Emporium, our mission is to revolutionize the way people
          buy vehicles. We strive to provide a seamless and transparent
          purchasing experience, ensuring that our customers find the perfect
          vehicle to suit their lifestyle and budget.
        </p>
        <p>
          We are committed to offering a diverse selection of high-quality cars
          and bikes, coupled with exceptional customer service and support. Our
          goal is to exceed our customers' expectations at every step of the
          journey, from browsing our inventory to driving off the lot.
        </p>
      </section>
    </div>
  );
};

export default About;
