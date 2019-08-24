import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'
import GoalModalContainer from '../GoalModal/GoalModalContainer';

const INITIAL_MAP_ZOOM = 15;
const BALL_URL = process.env.PUBLIC_URL + '/ball.png';
const GOAL_URL = process.env.PUBLIC_URL + '/goal.png';

export function MapComponenet({ currentLocation, goalLocation, google , askForCurrentLocation, askFroDestLocation}) {
    if (!currentLocation) {
        askForCurrentLocation();
    }

    if (currentLocation && !goalLocation) {
        askFroDestLocation(currentLocation);
    }
    
    return (
        <Map google={google} zoom={INITIAL_MAP_ZOOM} center={currentLocation}>

            {getBallMarker(currentLocation)}
            {getGoalMarker(goalLocation)}

            {getGoalModal(currentLocation, goalLocation)}

        </Map>
    );
}

function getBallMarker(location) {
    if (!location) {
        return null;
    }
    return <Marker 
        position={location}
        icon={{ url: BALL_URL, scaledSize: { width: 35, height: 35 } }} 
    />
}

function getGoalMarker(location) {
    if (!location) {
        return null
    }
    return <Marker 
        position={location} 
        icon={{ url: GOAL_URL, scaledSize: { width: 60, height: 50 } }}
    />;
}

function getGoalModal(currentLocation, goalLocation) {
    if(currentLocation && goalLocation) {
        return <GoalModalContainer />
    }
}

const GOOGEL_API_KEY = 'AIzaSyCq-71Dt9svSeDNT4G772v7dGmdnlgaREY'
export default GoogleApiWrapper({
    apiKey: (GOOGEL_API_KEY)
})(MapComponenet);