import * as constants from './actionTypes';
import { fromJS } from 'immutable';

export const changeImage = (imageUrl) => ({
    type: constants.CHANGE_IMAGE,
    imageUrl: fromJS(imageUrl),
});