import React from 'react';
import { Container, Grid, Box, Slide } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CleanLinkedList from '../_common/lists/CleanLinkedList';
import HeaderHome from './HeaderHome';
import AppContext from '../_common/contexts/AppContext';
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles(theme => ({
  root: {
  },
  logo: {
    height: 50,
    display: 'block',
    margin: '0 auto'
  },
  subtitle: {
    fontSize: '14px',
    margin: theme.spacing(2),
    marginBottom: 0,
  }
}));

const HomeComponent = (props) => {
  const classes = useStyles();

  return (
    <AppContext.Consumer>
      {context => (
        <Slide direction="right" in={isMobile ? !context.joke : true}>
          <Box>
            <HeaderHome />
            <Grid container justify="center">
              <Grid item xs={12} lg={4}>
              <Typography className={classes.subtitle}>
                Jokes categories
              </Typography>

                <CleanLinkedList 
                  items={context.categories} 
                  onItemClick={context.getRandomJoke}
                  joke={context.joke} />
              </Grid>
            </Grid>
          </Box>
        </Slide>
      )}
    </AppContext.Consumer>
  );
}

export default HomeComponent;