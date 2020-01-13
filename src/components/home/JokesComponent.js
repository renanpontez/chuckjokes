import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppContext from '../_common/contexts/AppContext';
import SimpleLoading from '../_common/loadings/SimpleLoading';
import { Paper, Slide, Backdrop, Fade, Box, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: `100%`,
    height: 'calc(100vh - 50px)',
    position: 'absolute',
    top: 50,
  },
  backdrop: {
    zIndex: 1,
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    opacity: 0,
    backgroundColor: 'rgba(0,0,0,.4)',
    position: 'fixed',
  },
  paper: {
    position: 'absolute',
    zIndex: 2,
    height: '100%',
    width: '100%',
    padding: theme.spacing(3),
  }
}));

const JokesComponent = () => {
  const classes = useStyles();
  const [visible, setVisible] = React.useState(true);

  return (
    <AppContext.Consumer>
      {context => {
        return (
          <>
            <Slide direction="up" in={visible}>
              <div className={classes.root}>
                

                <Box className={classes.backdrop} open={visible}>
                </Box>
                <Paper elevation={4} className={classes.paper}>
                <a href="#"
                    onClick={() => {
                      setVisible(false);
                      setTimeout(() => context.getRandomJoke(-1), 500);
                    }}>
                    CLEAR
                </a>

                    {context.joke.value}
                  <Button 
                   onClick={() => context.getRandomJoke(context.joke.categories[0])}
                   color="primary"
                   variant="contained"
                   fullWidth >
                     RANDOM JOKE
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