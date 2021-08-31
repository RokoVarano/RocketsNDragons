import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
  const { image, name, type } = props;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={image}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {type}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <CardActions>
            <Button size="small" color="primary">
              Reserve Dragon
            </Button>
          </CardActions>
        </div>
      </div>
    </Card>
  );
};

DragonWidget.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

DragonWidget.defaultProps = {
  image: '',
  name: 'Dragon',
  type: `Bard bolster undead dexterity double weapon flat-footed fortitude save insight bonus
  mentalism domain negative energy nonabilities nonlethal damage pounce prone ranger silver piece spontaneous casting.
   Ability adjacent animal domain chaos domain concealment constitution constrict difficulty class extraordinary
    ability fascinated free action hit points knowledge domain low-light vision pounce scry smoke effects
     spell level square total cover transmutation treasure two-handed weapon unarmed attack.`,
};

export default DragonWidget;
