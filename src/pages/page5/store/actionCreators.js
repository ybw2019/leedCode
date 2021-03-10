import * as constants from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

export const setComment = () => ({
    type: constants.SET_COMMENT,
    way: fromJS(2),
});

const noHistory = (states) => ({
    type: constants.NO_HISTORY,
    states: fromJS(states),
});

const setInputList = (time, result, run, cpu, language) => ({
    type: constants.SET_INPUT_LIST,
    time: fromJS(time),
    result: fromJS(result),
    run: fromJS(run),
    cpu: fromJS(cpu),
    language: fromJS(language),
});

export const setHistory = () => ({
    type: constants.SET_HISTORY,
    way: fromJS(4),
});

export const setSolutionItem = () => ({
    type: constants.SET_SOLUTIONITEM,
    way: fromJS(3),
})

export const getHistory = () => {
    return (dispatch) => {
        axios.get(`/api/history.json`)
            .then(function (response) {
                console.log(response);
                const show = response.data.data.length;
                if (show) {
                    let data = response.data.data;
                    let timeList = [];
                    let resultList = [];
                    let runTimeList = [];
                    let cpuList = [];
                    let languageList = [];
                    data.forEach(item => {
                        let datas = item.submitMessage;
                        timeList.push(datas.submitDataTime);
                        resultList.push(datas.submitResult);
                        runTimeList.push(datas.runTime);
                        cpuList.push(datas.useCpu);
                        languageList.push(datas.language);
                    });
                    dispatch(setInputList(timeList, resultList, runTimeList, cpuList, languageList));
                } else {
                    let states = false;
                    dispatch(noHistory(states));
                }
            }).catch(function (error) {
                console.log(error);
            });
    }
};

export const setLanguageJava = () => ({
    type: constants.SET_LANGUAGE_JAVA,
});

export const setLanguageCpp = () => ({
    type: constants.SET_LANGUAGE_CPP,
});

export const setLanguageJavascript = () => ({
    type: constants.SET_LANGUAGE_JAVASCRIPT,
});

export const backToCode = () => ({
    type: constants.BACK_TO_CODE,
    component: fromJS("code"),
});