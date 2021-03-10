import { fromJS } from 'immutable';
import { SET_LANGUAGE_JAVA } from '../../../store/actionTypes';
import { INIT_CODE } from './actionTypes';

const defaultState = fromJS({
    instance: null,
    language: "cpp",
    value: `class Solution {
public:
    int numWays(string s) {

    }
};`,
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LANGUAGE_JAVA:
            return state.set("language", "Java").set("value", `class Solution {
public int numWays(string s) {

    }
};`);
        case INIT_CODE:
            return state.set("instance", action.code);
        default:
            return state;
    }
};

export default reducer;