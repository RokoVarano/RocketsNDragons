import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  media: {
    width: 140,
    height: 140,
  },
});

const DragonWidget = (props) => {
  const classes = useStyles();
  const { image, name, type } = props;

  return (

    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image}
        title="Dragon"
      />
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { name }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { type }
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Reserve
          </Button>
        </CardActions>
      </CardActionArea>
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
