import { fromJS } from 'immutable';
import { SET_HISTORY, SET_SOLUTIONITEM, BACK_TO_CODE, SET_COMMENT } from './actionTypes';
import { SET_SOLUTION_DETAIL, SET_WRITER } from '../components/solution/store/actionTypes';

const defaultState = fromJS({
    way: 4,
    component: "code",
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SOLUTIONITEM:
            return state.set("way", action.way);
        case SET_HISTORY:
            return state.set("way", action.way);
        case SET_WRITER:
            return state.set("component", action.component);
        case BACK_TO_CODE:
            return state.set("component", action.component);
        case SET_SOLUTION_DETAIL:
            return state.set("component", action.component);
        case SET_COMMENT:
            return state.set("way", action.way);
        default:
            return state;
    }
};

export default reducer;