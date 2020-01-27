import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '10px'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500
  },
  repoName: {
    wordBreak: 'break-all',
    fontWeight: 'bold'
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
}));

function GitRepo({ name, stargazers_count, forks, svn_url }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  className={classes.repoName}
                >
                  {name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Star Count: {stargazers_count}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Forks Count: {forks}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  <Button
                    variant="contained"
                    color="primary"
                    href={svn_url}
                    style={{ cursor: 'pointer' }}
                  >
                    Go to Repo
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

GitRepo.propTypes = {
  name: PropTypes.string.isRequired
};

export default GitRepo;
