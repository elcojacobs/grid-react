import {combineReducers} from 'redux';
import GridReducer from './reducer-grid';
import LayoutReducer from './reducer-layout';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    grid: GridReducer,
    layout: LayoutReducer 
});

export default allReducers;
