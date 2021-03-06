import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  }
}));

const SimpleLoading = props => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.wrapper} p={props.padding || 0}>
        <CircularProgress size={props.size || 40} />
      </Box>
    </>
  );
}
export default SimpleLoading;