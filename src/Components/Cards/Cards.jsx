import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data:  { confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed) {
        return 'Loading...';
    }

    const CardInfo = ({ label, desc, style, value }) => {
        return (
            <>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, style)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>{label}</Typography>
                        <Typography variant="h5">
                            <CountUp start={value*0.25} end={value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">{desc}</Typography>
                    </CardContent>
                </Grid>
            </>
        );
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <CardInfo label="Infected" desc="Number of active cases of COVID-19" style={styles.infected} value={confirmed.value} />
                <CardInfo label="Recovered" desc="Number of recoveries from COVID-19" style={styles.recovered} value={recovered.value} />
                <CardInfo label="Deaths" desc="Number of deaths caused by COVID-19" style={styles.deaths} value={deaths.value} />
            </Grid>
        </div>
    );
}

export default Cards;
