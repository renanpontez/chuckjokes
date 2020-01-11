import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FolderOpen from '@material-ui/icons/FolderOpen';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  itemText: {
    color: '#3c3c3c'
  }
}));

const CleanLinkedList = ({ items }) => {
  const classes = useStyles();

  return (
    <>
      <List className={classes.root}>
        {items.map(item => (
          <Link key={item} to={`/jokes/${item}`}>
            <ListItem 
              button>
              <Grid container alignItems="center">
                <Grid xs={2}>
                  <ListItemIcon>
                    <FolderOpen color="primary" />
                  </ListItemIcon>
                </Grid>
                <Grid xs={9}>
                  <ListItemText
                    className={classes.itemText}
                    primary="Single-line item" />
                </Grid>
                <Grid item xs={1}>
                  <ListItemIcon>
                    <ChevronRight />
                  </ListItemIcon>
                </Grid>
              </Grid>
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}

export default CleanLinkedList;