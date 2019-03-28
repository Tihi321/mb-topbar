import { combineReducers } from 'redux';
import TopbarReducer from './topbar-reducer';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const rootReducer = combineReducers({
    topbar: TopbarReducer
});


export default rootReducer;