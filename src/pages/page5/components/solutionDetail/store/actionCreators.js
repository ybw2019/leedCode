import * as constants from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const setComments = (commentList) => ({
    type: constants.SET_COMMENT,
    commentList: fromJS(commentList),
});

export const getComment = () => {
    return (dispatch) => {
        axios.get("http://8.135.33.205:9000/leetcode/question/solutionComment/1")
            .then(res => {
                const commentList = res.data.data;
                dispatch(setComments(commentList));
            }).catch(err => {
                console.log(err);
            })
    }
};