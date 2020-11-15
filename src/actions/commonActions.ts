import {SET_ERROR, SET_LOADING} from './types';

export const setLoading = loading => {
    return {
        type: SET_LOADING,
        payload: loading
    };
};

export const setError = error => {
    return{
         type: SET_ERROR,
         payload: error
    };
};
