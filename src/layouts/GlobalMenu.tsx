import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//import history from '../history';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const routeMap = {
    0 : "/exchange-rates",
    1 : "/exchange-rates-at-a-specific-date"
}

const GlobalMenu = () => {
    const [value, setValue] = useState(0);
    let history = useHistory()

    const handleChange = (event, newValue) => {
        console.log(event);
        setValue(newValue);
        history.push(routeMap[newValue]);
    };

    return (
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange} >
                <Tab label="Over Time" />
                <Tab label="Specific Date"/>
            </Tabs>
        </AppBar>
    );
};

export default GlobalMenu;
