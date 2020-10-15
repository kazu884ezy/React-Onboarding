import {SET_RATES_FOR_DAY, SET_RATES_FOR_PERIOD} from '../actions/types';

const INITIAL_STATE = {
    ratesForSpecificDay: [],
    ratesForPeriod: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_RATES_FOR_DAY:
            return {
                ...state,
                ratesForSpecificDay: action.payload
            }
        case SET_RATES_FOR_PERIOD:
            return {
                ...state,
                ratesForPeriod: action.payload
            }
        default:
            return state
    }
};