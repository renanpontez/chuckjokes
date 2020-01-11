import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
  },
  
}));

const JokesComponent = () => {
  const classes = useStyles();

  return (
    <>
      <a href="/">teeste</a>
    </>
  );
}

export default JokesComponent;