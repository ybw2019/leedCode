import axios from 'axios';

const addDisList = (result) => {
  return ({
    type: 'discussion_data',
    disdata: result
  })
}

export const MoreDisList = () => {
  return (dispatch) => {
    axios.get('/api/page1_discussion.json').then((res) => {
      const result = res.data.data
      // console.log(result);
      dispatch(addDisList(result));
    })
  }
}