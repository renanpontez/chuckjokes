import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import Main from './Main';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { indigo, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2460FF'
    },
    secondary: {
      main: '#FA824C',
      contrastText: '#FFF'
    },
  },
  status: {
    danger: 'orange',
  },
  typography: {
    fontFamily: [
      'Muli',
      'Open Sans',
    ].join(','),
  }
});

export default class Root extends React.Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <Main />
          </ConnectedRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};