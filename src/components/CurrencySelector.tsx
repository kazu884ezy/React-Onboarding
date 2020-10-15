import React, { useState } from 'react';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { currencies } from "../constants";

const CurrencySelector = () => {
    const [selectedCurrency, setCurrency] = useState(currencies[0]);

    const handleChange = (event : React.ChangeEvent<{ value: unknown }>) => {
        setCurrency(event.target.value as string);
    }

    const renderOptions = () => {
        return currencies.map(currency => {
            return <MenuItem key={currency} value={currency}>{currency}</MenuItem>
        });
    }

    return (
        <FormControl>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
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
