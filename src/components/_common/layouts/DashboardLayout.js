import React, { useState } from 'react';
import PropTypes from "prop-types";
import HeaderMenu from '../menu/HeaderMenu';
import DashboardContext from './DashboardContext';
import { makeStyles } from '@material-ui/styles';
import { classes } from 'istanbul-lib-coverage';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
   
  },
}));


const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  const [settings, setSettings] = useState({ drawerOpen: false });

  return (
    <DashboardContext.Provider value={{ settings, setSettings }}>
      <Box className={classes.root}>
        {children}
      </Box>

      {/* <Footer /> */}
    </DashboardContext.Provider>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.element
}

export default DashboardLayout;
