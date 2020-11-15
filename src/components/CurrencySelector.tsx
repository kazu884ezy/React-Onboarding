import React, { useState } from 'react';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { currencies } from "../constants";

const CurrencySelector = ({ onChange, initialValue='NZD'}) => {
    const [selectedCurrency, setCurrency] = useState(initialValue);

    const handleChange = (event : React.ChangeEvent<{ value: unknown }>) => {
        let currency = event.target.value as string;
        setCurrency(currency);
        onChange(currency);
    }

    const renderOptions = () => {
        return currencies.map(currency => {
            return (
                <MenuItem key={currency} value={currency}>{currency}</MenuItem>
            )
        });
    }

    return (
        <FormControl>
            <Select
                value={selectedCurrency}
                onChange={handleChange}
            >
                {
                    renderOptions()
                }
            </Select>
        </FormControl>
    );
};

export default CurrencySelector;
