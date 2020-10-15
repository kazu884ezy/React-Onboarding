import 'date-fns';
import React, { useState } from 'react';

import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";


const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date: MaterialUiPickersDate) => {
        setSelectedDate(date as Date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );
};

export default DatePicker;
