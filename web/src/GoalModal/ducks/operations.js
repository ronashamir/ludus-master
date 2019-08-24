import axios from 'axios';

import { updateIsModalOpen } from "./actions";

const updateModalState = (modalStatus) => { 
    return dispatch => {
        dispatch(updateIsModalOpen(modalStatus));
    }
}

const checkDistanceAndUpdate = (currentLocation, goalLocation) => { 
    return disptach => {
    const DISTANCE_API_URL = `http://localhost:5001/distance/${currentLocation.lat},${currentLocation.lng}/
                        ${goalLocation.lat},${goalLocation.lng}`;
    try {
        axios.get(DISTANCE_API_URL).then((res) => {  
            return res.data;
        }).then((distance) => { 
            if ( distance <= 0.001 ) {
                disptach(updateIsModalOpen(true)) 
            }
        });
    } catch(err) { 
        console.error(err); 
    }
}
}

export default {
    updateModalState,
    checkDistanceAndUpdate
};