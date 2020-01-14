import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppContext from '../_common/contexts/AppContext';
import { Paper, Slide, Box, Button, Typography, Grid, IconButton, Chip } from '@material-ui/core';
import {Autorenew, ArrowBack} from '@material-ui/icons'
import Rating from '@material-ui/lab/Rating';
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100vh',
    position: 'absolute',
    top: 0,

    [theme.breakpoints.up('md')]: {
      top: 30,
      display: 'flex',
      alignItems: 'center'
    },
  },
  backBtn: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  paper: {
    position: 'absolute',
    zIndex: 2,
    height: '100%',
    width: '100%',
    padding: theme.spacing(3),
    
    '& .authorSection': {
      marginTop: theme.spacing(5),
      borderBottom: '1px solid #e8e8e8',
      paddingBottom: theme.spacing(2),
      marginBottom: theme.spacing(2),
      
      '& .authorName': {
        textTransform: 'uppercase',
        fontWeight: 700,
      },
      '& .lastUpdate': {
        opacity: .8,
        fontSize: 13
      },
      '& .avatarImg': {
        width: '100%',
        paddingLeft: theme.spacing(2),
        boxSizing: 'border-box',
      },

      
    },

    '& .jokeSection': {
      '& .categoryChip': {
        marginTop: theme.spacing(1)
      }
    },

    '& .reviewSection': {
      borderTop: '1px solid #e8e8e8',
      paddingTop: theme.spacing(2),
      marginTop: theme.spacing(3),
      textAlign: 'center',

      '& .reviewLabel': {
        fontSize: 13,
        opacity: .8
      }
    },

    '& .randomJokeBtn': {
      position: 'absolute',
      bottom: 20,
      left: 10,
      margin: '0 auto',
      width: 'calc(100% - 20px)',

      [theme.breakpoints.up('md')]: {
        width: '100%',
        position: 'relative',
        marginTop: theme.spacing(3),
        bottom: 'auto',
        left: 'auto'
      },
    },


    [theme.breakpoints.up('md')]: {
      position: 'relative',
      width: 400,
      height: 'auto',
      margin: '0 auto',
    },
  },
  
  '@keyframes rotating': {
    from: { 'transform': 'rotate(0deg)' },
    to: { 'transform': 'rotate(360deg)' },
  },

  loadingJoke: {
    animationName: '$rotating',
    animationDuration: '2s',
    animationTimingFunction: 'linear',
    animationIterationCount:'infinite',
  },
  backdrop: {
    backgroundColor: 'rgba(0,0,0,.4)',
    position: 'fixed',
    width: '100%',
    height: '100vh',
    zIndex: 1,
    left: 0,
    top: 0,
  }
}));

const JokesComponent = () => {
  const classes = useStyles();
  const [visible, setVisible] = React.useState(true);
  const [starsValue, setStarsValue] = React.useState(0);
  const [loading, setLoading] = React.useState({status: false, lastJokeId: null});

  return (
    <AppContext.Consumer>
      {context => {
        if(loading.status && context.joke.id != loading.lastJokeId) {
          setLoading({ status: false });
        }
        return (
          <>
            <Slide direction={isMobile ? "left" : "up"} in={visible}>
              <div className={classes.root}>
                <div className={classes.backdrop}></div>        
                <Paper elevation={4} className={classes.paper}>
                <IconButton 
                  className={classes.backBtn}
                  onClick={() => {
                      setVisible(false);
                      context.getRandomJoke(-1);
                    }}>
                  <ArrowBack />
                </IconButton>

                <Box className="authorSection">
                  <Grid container>
                    <Grid item xs={10}>
                      <Typography className="authorName">
                        Chuck Norris
                      </Typography>
                      <Typography className="lastUpdate">
                        {new Date(context.joke.updated_at).toLocaleString()}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <img src={context.joke.icon_url} className="avatarImg" />
                    </Grid>
                  </Grid>
                </Box>

                <Box className="jokeSection">
                  <Typography className="jokeValue">
                    {context.joke.value}
                  </Typography>

                  {context.joke.categories.map(category => (
                    <Chip 
                      key={category}
                      color="secondary" 
                      size="small" 
                      label={category}
                      className="categoryChip" />
                  ))}
                </Box>

                <Box className="reviewSection">
                  <Typography className="reviewLabel">
                    Give a review for this joke 
                  </Typography>

                  <Rating
                    name="simple-controlled"
                    value={starsValue}
                    onChange={(event, newValue) => {
                      setStarsValue(newValue);
                    }} />
                </Box>

                <Button
                  className="randomJokeBtn"
                  onClick={() => {
                    setLoading({status: true, lastJokeId: context.joke.id });
                    context.getRandomJoke(context.joke.categories[0]);
                  }}
                  color="primary"
                  variant="contained"
                  fullWidth>
                  RANDOM JOKE <Autorenew className={loading.status ? classes.loadingJoke : null} />
                </Button>
              </Paper>
              </div>
            </Slide>
          </>
        );
      }}
    </AppContext.Consumer>
  );
}

export default JokesComponent;