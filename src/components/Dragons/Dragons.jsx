import { Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import DragonWidget from './DragonWidget';
import { getDragons } from '../../redux/dragons/dragons';

const useStyles = makeStyles((theme) => ({
  paperTitle: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

const Dragons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDragons());
  }, []);

  const classes = useStyles();
  const dragons = useSelector((state) => state.dragons);

  const dragonWidgets = (dragons) => (
    dragons.map(
      (dragon) => (
        <Grid
          item
          xs={12}
          key={dragon.id}
        >
          <DragonWidget
            dragon={dragon}
            dispatch={dispatch}
          />
        </Grid>
      ),
    )
  );

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={classes.paperTitle}>
              <Typography component="h4" variant="h4">
                Dragons
              </Typography>
            </div>
          </Grid>
          {dragonWidgets(dragons)}
        </Grid>
      </Container>
    </>
  );
};

export default Dragons;
