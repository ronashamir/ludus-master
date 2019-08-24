import types from './types.js'; 

const initialState = {
    currentLocation: null,
    destinationLocation: null
}

export default function mapComponentReducers(state=initialState, action) {
    switch(action.type) {
        case types.UPDATE_CURRENT_LOCATION:
            return {
                ...state,
                currentLocation: action.currentLocation
            }
        case types.UPDATE_DEST_LOCATION:
            return {
                ...state,
                destinationLocation: action.destinationLocation
            }
        default:
            return state;
    }
}