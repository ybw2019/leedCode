import { fromJS } from 'immutable';
import { NO_HISTORY, SET_INPUT_LIST } from '../../../store/actionTypes';

const defaultState = fromJS({
    show: false,
    time: [],
    result: [],
    run: [],
    cpu: [],
    language: [],
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_INPUT_LIST:
            return state.set("time", action.time).set("result", action.result).set("run", action.run).set("cpu", action.cpu).set("language", action.language).set("show", true);
        case NO_HISTORY:
            return state.set("show", action.states);
        default:
            return state;
    }
};

export default reducer;