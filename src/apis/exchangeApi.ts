import { apiUrl } from "./constants";
import { currencies } from "../constants";

const symbols = currencies.join(',');

export const getCurrencyForDay = async baseCurrency => {
    const url = apiUrl + `latest?base=${baseCurrency}&symbols=`;
    const response = await fetch(url);
}