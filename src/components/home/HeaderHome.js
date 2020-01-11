import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CleanLinkedList from '../_common/lists/CleanLinkedList';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundImage: 'url(/assets/images/bg.png)',
    backgroundSize: 'cover',
    display: 'flex',
    padding: theme.spacing(5),
    textAlign: 'center',

    '& .avatar': {
      height: 60,
      border: '1px solid white',
      borderRadius: 5,
    }
  },
}));

const HeaderHome = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <img src="/assets/images/avatar.jpg" className="avatar" />
            <Typography>
              user #710
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default HeaderHome;