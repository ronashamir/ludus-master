import types from './types.js';

const initialState = {
    isModalOpen: false
}

export default function goalModalReducers(state=initialState, action) {
    switch (action.type) {
        case types.UPDATE_IS_MODAL_OPEN:
            return {
                ...state,
                isModalOpen: action.isModalOpen
            }
            default:
                return state;
    }
}