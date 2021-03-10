import { fromJS } from 'immutable';

const defaultState = fromJS({
    data: []
});

const reducer = (state = defaultState, action) => {
    if (action.type === 'submission_data') {
        // console.log(action.data);
        return state.set('data', action.data);
    }
    return state;
};
export default reducer;