import { combineReducers } from 'redux';
import common from './common';
import exchanges from './exchanges';

export default combineReducers({
    common,
    exchanges,
})