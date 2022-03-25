import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Badge, Button, CardActionArea, CardActions, Grid, Paper, Tooltip } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import { Typography } from '@material-ui/core';
import { red } from '@mui/material/colors';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './TripCard.css';
import TripContext from '../../context/TripContext';
import { useNavigate } from 'react-router-dom';
import BookTripModal from '../BookTripModal/BookTripModal';

const TripCard = (props) => {

    const { setSelectedTrip } = useContext(TripContext);
    const navigate = useNavigate()

    function handleClick(){
        setSelectedTrip(props.trip);
        // navigate("/details")
    }


    //TODO: fix rating issue in back end and then replace hardcoded value with variable
    return ( 
        <Box boxShadow={7} marginBottom={2} borderRadius={40} sx={{ maxWidth: 800 }} onClick={handleClick}>

                <CardHeader
                    avatar={<Avatar sx={{ bgcolor: props.trip.driver.avatar_color }} aria-label="driver">{props.trip.driver.first_name[0].toUpperCase()}</Avatar>}
                    action={<BookTripModal trip={props.trip} seats={props.availableSeats}/>}
                    title={<Box display={'flex'} alignItems={'center'} mb={0}>{props.trip.driver.first_name}</Box>}
                    subheader={<Box
                        display={'flex'}
                        alignItems={'center'}
                        mb={1}
                    >
                        {props.trip.driver_rating && <Rating name={'rating'} value={props.trip.driver_rating} size={'small'} precision={0.1} readOnly/>}
                        <Typography variant={'body2'}>
                        {props.trip.driver_rating} 
                        </Typography>
                        {!props.trip.driver_rating && <Tooltip title={`${props.trip.driver.first_name} is new to PoolParty and has no reviews yet`}><Badge
                            sx={{ margin: 2 }}
                            color="error"
                            badgeContent="Newbie!"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                         ></Badge></Tooltip>}
                    </Box>}
                />

                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={9}>
                                <Box display={'flex'} alignItems="center" justifyContent="center">
                                    <Typography variant="h6">{props.trip.departure_city}</Typography>
                                    <ArrowForwardIcon variant="h6"/>
                                    <Typography variant="h6">{props.trip.arrival_city}</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography gutterBottom component="div" style={{color: 'green'}} marginBottom={0}>
                                    ${props.trip.seat_price}
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Box display={'flex'} alignItems={'center'}>
                                    <Typography gutterBottom component="div" style={{color: 'gray'}}>
                                        {props.trip.departure_date}
                                    </Typography>
                                    <Typography gutterBottom component="div" style={{color: 'gray'}}>
                                        , {props.trip.departure_time}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Box display={'flex'}>
                            <Typography>{props.availableSeats}</Typography>
                                <AirlineSeatReclineNormalIcon fontSize='medium' style={{color: 'gray'}}/>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>


        </Box>

    );
}
 
export default TripCard;

