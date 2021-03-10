import { fromJS } from 'immutable';
import { CHANGE_WAY, CHANGE_LOGIN_STATE } from './actionTypes';

const defaultState = fromJS({
    way: 1,
    login: false,
});
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_WAY:
            return state.set("way", action.way);
        case CHANGE_LOGIN_STATE:
            return state.set("login", action.login);
        default:
            return state;
    }
};

export default reducer;