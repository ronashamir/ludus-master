import { connect } from 'react-redux';
import GoalModalComponent from './GoalModalComponent.jsx';
import goalModalOperations from './ducks/operations';

const mapStateToProps = state => ({
    isGoalModalOpen: state.goalModal.isModalOpen,
    currentLocation: state.mapComponent.currentLocation,
    goalLocation: state.mapComponent.destinationLocation
})

const mapDispatchToProps = dispatch => ({
    checkDistanceAndUpdate: (currentLocation, goalLocation) => dispatch(goalModalOperations.checkDistanceAndUpdate(currentLocation, goalLocation)),
    updateIsModalOpen: isModalOpen => dispatch(goalModalOperations.updateModalState(isModalOpen))
})

const GoalModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GoalModalComponent);

export default GoalModalContainer;