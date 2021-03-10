import * as constants from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const setLabelList = (labelList) => ({
    type: constants.SET_LABEL_LIST,
    labelList: fromJS(labelList),
});

const setSolutionList = (solutionList, totalPage) => ({
    type: constants.SET_SOLUTION_LIST,
    solutionList: fromJS(solutionList),
    totalPage: fromJS(totalPage),
});

export const getLabels = () => {
    return (dispatch) => {
        axios.get("http://8.135.33.205:9000/leetcode/question/label/")
            .then(function (response) {
                const labelList = response.data.data;
                dispatch(setLabelList(labelList));
            }).catch(function (error) {
                console.log(error);
            });
    }
};

export const getSolution = () => {
    return (dispatch) => {
        axios.get("http://8.135.33.205:9000/leetcode/question/solution/1/null/1/2/null")
            .then(function (response) {
                const solutionList = response.data.data.solution;
                const totalPage = response.data.data.totalPage;
                dispatch(setSolutionList(solutionList, totalPage));
            }).catch(function (error) {
                console.log(error);
            });
    }
};

export const setWriter = (type) => ({
    type: constants.SET_WRITER,
    component: fromJS(type),
});

export const setSolutionDetail = (type) => ({
    type: constants.SET_SOLUTION_DETAIL,
    component: fromJS(type),
});

export const getSolutionDetail = () => {
    return (dispatch) => {
        axios.get(`http://8.135.33.205:9000/leetcode/question/solution/1/null/1/1/链表`)
            .then(res => {
                const data = res;
                console.log(data);
            }).catch(err => {
                console.log(err);
            })
    }
};

const setDetail = (detail) => ({
    type: constants.SET_DETAIL,
    detail: fromJS(detail),
});

export const getDetail = () => {
    return (dispatch) => {
        axios.get("http://8.135.33.205:9000/leetcode/question/solution/1")
            .then(res => {
                console.log(res.data);
                const detail = res.data;
                dispatch(setDetail(detail));
            }).catch(err => {
                console.log(err);
            })
    }
}