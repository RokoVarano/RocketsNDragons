import { Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DragonWidget from './DragonWidget';

const useStyles = makeStyles({
  root: {
    padding: '1rem',
  },
});

const Dragons = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <DragonWidget image="https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg" />
    </Container>
  );
};

export default Dragons;
