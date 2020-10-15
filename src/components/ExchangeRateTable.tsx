import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableHead, TableBody, TableRow, TableCell} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 600,
        maxWidth: 1000,
        margin: 'auto',
    },
    tableHead: {
        backgroundColor: theme.palette.primary.main,
    },
    tableRow: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    }
}));

const staticData = [
    ['USD', '1.5'],
    ['EUR', '2.0'],
    ['AUD', '1.1'],
    ['JPY', '0.03'],
]

const ExchangeRateTable = () => {
    const classes = useStyles();

    const renderResults = (dataArray: string[][]) => {
        return dataArray.map(data => {
            return (
                <TableRow className={classes.tableRow} key={data[0]}>
                    <TableCell>{data[0]}</TableCell>
                    <TableCell>{data[1]}</TableCell>
                </TableRow>
            );
        })
    }

    return (
        <Table className={classes.table}>
            <TableHead className={classes.tableHead}>
                <TableRow>
                    <TableCell>
                        Currency
                    </TableCell>
                    <TableCell>
                        Value
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {renderResults(staticData)}
            </TableBody>
        </Table>
    );
};

export default ExchangeRateTable;
