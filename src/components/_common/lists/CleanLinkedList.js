import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FolderOpen from '@material-ui/icons/FolderOpen';
import ChevronRight from '@material-ui/icons/ChevronRight';
import SimpleLoading from '../loadings/SimpleLoading';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  itemText: {
    color: '#3c3c3c',
    textTransform: 'capitalize',
    paddingLeft: theme.spacing(1),
  },
  loadingIcon: {
    marginLeft: theme.spacing(1)/2
  }
}));

const CleanLinkedList = (props) => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(null);

  if(loading && props.joke) setLoading(null);

  return (
    <>
      <List className={classes.root}>
        {props.items.map(item => (
          <ListItem 
            key={item}
            button
            onClick={() => {
              setLoading(item);
              props.onItemClick(item);
            }}>
            <Grid container alignItems="center">
              <Grid item xs={1}>
                <ListItemIcon>
                  <FolderOpen fontSize="small" color="primary" />
                </ListItemIcon>
              </Grid>
              <Grid item xs={10}>
                <ListItemText
                  className={classes.itemText}
                  primary={item} />
              </Grid>
              <Grid item xs={1}>
                <ListItemIcon>
                  { 
                    loading == item 
                    ? <Box className={classes.loadingIcon}>
                        <SimpleLoading size={10} />
                      </Box> 
                    : <ChevronRight /> 
                  }
                </ListItemIcon>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default CleanLinkedList;