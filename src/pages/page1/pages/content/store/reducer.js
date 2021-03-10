import { fromJS } from 'immutable';

const defaultState = fromJS({
    talkBtn: false,
    answerBtn: false,
    data: []
});

const reducer = (state = defaultState, action) => {
    if (action.type === 'talk_btn') {
        return state.set('talkBtn', fromJS(action.btn ? false : true))
    }
    if (action.type === 'answer_btn') {
        return state.set('answerBtn', fromJS(action.btn ? false : true))
    }
    if (action.type === 'content_data') {
        console.log(action.disdata);
        return state.set('data', action.disdata);
    }
    return state;
};

export default reducer;