import types from './types.js';

export function updateCurrentLocation(newCurrentLocation) {
    return {
        type: types.UPDATE_CURRENT_LOCATION, 
        currentLocation: newCurrentLocation
    }
};


export function updateDestLocation(destLocation) {
    return {
        type: types.UPDATE_DEST_LOCATION,
        destinationLocation: destLocation
    };
}