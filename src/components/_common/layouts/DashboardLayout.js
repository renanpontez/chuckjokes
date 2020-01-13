import React, { useState } from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
   
  },
}));

const DashboardLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        {children}
      </Box>
    </>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.element
}

export default DashboardLayout;
