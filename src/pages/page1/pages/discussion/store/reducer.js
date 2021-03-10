import { fromJS } from 'immutable';
const defaultState = fromJS({
  data: []
});

const reducer = (state = defaultState, action) => {
  if (action.type === 'discussion_data') {
    console.log(action.disdata);
    return state.set('data', action.disdata);
  }
  return state;
};

export default reducer;