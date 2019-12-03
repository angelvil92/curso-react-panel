import * as ActionTypes from './actions-types';

// Reducer
export default function contador(state = 0, action) {
    switch(action.type) {
        case ActionTypes.INCREMENT:
            return state + 1;
        case ActionTypes.DECREMENT:
            return state - 1
        case ActionTypes.RESET:
            return action.payload;
        default:
            return state;
    }
}