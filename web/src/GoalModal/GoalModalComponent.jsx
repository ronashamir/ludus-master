import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function GoalModalComponant({
    isGoalModalOpen,
    checkDistanceAndUpdate,
    currentLocation,
    goalLocation
    }) {

    if(currentLocation && goalLocation) {    
        checkDistanceAndUpdate(currentLocation, goalLocation);
    }

    return (
        <div>
            <Dialog
            open={isGoalModalOpen}
            >
                <DialogContent>
                    <DialogTitle>
                        Goal!!
                    </DialogTitle>
                    <DialogContentText>
                        You Arrived less 10 Meters from Destination Point
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    )
    }