import { SET_RATES_FOR_DAY } from './types';

const getExchangeRate = ratesForSpecificDay => ({
  type: SET_RATES_FOR_DAY,
    payload: ratesForSpecificDay
});

export const getRagesForDay = async baseCurrency => {
    const response = await fetch()
}