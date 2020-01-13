import React from 'react';
import { Container, Grid, Box, Slide } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CleanLinkedList from '../_common/lists/CleanLinkedList';
import HeaderHome from './HeaderHome';
import AppContext from '../_common/contexts/AppContext';

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
        <Slide direction="right" in={!context.joke}>
          <Box>
            <HeaderHome />
            <Grid container>
              <Typography className={classes.subtitle}>
                Jokes categories
              </Typography>

              <CleanLinkedList 
                items={context.categories} 
                onItemClick={context.getRandomJoke}
                joke={context.joke} />
            </Grid>
          </Box>
        </Slide>
      )}
    </AppContext.Consumer>
  );
}

export default HomeComponent;