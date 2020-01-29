import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  root: {
    flexGrow: 1,
    marginTop: '10px'
  },
  paper: {
    // padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 345
  }
});

export default function UserProfile(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.owner.avatar_url}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.owner.login}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              href={props.owner.html_url}
              target="_blank"
              style={{ cursor: 'pointer' }}
            >
              Go to Profile
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </div>
  );
}

UserProfile.propTypes = {
  owner: PropTypes.object.isRequired
};
