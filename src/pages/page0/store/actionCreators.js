import * as constants from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

export const changeWay = (way) => ({
    type: constants.CHANGE_WAY,
    way: fromJS(way),
});

const changeImage = (data) => ({
    type: constants.CHANGE_IMAGE,
    imgUrl: fromJS(data),
});

export const accountOrPhoneLogin = (account, password) => {
    return (dispatch) => {
        axios.get(`/leetcode/accounts/login?account=${account}&password=${password}`)
            .then(function (response) {
                const data = response.data.data.user.image;
                dispatch(changeImage(data));
            }).catch(function (error) {
                console.log(error);
            });
    }
};

export const emailRegister = (account, password, username) => {
    return (dispatch) => {
        axios.post('/leetcode/accounts/register/email', {
            account,
            password,
            username,
        }).then(function (response) {
            const success = response.data.code;
            const message = response.data.message;
            if (success === 200) {
                alert("注册成功");
                dispatch(changeWay(3));
            } else {
                alert(message);
            }
        }).catch(function (error) {
            console.log(error);
        });
    }
};

export const phoneLogin = (phone, code) => {
    return (dispatch) => {
        axios.post('/leetcode/accounts/login/phone', {
            phone,
            code,
        }).then(function (response) {
            const success = response.data.code;
            const message = response.data.message;
            if (success === 200) {
                alert("登录成功");
                dispatch(changeWay(1));
            } else {
                alert(message);
            }
        }).catch(function (error) {
            console.log(error);
        });
    }
};

export const getCode = (phone) => {
    return (dispatch) => {
        axios.get(`/leetcode/accounts/login/phone/checkcode?phone=${phone}`)
            .then(function (response) {
                const data = response.data.data.user.image;
                dispatch(changeImage(data));
            }).catch(function (error) {
                console.log(error);
            });
    }
};

export const changeLoginState = () => ({
    type: constants.CHANGE_LOGIN_STATE,
    login: fromJS(true),
});