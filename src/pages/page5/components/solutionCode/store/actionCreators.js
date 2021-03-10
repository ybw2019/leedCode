import * as constants from './actionTypes';
import { fromJS } from 'immutable';

export const initCode = (code) => ({
    type: constants.INIT_CODE,
    code: fromJS(code),
});