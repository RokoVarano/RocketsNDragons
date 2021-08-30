import { Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import DragonWidget from './DragonWidget';
import { getDragons } from '../../redux/dragons/dragons';

const useStyles = makeStyles({
  root: {
    padding: '1rem',
  },
});

const Dragons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDragons());
  });

  const classes = useStyles();
  const dragons = useSelector((state) => state.dragons);

  const dragonWidgets = (dragons) => (
    dragons.map(
      (dragon) => (
        <DragonWidget
          image={dragon.flickr_images[0]}
          name={dragon.name}
          type={dragon.type}
          key={dragon.id}
        />
      ),
    )
  );

  return (
    <Container className={classes.root}>
      {dragonWidgets(dragons)}
    </Container>
  );
};

export default Dragons;
