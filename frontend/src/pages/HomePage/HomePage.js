import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import useAuth from "../../hooks/useAuth";
import TripCard from "../../components/TripCard/TripCard";
import ReviewModal from "../../components/ReviewModal/ReviewModal";
import SearchBar from "../../components/SearchBar/SearchBar";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [trip, setTrip] = useState({driver: {firstName: "John", overallRating: 4.5}, departureDate: "3/14/2022", seatPrice: 20, departureCity: "New York", arrivalCity: "Boston", availableSeats: 3, departureTime: "3:15pm"});
  // const [cars, setCars] = useState([]);

  // useEffect(() => {
  //   const fetchCars = async () => {
  //     try {
  //       let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //       setCars(response.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchCars();
  // }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {/* {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))} */}
        
        {/* <ReviewModal/>
        <SearchBar/> */}
        <TripCard trip={trip}/>
        <TripCard trip={trip}/>
    </div>
  );
};

export default HomePage;
