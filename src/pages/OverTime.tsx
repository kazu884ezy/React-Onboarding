import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CurrencySelector from "../components/CurrencySelector";
import DatePicker from "../components/DatePicker";
import ExchangeRateTable from "../components/ExchangeRateTable";
import {Grid, Box} from "@material-ui/core";

const useStyles = makeStyles({
    heading: {
        textAlign: 'center',
    },
    main: {
        margin: '10px'
    }
});

const OverTime = () => {
    const classes = useStyles();

    return (
        <div>
            <h1 className={classes.heading}>Exchange Rates for a Day</h1>
            <Grid container spacing={3} justify="center">
                <Grid item>
                    <CurrencySelector />
                </Grid>
                <Grid item>
                    <DatePicker />
                </Grid>
            </Grid>
            <div className={classes.main}>
                <ExchangeRateTable />
            </div>
        </div>
    );
};

export default OverTime;
