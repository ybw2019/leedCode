import { combineReducers } from 'redux-immutable';
import headerReducer from '../component/Head/store/reducer';
import loginReducer from '../pages/page0/store/reducer';
import solutionReducer from '../pages/page5/components/solution/store/reducer';
import historyReducer from '../pages/page5/components/history/store/reducer';
import page5Reucer from '../pages/page5/store/reducer';
import codeReducer from '../pages/page5/components/solutionCode/store/reducer';
import detailReducer from '../pages/page5/components/solutionDetail/store/reducer';
//page1
import SubReducer from '../pages/page1/pages/submission/store/reducer';
import DisReducer from '../pages/page1/pages/discussion/store/reducer';
import ContReducer from '../pages/page1/pages/content/store/reducer';

export default combineReducers({
    header: headerReducer,
    login: loginReducer,
    solution: solutionReducer,
    history: historyReducer,
    page5: page5Reucer,
    code: codeReducer,
    detail: detailReducer,
    //page1
    content: ContReducer,
    submission: SubReducer,
    discussion: DisReducer,
});