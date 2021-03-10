import axios from 'axios';

const addsubList = (result) => {
  return ({
    type: 'submission_data',
    data: result
  })
}


export const MoreSubList = () => {
  return (dispatch) => {
    axios.get('/api/page1_submission.json').then((res) => {
      // console.log(res.data.data);
      const result = res.data.data;
      dispatch(addsubList(result));
    })
  }
}