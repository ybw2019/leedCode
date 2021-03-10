import { fromJS } from 'immutable';
import { SET_COMMENT, SET_DETAIL } from './actionTypes';

const defaultState = fromJS({
    comment: [],
    detail: [],
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_COMMENT:
            return state.set("comment", action.commentList);
        case SET_DETAIL:
            return state.set("detail", action.detail);
        default:
            return state;
    }
};

export default reducer;