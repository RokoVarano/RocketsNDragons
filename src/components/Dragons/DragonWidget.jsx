import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { reserveDragon } from '../../redux/dragons/dragons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  content: {
    flex: '1 1 auto',
  },
  cover: {
    width: 450,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const DragonWidget = (props) => {
  const classes = useStyles();
  const { dragon } = props;
  const dispatch = useDispatch();

  const reserveButton = (dragon) => (
    <Button onClick={() => { dispatch(reserveDragon(dragon.id)); }} size="small" color="primary">
      {dragon.reserved ? 'Cancel Reservation' : 'Reserve'}
    </Button>
  );

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={dragon.flickr_images[0]}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Badge badgeContent="Reserved" color="secondary" invisible={!dragon.reserved}>
            <Typography component="h5" variant="h5">
              {dragon.name}
            </Typography>
          </Badge>
          <Typography variant="subtitle1" color="textSecondary">
            {dragon.type}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <CardActions>
            {reserveButton(dragon)}
          </CardActions>
        </div>
      </div>
    </Card>
  );
};

DragonWidget.propTypes = {
  dragon: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default DragonWidget;
