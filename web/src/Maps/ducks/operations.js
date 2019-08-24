import axios from 'axios';

import { updateCurrentLocation, updateDestLocation } from './actions';

const continuouslyUpdateCurrentLocation = () => {
    return dispatch => {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.watchPosition(pos => {
                let { latitude, longitude } = pos.coords;
                dispatch(updateCurrentLocation({
                    lat: latitude,
                    lng: longitude
                }));

            }, (err => {
                console.error(err); 
            }));
        } else {
            throw Error("can't get current location");
        }
    }
}


const getDestLocationAndUpdate = (currentLocation) => {
    return dispatch => {
        const RANDOM_POINT_API_URL = `http://localhost:5001/getRandomPoint/${currentLocation.lat},${currentLocation.lng}`;
        try {
            axios.get(RANDOM_POINT_API_URL).then((res) => {
                return res.data;
            }).then((point) => {
                return dispatch(updateDestLocation(point));
            });
        } catch(err) {
            console.error(err);
        }
    }
}

export default {
    continuouslyUpdateCurrentLocation,
    getDestLocationAndUpdate
}