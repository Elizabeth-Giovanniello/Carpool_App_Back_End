
import UpcomingTrips from '../../components/UpcomingTrips/UpcomingTrips';
import PersonContext from '../../context/PersonContext';
import TripContext from '../../context/TripContext';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { getAllTripsPath, getPassengersPath } from '../../constants/apiPaths';





const RideHistoryPage = () => {

    const { selectedTrip } = useContext(TripContext);
    const { loadPerson } = useContext(PersonContext);
    const [user, token] = useAuth()



    const [tripPassengers, setTripPassengers] = useState([]);
    const [trips, setTrips] = useState([]);


    
    const getPassengers = async () => {
        try {
            let response = await axios.get(getPassengersPath, {
            headers: {
                Authorization: "Bearer " + token,
            },
            });
            setTripPassengers(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const getAllTrips = async () => {
        try {
            let response = await axios.get(getAllTripsPath, {
            headers: {
                Authorization: "Bearer " + token,
            },
            });
            setTrips(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };


    useEffect(() => {
        getPassengers()
        getAllTrips()
    }, []);



    return ( 
        <UpcomingTrips trips={trips} tripPassengers={tripPassengers}/>
    );
}
 
export default RideHistoryPage;