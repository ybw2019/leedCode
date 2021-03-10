import { fromJS } from 'immutable';
import * as constants from './actionTypes';

const defaultState = fromJS({
    imgUrl: "",
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_IMAGE:
            alert("登录成功");
            return state.set("imgUrl", action.imgUrl);
        default:
            return state;
    }
};

export default reducer;
