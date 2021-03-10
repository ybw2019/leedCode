import { fromJS } from 'immutable';
import { } from './actionTypes';

const defaultState = fromJS({
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;