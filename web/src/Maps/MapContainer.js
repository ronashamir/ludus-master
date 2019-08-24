import {connect} from 'react-redux';
import MapComponent from './MapComponent.jsx';
import mapOperations from './ducks/operations.js';

const mapStateToProps = state => ({
    currentLocation: state.mapComponent.currentLocation,
    goalLocation: state.mapComponent.destinationLocation
})

const mapDispatchToProps = dispatch => ({
    askForCurrentLocation: () => dispatch(mapOperations.continuouslyUpdateCurrentLocation()),
    askFroDestLocation: (currentLocation) => dispatch(mapOperations.getDestLocationAndUpdate(currentLocation)), 
})

const MapContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MapComponent);

export default MapContainer;
