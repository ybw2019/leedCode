import { fromJS } from 'immutable';
import { SET_LABEL_LIST, SET_SOLUTION_LIST } from './actionTypes';

const defaultState = fromJS({
    labelList: [],
    solutionList: [],
    totalPage: 0,
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LABEL_LIST:
            return state.set("labelList", action.labelList);
        case SET_SOLUTION_LIST:
            return state.set("solutionList", action.solutionList).set("totalPage", action.totalPage);
        default:
            return state;
    }
};

export default reducer;